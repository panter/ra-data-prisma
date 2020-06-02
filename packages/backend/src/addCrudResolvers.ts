import { extendType, arg, intArg } from "@nexus/schema";
import { upperFirst, lowerFirst } from "lodash";

import pluralize from "pluralize";

declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    //@ts-ignore
    crud: any;
  }
}

export default (resourceName: string, { printSecurityWarning = true } = {}) => {
  const typeName = upperFirst(resourceName);

  const queryName = lowerFirst(resourceName);
  const queryAllName = pluralize(queryName);
  const queryCountName = `${pluralize(queryName)}Count`;

  const mutations = [
    `createOne${typeName}`,
    `updateOne${typeName}`,
    `updateMany${typeName}`,
    `upsertOne${typeName}`,
    `deleteOne${typeName}`,
    `deleteMany${typeName}`,
  ];
  if (process.env.NODE_ENV === "development" && printSecurityWarning) {
    const queries = [queryName, queryAllName, queryCountName];
    console.info("");
    console.info(
      `☝ The following resolvers were defined for the resource '${resourceName}' to make it compatible for react-admin`,
    );

    console.info(`Queries:     ${queries.join(" ")}`);
    console.info(`Mutations:   ${mutations.join(" ")}`);

    console.info(
      "☝ please make sure to restirct unauthorized access to these queries using graphq-shield",
    );
    console.info("");
  }
  return {
    Query: extendType({
      type: "Query",
      definition(t) {
        t.crud[queryName]();
        t.crud[queryAllName]({
          filtering: true,
          pagination: true,
          ordering: true,
        });
        // workaround for https://github.com/prisma/prisma-client-js/issues/252
        // its now possible to pass params to count in latest prisma 🎉
        // but we have to check whether this is backwards compatible
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
            after: arg({
              type: `${typeName}WhereUniqueInput`,
              required: false,
            }),
            before: arg({
              type: `${typeName}WhereUniqueInput`,
              required: false,
            }),
            first: intArg({
              required: false,
            }),
            last: intArg({
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
        mutations.forEach((mutation) => t.crud[mutation](null));
      },
    }),
  };
};
