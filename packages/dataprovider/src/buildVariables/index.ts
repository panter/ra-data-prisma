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
import { Resource } from "../constants/interfaces";
import { FetchType } from "../types";
import { buildData, CreateParams } from "./buildData";
import { buildOrderBy } from "./buildOrderBy";
import { BuildVariablesContext } from "./types";

export interface GetListParams {
  filter: { [key: string]: any };
  pagination: { page: number; perPage: number };
  sort: { field: string; order: string };
}

const buildGetListVariables =
  (context: BuildVariablesContext) =>
  (aorFetchType: FetchType, params: GetListParams) => {
    const where = buildWhere(params.filter, context);

    return {
      skip: (params.pagination.page - 1) * params.pagination.perPage,
      take: params.pagination.perPage,
      orderBy: buildOrderBy(params?.sort, context),
      where,
    };
  };

const getId = (
  context: BuildVariablesContext,
  params: any,
): string | number => {
  let id: string | number = params.id ?? params.data?.id;

  const type = context.introspectionResults.types.find(
    (t) => t.name === `${context.resource.type.name}WhereUniqueInput`,
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
  (context: BuildVariablesContext) => (params: any) => {
    return {
      where: {
        id: getId(context, params),
      },
    };
  };

export interface UpdateParams {
  id: string;
  data: { [key: string]: any };
  previousData: { [key: string]: any };
}

const buildUpdateVariables =
  (context: BuildVariablesContext) =>
  (params: UpdateParams, parentResource?: Resource) => {
    const inputType = context.introspectionResults.types.find(
      (t) => t.name === `${context.resource.type.name}UpdateInput`,
    ) as IntrospectionInputObjectType;

    const id = getId(context, params); // TODO: do we still need params.data.id?
    delete params.data.id;
    delete params.previousData?.id;
    const data = buildData(inputType, params, context);

    return {
      where: {
        id,
      },
      data:
        context.options?.customizeInputData?.[
          context.resource.type.name
        ]?.update?.(data, params.data) ?? data,
    };
  };

const buildCreateVariables =
  (context: BuildVariablesContext) =>
  (params: CreateParams, parentResource?: Resource) => {
    const inputType = context.introspectionResults.types.find(
      (t) => t.name === `${context.resource.type.name}CreateInput`,
    ) as IntrospectionInputObjectType;

    const data = buildData(inputType, params, context);
    return {
      data:
        context.options?.customizeInputData?.[
          context.resource.type.name
        ]?.create?.(data, params.data) ?? data,
    };
  };

export const buildVariables =
  (context: BuildVariablesContext) =>
  (aorFetchType: FetchType, params: any) => {
    switch (aorFetchType) {
      case GET_LIST: {
        return buildGetListVariables(context)(aorFetchType, params);
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
        return buildGetListVariables(context)(GET_LIST, {
          ...params,
          filter: { [params.target]: params.id },
        });
      }
      case GET_ONE: {
        return buildGetOneVariables(context)(params);
      }
      case UPDATE: {
        return buildUpdateVariables(context)(params);
      }

      case CREATE: {
        return buildCreateVariables(context)(params);
      }

      case DELETE:
        return {
          where: { id: params.id },
        };
    }
  };
