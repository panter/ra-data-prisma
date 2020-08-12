import { Options } from "./types";
import setupCrudResolvers from "./setupCrudResolvers";

const nexusAddCrudResolvers = (
  schema: any,
  resources: {
    [resourceName: string]: Options;
  },
) =>
  Object.keys(resources).forEach((resourceName) => {
    setupCrudResolvers(schema, resourceName, resources[resourceName]);
  });

export default nexusAddCrudResolvers;
