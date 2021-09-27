import { ResourceOptions, CommonOptions } from "./types";
import setupCrudResolvers from "./setupCrudResolvers";
import { extendType, arg, intArg } from "nexus";
import * as Helpers from "nexus-plugin-prisma/src/typegen/helpers";

const addCrudResolvers = <
  ModelName extends keyof Helpers.GetGen<"outputs"> & string,
>(
  resourceName: ModelName,
  options?: ResourceOptions<ModelName> & CommonOptions,
) => setupCrudResolvers({ extendType, arg, intArg }, resourceName, options);

export default addCrudResolvers;
