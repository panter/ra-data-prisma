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

  const inputTypefield = orderType.inputFields.find(
    (f) => f.name === fieldParts[0],
  );
  if (!inputTypefield) {
    return null;
  }

  const theType = inputTypefield.type;

  let directSortOrder = false;
  if (theType.kind === "INPUT_OBJECT") {
    const inputObjectType = context.introspectionResults.types.find(
      (t) => t.name === theType.name,
    );

    if (inputObjectType.kind === "INPUT_OBJECT") {
      const theField = inputObjectType?.inputFields.find(
        (f) => f.name === fieldParts[1],
      );

      // would be cleaner to really follow the full chain if its always an input object
      if (theField?.type.kind === "ENUM") {
        directSortOrder = true;
      }
    } else {
      directSortOrder = true;
    }
  } else {
    directSortOrder = true;
  }
  const selector = {};
  const sortOrder = sort.order === "ASC" ? "asc" : "desc";
  set(selector, field, directSortOrder ? sortOrder : { sort: sortOrder });
  return [selector];
};
