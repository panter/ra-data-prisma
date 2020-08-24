import {
  IntrospectionInputObjectType,
  IntrospectionInputTypeRef,
  IntrospectionInputValue,
  IntrospectionListTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionNonNullTypeRef,
} from "graphql";
import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";
import omit from "lodash/omit";
import isNil from "lodash/isNil";
import isObject from "lodash/isObject";
import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
} from "react-admin";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { buildWhere } from "./buildWhere";
import exhaust from "./utils/exhaust";
import getFinalType from "./utils/getFinalType";

export interface GetListParams {
  filter: { [key: string]: any };
  pagination: { page: number; perPage: number };
  sort: { field: string; order: string };
}

enum ModifiersParams {
  connect = "connect",
  create = "create",
  delete = "delete",
  deleteMany = "deleteMany",
  disconnect = "disconnect",
  set = "set",
  update = "update",
  updateMany = "updateMany",
  upsert = "upsert",
}

const buildOrderBy = (
  introspectionResults: IntrospectionResult,
  resource: Resource,
  sort: GetListParams["sort"],
) => {
  if (!sort) return null;
  const { field, order } = sort;

  const orderType = introspectionResults.types.find(
    (t) => t.name === `${resource.type.name}OrderByInput`,
  ) as IntrospectionInputObjectType;

  if (!orderType) {
    return null;
  }

  if (!orderType.inputFields.some((f) => f.name === field)) {
    return null;
  }

  return {
    [sort.field]: sort.order === "ASC" ? "asc" : "desc",
  };
};

const buildGetListVariables = (introspectionResults: IntrospectionResult) => (
  resource: Resource,
  aorFetchType: string,
  params: GetListParams,
) => {
  const where = buildWhere(params.filter, resource, introspectionResults);

  return {
    skip: (params.pagination.page - 1) * params.pagination.perPage,
    take: params.pagination.perPage,
    orderBy: buildOrderBy(introspectionResults, resource, params?.sort),
    where,
  };
};

const buildGetOneVariables = (introspectionResults: IntrospectionResult) => (
  resource: Resource,

  params: any,
) => {
  const type = introspectionResults.types.find(
    (t) => t.name === `${resource.type.name}WhereUniqueInput`,
  ) as IntrospectionInputObjectType;

  const idType = type?.inputFields.find((f) => f.name === "id");
  if (idType.type.kind === "SCALAR" && idType.type.name === "String") {
    return {
      where: {
        id: String(params.id),
      },
    };
  }
  if (idType.type.kind === "SCALAR" && idType.type.name === "Int") {
    return {
      where: {
        id: parseInt(params.id),
      },
    };
  }
  // should usually not happen
  return {
    where: {
      id: params.id,
    },
  };
};

export interface UpdateParams {
  id: string;
  data: { [key: string]: any };
  previousData: { [key: string]: any };
}

interface UpdateManyInput {
  create?: Array<{ [key: string]: any }>;
  connect?: Array<{ id: any }>;
  set?: Array<{ id: any }>;
  disconnect?: Array<{ id: any }>;
  update?: Array<{ where: { id: any }; data: { [key: string]: any } }>;
}

const getCreateInputDataTypeForList = (
  createModifier: IntrospectionInputValue,
  introspectionResults: IntrospectionResult,
) => {
  const createListModifierType = createModifier.type as IntrospectionListTypeRef<
    IntrospectionNonNullTypeRef<any>
  >;
  const createInputFieldType =
    createListModifierType.ofType.kind === "NON_NULL"
      ? createListModifierType.ofType.ofType
      : createListModifierType.ofType;
  return introspectionResults.types.find(
    // what about a nullable type?
    (t) => t.name === createInputFieldType.name,
  ) as IntrospectionInputObjectType;
};
const getUpdateInputDataTypeForList = (
  updateModifier: IntrospectionInputValue,
  introspectionResults: IntrospectionResult,
) => {
  const updateListModifierType = updateModifier.type as IntrospectionListTypeRef<
    IntrospectionNonNullTypeRef<any>
  >;
  const updateInputFieldType = getFinalType(updateListModifierType.ofType);
  const updateListInputDataType = (introspectionResults.types.find(
    (introdspectionType) =>
      introdspectionType.name === updateInputFieldType.name,
  ) as IntrospectionInputObjectType).inputFields.find(
    (input) => input.name === "data",
  ).type as IntrospectionNonNullTypeRef<IntrospectionNamedTypeRef>;
  return introspectionResults.types.find(
    (introdspectionType) =>
      introdspectionType.name === updateListInputDataType.ofType.name,
  ) as IntrospectionInputObjectType;
};

