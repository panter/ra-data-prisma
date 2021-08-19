import {
  InputDefinitionBlock,
  NexusInputObjectTypeDef,
  plugin,
} from "nexus/dist/core";
import { inputObjectType } from "nexus";
import {
  InternalDMMF,
  getTransformedDmmf,
} from "nexus-plugin-prisma/dist/dmmf";

import { NexusGenInputs, NexusGenObjects } from "../generated/nexus";

export type NexusInputObjectName = keyof NexusGenInputs;

export type NexusObjectName = keyof Omit<
  NexusGenObjects,
  "Mutation" | "Query" | "AffectedRowsOutput"
>;

type FieldNames<TypeName extends NexusInputObjectName> =
  keyof NexusGenInputs[TypeName];

export type InputObjectTypeConfig<TypeName extends NexusInputObjectName> = {
  filteredFields?: Array<FieldNames<TypeName>>;
  extraDefinition?: (t: InputDefinitionBlock<TypeName>) => void;
};

const dmmf = getTransformedDmmf("@prisma/client");

function installField(t: InputDefinitionBlock<any>) {
  return (field: InternalDMMF.SchemaArg) => {
    let fieldBuilder = t;

    if (field.inputType.isNullable) {
      // @ts-ignore
      fieldBuilder = fieldBuilder.nullable;
    }

    if (field.inputType.isList) {
      // @ts-ignore
      fieldBuilder = fieldBuilder.list;
    }

    fieldBuilder.field(field.name, {
      // @ts-ignore
      type: field.inputType.type,
    });
  };
}

export const addMissingTypesPlugin = plugin({
  name: "missingPrismaTypes",
  onMissingType(typeName) {
    // Missing query type should be ignored by our plugin. It wont cause any error.
    if (typeName === "Query") {
      return null;
    }

    const type = dmmf.getInputType(typeName);

    return inputObjectType({
      name: type.name,
      definition(t) {
        type.fields.forEach(installField(t));
      },
    });
  },
});

export default function prismaInputObjectType<
  TypeName extends NexusInputObjectName,
>(
  name: TypeName,
  {
    extraDefinition = () => {
      // Do nothing
    },
    filteredFields = [],
  }: InputObjectTypeConfig<TypeName>,
): NexusInputObjectTypeDef<TypeName> {
  return inputObjectType<TypeName>({
    name,
    definition(t) {
      const { fields } = dmmf.getInputType(name);

      fields
        .filter((field) => {
          // @ts-ignore
          return !filteredFields.includes(field.name);
        })
        .forEach(installField(t));

      extraDefinition(t);
    },
  });
}
