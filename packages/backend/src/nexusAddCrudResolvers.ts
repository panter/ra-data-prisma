import { ResourceOptions, CommonOptions } from "./types";
import setupCrudResolvers from "./setupCrudResolvers";

const nexusAddCrudResolvers = (
  schema: any,
  resources: {
    [resourceName: string]: ResourceOptions;
  },
  commonOptions: CommonOptions = {},
) =>
  Object.keys(resources).forEach((resourceName) => {
    setupCrudResolvers(schema, resourceName, {
      ...commonOptions,
      ...resources[resourceName],
    });
  });

export default nexusAddCrudResolvers;
