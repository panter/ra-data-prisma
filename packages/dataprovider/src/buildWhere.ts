import {
  IntrospectionInputObjectType,
  IntrospectionInputTypeRef,
} from "graphql";
import upperFirst from "lodash/upperFirst";
import isObject from "lodash/isObject";
import isArray from "lodash/isArray";
import isEmpty from "lodash/isEmpty";
import { IntrospectionResult, Resource } from "./constants/interfaces";

const getStringFilter = (key: string, value: any) => {
  const OR = [
    {
      [key]: {
        contains: value,
      },
    },
  ];
  const valueLowerCased = value.toLowerCase();
  if (valueLowerCased !== value) {
    OR.push({
      [key]: {
        contains: valueLowerCased,
      },
    });
  }
  const valueUpperFirst = upperFirst(value);

  if (valueUpperFirst !== value) {
    OR.push({
      [key]: {
        contains: valueUpperFirst,
      },
    });
  }
  return { OR };
};
const getIntFilter = (key: string, value: any) => {
  const asNumber = parseInt(value, 10);
  if (isNaN(asNumber)) {
    return {};
  }
  return {
    [key]: {
      equals: asNumber,
    },
  };
};

const getBooleanFilter = (key: string, value: any) => {
  return {
    [key]: {
      equals: Boolean(value),
    },
  };
};

const getDateTimeFilter = (key: string, value: any, comparator?: string) => {
  if (comparator) {
    return {
      [key]: {
        [comparator]: new Date(value),
      },
    };
  }
  return {
    [key]: {
      equals: new Date(value),
    },
  };
};

const isDateTimeFilter = (type: IntrospectionInputTypeRef) => 
  type.kind === "INPUT_OBJECT" &&
  (type.name === "DateTimeFilter" || type.name === "DateTimeNullableFilter");

const isBooleanFilter = (type: IntrospectionInputTypeRef) =>
  type.kind === "INPUT_OBJECT" && type.name === "BoolFilter";

const isStringFilter = (type: IntrospectionInputTypeRef) =>
  type.kind === "INPUT_OBJECT" &&
  (type.name === "StringFilter" || type.name === "StringNullableFilter");

const isIntFilter = (type: IntrospectionInputTypeRef) =>
  type.kind === "INPUT_OBJECT" &&
  (type.name === "IntFilter" || type.name === "IntNullableFilter");

const getFilters = (
  _key: string,
  value: any,
  whereType: IntrospectionInputObjectType,

  introspectionResults: IntrospectionResult,
) => {
  // for parsing DateTime fields with comparators
  // the original key should be captured in second match unchanged so it shouldn't break anything else
  const keyRegex = /^([A-Za-z]+)(_(gt|gte|lt|lte))?$/;
  const matches = _key.match(keyRegex);
  const key = matches[1];
  const comparator = matches[3]; // will be undefined if not matched, or should contain gt|gte|lt|lte

  if (key === "NOT" || key === "OR" || key === "AND") {
    return {
      [key]: value.map((f) =>
        buildWhereWithType(f, introspectionResults, whereType),
      ),
    };
  }

  const fieldType = whereType.inputFields.find((f) => f.name === key)
    ?.type as IntrospectionInputObjectType;

  if (!fieldType) {
    if (key === "q") {
      // special: q is universal text search
      // we search all text fields
      // additionaly we split by  space to make a AND connection
      const AND = value.split(" ").map((part: string) => ({
        OR: whereType.inputFields
          .map((f) =>
            f.name !== "id" && isStringFilter(f.type)
              ? getStringFilter(f.name, part.trim())
              : f.name !== "id" && isIntFilter(f.type)
              ? getIntFilter(f.name, part.trim())
              : null,
          )
          .filter((f) => !isEmpty(f)),
      }));

      return { AND };
    } else {
      return {};
    }
  }
  if (!isObject(value) && isBooleanFilter(fieldType)) {
    return getBooleanFilter(key, value);
  }

  if (!isObject(value) && isStringFilter(fieldType)) {
    return getStringFilter(key, value);
  }

  if (!isObject(value) && isDateTimeFilter(fieldType)) {
    return getDateTimeFilter(key, value, comparator);
  }

  if (isArray(value) && isStringFilter(fieldType)) {
    return { OR: value.map((v) => getStringFilter(key, v)) };
  }

  if (!isObject(value) && isIntFilter(fieldType)) {
    return getIntFilter(key, value);
  }
  if (isArray(value) && isIntFilter(fieldType)) {
    return { OR: value.map((v) => getIntFilter(key, v)) };
  }

  if (fieldType.kind === "INPUT_OBJECT") {
    // we asume for the moment that this is always a relation
    const inputObjectType = introspectionResults.types.find(
      (t) => t.name === fieldType.name,
    ) as IntrospectionInputObjectType;

    if (!isObject(value)) {
      //console.log({ inputObjectType });
      const hasSomeFilter = inputObjectType.inputFields.some(
        (s) => s.name === "some",
      );

      if (hasSomeFilter) {
        return {
          [key]: {
            some: {
              id: {
                equals: value,
              },
            },
          },
        };
      }
      return {
        [key]: {
          id: {
            equals: value,
          },
        },
      };
    }
    if (isArray(value)) {
      const hasSomeFilter = inputObjectType.inputFields.some(
        (s) => s.name === "some",
      );
      if (hasSomeFilter) {
        return {
          [key]: {
            some: {
              id: {
                in: value,
              },
            },
          },
        };
      }
      return {
        [key]: {
          id: {
            in: value,
          },
        },
      };
    } else {
      // its something nested

      const where = buildWhereWithType(
        value,
        introspectionResults,
        inputObjectType,
      );
      return { [key]: where };
    }
  }
  return { [key]: value };
};

type Filter = {
  NOT?: Filter;
  OR?: Filter[];
  AND?: Filter[];
} & {
  [key: string]: any;
};

const buildWhereWithType = (
  filter: Filter,
  introspectionResults: IntrospectionResult,
  whereType: IntrospectionInputObjectType,
) => {
  const hasAnd = whereType.inputFields.some((i) => i.name === "AND");
  const where = hasAnd
    ? Object.keys(filter ?? {}).reduce(
        (acc, key) => {
          // defaults to AND
          const filters = getFilters(
            key,
            filter[key],
            whereType,

            introspectionResults,
          );

          return { ...acc, AND: [...acc.AND, filters] };
        },
        { AND: [] },
      )
    : Object.keys(filter ?? {}).reduce((acc, key) => {
        const filters = getFilters(
          key,
          filter[key],
          whereType,

          introspectionResults,
        );

        return { ...acc, ...filters };
      }, {});
  // simplify AND if there is only one
  if (where.AND?.length === 0) {
    delete where.AND;
  }
  if (where.AND?.length === 1) {
    const singleAnd = where.AND[0];
    delete where.AND;
    return {
      ...where,
      ...singleAnd,
    };
  }
  return where;
};
export const buildWhere = (
  filter: Filter,
  resource: Resource,
  introspectionResults: IntrospectionResult,
) => {
  const whereType = introspectionResults.types.find(
    (t) => t.name === `${resource.type.name}WhereInput`,
  ) as IntrospectionInputObjectType;

  return buildWhereWithType(filter, introspectionResults, whereType);
};
