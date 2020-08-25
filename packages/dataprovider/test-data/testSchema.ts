import {
  makeSchema,
  objectType,
  stringArg,
  inputObjectType,
} from "@nexus/schema";
import { nexusPrismaPlugin } from "nexus-prisma";
import { join } from "path";
import { addCrudResolvers } from "../../backend/src";
import "../generated/nexus";
import "../generated/nexus-prisma";

const typegenPath = (p: string) => process.env.PWD && join(process.env.PWD, p);
type Options = {
  aliasPrefix?: string;
};

export const testSchema = (options: Options) => {
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
      t.model.blogPosts(null);
      t.model.comments(null);
      t.model.interests();
      t.model.address({ type: "Address" });

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

  const Address = objectType({
    name: "Address",
    definition(t) {
      t.string("street");
      t.string("city");
      t.string("countryCode");
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

  const BlogPost = objectType({
    name: "BlogPost",
    definition(t) {
      t.model.id();
      t.model.title();
      t.model.text();
      t.model.author();
      t.model.comments();
    },
  });

  const BlogPostComment = objectType({
    name: "BlogPostComment",
    definition(t) {
      t.model.id();
      t.model.text();
      t.model.post();
      t.model.author();
    },
  });

  /**
   * A simple way to have a "connect-only" related input type.
   * This is a simple hack until the nexus-plugin-prisma
   * capabilities settings will be ready
   *
   * @see https://github.com/graphql-nexus/nexus-plugin-prisma/issues/598#issuecomment-614259385
   */
  const UserCreateOneWithoutCommentsInput = inputObjectType({
    name: "UserCreateOneWithoutCommentsInput",
    definition(t) {
      t.field("connect", { type: "UserWhereUniqueInput" });
    },
  });

  const types = [
    User,
    UserRole,
    UserSocialMedia,
    Address,
    SomePublicRecordWithIntId,
    BlogPost,
    BlogPostComment,
    UserCreateOneWithoutCommentsInput,

    addCrudResolvers("User", options),
    addCrudResolvers("UserRole", options),
    addCrudResolvers("SomePublicRecordWithIntId", options),
    addCrudResolvers("BlogPost", options),
    addCrudResolvers("BlogPostComment", options),
  ];

  return makeSchema({
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
};
