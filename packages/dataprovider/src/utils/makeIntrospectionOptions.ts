import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
} from "react-admin";
import { OurOptions, QueryDialect } from "../types";

import { Resource } from "../constants/interfaces";
import camelCase from "lodash/camelCase";
import { makePrefixedFullName } from "./makePrefixedFullName";
import pluralize from "pluralize";

export const makeIntrospectionOptions = (options: OurOptions) => {
  const mutationOperationNames: Record<QueryDialect, object> = {
    "nexus-prisma": {
      [CREATE]: (resource: Resource) =>
        makePrefixedFullName(`createOne${resource.name}`, options?.aliasPrefix),
      [UPDATE]: (resource: Resource) =>
        makePrefixedFullName(`updateOne${resource.name}`, options?.aliasPrefix),
      [DELETE]: (resource: Resource) =>
        makePrefixedFullName(`deleteOne${resource.name}`, options?.aliasPrefix),
    },
    typegraphql: {
      [CREATE]: (resource: Resource) =>
        makePrefixedFullName(`create${resource.name}`, options?.aliasPrefix),
      [UPDATE]: (resource: Resource) =>
        makePrefixedFullName(`update${resource.name}`, options?.aliasPrefix),
      [DELETE]: (resource: Resource) =>
        makePrefixedFullName(`delete${resource.name}`, options?.aliasPrefix),
    },
    ...options.mutationOperationNames,
  };

  return {
    operationNames: {
      [GET_LIST]: (resource: Resource) =>
        makePrefixedFullName(
          `${pluralize(camelCase(resource.name))}`,
          options?.aliasPrefix,
        ),
      [GET_ONE]: (resource: Resource) =>
        makePrefixedFullName(
          `${camelCase(resource.name)}`,
          options?.aliasPrefix,
        ),
      [GET_MANY]: (resource: Resource) =>
        makePrefixedFullName(
          `${pluralize(camelCase(resource.name))}`,
          options?.aliasPrefix,
        ),
      [GET_MANY_REFERENCE]: (resource: Resource) =>
        makePrefixedFullName(
          `${pluralize(camelCase(resource.name))}`,
          options?.aliasPrefix,
        ),

      ...mutationOperationNames[options.queryDialect],
    },
    exclude: undefined,
    include: undefined,
    ...options.introspection,
  };
};