type ThingWithId = {
  id: string;
};
function isObjectWithId(data: any): data is ThingWithId {
  return Boolean(data?.id);
}
const buildNewInputValue = (
  fieldData: any,
  previousFieldData: any,
  fieldName: string,
  fieldType: IntrospectionInputTypeRef,
  introspectionResults: IntrospectionResult,
) => {
  const kind = fieldType.kind;
  switch (kind) {
    case "SCALAR":
    case "ENUM": {
      if (fieldType.kind === "SCALAR" && fieldType.name === "String") {
        if (isObject(fieldData)) {
          return JSON.stringify(fieldData);
        }
      }
      return fieldData;
    }
    case "INPUT_OBJECT": {
      const fieldObjectType = fieldType as IntrospectionInputObjectType;

      const fullFieldObjectType = introspectionResults.types.find(
        (t) => t.name === fieldObjectType.name,
      ) as IntrospectionInputObjectType;

      const isRelationship = fullFieldObjectType?.inputFields.every((i) => {
        return Object.keys(ModifiersParams).includes(i.name);
      });

      const setModifier = fullFieldObjectType?.inputFields.find(
        (i) => i.name === ModifiersParams.set,
      );

      // is it a relation?
      if (isRelationship) {
        // if it has a set modifier, it is an update array
        const createModifier = fullFieldObjectType?.inputFields.find(
          (i) => i.name === ModifiersParams.create,
        );

        const updateModifier = fullFieldObjectType?.inputFields.find(
          (i) => i.name === ModifiersParams.update,
        );
        if (createModifier.type.kind === "LIST") {
          if (Array.isArray(fieldData)) {
            const createListInputType = getCreateInputDataTypeForList(
              createModifier,
              introspectionResults,
            );

            const updateListInputType = updateModifier
              ? getUpdateInputDataTypeForList(
                  updateModifier,
                  introspectionResults,
                )
              : null;

            const variables = fieldData.reduce<UpdateManyInput>(
              (inputs, referencedField) => {
                if (isObject(referencedField)) {
                  // TODO: we assume "data.id" to be the id
                  if (isObjectWithId(referencedField)) {
                    const connectRelation = !previousFieldData?.find((p) =>
                      p.id
                        ? p.id === referencedField.id
                        : p === referencedField.id,
                    );
                    if (!updateListInputType || connectRelation) {
                      inputs.connect = [
                        ...(inputs.connect || []),
                        { id: referencedField.id },
                      ];
                    } else {
                      // update
                      const data = buildData(
                        updateListInputType,
                        {
                          id: referencedField.id,
                          data: referencedField,
                          previousData: previousFieldData?.find(
                            (previousField) => {
                              // TODO: we assume ".id" to be the id
                              return previousField.id === referencedField.id;
                            },
                          ),
                        },
                        introspectionResults,
                      );
                      if (Object.keys(data).length) {
                        inputs.update = [
                          ...(inputs.update || []),
                          { where: { id: referencedField.id }, data },
                        ];
                      }
                    }
                  } else {
                    // create
                    const data = buildData(
                      createListInputType,
                      {
                        data: referencedField,
                      },
                      introspectionResults,
                    );
                    inputs.create = [...(inputs.create || []), data];
                  }
                } else {
                  // only reference id's
                  // what about multiple id's for one reference?
                  if (
                    !previousFieldData?.find((p) => {
                      // TODO: we assume "p.id" to be the id
                      return p.id
                        ? p.id === referencedField
                        : p === referencedField;
                    })
                  ) {
                    inputs.connect = [
                      ...(inputs.connect || []),
                      { id: referencedField },
                    ];
                  }
                }
                return inputs;
              },
              {},
            );

            // disconnect the ones that are not referenced anymore
            if (Array.isArray(previousFieldData)) {
              const disconnect = (previousFieldData as any[]).reduce<
                Array<{ id: any }>
              >((inputs, data) => {
                // TODO: we assume "data.id" to be the id
                const dataId = data.id || data;
                if (
                  !fieldData.find((p) => {
                    // TODO: we assume "p.id" to be the id
                    const pId = p.id || p;
                    return pId === dataId;
                  })
                ) {
                  return [...(inputs || []), { id: dataId }];
                }
                return inputs;
              }, []);
              if (disconnect.length) {
                variables.disconnect = disconnect;
              }
            }
            return variables;
          } else {
            throw new Error(`${fieldName} should be an array`);
          }
        } else {
          if (!fieldData) {
            return {
              disconnect: true,
            };
          }
          if (isObject(fieldData)) {
            if (!isObjectWithId(fieldData)) {
              // TODO: we assume ".id" to be the id
              const createObjectModifierType = getFinalType(
                createModifier.type,
              );
              const createObjectInputType = introspectionResults.types.find(
                (t) => t.name === createObjectModifierType.name,
              ) as IntrospectionInputObjectType;

              // create
              const data = buildData(
                createObjectInputType,
                {
                  data: fieldData,
                },
                introspectionResults,
              );
              return { create: data };
            } else {
              if (previousFieldData?.id === fieldData.id) {
                const updateObjectModifierType = getFinalType(
                  updateModifier.type,
                );
                const updateObjectInputType = introspectionResults.types.find(
                  (t) => t.name === updateObjectModifierType.name,
                ) as IntrospectionInputObjectType;

                // update
                const data = buildData(
                  updateObjectInputType,
                  {
                    id: fieldData.id,
                    data: fieldData,
                    previousData: previousFieldData,
                  },
                  introspectionResults,
                );
                return { update: data };
              } else {
                return { connect: { id: fieldData.id } };
              }
            }
          } else {
            return { connect: { id: fieldData } };
          }
        }
      } else if (setModifier) {
        return { set: fieldData };
      }
      return;
    }
    case "LIST":
    case "NON_NULL":
      return;
    default:
      exhaust(kind);
  }
};

