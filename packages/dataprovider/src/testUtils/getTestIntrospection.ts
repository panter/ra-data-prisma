import { graphql, getIntrospectionQuery } from "graphql";
import introspection from "ra-data-graphql/lib/introspection";
import { makeIntrospectionOptions } from "../utils/makeIntrospectionOptions";
import { testSchema } from "../../test-data/testSchema";
import { IntrospectionResult } from "../constants/interfaces";
import { CommonOptions } from "../../../backend/src/types";
import { defaultOurOptions } from "../buildDataProvider";

export const getTestIntrospection = async (options?: CommonOptions) => {
  const schema = await graphql(
    testSchema({
      ...options,
      enableOrderByRelation: true,
    }),
    getIntrospectionQuery(),
  ).then(({ data: { __schema } }) => __schema);
  return introspection(null, {
    ...makeIntrospectionOptions({ ...options, ...defaultOurOptions }),
    schema: schema,
  }) as IntrospectionResult;
};

//
