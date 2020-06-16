import { makeSchema, objectType, stringArg } from "@nexus/schema";
import { nexusPrismaPlugin } from "nexus-prisma";
import { join } from "path";
import { addCrudResolvers } from "../../backend/src";
import "../generated/nexus";
import "../generated/nexus-prisma";

const typegenPath = (p: string) => process.env.PWD && join(process.env.PWD, p);

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.firstName();
    t.model.lastName();
    t.model.yearOfBirth();
    t.model.roles({ filtering: true });
    t.model.gender();
    t.model.wantsNewsletter();
    t.model.userSocialMedia(null);

    // add one field that needs arguments and therefore can't be used by react-admin
    t.list.field("logs", {
      type: "String",
      args: {
        from: stringArg({ required: true }),
        to: stringArg({ required: true }),
      },
    });
  },
});
const UserRole = objectType({
  name: "UserRole",
  definition(t) {
    t.model.id();
    t.model.name();
  },
});

const SomePublicRecordWithIntId = objectType({
  name: "SomePublicRecordWithIntId",
  definition(t) {
    t.model.id();
    t.model.title();
  },
});

const UserSocialMedia = objectType({
  name: "UserSocialMedia",
  definition(t) {
    t.model.id();
    t.model.instagram();
    t.model.twitter();
    t.model.user();
  },
});

const types = [
  User,
  UserRole,
  UserSocialMedia,
  SomePublicRecordWithIntId,

  addCrudResolvers("User"),
  addCrudResolvers("UserRole"),
  addCrudResolvers("SomePublicRecordWithIntId"),
];
export const testSchema = makeSchema({
  types,
  plugins: [
    nexusPrismaPlugin({
      experimentalCRUD: true,
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
