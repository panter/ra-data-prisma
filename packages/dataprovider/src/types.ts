import { DocumentNode } from "graphql";

export type ResourceView = {
  resource: string;
  fragment: DocumentNode;
};

export type OurOptions = {
  resourceViews?: {
    [name: string]: ResourceView;
  };
  aliasPrefix?: string;
};

type RaDataGraphqlOptions = {
  clientOptions?: {
    // FIXME: there are more options though
    uri: string;
  };

  client?: any;
};

export type Options = RaDataGraphqlOptions & OurOptions;
