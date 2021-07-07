import { IntrospectionInputObjectType } from "graphql";
import set from "lodash/set";
import type { GetListParams } from ".";
import { IntrospectionResult, Resource } from "../constants/interfaces";

function getOrderType(
  introspectionResults: IntrospectionResult,
  resource: Resource,
): IntrospectionInputObjectType {
  const withoutRelation = `${resource.type.name}OrderByInput`;
  const withRelation = `${resource.type.name}OrderByWithRelationInput`;

  return introspectionResults.types.find(
    (t) => t.name === withRelation || t.name === withoutRelation,
  ) as IntrospectionInputObjectType;
}

export const buildOrderBy = (
  introspectionResults: IntrospectionResult,
  resource: Resource,
  sort: GetListParams["sort"],
) => {
  if (!sort) return null;
  const { field } = sort;

  const orderType = getOrderType(introspectionResults, resource);
  const fieldParts = field?.split(".");
  if (!orderType || !fieldParts) {
    return null;
  }

  if (!orderType.inputFields.some((f) => f.name === fieldParts[0])) {
    return null;
  }
  const selector = {};
  set(selector, field, sort.order === "ASC" ? "asc" : "desc");
  return [selector];
};
