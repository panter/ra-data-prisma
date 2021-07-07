import { IntrospectionInputObjectType } from "graphql";
import isNil from "lodash/isNil";
import isObject from "lodash/isObject";

import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
} from "react-admin";
import { buildWhere } from "../buildWhere";
import { IntrospectionResult, Resource } from "../constants/interfaces";
import { buildData, CreateParams } from "./buildData";
import { buildOrderBy } from "./buildOrderBy";

export interface GetListParams {
  filter: { [key: string]: any };
  pagination: { page: number; perPage: number };
  sort: { field: string; order: string };
}

const buildGetListVariables =
  (introspectionResults: IntrospectionResult) =>
  (resource: Resource, aorFetchType: string, params: GetListParams) => {
    const where = buildWhere(params.filter, resource, introspectionResults);

    return {
      skip: (params.pagination.page - 1) * params.pagination.perPage,
      take: params.pagination.perPage,
      orderBy: buildOrderBy(introspectionResults, resource, params?.sort),
      where,
    };
  };

const buildGetOneVariables =
  (introspectionResults: IntrospectionResult) =>
  (
    resource: Resource,

    params: any,
  ) => {
    const type = introspectionResults.types.find(
      (t) => t.name === `${resource.type.name}WhereUniqueInput`,
    ) as IntrospectionInputObjectType;

    const idType = type?.inputFields.find((f) => f.name === "id");
    if (idType.type.kind === "SCALAR" && idType.type.name === "String") {
      return {
        where: {
          id: String(params.id),
        },
      };
    }
    if (idType.type.kind === "SCALAR" && idType.type.name === "Int") {
      return {
        where: {
          id: parseInt(params.id),
        },
      };
    }
    // should usually not happen
    return {
      where: {
        id: params.id,
      },
    };
  };

export interface UpdateParams {
  id: string;
  data: { [key: string]: any };
  previousData: { [key: string]: any };
}

const buildUpdateVariables =
  (introspectionResults: IntrospectionResult) =>
  (resource: Resource, params: UpdateParams, parentResource?: Resource) => {
    const inputType = introspectionResults.types.find(
      (t) => t.name === `${resource.type.name}UpdateInput`,
    ) as IntrospectionInputObjectType;

    const id = params.id ?? params.data.id; // TODO: do we still need params.data.id?
    delete params.data.id;
    delete params.previousData?.id;

    return {
      where: {
        id,
      },
      data: buildData(inputType, params, introspectionResults),
    };
  };

const buildCreateVariables =
  (introspectionResults: IntrospectionResult) =>
  (resource: Resource, params: CreateParams, parentResource?: Resource) => {
    const inputType = introspectionResults.types.find(
      (t) => t.name === `${resource.type.name}CreateInput`,
    ) as IntrospectionInputObjectType;

    const variables = {
      data: buildData(inputType, params, introspectionResults),
    };
    return variables;
  };

export const buildVariables =
  (introspectionResults: IntrospectionResult) =>
  (resource: Resource, aorFetchType: string, params: any) => {
    switch (aorFetchType) {
      case GET_LIST: {
        return buildGetListVariables(introspectionResults)(
          resource,
          aorFetchType,
          params,
        );
      }
      case GET_MANY:
        return {
          where: {
            id: {
              in: params.ids
                .map((obj) => (isObject(obj) ? (obj as any).id : obj))
                .filter((v) => !isNil(v)),
            },
          },
        };
      case GET_MANY_REFERENCE: {
        return buildGetListVariables(introspectionResults)(resource, GET_LIST, {
          ...params,
          filter: { [params.target]: params.id },
        });
      }
      case GET_ONE: {
        return buildGetOneVariables(introspectionResults)(resource, params);
      }
      case UPDATE: {
        return buildUpdateVariables(introspectionResults)(resource, params);
      }

      case CREATE: {
        return buildCreateVariables(introspectionResults)(resource, params);
      }

      case DELETE:
        return {
          where: { id: params.id },
        };
    }
  };
