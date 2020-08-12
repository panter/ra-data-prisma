import { upperFirst, lowerFirst } from "lodash";

import pluralize from "pluralize";
import { Options } from "./types";

declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    //@ts-ignore
    crud: any;
  }
}

const makePrefixedFullName = (name: string, prefix?: string) => {
  return !prefix ? name : prefix + upperFirst(name);
};

const setupCrudResolvers = (
  { extendType, arg, intArg },
  resourceName: string,
  { printSecurityWarning = true, customize, aliasPrefix }: Options = {},
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
        t.crud[queryName](customize?.one?.(oneConfig) ?? oneConfig);
        const manyConfig = {
          filtering: true,
          pagination: true,
          ordering: true,
          alias: makePrefixedFullName(queryAllName, aliasPrefix),
        };
        t.crud[queryAllName](customize?.many?.(manyConfig) ?? manyConfig);
        t.int(makePrefixedFullName(queryCountName, aliasPrefix), {
          args: {
            where: arg({
              type: `${typeName}WhereInput`,
              required: false,
            }),
            orderBy: arg({
              type: `${typeName}OrderByInput`,
              required: false,
            }),
            skip: intArg({
              required: false,
            }),

            cursor: arg({
              type: `${typeName}WhereUniqueInput`,
              required: false,
            }),
            take: intArg({
              required: false,
            }),
          },

          resolve(root, args, { prisma }) {
            return prisma[queryName].count(args);
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
