import {
  IntrospectionInputObjectType,
  IntrospectionInputTypeRef,
} from "graphql";
import upperFirst from "lodash/upperFirst";
import isObject from "lodash/isObject";
import isArray from "lodash/isArray";
import isEmpty from "lodash/isEmpty";
import {
  CheckComparisonQueryResult,
  IntrospectionResult,
  Resource,
} from "./constants/interfaces";

const getStringFilter = (
  key: string,
  value: any,
  hasCaseInsensitive: boolean = false,
  comparator: string = "contains",
) => {
  // hasCaseInsensitive is determined from the introspection results
  // no QueryMode => fall back to original implementation
  if (hasCaseInsensitive) {
    return {
      [key]: {
        [comparator]: value,
        mode: "insensitive",
      },
    };
  }

  const OR = [
    {
      [key]: {
        [comparator]: value,
      },
    },
  ];
  const valueLowerCased = value.toLowerCase();
  if (valueLowerCased !== value) {
    OR.push({
      [key]: {
        [comparator]: valueLowerCased,
      },
    });
  }
  const valueUpperFirst = upperFirst(value);

  if (valueUpperFirst !== value) {
    OR.push({
      [key]: {
        [comparator]: valueUpperFirst,
      },
    });
  }
  return { OR };
};

const getIntFilter = (
  key: string,
  value: any,
  comparator: string = "equals",
) => {
  const asNumber = parseInt(value, 10);
  if (isNaN(asNumber)) {
    return {};
  }
  return {
    [key]: {
      [comparator]: asNumber,
    },
  };
};

const getFloatFilter = (
  key: string,
  value: any,
  comparator: string = "equals",
) => {
  const asFloat = parseFloat(value);
  if (isNaN(asFloat)) {
    return {};
  }
  return {
    [key]: {
      [comparator]: asFloat,
    },
  };
};

const getEnumFilter = (
  key: string,
  value: any,
  comparator: string = "equals",
) => ({
  [key]: {
    [comparator]: value,
  },
});

const getBooleanFilter = (key: string, value: any) => {
  return {
    [key]: {
      equals: Boolean(value),
    },
  };
};

const getDateTimeFilter = (
  key: string,
  value: any,
  comparator: string = "equals",
) => {
  return {
    [key]: {
      [comparator]: new Date(value),
    },
  };
};

// all these variants have the same fields, and are just used in different places, hence different names
const isDateTimeFilter = (type: IntrospectionInputTypeRef) =>
  type.kind === "INPUT_OBJECT" &&
  [
    "DateTimeFilter",
    "DateTimeNullableFilter",
    "NestedDateTimeFilter",
    "NestedDateTimeNullableFilter",
  ].indexOf(type.name) !== -1;

const isBooleanFilter = (type: IntrospectionInputTypeRef) =>
  type.kind === "INPUT_OBJECT" &&
  [
    "BoolFilter",
    "BoolNullableFilter",
    "NestedBoolFilter",
    "NestedBoolNullableFilter",
  ].indexOf(type.name) !== -1;

// StringFilters are a bit special - Nested variants don't have the case insensitive property `mode` on them (otherwise same)
// in case of older Prisma, they're all the same
const isStringFilter = (type: IntrospectionInputTypeRef) =>
  type.kind === "INPUT_OBJECT" &&
  ["StringFilter", "StringNullableFilter"].indexOf(type.name) !== -1;

const isNestedStringFilter = (type: IntrospectionInputTypeRef) =>
  type.kind === "INPUT_OBJECT" &&
  ["NestedStringFilter", "NestedStringNullableFilter"].indexOf(type.name) !==
    -1;

const isIntFilter = (type: IntrospectionInputTypeRef) =>
  type.kind === "INPUT_OBJECT" &&
  [
    "IntFilter",
    "IntNullableFilter",
    "NestedIntFilter",
    "NestedIntNullableFilter",
  ].indexOf(type.name) !== -1;

