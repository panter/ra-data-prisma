import { TypeKind, IntrospectionObjectType } from "graphql";
import { GET_LIST, GET_MANY, GET_MANY_REFERENCE } from "react-admin";
import getFinalType from "./utils/getFinalType";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { FetchType, QueryDialect } from "./types";

const sanitizeResource =
  (introspectionResults: IntrospectionResult, resource: Resource) =>
  (data: { [key: string]: any } = {}): any => {
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
      // if the field contains an array of object with ids, we add a field field_ids to the data
      if (
        Array.isArray(data[field.name]) &&
        data[field.name]?.every((c) => c.id)
      ) {
        return {
          ...acc,
          [field.name]: data[field.name],
          [`${field.name}_ids`]: data[field.name].map((c) => c.id),
        };
      }
      // similarly if its an object with id
      if (data[field.name]?.id) {
        return {
          ...acc,
          [field.name]: data[field.name],
          [`${field.name}_id`]: data[field.name].id,
        };
      }

      return { ...acc, [field.name]: data[field.name] };
    }, {});
  };

export default (
    introspectionResults: IntrospectionResult,
    { queryDialect }: { queryDialect: QueryDialect },
  ) =>
  (aorFetchType: FetchType, resource: Resource) =>
  (response: { [key: string]: any }) => {
    const sanitize = sanitizeResource(introspectionResults, resource);
    const data = response.data;

    const getTotal = () => {
      switch (queryDialect) {
        case "nexus-prisma":
          return response.data.total;
        case "typegraphql":
          return (response.data.total._count ?? response.data.total.count)._all;
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
