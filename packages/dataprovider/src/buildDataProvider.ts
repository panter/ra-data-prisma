import merge from "lodash/merge";
import buildRaGraphqlDataProvider from "ra-data-graphql";
import { DELETE, DELETE_MANY, UPDATE, UPDATE_MANY } from "react-admin";
import { buildQueryFactory } from "./buildQuery";
import { Options, OurOptions } from "./types";

import { makeIntrospectionOptions } from "./utils/makeIntrospectionOptions";

export const defaultOurOptions: OurOptions = {
  queryDialect: "nexus-prisma",
};

export const defaultOptions: Options = {
  clientOptions: { uri: "/graphql" },
  ...defaultOurOptions,
};

const buildDataProvider = (options: Options) => {
  const fullOptions = merge({}, defaultOptions, options);
  return buildRaGraphqlDataProvider(
    merge(
      {},
      {
        buildQuery: buildQueryFactory,
        introspection: makeIntrospectionOptions(fullOptions),
      },
      fullOptions,
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

export default buildDataProvider;