const isFloatFilter = (type: IntrospectionInputTypeRef) =>
  type.kind === "INPUT_OBJECT" &&
  [
    "FloatFilter",
    "FloatNullableFilter",
    "NestedFloatFilter",
    "NestedFloatNullableFilter",
  ].indexOf(type.name) !== -1;

const isEnumFilter = (type: IntrospectionInputTypeRef) =>
  type.kind === "INPUT_OBJECT" && type.name.startsWith("Enum");

const supportsCaseInsensitive = (
  introspectionResults: IntrospectionResult,
): boolean => {
  // Prisma 2.8.0 added QueryMode enum (present in StringFilter and StringNullableFilter input objects as property `mode`)
  const queryModeExists = introspectionResults.types.find(
    (type) => type.kind === "ENUM" && type.name === "QueryMode",
  );
  const stringFilterType = introspectionResults.types.find(
    (type) => type.kind === "INPUT_OBJECT" && type.name === "StringFilter",
  ) as IntrospectionInputObjectType;
  const usesQueryMode = stringFilterType?.inputFields.find(
    (field) =>
      field.name === "mode" &&
      field.type.kind === "ENUM" &&
      field.type.name === "QueryMode",
  );
  return !!queryModeExists && !!usesQueryMode;
};

const processKey = (originalKey: string) => {
  // for parsing fields with comparators
  // the original key should be captured in second match unchanged so it shouldn't break anything else
  // equals, contains, startsWith, endsWith are specifically for strings
  // default "comparison" (without specified comparator) is equals, for strings it's contains (so to override this, provide _equals on string fields)
  const keyRegex =
    /^(.+?)(_(gt|gte|lt|lte|equals|contains|startsWith|endsWith))?$/;
  const matches = originalKey.match(keyRegex);
  const key = matches[1];
  const comparator = matches[3];

  return {
    originalKey,
    key,
    comparator,
  };
};

const processComparisonQuery = (
  field: string,
  value: any,
  comparison: string,
  whereType: IntrospectionInputObjectType,
  introspectionResults: IntrospectionResult,
): CheckComparisonQueryResult => {
  if (!comparison) {
    return { comparisonPossible: false };
  }

  const comparisonFieldType = whereType.inputFields.find(
    (f) => f.name === field,
  )?.type as IntrospectionInputObjectType;

  if (comparisonFieldType) {
    // separated field exists on the whereType
    const filterName = comparisonFieldType.name;
    const filter = introspectionResults.types.find(
      (f) => f.name === filterName,
    ) as IntrospectionInputObjectType;
    const comparatorField = filter.inputFields.find(
      (f) => f.name === comparison,
    );
    if (comparatorField) {
      // and has the comparison field
      if (!isObject(value) && !isArray(value)) {
        // all comparison fields (equals, lt, lte, gt, gte, contains, startsWith, endsWith) use a Scalar value so it can't be object or array
        return { comparisonPossible: true, comparisonFieldType: filter };
      }
    }
  }
  return { comparisonPossible: false };
};

