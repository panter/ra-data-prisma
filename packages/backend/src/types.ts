import * as Helpers from "nexus-plugin-prisma/src/typegen/helpers";
import { GetNexusPrisma } from "nexus-plugin-prisma/src/typegen/static";

type Arg0<T extends (...args: any) => any> = Parameters<T>[0];
type CustomizeOpt<T extends (...args: any) => any> = (
  config: Exclude<Arg0<T>, undefined>,
) => Arg0<T>;

type QueryCrud = GetNexusPrisma<"Query", "crud">;
type MutationCrud = GetNexusPrisma<"Mutation", "crud">;

export type Customize<
  ModelName extends keyof Helpers.GetGen<"outputs"> & string,
  ModelNamePlural = `${Uncapitalize<ModelName>}s`,
> = {
  one?: CustomizeOpt<QueryCrud[Uncapitalize<ModelName>]>;
  many?: CustomizeOpt<QueryCrud[ModelNamePlural]>;
  createOne?: CustomizeOpt<MutationCrud[`createOne${Capitalize<ModelName>}`]>;
  updateOne?: CustomizeOpt<MutationCrud[`updateOne${Capitalize<ModelName>}`]>;
  updateMany?: CustomizeOpt<MutationCrud[`updateMany${Capitalize<ModelName>}`]>;
  upsertOne?: CustomizeOpt<MutationCrud[`upsertOne${Capitalize<ModelName>}`]>;
  deleteOne?: CustomizeOpt<MutationCrud[`deleteOne${Capitalize<ModelName>}`]>;
  deleteMany?: CustomizeOpt<MutationCrud[`deleteMany${Capitalize<ModelName>}`]>;
};

export type CommonOptions = {
  aliasPrefix?: string;
  enableOrderByRelation?: boolean;
};
export type ResourceOptions<
  ModelName extends keyof Helpers.GetGen<"outputs"> & string,
> = {
  /**
   * whether to display a warning to secure the mutations and resolvers (defaults to true)
   */
  printSecurityWarning?: boolean;
  aliasPrefix?: string;
  customize?: Customize<ModelName>;
  enableOrderByRelation?: boolean;
};
