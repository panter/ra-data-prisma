import { graphql, getIntrospectionQuery } from "graphql";
import introspection from "ra-data-graphql/lib/introspection";
import { makeIntrospectionOptions } from "../utils/makeIntrospectionOptions";
import { testSchema } from "../../test-data/testSchema";
import { IntrospectionResult } from "../constants/interfaces";

type Options = {
  aliasPrefix?: string;
};
export const getTestIntrospection = async (options?: Options) => {
  const schema = await graphql(
    testSchema(options),
    getIntrospectionQuery(),
  ).then(({ data: { __schema } }) => __schema);
  return introspection(null, {
    ...makeIntrospectionOptions(options),
    schema: schema,
  }) as IntrospectionResult;
};

//
