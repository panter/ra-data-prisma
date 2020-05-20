import { IntrospectionInputObjectType } from "graphql";
import upperFirst from "lodash/upperFirst";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { isObject } from "lodash";

const getStringFilter = (key: string, value: any) => ({
  OR: [
    {
      [key]: {
        contains: value,
      },
    },
    {
      [key]: {
        contains: value.toLowerCase(),
      },
    },
    {
      [key]: {
        contains: upperFirst(value),
      },
    },
  ],
});
const getFilters = (
  key: string,
  value: any,
  whereType: IntrospectionInputObjectType,

  introspectionResults: IntrospectionResult,
) => {
  const fieldType = whereType.inputFields.find((f) => f.name === key)
    ?.type as IntrospectionInputObjectType;

  if (!fieldType) {
    if (key === "q") {
      // special: q is universal text search
      const OR = whereType.inputFields
        .filter(
          (i) =>
            i.type.kind === "INPUT_OBJECT" &&
            (i.type.name === "StringFilter" ||
              i.type.name === "NullableStringFilter"),
        )
        .map((f) => getStringFilter(f.name, value));

      return { OR };
    } else {
      return {};
    }
  }
  if (
    !isObject(value) &&
    (fieldType.name === "StringFilter" ||
      fieldType.name === "NullableStringFilter")
  ) {
    return getStringFilter(key, value);
  }
  if (
    !isObject(value) &&
    (fieldType.name === "IntFilter" || fieldType.name === "NullableIntFilter")
  ) {
    return {
      [key]: {
        equals: parseInt(value, 10),
      },
    };
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
  const where = Object.keys(filter ?? {}).reduce((acc, key) => {
    if (key === "NOT" || key === "OR" || key === "AND") {
      return {
        ...acc,
        [key]: filter[key].map((f) =>
          buildWhereWithType(f, introspectionResults, whereType),
        ),
      };
    }

    const filters = getFilters(
      key,
      filter[key],
      whereType,

      introspectionResults,
    );

    return { ...acc, ...filters };
  }, {});
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
