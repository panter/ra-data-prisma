import { ResourceOptions, CommonOptions } from "./types";
import setupCrudResolvers from "./setupCrudResolvers";
import { extendType, arg, intArg } from "nexus";
import * as Helpers from "nexus-plugin-prisma/src/typegen/helpers";

const addCrudResolvers = <
  AliasPrefix extends string,
  ModelName extends keyof Helpers.GetGen<"outputs"> & string,
>(
  resourceName: ModelName,
  options?: ResourceOptions<AliasPrefix, ModelName> &
    CommonOptions<AliasPrefix>,
) => setupCrudResolvers({ extendType, arg, intArg }, resourceName, options);

export default addCrudResolvers;
