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
        mutations.forEach((mutation) => t.crud[mutation](null));
      },
    }),
  };
};
