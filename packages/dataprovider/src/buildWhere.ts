import {
  IntrospectionInputObjectType,
  IntrospectionInputTypeRef,
} from "graphql";
import upperFirst from "lodash/upperFirst";
import isObject from "lodash/isObject";
import isArray from "lodash/isArray";
import isEmpty from "lodash/isEmpty";
import { IntrospectionResult, Resource } from "./constants/interfaces";

const getStringFilter = (
  key: string,
  value: any,
  comparator: string = "contains",
) => {
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
  // TODO: test
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

// all these variants have the same fields, and are just used in different places, hence different name
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

const isStringFilter = (type: IntrospectionInputTypeRef) =>
  type.kind === "INPUT_OBJECT" &&
  [
    "StringFilter",
    "StringNullableFilter",
    "NestedStringFilter",
    "NestedStringNullableFilter",
  ].indexOf(type.name) !== -1;

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

const getFilters = (
  originalKey: string,
  value: any,
  whereType: IntrospectionInputObjectType,

  introspectionResults: IntrospectionResult,
) => {
  // for parsing DateTime fields with comparators
  // the original key should be captured in second match unchanged so it shouldn't break anything else
  const keyRegex = /^(.+?)(_(gt|gte|lt|lte|equals|startsWith|endsWith))?$/;
  // equals, startsWith, endsWith are specifically for strings
  // default "comparison" (without specified comparator) is equals, for strings it's contains (so to override this, provide _equals on string fields)
  const matches = originalKey.match(keyRegex);
  const key = matches[1];
  const comparator = matches[3]; // will be undefined if not matched, or should contain gt|gte|lt|lte|equals|startsWith|endsWith
  console.log("-------");
  console.log(
    `old key: ${originalKey}, new key: ${key}, comparator: ${comparator}`,
  );
  /* so we have the old key and new key
        we need to figure out, if our key: value pair is actually date filter or just normal filter on a weirdly named field
        right now, the workflow is this:

        TEST CASE: 
            - filtering in Companies (whereType = kind INPUT_OBJECT, name CompanyWhereInput)
            - _key = effectiveFrom_gt
            - => key = effectiveFrom

        1) check if key is NOT|OR|AND, then it's processed separately
        2) in whereType.inputFields, try to find a field that has the same key (and get its type if it exists)
            - it finds the type = {kind INPUT_OBJECT, name DateTimeNullableFilter}
        3) if the type doesn't exists with given key, it's basically filtering by a field that doesn't exist 
            - then it checks if the key is "q", a special search and if not, returns {}
        4) if the field exists, it runs through checks for boolean|string|int|datetime filter (and !object|array)
        5) if it finds such, returns the implementation of a given filter

        so, if we want to figure out if "effectiveFrom_gt" is actually a "gt" comparison on "effectiveFrom" or a equal on "effectiveFrom_gt" field..

            a) is it a "gt" comparison on "effectiveFrom"?
                1) "effectiveFrom" must be a field on the input object
                and 2) its type must contain "gt" field
                => we can use this (as I think it's more specific than )

                pseudo-code
                ad 1) 
                    field = whereType.inputFields.find(name = "effectiveFrom")
                    if field doesn't exist, skip to scenario b) 

                ad 2)
                    typeName = field.type.name
                    fieldType = introspectionResults.types.find(name = typeName)
                    hasComparison = fieldType.inputFields.contains("gt")

                    if field exists but doesn't have "gt" comparison field, can't use it, skip to scenario b)

                if field exists and hasComparison = true, then it is possible to use where: { effectiveFrom: { gt: value }}

                BUT IT STILL DEPENDS ON WHAT VALUE IS (its type)
                gt|gte|lt|lte exists on DateTime, Int, even StringFilters (not on Bool filters and) and their Nested and Nullable variants => TODO

            b) if a) is not true => we can't use "gt" comparison on "effectiveFrom" field, we check if "effectiveFrom_gt" field exists
                field = whereType.inputFields.find(name = "effectiveFrom_gt")
                
                if field exists, process it with "equals" type comparison on its respective type
                if field doesn't exist, check for "q" (obviously not true in the test case), if not that either, return {} as it's wrong query
    */

  // first, let's leave this case, it shortcuts a lot of logic and doesn't really depend on anything we do
  if (key === "NOT" || key === "OR" || key === "AND") {
    return {
      [key]: value.map((f) =>
        buildWhereWithType(f, introspectionResults, whereType),
      ),
    };
  }

  if (comparator) {
    // ----------------
    // Scenario A - trying to inequal compare on a field
    // ----------------

    // to distinguish if we actually want to check for inequal comparison on a field, we need to check if we can do that
    const comparisonFieldType = whereType.inputFields.find(
      (f) => f.name === key,
    )?.type as IntrospectionInputObjectType;

    if (comparisonFieldType) {
      const filterName = comparisonFieldType.name; // e.g. DateTimeNullableFilter
      // look into introspection for this field and find if it has the comparison field
      const filter = introspectionResults.types.find(
        (f) => f.name === filterName,
      ) as IntrospectionInputObjectType;
      // filterType should exist, otherwise it wouldn't even be in the comparisonFieldType
      const comparatorField = filter.inputFields.find(
        (f) => f.name === comparator,
      );
      if (comparatorField) {
        console.log(`Comparison ${comparator} on field ${key} possible`);

        // we can use (comparator) on a field (key)
        // but all these fields (equals, lt, lte, gt, gte, contains, startsWith, endsWith)
        // use a Scalar value, so it can't be an object or an array
        // in that case it should fall through and use default implementation

        if (!isObject(value) && !isArray(value)) {
          if (isBooleanFilter(filter)) {
            // the only way we could get here is with "boolField_equals" (which is the same as "boolField")
            // but skipping here would lead to trying to find field "boolField_equals" which doesn't exist
            console.log(
              `Calling boolean filter with key ${key}, value ${value}`,
            );
            return getBooleanFilter(key, value);
          }

          if (isStringFilter(filter)) {
            console.log(
              `Calling string filter with key ${key}, value ${value} and comparator ${comparator}`,
            );
            return getStringFilter(key, value, comparator);
          }

          if (isDateTimeFilter(filter)) {
            console.log(
              `Calling date time filter with key ${key}, value ${value} and comparator ${comparator}`,
            );
            return getDateTimeFilter(key, value, comparator);
          }

          if (isIntFilter(filter)) {
            console.log(
              `Calling int filter with key ${key}, value ${value} and comparator ${comparator}`,
            );
            return getIntFilter(key, value, comparator);
          }

          if (isFloatFilter(filter)) {
            console.log(
              `Calling float filter with key ${key}, value ${value} and comparator ${comparator}`,
            );
            return getFloatFilter(key, value, comparator);
          }
        }
        // we can ignore else's below, it's just for console.logs
      } else {
        // compare field doesn't exist on the type, skip to scenario B
        console.log(
          `Field ${key} exists but doesn't have compare field ${comparator}`,
        );
      }
    } else {
      // our "split" field doesn't exist, => scenario B
      console.log(
        `Field ${key} doesn't exist, trying original field ${originalKey}`,
      );
    }
  } else {
    console.log(
      `We didn't match any comparator, using original field ${originalKey}`,
    );
  }

  // Scenario B - we can't use comparison on the splitted field, try to use the original key in a default way (no comparator!)

  const fieldType = whereType.inputFields.find((f) => f.name === originalKey)
    ?.type as IntrospectionInputObjectType;

  if (!fieldType) {
    if (originalKey === "q") {
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
      console.log(`Invalid field ${originalKey}`);
      return {};
    }
  }

  console.log(`Valid field ${originalKey}`);

  if (!isObject(value)) {
    if (isBooleanFilter(fieldType)) {
      return getBooleanFilter(originalKey, value);
    }

    if (isStringFilter(fieldType)) {
      return getStringFilter(originalKey, value);
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
  }

  if (isArray(value)) {
    if (isStringFilter(fieldType)) {
      return { OR: value.map((v) => getStringFilter(originalKey, v)) };
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
