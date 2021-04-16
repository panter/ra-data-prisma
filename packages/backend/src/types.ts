export type Customize = {
  // no good types here :-(
  one?: (c: any) => any;
  many?: (c: any) => any;
  createOne?: (c: any) => any;
  updateOne?: (c: any) => any;
  updateMany?: (c: any) => any;
  upsertOne?: (c: any) => any;
  deleteOne?: (c: any) => any;
  deleteMany?: (c: any) => any;
};

export type CommonOptions = {
  aliasPrefix?: string;
  enableOrderByRelation?: boolean;
};
export type ResourceOptions = {
  /**
   * whether to display a warning to secure the mutations and resolvers (defaults to true)
   */
  printSecurityWarning?: boolean;
  aliasPrefix?: string;
  customize?: Customize;
  enableOrderByRelation?: boolean;
};
