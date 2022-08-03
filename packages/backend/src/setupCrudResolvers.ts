import { upperFirst, lowerFirst } from "lodash";
import * as Helpers from "nexus-plugin-prisma/src/typegen/helpers";

import pluralize from "pluralize";
import { ResourceOptions, CommonOptions } from "./types";

const makePrefixedFullName = (name: string, prefix?: string) => {
  return !prefix ? name : prefix + upperFirst(name);
};

const setupCrudResolvers = <
  AliasPrefix extends string,
  ModelName extends keyof Helpers.GetGen<"outputs"> & string,
>(
  { extendType, arg, intArg },
  resourceName: ModelName,
  {
    printSecurityWarning = true,
    customize,
    aliasPrefix,
    enableOrderByRelation = false,
  }: ResourceOptions<AliasPrefix, ModelName> & CommonOptions<AliasPrefix> = {},
) => {
  const typeName = upperFirst(resourceName);

  const queryName = lowerFirst(resourceName);
  const queryAllName = pluralize(queryName);
  const queryCountName = `${pluralize(queryName)}Count`;

  const mutations = [
    { name: `createOne${typeName}`, type: "createOne" },
    { name: `updateOne${typeName}`, type: "updateOne" },
    { name: `updateMany${typeName}`, type: "updateMany" },
    { name: `upsertOne${typeName}`, type: "upsertOne" },
    { name: `deleteOne${typeName}`, type: "deleteOne" },
    { name: `deleteMany${typeName}`, type: "deleteMany" },
  ];
  if (process.env.NODE_ENV === "development" && printSecurityWarning) {
    const queries = [queryName, queryAllName, queryCountName].map((n) =>
      makePrefixedFullName(n, aliasPrefix),
    );
    console.info("");
    console.info(
      `☝ The following resolvers were defined for the resource '${resourceName}' to make it compatible for react-admin`,
    );

    console.info(`Queries:     ${queries.join(" ")}`);
    console.info(`Mutations:   ${mutations.map((m) => m.name).join(" ")}`);

    console.info(
      "☝ please make sure to restirct unauthorized access to these queries using graphq-shield",
    );
    console.info("");
  }
  return {
    Query: extendType({
      type: "Query",
      definition(t) {
        const oneConfig = {
          alias: makePrefixedFullName(queryName, aliasPrefix),
        };
        t.crud[queryName](customize?.one?.(oneConfig as any) ?? oneConfig);
        const manyConfig = {
          filtering: true,
          pagination: true,
          ordering: true,
          alias: makePrefixedFullName(queryAllName, aliasPrefix),
        };
        t.crud[queryAllName](
          customize?.many?.(manyConfig as any) ?? manyConfig,
        );

        t.int(makePrefixedFullName(queryCountName, aliasPrefix), {
          args: {
            where: arg({
              type: `${typeName}WhereInput`,
            }),
            orderBy: arg({
              type: enableOrderByRelation
                ? `${typeName}OrderByWithRelationInput`
                : `${typeName}OrderByInput`,
            }),
            skip: intArg({}),

            cursor: arg({
              type: `${typeName}WhereUniqueInput`,
            }),
            take: intArg({}),
          },

          resolve(root, args, { prisma, db }) {
            return (prisma ?? db)[queryName].count(args);
          },
        });
      },
    }),

    Mutation: extendType({
      type: "Mutation",
      definition(t) {
        mutations.forEach((mutation) => {
          const options = {
            alias: makePrefixedFullName(mutation.name, aliasPrefix),
          };
          t.crud[mutation.name](
            customize?.[mutation.type]?.(options) ?? options,
          );
        });
      },
    }),
  };
};

export default setupCrudResolvers;
