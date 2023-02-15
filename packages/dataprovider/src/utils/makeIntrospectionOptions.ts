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
  const prefix = (s: string) => makePrefixedFullName(s, options?.aliasPrefix);

  const mutationOperationNames: Record<QueryDialect, object> = {
    "nexus-prisma": {
      [CREATE]: (resource: Resource) => prefix(`createOne${resource.name}`),
      [UPDATE]: (resource: Resource) => prefix(`updateOne${resource.name}`),
      [DELETE]: (resource: Resource) => prefix(`deleteOne${resource.name}`),
    },
    typegraphql: {
      [CREATE]: (resource: Resource) => prefix(`create${resource.name}`),
      [UPDATE]: (resource: Resource) => prefix(`update${resource.name}`),
      [DELETE]: (resource: Resource) => prefix(`delete${resource.name}`),
    },
    ...options.mutationOperationNames,
  };

  return {
    operationNames: {
      [GET_LIST]: (resource: Resource) =>
        prefix(`${pluralize(camelCase(resource.name))}`),
      [GET_ONE]: (resource: Resource) => prefix(`${camelCase(resource.name)}`),
      [GET_MANY]: (resource: Resource) =>
        prefix(`${pluralize(camelCase(resource.name))}`),
      [GET_MANY_REFERENCE]: (resource: Resource) =>
        prefix(`${pluralize(camelCase(resource.name))}`),

      ...mutationOperationNames[options.queryDialect],
    },
    exclude: undefined,
    include: undefined,
    ...options.introspection,
  };
};
