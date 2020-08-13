import { ResourceOptions, CommonOptions } from "./types";
import setupCrudResolvers from "./setupCrudResolvers";
import { extendType, arg, intArg } from "@nexus/schema";

const addCrudResolvers = (
  resourceName: string,
  options?: ResourceOptions & CommonOptions,
) => setupCrudResolvers({ extendType, arg, intArg }, resourceName, options);

export default addCrudResolvers;
