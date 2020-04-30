import "../generated/nexus";
import "../generated/nexus-prisma";
import { makeSchema, objectType } from "@nexus/schema";
import { nexusPrismaPlugin } from "nexus-prisma";
import introspection from "ra-data-graphql/lib/introspection";
import { addCrudResolvers } from "../../backend/src";
import { join } from "path";
import { readFileSync } from "fs";
import {
  print,
  buildSchema,
  graphql,
  execute,
  getIntrospectionQuery,
} from "graphql";

const typegenPath = (p: string) => process.env.PWD && join(process.env.PWD, p);

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.firstName();
    t.model.lastName();
    t.model.yearOfBirth();
    t.model.roles(null);
    t.model.gender();
  },
});
const UserRole = objectType({
  name: "UserRole",
  definition(t) {
    t.model.id();
  },
});
const types = [User, UserRole, addCrudResolvers("User")];
export const testSchema = makeSchema({
  types,
  plugins: [
    nexusPrismaPlugin({
      outputs: {
        typegen: typegenPath("./generated/nexus-prisma.ts"),
      },
    }),
  ],

  outputs: {
    schema: typegenPath("./generated/schema.graphql"),
    typegen: typegenPath("./generated/nexus.ts"),
  },
});
