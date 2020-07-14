import { IntrospectionInputObjectType } from "graphql";
import upperFirst from "lodash/upperFirst";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { isObject, isArray } from "lodash";

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
const getIntFilter = (key: string, value: any) => ({
  [key]: {
    equals: parseInt(value, 10),
  },
});
const getFilters = (
  key: string,
  value: any,
  whereType: IntrospectionInputObjectType,

  introspectionResults: IntrospectionResult,
) => {
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
          .filter(
            (i) =>
              i.type.kind === "INPUT_OBJECT" &&
              (i.type.name === "StringFilter" ||
                i.type.name === "NullableStringFilter"),
          )
          .map((f) => getStringFilter(f.name, part.trim())),
      }));

      return { AND };
    } else {
      return {};
    }
  }
  const isStringFilter =
    fieldType.name === "StringFilter" ||
    fieldType.name === "NullableStringFilter";
  if (!isObject(value) && isStringFilter) {
    return getStringFilter(key, value);
  }
  if (isArray(value) && isStringFilter) {
    return { OR: value.map((v) => getStringFilter(key, v)) };
  }
  const isIntFilter =
    fieldType.name === "IntFilter" || fieldType.name === "NullableIntFilter";
  if (!isObject(value) && isIntFilter) {
    return getIntFilter(key, value);
  }
  if (isArray(value) && isIntFilter) {
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
  const where = Object.keys(filter ?? {}).reduce(
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
  );
  // simplify AND if there is only one
  if (where.AND.length === 0) {
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
