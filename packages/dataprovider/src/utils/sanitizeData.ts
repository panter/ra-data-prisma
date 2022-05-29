export const sanitizeKey = (key: string) => {
  if (key.endsWith("_ids")) {
    return key.substring(0, key.lastIndexOf("_ids"));
  }
  if (key.endsWith("_id")) {
    return key.substring(0, key.lastIndexOf("_id"));
  }
  return key;
};
/**
 * Due to some implementation details in react-admin, we have to add copies with suffixed keys of certain field data.
 * This function sanitizes these keys:
 * - suffix _id: a string reference
 * - suffix _ids: an array of ids referencing
 * @param data data
 * @returns data where the suffixes got removed and the original data is overwritten with the suffixed version
 */
export const sanitizeData = (data: { [key: string]: any }) => {
  return Object.fromEntries(
    Object.entries(data).reduce((acc, [keyRaw, value]) => {
      const key = sanitizeKey(keyRaw);
      return [...acc, [key, value]];
    }, []),
  );
};
