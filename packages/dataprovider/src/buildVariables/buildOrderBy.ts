import { IntrospectionInputObjectType, IntrospectionInputValue } from "graphql";
import set from "lodash/set";
import type { GetListParams } from ".";
import { BuildVariablesContext } from "./types";

function getOrderType({
  resource,
  introspectionResults,
}: BuildVariablesContext): IntrospectionInputObjectType {
  const withoutRelation = `${resource.type.name}OrderByInput`;
  const withRelation = `${resource.type.name}OrderByWithRelationInput`;

  return introspectionResults.types.find(
    (t) => t.name === withRelation || t.name === withoutRelation,
  ) as IntrospectionInputObjectType;
}

const getFieldType = (
  context: BuildVariablesContext,
  orderType: IntrospectionInputObjectType,
  fieldParts: string[],
): IntrospectionInputValue | null => {
  if (fieldParts.length === 0) return null;

  const [currentField, ...remainingFields] = fieldParts;
  const fieldType = orderType.inputFields.find((f) => f.name === currentField);

  if (!fieldType) return null;
  if (remainingFields.length === 0) return fieldType;
  if (fieldType.type.kind !== "INPUT_OBJECT") return null;

  const name = fieldType.type.name;
  const nextOrderType = context.introspectionResults.types.find(
    (t) => t.name === name,
  ) as IntrospectionInputObjectType;

  return getFieldType(context, nextOrderType, remainingFields);
};

export const buildOrderBy = (
  sort: GetListParams["sort"],
  context: BuildVariablesContext,
) => {
  if (!sort) return null;
  const { field } = sort;

  const orderType = getOrderType(context);
  const fieldParts = field?.split(".");
  if (!orderType || !fieldParts) {
    return null;
  }

  if (!orderType.inputFields.some((f) => f.name === fieldParts[0])) {
    return null;
  }
  const selector = {};

  if (context.options.queryDialect === "typegraphql") {
    const fieldType = getFieldType(context, orderType, fieldParts);
    if (!fieldType) return null;

    if (
      fieldType.type.kind === "INPUT_OBJECT" &&
      fieldType.type.name === "SortOrderInput"
    ) {
      set(selector, field, { sort: sort.order === "ASC" ? "asc" : "desc" });

      return [selector];
    }
  }

  if (context.options.queryDialect === "pothos-prisma") {
    set(selector, field, sort.order === "ASC" ? "Asc" : "Desc");
  } else {
    set(selector, field, sort.order === "ASC" ? "asc" : "desc");
  }

  return [selector];
};
