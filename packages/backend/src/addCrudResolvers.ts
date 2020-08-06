import { extendType, arg, intArg } from "@nexus/schema";
import { upperFirst, lowerFirst } from "lodash";

import pluralize from "pluralize";

declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    //@ts-ignore
    crud: any;
  }
}

const DEFAULT_MANY = {
  filtering: true,
  pagination: true,
  ordering: true,
};

type Customize = {
  // no good types here :-(
  one?: (c: {}) => any;
  many?: (c: typeof DEFAULT_MANY) => any;
  createOne?: (c: {}) => any;
  updateOne?: (c: {}) => any;
  updateMany?: (c: {}) => any;
  upsertOne?: (c: {}) => any;
  deleteOne?: (c: {}) => any;
  deleteMany?: (c: {}) => any;
};

type Options = {
  /**
   * whether to display a warning to secure the mutations and resolvers (defaults to true)
   */
  printSecurityWarning?: boolean;
  customize?: Customize;
};
const addCrudResolvers = (
  resourceName: string,
  { printSecurityWarning = true, customize }: Options = {},
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
    const queries = [queryName, queryAllName, queryCountName];
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
        t.crud[queryName](customize?.one?.({}) ?? {});

        t.crud[queryAllName](customize?.many?.(DEFAULT_MANY) ?? DEFAULT_MANY);
        t.int(queryCountName, {
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
        mutations.forEach((mutation) =>
          t.crud[mutation.name](customize?.[mutation.type]?.({}) ?? {}),
        );
      },
    }),
  };
};

export default addCrudResolvers;
