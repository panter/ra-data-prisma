import camelCase from "lodash/camelCase";
import merge from "lodash/merge";
import pluralize from "pluralize";
import gql from "graphql-tag";
import buildDataProvider from "ra-data-graphql";
import {
  CREATE,
  DELETE,
  DELETE_MANY,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
  UPDATE_MANY,
} from "react-admin";

import { Resource } from "./constants/interfaces";

import { Options, ResourceView, OurOptions } from "./types";
import { buildQueryFactory } from "./buildQuery";
import { makePrefixedFullName } from "./buildGqlQuery";

export { ResourceView, Options };
export const defaultOptions = {
  buildQuery: buildQueryFactory,
};

export const makeIntrospectionOptions = (options: OurOptions) => {
  const prefix = (s: string) => makePrefixedFullName(s, options?.aliasPrefix);
  return {
    operationNames: {
      [GET_LIST]: (resource: Resource) =>
        prefix(`${pluralize(camelCase(resource.name))}`),
      [GET_ONE]: (resource: Resource) => prefix(`${camelCase(resource.name)}`),
      [GET_MANY]: (resource: Resource) =>
        prefix(`${pluralize(camelCase(resource.name))}`),
      [GET_MANY_REFERENCE]: (resource: Resource) =>
        prefix(`${pluralize(camelCase(resource.name))}`),
      [CREATE]: (resource: Resource) => prefix(`createOne${resource.name}`),
      [UPDATE]: (resource: Resource) => prefix(`updateOne${resource.name}`),
      [DELETE]: (resource: Resource) => prefix(`deleteOne${resource.name}`),
    },
    exclude: undefined,
    include: undefined,
  };
};
export default (options: Options) => {
  return buildDataProvider(
    merge(
      {},
      defaultOptions,
      {
        introspection: makeIntrospectionOptions(options),
      },
      options,
    ),
  ).then((graphQLDataProvider) => {
    return (
      fetchType: string,
      resource: string,
      params: { [key: string]: any },
    ): Promise<any> => {
      // Temporary work-around until we make use of updateMany and deleteMany mutations
      if (fetchType === DELETE_MANY) {
        const { ids, ...otherParams } = params;
        return Promise.all(
          params.ids.map((id: string) =>
            graphQLDataProvider(DELETE, resource, {
              id,
              ...otherParams,
            }),
          ),
        ).then((results) => {
          return { data: results.map(({ data }: any) => data.id) };
        });
      }

      if (fetchType === UPDATE_MANY) {
        const { ids, ...otherParams } = params;
        return Promise.all(
          params.ids.map((id: string) =>
            graphQLDataProvider(UPDATE, resource, {
              id,
              ...otherParams,
            }),
          ),
        ).then((results) => {
          return { data: results.map(({ data }: any) => data.id) };
        });
      }
      return graphQLDataProvider(fetchType, resource, params);
    };
  });
};
