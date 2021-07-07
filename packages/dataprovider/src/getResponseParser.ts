import { TypeKind, IntrospectionObjectType } from "graphql";
import { GET_LIST, GET_MANY, GET_MANY_REFERENCE } from "react-admin";
import getFinalType from "./utils/getFinalType";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { QueryDialect } from "./types";

const sanitizeResource = (
  introspectionResults: IntrospectionResult,
  resource: Resource,
  shouldSanitizeLinkedResources: boolean = true,
) => (data: { [key: string]: any } = {}): any => {
  return Object.keys(data).reduce((acc, key) => {
    if (key.startsWith("_")) {
      return acc;
    }

    const field = (resource.type as IntrospectionObjectType).fields.find(
      (f: any) => f.name === key,
    )!;
    const type = getFinalType(field.type);

    if (type.kind !== TypeKind.OBJECT) {
      return { ...acc, [field.name]: data[field.name] };
    }

    // FIXME: We might have to handle linked types which are not resources but will have to be careful about endless circular dependencies
    const linkedResource = introspectionResults.resources.find(
      (r) => r.type.name === type.name,
    );

    if (shouldSanitizeLinkedResources && linkedResource) {
      const linkedResourceData = data[field.name];

      if (Array.isArray(linkedResourceData)) {
        return {
          ...acc,
          [field.name]: data[field.name].map((obj) => obj.id),
        };
      }

      return {
        ...acc,
        [field.name]: data[field.name]?.id,
      };
    }

    return { ...acc, [field.name]: data[field.name] };
  }, {});
};

export default (
  introspectionResults: IntrospectionResult,
  {
    shouldSanitizeLinkedResources = true,
    queryDialect,
  }: { shouldSanitizeLinkedResources: boolean; queryDialect: QueryDialect },
) => (aorFetchType: string, resource: Resource) => (response: {
  [key: string]: any;
}) => {
  const sanitize = sanitizeResource(
    introspectionResults,
    resource,
    shouldSanitizeLinkedResources,
  );
  const data = response.data;

  const getTotal = () => {
    switch (queryDialect) {
      case "nexus-prisma":
        return response.data.total;
      case "typegraphql":
        return response.data.total.count._all;
    }
  };

  if (
    aorFetchType === GET_LIST ||
    aorFetchType === GET_MANY ||
    aorFetchType === GET_MANY_REFERENCE
  ) {
    return {
      data: response.data.items.map(sanitize),
      total: getTotal(),
    };
  }

  return { data: sanitize(data.data) };
};
