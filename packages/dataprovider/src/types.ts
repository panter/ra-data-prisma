import { DocumentNode } from "graphql";

import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
} from "react-admin";

export type WhiteListFragment = {
  type: "whitelist";
  fields: string[];
};

export type BlackListFragment = {
  type: "blacklist";
  fields: string[];
};

export const isDocumentNodeFragment = (
  fragment: ResourceFragment,
): fragment is DocumentNode => {
  return "kind" in fragment && fragment.kind === "Document";
};

export const isOneAndManyFragment = (
  fragment: ResourceViewFragment,
): fragment is DoubleFragment => {
  return "one" in fragment || "many" in fragment;
};
export type ResourceFragment =
  | DocumentNode
  | WhiteListFragment
  | BlackListFragment;

export type DoubleFragment = {
  one?: ResourceFragment;
  many?: ResourceFragment;
};

export type ResourceViewFragment = ResourceFragment | DoubleFragment;
export type ResourceView = {
  resource: string;
  fragment: ResourceViewFragment;
};

export type QueryDialect = "nexus-prisma" | "typegraphql";

type Filter = Record<string, unknown>;
export type ConfigOptions = {
  resourceViews?: {
    [name: string]: ResourceView;
  };
  aliasPrefix?: string;
  filters?: {
    [filterName: string]: (value: any) => Filter | void;
  };
};

export type FetchType =
  | typeof CREATE
  | typeof DELETE
  | typeof GET_LIST
  | typeof GET_MANY
  | typeof GET_MANY_REFERENCE
  | typeof GET_ONE
  | typeof UPDATE;

export type VariantOptions = {
  queryDialect?: QueryDialect;
};

export type OurOptions = ConfigOptions & VariantOptions;

type RaDataGraphqlOptions = {
  clientOptions?: {
    // FIXME: there are more options though
    uri: string;
  };

  client?: any;
};

export type Options = RaDataGraphqlOptions & ConfigOptions & VariantOptions;
export type DataProviderOptions = RaDataGraphqlOptions &
  ConfigOptions &
  Partial<VariantOptions>;
