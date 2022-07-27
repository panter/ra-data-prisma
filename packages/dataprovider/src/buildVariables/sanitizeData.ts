import { IntrospectionInputValue } from "graphql";
import { has } from "lodash";

/**
 * Due to some implementation details in react-admin, we have to add copies with suffixed keys of certain field data.
 *
 * We transform that back here.
 *
 * this function throws if both variants (suffixed and non suffixed is used) because we cannot decide which one takes precedence
 */
export const getSanitizedFieldData = (
  data: Record<string, any>,
  previousData: Record<string, any>,

  field: IntrospectionInputValue,
): { fieldData: any; previousFieldData: any } => {
  const key = field.name;
  const keyWithArraySuffix = `${key}_ids`;
  if (has(data, keyWithArraySuffix)) {
    if (has(data, key)) {
      throw new Error(
        `cannot update ${key} and ${keyWithArraySuffix} at the same time. Only use one in the form.`,
      );
    }
    return {
      fieldData: data[keyWithArraySuffix].map((id) => ({ id })),
      previousFieldData: previousData
        ? previousData[keyWithArraySuffix]?.map((id) => ({ id }))
        : null,
    };
  }

  const keyWithIdsSuffix = `${key}_id`;
  if (has(data, keyWithIdsSuffix)) {
    if (has(data, key)) {
      throw new Error(
        `cannot update ${key} and ${keyWithIdsSuffix} at the same time. Only use one in the form.`,
      );
    }
    return {
      fieldData: {
        id: data[keyWithIdsSuffix],
      },
      previousFieldData: previousData
        ? {
            id: previousData[keyWithIdsSuffix],
          }
        : null,
    };
  }

  return {
    fieldData: data[key],
    previousFieldData: previousData ? previousData[key] : null,
  };
};

export const hasFieldData = (
  data: Record<string, any>,
  field: IntrospectionInputValue,
) => {
  return (
    has(data, field.name) ||
    has(data, `${field.name}_id`) ||
    has(data, `${field.name}_ids`)
  );
};
