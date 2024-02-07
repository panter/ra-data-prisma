import { IntrospectionInputObjectType } from "graphql";
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

  if (context.options.queryDialect === "pothos-prisma") {
    set(selector, field, sort.order === "ASC" ? "Asc" : "Desc");
  } else {
    set(selector, field, sort.order === "ASC" ? "asc" : "desc");
  }

  return [selector];
};
