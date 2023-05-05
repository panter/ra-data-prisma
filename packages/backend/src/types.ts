import * as Helpers from "nexus-plugin-prisma/src/typegen/helpers";
import { BaseRelationOptions } from "nexus-plugin-prisma/typegen";

type Prefix<What extends string, Prefix extends string> = Prefix extends ``
  ? Uncapitalize<What>
  : `${Prefix}${Capitalize<What>}`;

type MutationConfig<
  MutationName extends string,
  AliasPrefix extends string,
  ModelName extends keyof Helpers.GetGen<"outputs"> & string,
> = BaseRelationOptions<
  "Mutation",
  Prefix<ModelName, MutationName>,
  Prefix<Prefix<ModelName, MutationName>, AliasPrefix>,
  ModelName
>;

export type Customize<
  AliasPrefix extends string,
  ModelName extends keyof Helpers.GetGen<"outputs"> & string,
  ModelNamePlural extends string = `${Uncapitalize<ModelName>}s`,
  One = BaseRelationOptions<
    "Query",
    Uncapitalize<ModelName>,
    Prefix<ModelName, AliasPrefix>,
    ModelName
  >,
  Many = BaseRelationOptions<
    "Query",
    Uncapitalize<ModelNamePlural>,
    Prefix<ModelNamePlural, AliasPrefix>,
    ModelName
  >,
  CreateOne = MutationConfig<"createOne", AliasPrefix, ModelName>,
  UpdateOne = MutationConfig<"updateOne", AliasPrefix, ModelName>,
  UpdateMany = MutationConfig<"updateMany", AliasPrefix, ModelName>,
  UpsertOne = MutationConfig<"upsertOne", AliasPrefix, ModelName>,
  DeleteOne = MutationConfig<"deleteOne", AliasPrefix, ModelName>,
  DeleteMany = MutationConfig<"deleteMany", AliasPrefix, ModelName>,
> = {
  one?: (config: One) => One;
  many?: (config: Many) => Many;
  createOne?: (config: CreateOne) => CreateOne;
  updateOne?: (config: UpdateOne) => UpdateOne;
  updateMany?: (config: UpdateMany) => UpdateMany;
  upsertOne?: (config: UpsertOne) => UpsertOne;
  deleteOne?: (config: DeleteOne) => DeleteOne;
  deleteMany?: (config: DeleteMany) => DeleteMany;
};

export type CommonOptions<AliasPrefix extends string> = {
  aliasPrefix?: AliasPrefix;
  enableOrderByRelation?: boolean;
};
export type ResourceOptions<
  AliasPrefix extends string,
  ModelName extends keyof Helpers.GetGen<"outputs"> & string,
> = {
  /**
   * whether to display a warning to secure the mutations and resolvers (defaults to true)
   */
  printSecurityWarning?: boolean;
  aliasPrefix?: AliasPrefix;
  customize?: Customize<AliasPrefix, ModelName>;
  enableOrderByRelation?: boolean;
};
