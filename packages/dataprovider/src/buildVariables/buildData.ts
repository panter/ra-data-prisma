import {
  IntrospectionInputObjectType,
  IntrospectionInputTypeRef,
  IntrospectionInputValue,
  IntrospectionListTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionNonNullTypeRef,
  IntrospectionTypeRef,
} from "graphql";
import { uniq } from "lodash";
import isEqual from "lodash/isEqual";
import isNil from "lodash/isNil";
import isObject from "lodash/isObject";
import exhaust from "../utils/exhaust";
import getFinalType from "../utils/getFinalType";
import { getSanitizedFieldData, hasFieldData } from "./sanitizeData";
import { BuildVariablesContext } from "./types";

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
  context: BuildVariablesContext,
) => {
  const createListModifierType =
    createModifier.type as IntrospectionListTypeRef<
      IntrospectionNonNullTypeRef<any>
    >;
  const createInputFieldType =
    createListModifierType.ofType.kind === "NON_NULL"
      ? createListModifierType.ofType.ofType
      : createListModifierType.ofType;
  return context.introspectionResults.types.find(
    // what about a nullable type?
    (t) => t.name === createInputFieldType.name,
  ) as IntrospectionInputObjectType;
};
const getUpdateInputDataTypeForList = (
  updateModifier: IntrospectionInputValue,
  context: BuildVariablesContext,
) => {
  const updateListModifierType =
    updateModifier.type as IntrospectionListTypeRef<
      IntrospectionNonNullTypeRef<any>
    >;
  const updateInputFieldType = getFinalType(updateListModifierType.ofType);
  const updateListInputDataType = (
    context.introspectionResults.types.find(
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

  return context.introspectionResults.types.find(
    (introdspectionType) => introdspectionType.name === updateListInputDataName,
  ) as IntrospectionInputObjectType;
};

type ThingWithId = {
  id: string;
};
function isObjectWithId(data: any): data is ThingWithId {
  if (!data) return false;
  if (!isObject(data)) return false;
  return "id" in data;
}

const isNullReferenceObject = (data: any) =>
  isObjectWithId(data) && (data.id === null || data.id === "");
const buildNewInputValue = (
  fieldData: any,
  previousFieldData: any,
  fieldName: string,
  fieldType: IntrospectionInputTypeRef,
  context: BuildVariablesContext,
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

      const fullFieldObjectType = context.introspectionResults.types.find(
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

      const removeRelationMode = disconnectModifier
        ? "disconnect"
        : deleteModifier
        ? "delete"
        : null;

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
              context,
            );

            const updateListInputType = updateModifier
              ? getUpdateInputDataTypeForList(updateModifier, context)
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
                        context,
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
                      context,
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
                if (removeRelationMode === "disconnect") {
                  variables.disconnect = removableRelations;
                } else if (removeRelationMode === "delete") {
                  variables.delete = removableRelations;
                }
              }
            }
            return variables;
          } else {
            throw new Error(`${fieldName} should be an array`);
          }
        } else {
          // disconnect if field data is empty or if its a {id: null} or {id: ""} object
          if (!fieldData || isNullReferenceObject(fieldData)) {
            if (removeRelationMode === "disconnect") {
              return {
                disconnect: true,
              };
            } else if (removeRelationMode === "delete") {
              return {
                delete: true,
              };
            }
            // else skip it
            return;
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
              const createObjectInputType =
                context.introspectionResults.types.find(
                  (t) => t.name === createObjectModifierType.name,
                ) as IntrospectionInputObjectType;

              // create
              const data = buildData(
                createObjectInputType,
                {
                  data: fieldData,
                },
                context,
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
                const updateObjectInputType =
                  context.introspectionResults.types.find(
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
                  context,
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
  context: BuildVariablesContext,
) => {
  if (!inputType) {
    return {};
  }
  const data = params.data;
  const previousData = "previousData" in params ? params.previousData : null;

  const allKeys = uniq([
    ...Object.keys(data),
    ...Object.keys(previousData ?? {}),
  ]);

  // we only deal with the changedData set
  const changedData = Object.fromEntries(
    allKeys
      .filter((key) => {
        if (!previousData) {
          return true;
        }
        const value = data[key];
        const previousValue = previousData[key];
        if (isEqual(value, previousValue)) {
          return false; // remove
        }
        if (isNil(value) && isNil(previousValue)) {
          return false;
        }
        return true;
      })
      .map((key) => [key, data[key]]),
  );
  return inputType.inputFields.reduce((acc, field) => {
    // ignore unchanged field
    if (!hasFieldData(changedData, field)) {
      return acc;
    }
    const fieldType =
      field.type.kind === "NON_NULL" ? field.type.ofType : field.type;
    // we have to handle the convenience convention that adds _id(s)  to the data
    // the sanitize function merges that with other data
    const { fieldData, previousFieldData } = getSanitizedFieldData(
      changedData,
      previousData,
      field,
    );

    const newVaue = buildNewInputValue(
      fieldData,
      previousFieldData,
      field.name,
      fieldType,
      context,
    );
    const key = field.name;

    return {
      ...acc,
      [key]: newVaue,
    };
  }, {});
};