const getFilters = (
  _key: string,
  value: any,
  whereType: IntrospectionInputObjectType,

  introspectionResults: IntrospectionResult,
) => {
  const hasCaseInsensitive = supportsCaseInsensitive(introspectionResults);
  const { originalKey, key, comparator } = processKey(_key);
  if (key === "NOT" || key === "OR" || key === "AND") {
    return {
      [key]:
        value === null
          ? null
          : value.map((f) =>
              buildWhereWithType(f, introspectionResults, whereType),
            ),
    };
  }

  // check introspection, if we can use comparison on the field before suffixes (and if possible, return the type of that field)
  const { comparisonPossible, comparisonFieldType } = processComparisonQuery(
    key,
    value,
    comparator,
    whereType,
    introspectionResults,
  );
  if (comparisonPossible) {
    if (isBooleanFilter(comparisonFieldType)) {
      // the only way we could get here is with "boolField_equals" (which is the same as "boolField")
      // but skipping here would lead to trying to find field "boolField_equals" which might not exist
      return getBooleanFilter(key, value);
    }

    if (isStringFilter(comparisonFieldType)) {
      return getStringFilter(key, value, hasCaseInsensitive, comparator);
    }
    // Nested variants don't have `mode` property
    // pass `hasCaseInsensitive=false` to bypass the check and use the original implementation
    if (isNestedStringFilter(comparisonFieldType)) {
      return getStringFilter(key, value, false, comparator);
    }

    if (isDateTimeFilter(comparisonFieldType)) {
      return getDateTimeFilter(key, value, comparator);
    }

    if (isIntFilter(comparisonFieldType)) {
      return getIntFilter(key, value, comparator);
    }

    if (isFloatFilter(comparisonFieldType)) {
      return getFloatFilter(key, value, comparator);
    }

    if (isEnumFilter(comparisonFieldType)) {
      return getEnumFilter(key, value, comparator);
    }
  }

  // we can't use comparison on the splitted field, try to use the original key in a default way (without comparator)

  const fieldType = whereType.inputFields.find((f) => f.name === originalKey)
    ?.type as IntrospectionInputObjectType;

  if (!fieldType) {
    if (originalKey === "q") {
      // special: q is universal text search
      // we search all text fields
      // additionaly we split by  space to make a AND connection
      const AND = value.split(" ").map((part: string) => ({
        OR: whereType.inputFields
          .map((f) => {
            if (f.name !== "id") {
              if (isStringFilter(f.type)) {
                return getStringFilter(f.name, part.trim(), hasCaseInsensitive);
              }
              if (isNestedStringFilter(f.type)) {
                return getStringFilter(f.name, part.trim(), false);
              }
              if (isIntFilter(f.type)) {
                const numberValue = parseInt(part.trim());
                const valueIsInt32 =
                  -(2 ** 31) <= numberValue && numberValue <= 2 ** 31 - 1;
                return valueIsInt32 ? getIntFilter(f.name, part.trim()) : null;
              }
            }
            return null;
          })
          .filter((f) => !isEmpty(f)),
      }));

      return { AND };
    } else {
      return {};
    }
  }

  if (!isObject(value) && !isArray(value)) {
    if (isBooleanFilter(fieldType)) {
      return getBooleanFilter(originalKey, value);
    }

    if (isStringFilter(fieldType)) {
      return getStringFilter(originalKey, value, hasCaseInsensitive);
    }

    if (isNestedStringFilter(fieldType)) {
      return getStringFilter(originalKey, value, false);
    }

    if (isDateTimeFilter(fieldType)) {
      return getDateTimeFilter(originalKey, value);
    }

    if (isIntFilter(fieldType)) {
      return getIntFilter(originalKey, value);
    }

    if (isFloatFilter(fieldType)) {
      return getFloatFilter(originalKey, value);
    }

    if (isEnumFilter(fieldType)) {
      return getEnumFilter(originalKey, value);
    }
  }

  if (isArray(value)) {
    if (isStringFilter(fieldType)) {
      return {
        OR: value.map((v) =>
          getStringFilter(originalKey, v, hasCaseInsensitive),
        ),
      };
    }

    if (isNestedStringFilter(fieldType)) {
      return {
        OR: value.map((v) => getStringFilter(originalKey, v, false)),
      };
    }

    if (isIntFilter(fieldType)) {
      return { OR: value.map((v) => getIntFilter(originalKey, v)) };
    }

    if (isDateTimeFilter(fieldType)) {
      return { OR: value.map((v) => getDateTimeFilter(originalKey, v)) };
    }

    if (isFloatFilter(fieldType)) {
      return { OR: value.map((v) => getFloatFilter(originalKey, v)) };
    }

    if (isEnumFilter(fieldType)) {
      return { OR: value.map((v) => getEnumFilter(originalKey, v)) };
    }
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
          [originalKey]: {
            some: {
              id: {
                equals: value,
              },
            },
          },
        };
      }
      return {
        [originalKey]: {
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
          [originalKey]: {
            some: {
              id: {
                in: value,
              },
            },
          },
        };
      }
      return {
        [originalKey]: {
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
      return { [originalKey]: where };
    }
  }
  return { [originalKey]: value };
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
