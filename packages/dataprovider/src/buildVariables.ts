import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
} from "react-admin";
import isObject from "lodash/isObject";
import isEqual from "lodash/isEqual";
import isNil from "lodash/isNil";

import {
  IntrospectionInputObjectType,
  IntrospectionObjectType,
  IntrospectionType,
  IntrospectionNamedTypeRef,
  IntrospectionListTypeRef,
  IntrospectionNonNullTypeRef,
  IntrospectionInputTypeRef,
} from "graphql";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { field } from "./utils/gqlTypes";

interface GetListParams {
  filter: { [key: string]: any };
  pagination: { page: number; perPage: number };
  sort: { field: string; order: string };
}

//TODO: Object filter weren't tested yet

const getFilter = (
  fieldType: IntrospectionInputObjectType,
  value: any,
  introspectionResults: IntrospectionResult
) => {
  if (fieldType.name === "StringFilter") {
    return {
      contains: value,
    };
  }
  if (fieldType.kind == "INPUT_OBJECT") {
    // we asume for the moment that this is always a relation
    const inputObjectType = introspectionResults.types.find(
      (t) => t.name === fieldType.name
    ) as IntrospectionInputObjectType;
    //console.log({ inputObjectType });
    const hasSomeFilter = inputObjectType.inputFields.some(
      (s) => s.name === "some"
    );

    if (hasSomeFilter) {
      return {
        some: {
          id: {
            equals: value,
          },
        },
      };
    }
    return {
      id: {
        equals: value,
      },
    };
  }
  console.warn("no filter for ", fieldType);
  return null;
};
const buildGetListVariables = (introspectionResults: IntrospectionResult) => (
  resource: Resource,
  aorFetchType: string,
  params: GetListParams
) => {
  const whereType = introspectionResults.types.find(
    (t) => t.name === `${resource.type.name}WhereInput`
  ) as IntrospectionInputObjectType;
  const where = Object.keys(params.filter).reduce((acc, key) => {
    const value = params.filter[key];
    const fieldType = whereType.inputFields.find((f) => f.name === key)
      .type as IntrospectionInputObjectType;
    const filter = getFilter(fieldType, value, introspectionResults);
    //console.log({ key, value, filter, fieldType });
    return { ...acc, [key]: filter };
  }, {});

  return {
    skip: (params.pagination.page - 1) * params.pagination.perPage,
    first: params.pagination.perPage,
    orderBy: {
      [params.sort.field]: params.sort.order === "ASC" ? "asc" : "desc",
    },
    where,
  };
};

interface UpdateParams {
  id: string;
  data: { [key: string]: any };
  previousData: { [key: string]: any };
}

const buildNewInputValue = (
  fieldData: any,
  fieldType: IntrospectionInputTypeRef,
  introspectionResults: IntrospectionResult
) => {
  if (fieldType.kind === "SCALAR" || fieldType.kind === "ENUM") {
    return fieldData;
  }
  if (fieldType.kind === "INPUT_OBJECT") {
    const fieldObjectType = fieldType as IntrospectionInputObjectType;

    const fullFieldObjectType = introspectionResults.types.find(
      (t) => t.name === fieldObjectType.name
    ) as IntrospectionInputObjectType;

    // if it has a set modifier, it is an update array

    const setModifier = fullFieldObjectType?.inputFields.find(
      (i) => i.name === "set" && i.type.kind === "LIST"
    );
    if (setModifier) {
      // is it a relation?
      const setModifierType = setModifier.type as IntrospectionListTypeRef<
        IntrospectionNonNullTypeRef<any>
      >;

      const listType = setModifierType.ofType.ofType;
      const fullListType = introspectionResults.types.find(
        (t) => t.name === listType.name
      ) as IntrospectionInputObjectType;

      let set;
      if (fullListType.kind === "INPUT_OBJECT") {
        set = fieldData?.map((id) => ({
          id,
        }));
      } else {
        set = fieldData;
      }
      return { set };
    } else {
      // is it a relation, connect
      if (fieldData === null) {
        return {
          disconnect: true,
        };
      }

      return {
        connect: Array.isArray(fieldData)
          ? fieldData.map((id) => ({ id }))
          : {
              id: fieldData,
            },
      };
    }
  }
};

const buildData = (
  inputType: IntrospectionInputObjectType,
  params: UpdateParams | CreateParams,
  introspectionResults: IntrospectionResult
) => {
  return inputType.inputFields.reduce((acc, field) => {
    const key = field.name;
    const fieldType =
      field.type.kind === "NON_NULL" ? field.type.ofType : field.type;
    const fieldData = params.data[key];
    //console.log(key, fieldData, fieldType);
    const previousFieldData = (params as UpdateParams)?.previousData?.[key];
    if (
      isEqual(fieldData, previousFieldData) ||
      (isNil(previousFieldData) && isNil(fieldData))
    ) {
      return acc;
    }

    const newVaue = buildNewInputValue(
      params.data[key],
      fieldType,
      introspectionResults
    );

    return {
      ...acc,
      [key]: newVaue,
    };
  }, {});
};
const buildUpdateVariables = (introspectionResults: IntrospectionResult) => (
  resource: Resource,
  params: UpdateParams
) => {
  const inputType = introspectionResults.types.find(
    (t) => t.name === `${resource.type.name}UpdateInput`
  ) as IntrospectionInputObjectType;

  return {
    where: {
      id: params.data.id,
    },
    data: buildData(inputType, params, introspectionResults),
  };
};

interface CreateParams {
  data: { [key: string]: any };
}
const buildCreateVariables = (introspectionResults: IntrospectionResult) => (
  resource: Resource,
  params: CreateParams
) => {
  const inputType = introspectionResults.types.find(
    (t) => t.name === `${resource.type.name}CreateInput`
  ) as IntrospectionInputObjectType;

  const variables = {
    data: buildData(inputType, params, introspectionResults),
  };
  return variables;
};

export default (introspectionResults: IntrospectionResult) => (
  resource: Resource,
  aorFetchType: string,
  params: any
) => {
  switch (aorFetchType) {
    case GET_LIST: {
      return buildGetListVariables(introspectionResults)(
        resource,
        aorFetchType,
        params
      );
    }
    case GET_MANY:
      return {
        where: {
          id: { in: params.ids.map((obj) => (isObject(obj) ? obj.id : obj)) },
        },
      };
    case GET_MANY_REFERENCE: {
      return {
        where: {
          id: {
            in: params.id,
          },
        },
      };
    }
    case GET_ONE:
      return {
        where: { id: params.id },
      };
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
