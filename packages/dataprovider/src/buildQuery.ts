import buildVariables from "./buildVariables";
import buildGqlQuery from "./buildGqlQuery";
import getResponseParser from "./getResponseParser";
import { IntrospectionResult } from "./constants/interfaces";
import { DocumentNode } from "graphql";

export const buildQueryFactory = () => (
  introspectionResults: IntrospectionResult,
) => {
  const knownResources = introspectionResults.resources.map((r) => r.type.name);

  return (
    aorFetchType: string,
    resourceName: string,
    params: any,
    fragment: DocumentNode,
  ) => {
    const resource = introspectionResults.resources.find(
      (r) => r.type.name === resourceName,
    );

    if (!resource) {
      throw new Error(
        `Unknown resource ${resourceName}. Make sure it has been declared on your server side schema. Known resources are ${knownResources.join(
          ", ",
        )}`,
      );
    }

    const variables = buildVariables(introspectionResults)(
      resource,
      aorFetchType,
      params,
    )!;

    const query = buildGqlQuery(introspectionResults)(
      resource,
      aorFetchType,
      variables,
      fragment,
    );
    const parseResponse = getResponseParser(introspectionResults)(
      aorFetchType,
      resource,
    );

    return {
      query,
      variables,
      parseResponse,
    };
  };
};

export default buildQueryFactory();
