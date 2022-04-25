import { GET_LIST, GET_MANY, GET_MANY_REFERENCE } from "react-admin";
import buildGqlQuery from "./buildGqlQuery";
import { buildVariables } from "./buildVariables";
import { IntrospectionResult } from "./constants/interfaces";
import getResponseParser from "./getResponseParser";
import {
  FetchType,
  isOneAndManyFragment,
  OurOptions,
  ResourceFragment,
} from "./types";

const MANY_FETCH_TYPES = [GET_LIST, GET_MANY, GET_MANY_REFERENCE];

export const buildQueryFactory = (
  introspectionResults: IntrospectionResult,
  options: OurOptions,
) => {
  const { resourceViews } = options;
  const knownResources = introspectionResults.resources.map((r) => r.type.name);

  return (aorFetchType: FetchType, resourceName: string, params: any) => {
    const resourceView = resourceViews?.[resourceName];

    const resourceNameToUse = resourceView
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

    let resourceViewFragment: ResourceFragment = undefined;
    if (resourceView) {
      if (isOneAndManyFragment(resourceView.fragment)) {
        // has one or many or both
        // if only one is defined, fall back to no fragment for the other
        if (MANY_FETCH_TYPES.includes(aorFetchType)) {
          if (resourceView.fragment.many) {
            resourceViewFragment = resourceView.fragment.many;
          }
        } else {
          if (resourceView.fragment.one) {
            resourceViewFragment = resourceView.fragment.one;
          }
        }
      } else {
        resourceViewFragment = resourceView.fragment;
      }
    }

    const variables = buildVariables(introspectionResults, options)(
      resource,
      aorFetchType,
      params,
    )!;

    if (options.queryDialect === "typegraphql") {
      Object.keys(variables).forEach((key) => {
        variables[key] = variables[key] ?? undefined;
      });
    }
    const query = buildGqlQuery(introspectionResults, options)(
      resource,
      aorFetchType,
      variables,
      resourceViewFragment,
    );
    const parseResponse = getResponseParser(introspectionResults, {
      queryDialect: options.queryDialect,
    })(aorFetchType, resource);

    return {
      query,
      variables,
      parseResponse,
    };
  };
};