const buildData = (
  inputType: IntrospectionInputObjectType,
  params: UpdateParams | CreateParams,
  introspectionResults: IntrospectionResult,
) => {
  if (!inputType) {
    return {};
  }
  return inputType.inputFields.reduce((acc, field) => {
    const key = field.name;
    const fieldType =
      field.type.kind === "NON_NULL" ? field.type.ofType : field.type;
    const fieldData = params.data[key];
    //console.log(key, fieldData, fieldType);
    const previousFieldData =
      (params as UpdateParams)?.previousData?.[key] ?? null;
    // TODO in case the content of the array has changed but not the array itself?
    if (
      isEqual(fieldData, previousFieldData) ||
      (isNil(previousFieldData) && isNil(fieldData))
    ) {
      return acc;
    }

    const newVaue = buildNewInputValue(
      params.data[key],
      previousFieldData,
      field.name,
      fieldType,
      introspectionResults,
    );

    return {
      ...acc,
      [key]: newVaue,
    };
  }, {});
};
const buildUpdateVariables = (introspectionResults: IntrospectionResult) => (
  resource: Resource,
  params: UpdateParams,
  parentResource?: Resource,
) => {
  const inputType = introspectionResults.types.find(
    (t) => t.name === `${resource.type.name}UpdateInput`,
  ) as IntrospectionInputObjectType;
  // TODO: we assume "data.id" to be the id
  const id = params.data.id;
  delete params.data.id;
  return {
    where: {
      id,
    },
    data: buildData(inputType, params, introspectionResults),
  };
};

interface CreateParams {
  data: { [key: string]: any };
}
const buildCreateVariables = (introspectionResults: IntrospectionResult) => (
  resource: Resource,
  params: CreateParams,
  parentResource?: Resource,
) => {
  const inputType = introspectionResults.types.find(
    (t) => t.name === `${resource.type.name}CreateInput`,
  ) as IntrospectionInputObjectType;

  const variables = {
    data: buildData(inputType, params, introspectionResults),
  };
  return variables;
};

export default (introspectionResults: IntrospectionResult) => (
  resource: Resource,
  aorFetchType: string,
  params: any,
) => {
  switch (aorFetchType) {
    case GET_LIST: {
      return buildGetListVariables(introspectionResults)(
        resource,
        aorFetchType,
        params,
      );
    }
    case GET_MANY:
      return {
        where: {
          //@ts-ignore
          id: {
            in: params.ids
              .map((obj) => (isObject(obj) ? obj.id : obj))
              .filter((v) => !isNil(v)),
          },
        },
      };
    case GET_MANY_REFERENCE: {
      return buildGetListVariables(introspectionResults)(resource, GET_LIST, {
        ...params,
        filter: { [params.target]: params.id },
      });
    }
    case GET_ONE: {
      return buildGetOneVariables(introspectionResults)(resource, params);
    }
    case UPDATE: {
      return buildUpdateVariables(introspectionResults)(resource, params);
    }

    case CREATE: {
      return buildCreateVariables(introspectionResults)(resource, params);
    }

    case DELETE:
      return {
        where: { id: params.id },
      };
  }
};
