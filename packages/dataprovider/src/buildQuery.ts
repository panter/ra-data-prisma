import buildVariables from "./buildVariables";
import buildGqlQuery from "./buildGqlQuery";
import getResponseParser from "./getResponseParser";
import { IntrospectionResult } from "./constants/interfaces";
import { OurOptions, DoubleFragment } from "./types";
import { DocumentNode } from "graphql";
import { GET_LIST, GET_ONE, GET_MANY, GET_MANY_REFERENCE } from "react-admin";

const MANY_FETCH_TYPES = [GET_LIST, GET_MANY, GET_MANY_REFERENCE];

export const buildQueryFactory = (
  introspectionResults: IntrospectionResult,
  { resourceViews, ...otherOptions }: OurOptions,
) => {
  const knownResources = introspectionResults.resources.map((r) => r.type.name);

  return (aorFetchType: string, resourceName: string, params: any) => {
    const resourceView = resourceViews?.[resourceName];
    const isResourceView = Boolean(resourceView);
    const resourceNameToUse = isResourceView
      ? resourceView.resource
      : resourceName;
    const resource = introspectionResults.resources.find(
      (r) => r.type.name === resourceNameToUse,
    );

    if (!resource) {
      throw new Error(
        `Unknown resource ${resourceNameToUse}. Make sure it has been declared on your server side schema. Known resources are ${knownResources.join(
          ", ",
        )}. ${
          resourceViews
            ? `Known view resources are ${Object.keys(resourceViews).join(
                ", ",
              )}`
            : ""
        }`,
      );
    }

    let fragment: DocumentNode = undefined;
    if (resourceView) {
      // type union info is lost after compiling to JS
      // however, we can check for existence of "one" or "many" fields in the fragment which would indicate DoubleFragment type
      const maybeDoubleFragment = resourceView.fragment as any;
      if (maybeDoubleFragment.one && maybeDoubleFragment.many) {
        const fragmentObject = resourceView.fragment as DoubleFragment;
        if (MANY_FETCH_TYPES.indexOf(aorFetchType) !== -1) {
          fragment = fragmentObject.many;
        } else if (aorFetchType === GET_ONE) {
          fragment = fragmentObject.one;
        }
      } else if (!maybeDoubleFragment.one && !maybeDoubleFragment.many) {
        fragment = resourceView.fragment as DocumentNode;
      } else {
        throw new Error(
          `Error in resource view ${resourceName} - you either must specify both 'one' and 'many' fragments or use a single fragment for both.`,
        );
      }
    }

    const variables = buildVariables(introspectionResults, otherOptions)(
      resource,
      aorFetchType,
      params,
    )!;

    if (otherOptions.queryDialect === "typegraphql") {
      Object.keys(variables).forEach((key) => {
        variables[key] = variables[key] ?? undefined;
      });
    }
    const query = buildGqlQuery(introspectionResults, otherOptions)(
      resource,
      aorFetchType,
      variables,
      fragment,
    );
    const parseResponse = getResponseParser(introspectionResults, {
      shouldSanitizeLinkedResources: !isResourceView,
      queryDialect: otherOptions.queryDialect,
    })(aorFetchType, resource);

    return {
      query,
      variables,
      parseResponse,
    };
  };
};
