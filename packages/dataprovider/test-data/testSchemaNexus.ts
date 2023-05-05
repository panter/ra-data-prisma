import {
  makeSchema,
  objectType,
  stringArg,
  inputObjectType,
  nonNull,
} from "nexus";
import { join } from "path";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import { addCrudResolvers } from "../../backend/src";
import "../generated/nexus";
import "../generated/nexus-prisma";
import { CommonOptions } from "../../backend/src/types";
import prismaInputObjectType, {
  addMissingTypesPlugin,
} from "./missingPrismaTypesPlugin";

const typegenPath = (p: string) => {
  return process.env.PWD && join(process.env.PWD, p);
};

export const testSchemaNexus = <Prefix extends string>(
  options: CommonOptions<Prefix>,
) => {
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
      t.model.companies(null);
      t.model.interests();
      t.model.weddingDate();
      t.field("address", { type: "Address" });

      // add one field that needs arguments and therefore can't be used by react-admin
      t.list.field("logs", {
        type: "String",
        args: {
          from: nonNull(stringArg()),
          to: nonNull(stringArg()),
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

  const Company = objectType({
    name: "Company",
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

  const FilteringTest = objectType({
    name: "FilteringTest",
    definition(t) {
      t.model.id();
      t.model.intField();
      t.model.floatField();
      t.model.stringField();
      t.model.dateTimeField();
      t.model.boolField();
      t.model.intField_lt();
      t.model.intField_bt();
      t.model.snake_field();
      t.model.snake_field_bt();
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

  const BlogPostUpdateManyWithoutAuthorInput = prismaInputObjectType(
    "BlogPostUpdateManyWithoutAuthorInput",
    {
      // @ts-ignore
      filteredFields: ["disconnect"],
    },
  );

  const SiteUpdateOneWithoutOwnerInput = prismaInputObjectType(
    "SiteUpdateOneWithoutOwnerInput",
    {
      // @ts-ignore
      filteredFields: ["disconnect"],
    },
  );

  const types = [
    User,
    UserRole,
    UserSocialMedia,
    Address,
    SomePublicRecordWithIntId,
    BlogPost,
    BlogPostComment,
    UserCreateOneWithoutCommentsInput,
    BlogPostUpdateManyWithoutAuthorInput,
    SiteUpdateOneWithoutOwnerInput,
    FilteringTest,
    Company,

    addCrudResolvers("Company", options),
    addCrudResolvers("User", options),
    addCrudResolvers("UserRole", options),
    addCrudResolvers("SomePublicRecordWithIntId", options),
    addCrudResolvers("BlogPost", options),
    addCrudResolvers("BlogPostComment", options),
    addCrudResolvers("FilteringTest", options),
  ];

  return makeSchema({
    types,
    plugins: [
      nexusSchemaPrisma({
        experimentalCRUD: true,
        paginationStrategy: "prisma",
        outputs: {
          typegen:
            process.env.NODE_ENV !== "test"
              ? typegenPath("./generated/nexus-prisma.ts")
              : undefined,
        },
      }),
      addMissingTypesPlugin,
    ],

    outputs:
      process.env.NODE_ENV !== "test"
        ? {
            schema: typegenPath("./generated/schema.graphql"),
            typegen: typegenPath("./generated/nexus.ts"),
          }
        : undefined,
  });
};
