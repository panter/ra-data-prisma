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
import { buildWhere } from "./buildWhere";
import { IntrospectionResult, Resource } from "../constants/interfaces";
import { FetchType, OurOptions } from "../types";
import { buildData, CreateParams } from "./buildData";
import { buildOrderBy } from "./buildOrderBy";

export interface GetListParams {
  filter: { [key: string]: any };
  pagination: { page: number; perPage: number };
  sort: { field: string; order: string };
}

const buildGetListVariables =
  (introspectionResults: IntrospectionResult, options: OurOptions) =>
  (resource: Resource, aorFetchType: FetchType, params: GetListParams) => {
    const where = buildWhere(
      params.filter,
      resource,
      introspectionResults,
      options,
    );

    return {
      skip: (params.pagination.page - 1) * params.pagination.perPage,
      take: params.pagination.perPage,
      orderBy: buildOrderBy(introspectionResults, resource, params?.sort),
      where,
    };
  };

const getId = (
  introspectionResults: IntrospectionResult,
  resource: Resource,
  params: any,
): string | number => {
  let id: string | number = params.id ?? params.data?.id;

  const type = introspectionResults.types.find(
    (t) => t.name === `${resource.type.name}WhereUniqueInput`,
  );

  if (!type || type.kind !== "INPUT_OBJECT") return id;

  const idType = type.inputFields.find((f) => f.name === "id");

  if (!idType || idType.type.kind !== "SCALAR") return id;

  if (idType.type.name === "String") {
    id = String(id);
  }
  if (idType.type.name === "Int") {
    id = parseInt(String(id));
  }

  // should usually not happen
  return id;
};

const buildGetOneVariables =
  (introspectionResults: IntrospectionResult, options: OurOptions) =>
  (
    resource: Resource,

    params: any,
  ) => {
    return {
      where: {
        id: getId(introspectionResults, resource, params),
      },
    };
  };

export interface UpdateParams {
  id: string;
  data: { [key: string]: any };
  previousData: { [key: string]: any };
}

const buildUpdateVariables =
  (introspectionResults: IntrospectionResult, options: OurOptions) =>
  (resource: Resource, params: UpdateParams, parentResource?: Resource) => {
    const inputType = introspectionResults.types.find(
      (t) => t.name === `${resource.type.name}UpdateInput`,
    ) as IntrospectionInputObjectType;

    const id = getId(introspectionResults, resource, params); // TODO: do we still need params.data.id?
    delete params.data.id;
    delete params.previousData?.id;
    let data = buildData(inputType, params, introspectionResults);

    return {
      where: {
        id,
      },
      data:
        options?.customizeInputData?.[resource.type.name]?.update?.(
          data,
          params.data,
        ) ?? data,
    };
  };

const buildCreateVariables =
  (introspectionResults: IntrospectionResult, options: OurOptions) =>
  (resource: Resource, params: CreateParams, parentResource?: Resource) => {
    const inputType = introspectionResults.types.find(
      (t) => t.name === `${resource.type.name}CreateInput`,
    ) as IntrospectionInputObjectType;

    const data = buildData(inputType, params, introspectionResults);
    return {
      data:
        options?.customizeInputData?.[resource.type.name]?.create?.(
          data,
          params.data,
        ) ?? data,
    };
  };

export const buildVariables =
  (introspectionResults: IntrospectionResult, options: OurOptions) =>
  (resource: Resource, aorFetchType: FetchType, params: any) => {
    switch (aorFetchType) {
      case GET_LIST: {
        return buildGetListVariables(introspectionResults, options)(
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
        return buildGetListVariables(introspectionResults, options)(
          resource,
          GET_LIST,
          {
            ...params,
            filter: { [params.target]: params.id },
          },
        );
      }
      case GET_ONE: {
        return buildGetOneVariables(introspectionResults, options)(
          resource,
          params,
        );
      }
      case UPDATE: {
        return buildUpdateVariables(introspectionResults, options)(
          resource,
          params,
        );
      }

      case CREATE: {
        return buildCreateVariables(introspectionResults, options)(
          resource,
          params,
        );
      }

      case DELETE:
        return {
          where: { id: params.id },
        };
    }
  };
