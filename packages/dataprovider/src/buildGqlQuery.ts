import {
  ArgumentNode,
  DocumentNode,
  FieldNode,
  IntrospectionField,
  parse,
  SelectionNode,
  TypeKind,
  VariableDefinitionNode,
} from "graphql";
import { QUERY_TYPES } from "ra-data-graphql";
import { DELETE, GET_LIST, GET_MANY, GET_MANY_REFERENCE } from "react-admin";
import { defaultOurOptions } from "./buildDataProvider";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { QueryDialect } from "./types";
import getFinalType from "./utils/getFinalType";
import * as gqlTypes from "./utils/gqlTypes";
import isList from "./utils/isList";
import isRequired from "./utils/isRequired";

export interface Query {
  name?: string;
  args: IntrospectionField[];
}

export const buildFields =
  (introspectionResults: IntrospectionResult) =>
  (
    fields: IntrospectionField[],
    maxNestingDepth = 1,
    depth = 0,
  ): FieldNode[] => {
    return fields.reduce((acc: FieldNode[], field) => {
      const type = getFinalType(field.type);

      if (type.name.startsWith("_")) {
        return acc;
      }
      // skip if the field has mandatory args
      if (field.args.some((arg) => arg.type.kind === "NON_NULL")) {
        return acc;
      }

      if (type.kind !== TypeKind.OBJECT) {
        return [...acc, gqlTypes.field(gqlTypes.name(field.name))];
      }

      const linkedResource = introspectionResults.resources.find(
        (r) => r.type.name === type.name,
      );
      if (linkedResource) {
        return [
          ...acc,
          gqlTypes.field(gqlTypes.name(field.name), {
            selectionSet: gqlTypes.selectionSet([
              gqlTypes.field(gqlTypes.name("id")),
            ]),
          }),
        ];
      }

      const linkedType = introspectionResults.types.find(
        (t) => t.name === type.name,
      );

      // linkedtypes  (= nested objects) are currently a bit problematic
      // it is handy to have them, but they be slow to fetch
      // we therefore limit the depth
      if (linkedType && depth < maxNestingDepth) {
        return [
          ...acc,
          gqlTypes.field(gqlTypes.name(field.name), {
            selectionSet: gqlTypes.selectionSet(
              buildFields(introspectionResults)(
                (linkedType as any).fields,
                maxNestingDepth,
                depth + 1,
              ),
            ),
          }),
        ];
      }

      return acc;
    }, [] as FieldNode[]);
  };

export const getArgType = (arg: IntrospectionField) => {
  const type = getFinalType(arg.type);
  const required = isRequired(arg.type);
  const list = isList(arg.type);

  if (list) {
    if (required) {
      return gqlTypes.listType(
        gqlTypes.nonNullType(gqlTypes.namedType(gqlTypes.name(type.name))),
      );
    }
    return gqlTypes.listType(gqlTypes.namedType(gqlTypes.name(type.name)));
  }

  if (required) {
    return gqlTypes.nonNullType(gqlTypes.namedType(gqlTypes.name(type.name)));
  }

  return gqlTypes.namedType(gqlTypes.name(type.name));
};

export const buildArgs = (
  query: Query,
  variables: { [key: string]: any } = {},
) => {
  if (query.args.length === 0) {
    return [];
  }

  const validVariables = Object.keys(variables).filter(
    (k) => typeof variables[k] !== "undefined",
  );
  return query.args
    .filter((arg) => validVariables.includes(arg.name))
    .reduce(
      (acc: ArgumentNode[], arg) => [
        ...acc,
        gqlTypes.argument(
          gqlTypes.name(arg.name),
          gqlTypes.variable(gqlTypes.name(arg.name)),
        ),
      ],
      [] as ArgumentNode[],
    );
};

export const buildApolloArgs = (
  query: Query,
  variables: { [key: string]: any } = {},
) => {
  if (query.args.length === 0) {
    return [];
  }

  const validVariables = Object.keys(variables).filter(
    (k) => typeof variables[k] !== "undefined",
  );

  return query.args
    .filter((arg) => validVariables.includes(arg.name))
    .reduce(
      (acc: VariableDefinitionNode[], arg) => [
        ...acc,
        gqlTypes.variableDefinition(
          gqlTypes.variable(gqlTypes.name(arg.name)),
          getArgType(arg),
        ),
      ],
      [] as VariableDefinitionNode[],
    );
};

