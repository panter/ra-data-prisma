import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
} from "react-admin";

import { DocumentNode } from "graphql";
import { Resource } from "./constants/interfaces";
import { BuildVariablesContext } from "./buildVariables/types";

export type WhiteListFragment = {
  type: "whitelist";
  fields: string[];
};

export type BlackListFragment = {
  type: "blacklist";
  fields: string[];
};

export const isDeprecatedDocumentNodeFragment = (
  fragment: ResourceFragment,
): fragment is DocumentNode => {
  return "kind" in fragment && fragment.kind === "Document";
};

export const isOneAndManyFragment = (
  fragment: ResourceViewFragment,
): fragment is DoubleFragment => {
  return "one" in fragment || "many" in fragment;
};

export type DocumentFragment = {
  type: "document";
  doc: DocumentNode;
  mode?: "replace" | "extend"; // defaults to replace
};
export type ResourceFragment =
  | DocumentNode
  | DocumentFragment
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

export type MutationFetchType = typeof CREATE | typeof DELETE | typeof UPDATE;

export type MutationOperationNameMap = {
  [K in MutationFetchType]: (resource: Resource) => string;
};

export type MutationOperationNames = Partial<
  Record<QueryDialect, MutationOperationNameMap>
>;

export type QueryDialect = "nexus-prisma" | "typegraphql";

type Filter = Record<string, unknown>;

export type CustomizeInputDataFunction = (
  data: Record<string, any>,
  rawParams: Record<string, any>,
) => Record<string, unknown>;

export type CustomizeInputData = {
  [name: string]: {
    create?: CustomizeInputDataFunction;
    update?: CustomizeInputDataFunction;
  };
};

export type IntrospectionOptions = {
  schema?: any;
};
export type ConfigOptions = {
  resourceViews?: {
    [name: string]: ResourceView;
  };
  aliasPrefix?: string;
  filters?: {
    [filterName: string]: (
      value: any,
      context: BuildVariablesContext,
    ) => Filter | void;
  };
  customizeInputData?: CustomizeInputData;
  introspection?: IntrospectionOptions;
  mutationOperationNames?: MutationOperationNames;
  queryOperationNames?: QueryOperationNames;
};

export type QueryFetchType =
  | typeof GET_LIST
  | typeof GET_MANY
  | typeof GET_MANY_REFERENCE
  | typeof GET_ONE;

export type QueryOperationNameMap = {
  [K in QueryFetchType]: (resource: Resource) => string;
};

export type QueryOperationNames = Partial<
  Record<QueryDialect, QueryOperationNameMap>
>;

export type FetchType = QueryFetchType | MutationFetchType;

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
