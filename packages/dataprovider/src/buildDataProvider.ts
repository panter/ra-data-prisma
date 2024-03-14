import merge from "lodash/merge";
import buildRaGraphqlDataProvider from "ra-data-graphql";
import { DataProvider, DeleteManyParams, DeleteParams, RaRecord, UpdateManyParams, UpdateParams } from "react-admin";
import { makeIntrospectionOptions } from "./utils/makeIntrospectionOptions";
import { buildQuery } from "./buildQuery";
import { Options, OurOptions } from "./types";

export const defaultOurOptions: OurOptions = {
  queryDialect: "nexus-prisma",
};

export const defaultOptions: Options = {
  clientOptions: { uri: "/graphql" },
  ...defaultOurOptions,
};

const buildDataProvider = (options: Options): Promise<DataProvider> => {
  const fullOptions = merge({}, defaultOptions, options);
  const buildQueryFactory =  buildQuery(fullOptions);
  const buildOptions = merge(
    {},
    {
      buildQuery: buildQueryFactory.factory,
      introspection: makeIntrospectionOptions(fullOptions),
    },
    fullOptions,
  );
  return buildRaGraphqlDataProvider(buildOptions).then( (graphQLDataProvider) => {
    return {
      ...graphQLDataProvider,
      deleteMany: <RecordType extends RaRecord = any>(
        resource: string,
        params: DeleteManyParams<RecordType>
        ) => {
          const { ids, ...otherParams } = params;
          return Promise.all(
            params.ids.map((id: string) =>
              graphQLDataProvider.delete(resource, {
                id,
                ...otherParams,
              } as DeleteParams<RecordType>),
            ),
          ).then((results) => {
            return { data: results.map(({ data }: any) => data.id) };
          });
      },
      updateMany: <RecordType extends RaRecord = any>(
        resource: string,
        params: UpdateManyParams<RecordType>
        ) => {
          const { ids, ...otherParams } = params;
          return Promise.all(
            params.ids.map((id: string) =>
              graphQLDataProvider.update(resource, {
                id,
                ...otherParams,
              } as UpdateParams<RecordType>),
            ),
          ).then((results) => {
            return { data: results.map(({ data }: any) => data.id) };
          });
      },
    }
  });
}

export default buildDataProvider;
