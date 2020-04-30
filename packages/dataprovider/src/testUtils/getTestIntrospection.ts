import { graphql, getIntrospectionQuery } from "graphql";
import introspection from "ra-data-graphql/lib/introspection";
import { defaultOptions } from "../";
import { testSchema } from "../../test-data/testSchema";
import { IntrospectionResult } from "../constants/interfaces";

export const getTestIntrospection = async () => {
  const schema = await graphql(testSchema, getIntrospectionQuery()).then(
    ({ data: { __schema } }) => __schema,
  );
  return introspection(null, {
    ...defaultOptions.introspection,
    schema: schema,
  }) as IntrospectionResult;
};

//
