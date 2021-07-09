import { DocumentNode } from "graphql";

export type DoubleFragment = {
  one: DocumentNode;
  many: DocumentNode;
};

export type ResourceView = {
  resource: string;
  fragment: DocumentNode | DoubleFragment;
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
