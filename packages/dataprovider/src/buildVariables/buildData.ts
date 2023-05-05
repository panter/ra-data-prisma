import { debug } from "console";
import {
  IntrospectionInputObjectType,
  IntrospectionInputTypeRef,
  IntrospectionInputValue,
  IntrospectionListTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionNonNullTypeRef,
  IntrospectionTypeRef,
} from "graphql";
import isEqual from "lodash/isEqual";
import isNil from "lodash/isNil";
import isObject from "lodash/isObject";
import { IntrospectionResult } from "../constants/interfaces";
import exhaust from "../utils/exhaust";
import getFinalType from "../utils/getFinalType";

enum ModifiersParams {
  connect = "connect",
  create = "create",
  createMany = "createMany",
  delete = "delete",
  deleteMany = "deleteMany",
  disconnect = "disconnect",
  set = "set",
  update = "update",
  updateMany = "updateMany",
  upsert = "upsert",
  connectOrCreate = "connectOrCreate",
}

export type UpdateParams = {
  id: string;
  data: { [key: string]: any };
  previousData: { [key: string]: any };
};

export type CreateParams = {
  data: { [key: string]: any };
};

export type UpdateManyInput = {
  create?: Array<{ [key: string]: any }>;
  connect?: Array<{ id: any }>;
  set?: Array<{ id: any }>;
  disconnect?: Array<{ id: any }>;
  delete?: Array<{ id: any }>;
  update?: Array<{ where: { id: any }; data: { [key: string]: any } }>;
};

const getCreateInputDataTypeForList = (
  createModifier: IntrospectionInputValue,
  introspectionResults: IntrospectionResult,
) => {
  const createListModifierType =
    createModifier.type as IntrospectionListTypeRef<
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
  const updateListModifierType =
    updateModifier.type as IntrospectionListTypeRef<
      IntrospectionNonNullTypeRef<any>
    >;
  const updateInputFieldType = getFinalType(updateListModifierType.ofType);
  const updateListInputDataType = (
    introspectionResults.types.find(
      (introdspectionType) =>
        introdspectionType.name === updateInputFieldType.name,
    ) as IntrospectionInputObjectType
  ).inputFields.find((input) => input.name === "data")
    .type as IntrospectionTypeRef;

  const updateListInputDataName = (
    (updateListInputDataType.kind === "NON_NULL"
      ? updateListInputDataType.ofType
      : updateListInputDataType) as IntrospectionNamedTypeRef
  ).name;

  return introspectionResults.types.find(
    (introdspectionType) => introdspectionType.name === updateListInputDataName,
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
      // if its a date, convert it to a date
      if (fieldType.kind === "SCALAR" && fieldType.name === "DateTime") {
        return new Date(fieldData);
      }
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

      const setModifier = fullFieldObjectType?.inputFields.find(
        (i) => i.name === ModifiersParams.set,
      );

      const connectModifier = fullFieldObjectType?.inputFields.find(
        (i) => i.name === ModifiersParams.connect,
      );

      const disconnectModifier = fullFieldObjectType?.inputFields.find(
        (i) => i.name === ModifiersParams.disconnect,
      );

      const deleteModifier = fullFieldObjectType?.inputFields.find(
        (i) => i.name === ModifiersParams.delete,
      );

      if (
        setModifier &&
        !connectModifier &&
        !disconnectModifier &&
        !deleteModifier
      ) {
        // if its a date, convert it to a date
        if (
          setModifier.type.kind === "SCALAR" &&
          setModifier.type.name === "DateTime"
        ) {
          return { set: new Date(fieldData) };
        }
        return { set: fieldData };
      }

      const isRelationship = fullFieldObjectType?.inputFields.every((i) => {
        return Object.keys(ModifiersParams).includes(i.name);
      });

      // is it a relation?
      if (isRelationship) {
        // if it has a set modifier, it is an update array
        const createModifier = fullFieldObjectType?.inputFields.find(
          (i) => i.name === ModifiersParams.create,
        );

        const updateModifier = fullFieldObjectType?.inputFields.find(
          (i) => i.name === ModifiersParams.update,
        );

        const isList = fullFieldObjectType?.inputFields.some((i) => {
          return i.type.kind === "LIST";
        });

        if (isList) {
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
              const removableRelations = (previousFieldData as any[]).reduce<
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
              if (removableRelations.length) {
                if (disconnectModifier) {
                  variables.disconnect = removableRelations;
                } else if (deleteModifier) {
                  variables.delete = removableRelations;
                }
              }
            }
            return variables;
          } else {
            throw new Error(`${fieldName} should be an array`);
          }
        } else {
          if (!fieldData) {
            if (disconnectModifier) {
              return {
                disconnect: true,
              };
            } else if (deleteModifier) {
              return {
                delete: true,
              };
            }
          }

          if (isObject(fieldData)) {
            if (!isObjectWithId(fieldData)) {
              if (!createModifier) {
                return;
              }
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
                if (!updateModifier) {
                  return;
                }
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
              } else if (connectModifier) {
                return { connect: { id: fieldData.id } };
              }
            }
          } else if (connectModifier) {
            return { connect: { id: fieldData } };
          }
        }
      } else {
        return fieldData;
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

export const buildData = (
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
