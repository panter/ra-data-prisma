export const sanitizeKey = (key: string) => {
  if (key.endsWith("_ids")) {
    return key.substring(0, key.lastIndexOf("_ids"));
  }
  if (key.endsWith("_id")) {
    return key.substring(0, key.lastIndexOf("_id"));
  }
  return key;
};
