import {
  IntrospectionInputObjectType,
  IntrospectionSchema,
  IntrospectionType,
} from "graphql";

export interface Resource {
  type: IntrospectionType;
  [key: string]: any;
}

export interface IntrospectionResult {
  types: IntrospectionType[];
  queries: IntrospectionType[];
  resources: Resource[];
  schema: IntrospectionSchema;
}

export interface CheckComparisonQueryResult {
  comparisonPossible: boolean;
  comparisonFieldType?: IntrospectionInputObjectType;
}
