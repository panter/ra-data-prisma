import upperFirst from "lodash/upperFirst";
export const makePrefixedFullName = (name: string, prefix?: string) => {
  return !prefix ? name : prefix + upperFirst(name);
};