//TODO: validate fragment against the schema
const buildFieldsFromFragment = (
  fragment: DocumentNode | string,
  resourceName: string,
  fetchType: string,
): SelectionNode[] => {
  let parsedFragment = {};

  if (
    typeof fragment === "object" &&
    fragment.kind &&
    fragment.kind === "Document"
  ) {
    parsedFragment = fragment;
  }

  if (typeof fragment === "string") {
    if (!fragment.startsWith("fragment")) {
      fragment = `fragment tmp on ${resourceName} ${fragment}`;
    }

    try {
      parsedFragment = parse(fragment);
    } catch (e) {
      throw new Error(
        `Invalid fragment given for resource '${resourceName}' and fetchType '${fetchType}' (${e.message}).`,
      );
    }
  }

  return (parsedFragment as any).definitions?.[0].selectionSet.selections;
};

export default (
    introspectionResults: IntrospectionResult,
    options = defaultOurOptions,
  ) =>
  (
    resource: Resource,
    aorFetchType: string,
    variables: { [key: string]: any },
    fragment: DocumentNode,
  ) => {
    const queryType = resource[aorFetchType];
    const { queryDialect } = options;

    if (!queryType) {
      throw new Error(
        `No query or mutation matching aor fetch type ${aorFetchType} could be found for resource ${resource.type.name}`,
      );
    }

    const { orderBy, skip, take, ...countVariables } = variables;
    const apolloArgs = buildApolloArgs(queryType, variables);
    const args = buildArgs(queryType, variables);
    const countArgs = buildArgs(queryType, countVariables);

    const fields = fragment
      ? buildFieldsFromFragment(fragment, resource.type.name, aorFetchType)
      : buildFields(introspectionResults)((resource.type as any).fields);

    const totals: Record<QueryDialect, FieldNode> = {
      "nexus-prisma": (() => {
        const countName = `${queryType.name}Count`;

        const supportsCountArgs =
          (
            introspectionResults.queries.find(
              (query) => query.name === countName,
            ) as any
          )?.args.length > 0;

        return gqlTypes.field(gqlTypes.name(countName), {
          alias: gqlTypes.name("total"),
          arguments: supportsCountArgs ? countArgs : undefined,
        });
      })(),
      typegraphql: gqlTypes.field(
        gqlTypes.name(
          `aggregate${queryType.name
            .substring(0, 1)
            .toUpperCase()}${queryType.name.substring(
            1,
            queryType.name.length - 1,
          )}`,
        ),
        {
          alias: gqlTypes.name("total"),
          arguments: countArgs,
          selectionSet: gqlTypes.selectionSet([
            gqlTypes.field(gqlTypes.name("count"), {
              selectionSet: gqlTypes.selectionSet([
                gqlTypes.field(gqlTypes.name("_all")),
              ]),
            }),
          ]),
        },
      ),
    };

    if (
      aorFetchType === GET_LIST ||
      aorFetchType === GET_MANY ||
      aorFetchType === GET_MANY_REFERENCE
    ) {
      return gqlTypes.document([
        gqlTypes.operationDefinition(
          "query",
          gqlTypes.selectionSet([
            gqlTypes.field(gqlTypes.name(queryType.name!), {
              alias: gqlTypes.name("items"),
              arguments: args,
              selectionSet: gqlTypes.selectionSet(fields),
            }),
            totals[queryDialect],
          ]),
          gqlTypes.name(queryType.name!),
          apolloArgs,
        ),
      ]);
    }

    if (aorFetchType === DELETE) {
      return gqlTypes.document([
        gqlTypes.operationDefinition(
          "mutation",
          gqlTypes.selectionSet([
            gqlTypes.field(gqlTypes.name(queryType.name!), {
              alias: gqlTypes.name("data"),
              arguments: args,
              selectionSet: gqlTypes.selectionSet([
                gqlTypes.field(gqlTypes.name("id")),
              ]),
            }),
          ]),
          gqlTypes.name(queryType.name!),
          apolloArgs,
        ),
      ]);
    }

    return gqlTypes.document([
      gqlTypes.operationDefinition(
        QUERY_TYPES.includes(aorFetchType) ? "query" : "mutation",
        gqlTypes.selectionSet([
          gqlTypes.field(gqlTypes.name(queryType.name!), {
            alias: gqlTypes.name("data"),
            arguments: args,
            selectionSet: gqlTypes.selectionSet(fields),
          }),
        ]),
        gqlTypes.name(queryType.name!),
        apolloArgs,
      ),
    ]);
  };
