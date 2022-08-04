import { graphql, getIntrospectionQuery, GraphQLSchema } from "graphql";
import introspection from "ra-data-graphql/lib/introspection";
import { makeIntrospectionOptions } from "../utils/makeIntrospectionOptions";
import { testSchemaNexus } from "../../test-data/testSchemaNexus";
import { IntrospectionResult } from "../constants/interfaces";
import { CommonOptions } from "../../../backend/src/types";
import { defaultOurOptions } from "../buildDataProvider";
import { testSchemaTypeGraphql } from "../../test-data/testSchemaTypeGraphql";

const buildIntrospection = async <Prefix extends string>(
  rawSchema: GraphQLSchema,
  options?: CommonOptions<Prefix>,
) => {
  const schema = await graphql(rawSchema, getIntrospectionQuery()).then(
    ({ data: { __schema } }) => __schema,
  );
  return introspection(null, {
    ...makeIntrospectionOptions({ ...options, ...defaultOurOptions }),
    schema: schema,
  }) as IntrospectionResult;
};

export const getTestIntrospectionNexus = async <Prefix extends string>(
  options?: CommonOptions<Prefix>,
) => {
  return await buildIntrospection(
    testSchemaNexus({
      ...options,
      enableOrderByRelation: true,
    }),
    options,
  );
};

export const getTestIntrospectionTypeGraphql = async <Prefix extends string>(
  options?: CommonOptions<Prefix>,
) => {
  return await buildIntrospection(
    await testSchemaTypeGraphql({
      ...options,
      enableOrderByRelation: true,
    }),
    options,
  );
};
//
