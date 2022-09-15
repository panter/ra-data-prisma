import camelCase from "lodash/camelCase";
import pluralize from "pluralize";
import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
} from "react-admin";
import { Resource } from "../constants/interfaces";
import { OurOptions, QueryDialect } from "../types";
import { makePrefixedFullName } from "./makePrefixedFullName";

export const makeIntrospectionOptions = (options: OurOptions) => {
  const prefix = (s: string) => makePrefixedFullName(s, options?.aliasPrefix);

  const mutationOperationNames: Record<QueryDialect, object> = {
    "nexus-prisma": {
      [CREATE]: (resource: Resource) =>
        options?.operationNames?.[resource.name]?.create ||
        prefix(`createOne${resource.name}`),
      [UPDATE]: (resource: Resource) =>
        options?.operationNames?.[resource.name]?.update ||
        prefix(`updateOne${resource.name}`),
      [DELETE]: (resource: Resource) =>
        options?.operationNames?.[resource.name]?.delete ||
        prefix(`deleteOne${resource.name}`),
    },
    typegraphql: {
      [CREATE]: (resource: Resource) =>
        options?.operationNames?.[resource.name]?.create ||
        prefix(`create${resource.name}`),
      [UPDATE]: (resource: Resource) =>
        options?.operationNames?.[resource.name]?.update ||
        prefix(`update${resource.name}`),
      [DELETE]: (resource: Resource) =>
        options?.operationNames?.[resource.name]?.delete ||
        prefix(`delete${resource.name}`),
    },
  };

  return {
    operationNames: {
      [GET_LIST]: (resource: Resource) =>
        options?.operationNames?.[resource.name]?.many ||
        prefix(`${pluralize(camelCase(resource.name))}`),
      [GET_ONE]: (resource: Resource) =>
        options?.operationNames?.[resource.name]?.one ||
        prefix(`${camelCase(resource.name)}`),
      [GET_MANY]: (resource: Resource) =>
        options?.operationNames?.[resource.name]?.many ||
        prefix(`${pluralize(camelCase(resource.name))}`),
      [GET_MANY_REFERENCE]: (resource: Resource) =>
        options?.operationNames?.[resource.name]?.many ||
        prefix(`${pluralize(camelCase(resource.name))}`),

      ...mutationOperationNames[options.queryDialect],
    },
    exclude: undefined,
    include: undefined,
    ...options.introspection,
  };
};
