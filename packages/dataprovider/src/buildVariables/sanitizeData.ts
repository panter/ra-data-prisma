import { IntrospectionInputValue } from "graphql";
import { isObject } from "lodash";

/**
 * Due to some implementation details in react-admin, we have to add copies with suffixed keys of certain field data.
 *
 * the data contains then both the normal version and the _id version (which is just a string or an array of strings).
 *
 * We cannot override the record, as users might use either the object version or the string version
 */

export const getSanitizedFieldData = (
  data: Record<string, any>,
  field: IntrospectionInputValue,
) => {
  const key = field.name;
  const keyWithArraySuffix = `${key}_ids`;

  if (data[keyWithArraySuffix]) {
    // merge
    if (data[key] && Array.isArray(data[key])) {
      return data[key].map((entry, index) => {
        if (isObject(entry)) {
          return {
            id: data[keyWithArraySuffix][index],
            ...entry,
          };
        }
        return data[keyWithArraySuffix][index];
      });
    }
    return data[keyWithArraySuffix];
  }

  const keyWithIdsSuffix = `${key}_id`;
  if (data[keyWithIdsSuffix]) {
    if (data[key] && isObject(data[key])) {
      return {
        id: data[keyWithIdsSuffix],
        ...data[key],
      };
    }
    return data[keyWithIdsSuffix];
  }
  return data[key];
};
