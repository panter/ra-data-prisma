import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
} from "react-admin";
import isObject from "lodash/isObject";
import isEqual from "lodash/isEqual";
import isNil from "lodash/isNil";

import {
  IntrospectionInputObjectType,
  IntrospectionObjectType,
  IntrospectionType,
  IntrospectionNamedTypeRef,
  IntrospectionListTypeRef,
  IntrospectionNonNullTypeRef,
  IntrospectionInputTypeRef,
  IntrospectionInputValue,
} from "graphql";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { field } from "./utils/gqlTypes";
import getFinalType from "./utils/getFinalType";
import exhaust from "./utils/exhaust";

interface GetListParams {
  filter: { [key: string]: any };
  pagination: { page: number; perPage: number };
  sort: { field: string; order: string };
}

//TODO: Object filter weren't tested yet

const getFilter = (
  fieldType: IntrospectionInputObjectType,
  value: any,
  introspectionResults: IntrospectionResult,
) => {
  if (fieldType.name === "StringFilter") {
    return {
      contains: value,
    };
  }
  if (fieldType.kind == "INPUT_OBJECT") {
    // we asume for the moment that this is always a relation
    const inputObjectType = introspectionResults.types.find(
      (t) => t.name === fieldType.name,
    ) as IntrospectionInputObjectType;
    //console.log({ inputObjectType });
    const hasSomeFilter = inputObjectType.inputFields.some((s) => s.name === "some");

    if (hasSomeFilter) {
      return {
        some: {
          id: {
            equals: value,
          },
        },
      };
    }
    return {
      id: {
        equals: value,
      },
    };
  }
  console.warn("no filter for ", fieldType);
  return null;
};
const buildGetListVariables = (introspectionResults: IntrospectionResult) => (
  resource: Resource,
  aorFetchType: string,
  params: GetListParams,
) => {
  const whereType = introspectionResults.types.find(
    (t) => t.name === `${resource.type.name}WhereInput`,
  ) as IntrospectionInputObjectType;
  const where = Object.keys(params.filter).reduce((acc, key) => {
    const value = params.filter[key];
    const fieldType = whereType.inputFields.find((f) => f.name === key)
      .type as IntrospectionInputObjectType;
    const filter = getFilter(fieldType, value, introspectionResults);
    //console.log({ key, value, filter, fieldType });
    return { ...acc, [key]: filter };
  }, {});

  return {
    skip: (params.pagination.page - 1) * params.pagination.perPage,
    first: params.pagination.perPage,
    orderBy: {
      [params.sort.field]: params.sort.order === "ASC" ? "asc" : "desc",
    },
    where,
  };
};

interface UpdateParams {
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
    (introdspectionType) => introdspectionType.name === updateInputFieldType.name,
  ) as IntrospectionInputObjectType).inputFields.find((input) => input.name === "data")
    .type as IntrospectionNonNullTypeRef<IntrospectionNamedTypeRef>;
  return introspectionResults.types.find(
    (introdspectionType) => introdspectionType.name === updateListInputDataType.ofType.name,
  ) as IntrospectionInputObjectType;
};

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
    case "ENUM":
      return fieldData;
    case "INPUT_OBJECT":
      const fieldObjectType = fieldType as IntrospectionInputObjectType;

      const fullFieldObjectType = introspectionResults.types.find(
        (t) => t.name === fieldObjectType.name,
      ) as IntrospectionInputObjectType;

      // if it has a set modifier, it is an update array
      const createModifier = fullFieldObjectType?.inputFields.find((i) => i.name === "create");
      const connectModifier = fullFieldObjectType?.inputFields.find((i) => i.name === "connect");
      const setModifier = fullFieldObjectType?.inputFields.find((i) => i.name === "set");
      // is it a relation?
      if (createModifier && connectModifier) {
        const updateModifier = fullFieldObjectType?.inputFields.find((i) => i.name === "update");
        if (createModifier.type.kind === "LIST") {
          if (Array.isArray(fieldData)) {
            const createListInputType = getCreateInputDataTypeForList(
              createModifier,
              introspectionResults,
            );

            const updateListInputType = updateModifier
              ? getUpdateInputDataTypeForList(updateModifier, introspectionResults)
              : null;

            const variables = fieldData.reduce<UpdateManyInput>((inputs, referencedField) => {
              if (isObject(referencedField)) {
                if (!updateListInputType) {
                  throw new Error(
                    `Input data for "${fieldName}" is of type "Object" but graphql endpoints does not expose the "update" mutation for "${fullFieldObjectType.name}"`,
                  );
                }
                // TODO: we assume "data.id" to be the id
                if (referencedField.id) {
                  // update
                  const data = buildData(
                    updateListInputType,
                    {
                      id: referencedField.id,
                      data: referencedField,
                      previousData: previousFieldData?.find((previousField) => {
                        // TODO: we assume ".id" to be the id
                        return previousField.id === referencedField.id;
                      }),
                    },
                    introspectionResults,
                  );
                  inputs.update = [
                    ...(inputs.update || []),
                    { where: { id: referencedField.id }, data },
                  ];
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
                    return p.id ? p.id === referencedField : p === referencedField;
                  })
                ) {
                  inputs.connect = [...(inputs.connect || []), { id: referencedField }];
                }
              }
              return inputs;
            }, {});

            // disconnect the ones that are not referenced anymore
            if (Array.isArray(previousFieldData)) {
              const disconnect = (previousFieldData as any[]).reduce<Array<{ id: any }>>(
                (inputs, data) => {
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
                },
                [],
              );
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
            // TODO: we assume ".id" to be the id
            if (!fieldData.id) {
              const createObjectModifierType = getFinalType(createModifier.type);
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
                const updateObjectModifierType = getFinalType(updateModifier.type);
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
          } else if (previousFieldData !== fieldData) {
            return { connect: { id: fieldData } };
          }
        }
      } else if (setModifier) {
        return { set: fieldData };
      }
      return;
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
  return inputType.inputFields.reduce((acc, field) => {
    const key = field.name;
    const fieldType = field.type.kind === "NON_NULL" ? field.type.ofType : field.type;
    const fieldData = params.data[key];
    //console.log(key, fieldData, fieldType);
    const previousFieldData = (params as UpdateParams)?.previousData?.[key] || null;
    // TODO in case the content of the array has changed but not the array itself?
    if (isEqual(fieldData, previousFieldData) || (isNil(previousFieldData) && isNil(fieldData))) {
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

  return {
    where: {
      // TODO: we assume "data.id" to be the id
      id: params.data.id,
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
      return buildGetListVariables(introspectionResults)(resource, aorFetchType, params);
    }
    case GET_MANY:
      return {
        where: {
          id: { in: params.ids.map((obj) => (isObject(obj) ? obj.id : obj)) },
        },
      };
    case GET_MANY_REFERENCE: {
      return {
        where: {
          id: {
            in: params.id,
          },
        },
      };
    }
    case GET_ONE:
      return {
        where: { id: params.id },
      };
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
