import "reflect-metadata";
import {
  UserCrudResolver,
  UserRelationsResolver,
  User,
  CompanyCrudResolver,
  BlogPostCrudResolver,
  UserRoleCrudResolver,
  BlogPostCommentCrudResolver,
} from "@generated/type-graphql";
import {
  buildSchema,
  Field,
  FieldResolver,
  ObjectType,
  Resolver,
  Root,
} from "type-graphql";
import { CommonOptions } from "../../backend/src/types";

@ObjectType()
class Address {
  @Field()
  street: string;

  @Field()
  city: string;

  @Field()
  countryCode: string;
}

@Resolver(() => User)
class CustomUserResolver {
  @FieldResolver((type) => Address, { nullable: true })
  address(user: User): Address | undefined {
    return user.address as unknown as Address;
  }
}

export const testSchemaTypeGraphql = async <Prefix extends string>(
  options: CommonOptions<Prefix>,
) => {
  return buildSchema({
    resolvers: [
      CustomUserResolver,
      UserCrudResolver,
      UserRelationsResolver,
      UserRoleCrudResolver,
      CompanyCrudResolver,
      BlogPostCrudResolver,
      BlogPostCommentCrudResolver,
    ],
    validate: false,
  });
};
