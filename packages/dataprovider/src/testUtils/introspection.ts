import {
  IntrospectionField,
  IntrospectionObjectType,
  TypeKind,
  IntrospectionType,
} from "graphql";
import { IntrospectionResult, Resource } from "../constants/interfaces";
type PartialField = Pick<IntrospectionField, "name" | "type"> &
  Partial<IntrospectionField>;

export const makeIntrospectionField = (
  field: PartialField,
): IntrospectionField => ({
  args: [],
  isDeprecated: false,
  ...field,
});

type PartialIntrospectionObjectType = {
  fields: PartialField[];
} & Pick<IntrospectionObjectType, "name">;
type PartialResource = {
  type: PartialIntrospectionObjectType;
};
type PartialIntrospectionResult = {
  resources: PartialResource[];
  types?: IntrospectionType[];
};
export const makeObjectType = (
  type: PartialIntrospectionObjectType,
): IntrospectionType => ({
  ...type,
  kind: "OBJECT",
  interfaces: [],
  fields: type.fields?.map(makeIntrospectionField) ?? [],
});
export const makeResource = (resource: PartialResource): Resource => ({
  ...resource,
  type: makeObjectType(resource.type),
});

export const makeIntrospectionResult = (
  result: PartialIntrospectionResult,
): IntrospectionResult => ({
  ...result,
  resources: result.resources.map(makeResource),
  types: [
    ...result.types,
    ...result.resources.map((r) => makeObjectType(r.type)),
  ],
  queries: [],
  schema: null,
});
