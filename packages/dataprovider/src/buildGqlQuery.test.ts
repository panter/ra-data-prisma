import gql from "dummy-tag";
import gqlReal from "graphql-tag";
import { IntrospectionField, print as printOrg, TypeKind } from "graphql";
import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
} from "react-admin";
import buildGqlQuery, {
  buildApolloArgs,
  buildArgs,
  buildFields,
  getArgType,
  Query,
} from "./buildGqlQuery";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import {
  makeIntrospectionField,
  makeIntrospectionResult,
} from "./testUtils/introspection";

import "./testUtils/testTypes";
import { getTestIntrospection } from "./testUtils/getTestIntrospection";
import {defaultOurOptions} from "./buildDataProvider";

describe("buildGqlQuery", () => {
  let testIntrospection: IntrospectionResult;
  let testIntrospectionWithPrefix: IntrospectionResult;
  let testUserResource: Resource;
  beforeAll(async () => {
    testIntrospection = await getTestIntrospection();
    testUserResource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "User",
    );
  });

  describe("getArgType", () => {
    it("returns the arg type", () => {
      expect(
        getArgType({
          type: { kind: TypeKind.SCALAR, name: "foo" },
        } as IntrospectionField),
      ).toEqualGraphql("foo");
    });

    it("returns the arg type for NON_NULL types", () => {
      expect(
        getArgType({
          type: {
            kind: TypeKind.NON_NULL,
            ofType: { name: "ID", kind: TypeKind.SCALAR },
          },
        } as IntrospectionField),
      ).toEqualGraphql("ID!");
    });

    it("returns the arg type for LIST types", () => {
      expect(
        getArgType({
          type: {
            kind: TypeKind.LIST,
            ofType: { name: "ID", kind: TypeKind.SCALAR },
          },
        } as IntrospectionField),
      ).toEqualGraphql("[ID]");
    });

    it("returns the arg type for LIST types of NON_NULL type", () => {
      expect(
        getArgType({
          type: {
            kind: TypeKind.LIST,
            ofType: {
              kind: TypeKind.NON_NULL,
              ofType: {
                kind: TypeKind.SCALAR,
                name: "ID",
              },
            },
          },
        } as IntrospectionField),
      ).toEqualGraphql("[ID!]");
    });
  });

  describe("buildArgs", () => {
    it("returns an empty array when query does not have any arguments", () => {
      expect(buildArgs({ args: [] } as Query)).toEqual([]);
    });

    it("returns an array of args correctly filtered when query has arguments", () => {
      expect(
        buildArgs({ args: [{ name: "foo" }, { name: "bar" }] } as Query, {
          foo: "foo_value",
        }),
      ).toEqualGraphql(["foo: $foo"]);
    });
  });

  describe("buildApolloArgs", () => {
    it("returns an empty array when query does not have any arguments", () => {
      expect(buildApolloArgs({ args: [] })).toEqualGraphql([]);
    });

    it("returns an array of args correctly filtered when query has arguments", () => {
      expect(
        buildApolloArgs(
          {
            args: [
              {
                name: "foo",
                type: {
                  kind: TypeKind.NON_NULL,
                  ofType: {
                    kind: TypeKind.SCALAR,
                    name: "Int",
                  },
                },
              },
              {
                name: "barId",
                type: { kind: TypeKind.SCALAR, name: "ID" },
              },
              {
                name: "barIds",
                type: {
                  kind: TypeKind.LIST,
                  ofType: {
                    kind: TypeKind.NON_NULL,
                    ofType: {
                      kind: TypeKind.SCALAR,
                      name: "ID",
                    },
                  },
                },
              },
              { name: "bar" },
            ],
          } as Query,
          { foo: "foo_value", barId: 100, barIds: [101, 102] },
        ),
      ).toEqualGraphql(["$foo: Int!", "$barId: ID", "$barIds: [ID!]"]);
    });
  });

  describe("buildFields", () => {
    it("returns an object with the fields to retrieve", () => {
      const introspectionResults: IntrospectionResult = makeIntrospectionResult(
        {
          resources: [{ type: { name: "resourceType", fields: [] } }],
          types: [
            {
              name: "linkedType",
              kind: "OBJECT",
              interfaces: [],
              fields: [
                {
                  name: "id",
                  type: { kind: TypeKind.SCALAR, name: "ID" },
                },
              ].map(makeIntrospectionField),
            },
          ],
        },
      );

      const fields: IntrospectionField[] = [
        {
          type: { kind: TypeKind.SCALAR, name: "ID" },
          name: "id",
        },
        {
          type: { kind: TypeKind.SCALAR, name: "_internalField" },
          name: "foo1",
        },
        {
          type: { kind: TypeKind.OBJECT, name: "linkedType" },
          name: "linked",
        },
        {
          type: { kind: TypeKind.OBJECT, name: "resourceType" },
          name: "resource",
        },
      ].map(makeIntrospectionField);

      expect(buildFields(introspectionResults)(fields)).toEqualGraphql([
        "id",
        `linked { id }`, // currently disabled
        `resource { id }`,
      ]);
    });
  });

  describe("buildGqlQuery", () => {
    const where = { firstName: "foo_value" };

    it("returns the correct query for GET_LIST", () => {
      expect(
        buildGqlQuery(testIntrospection, defaultOurOptions)(
          testUserResource,
          GET_LIST,
          { where },
          null,
        ),
      ).toEqualGraphql(
        gql`
          query users($where: UserWhereInput) {
            items: users(where: $where) {
              id
              email
              firstName
              lastName
              yearOfBirth
              roles {
                id
              }
              gender
              wantsNewsletter
              userSocialMedia {
                id
                instagram
                twitter
                user {
                  id
                }
              }
              blogPosts {
                id
              }
              comments {
                id
              }
              interests
              address {
                street
                city
                countryCode
              }
            }
            total: usersCount(where: $where)
          }
        `,
      );
    });

    it("returns the correct query for GET_LIST with typegraphql count query", () => {
      expect(
        buildGqlQuery(testIntrospection, {...defaultOurOptions, queryDialect: "typegraphql"})(
          testUserResource,
          GET_LIST,
          { where },
          null,
        ),
      ).toEqualGraphql(
        gql`
          query users($where: UserWhereInput) {
            items: users(where: $where) {
              id
              email
              firstName
              lastName
              yearOfBirth
              roles {
                id
              }
              gender
              wantsNewsletter
              userSocialMedia {
                id
                instagram
                twitter
                user {
                  id
                }
              }
              blogPosts {
                id
              }
              comments {
                id
              }
              interests
              address {
                street
                city
                countryCode
              }
            }
            total: aggregateUser(where: $where) {
              count {
                _all
              }
            }
          }
        `,
      );
    });

    it("returns the correct query for GET_LIST when defining a fragment", () => {
      expect(
        buildGqlQuery(testIntrospection, defaultOurOptions)(
          testUserResource,
          GET_LIST,
          { where },
          gqlReal`
            fragment UserWithTwitter on User {
              id
              socialMedia {
                twitter
              }
            }
          `,
        ),
      ).toEqualGraphql(
        gql`
          query users($where: UserWhereInput) {
            items: users(where: $where) {
              id
              socialMedia {
                twitter
              }
            }
            total: usersCount(where: $where)
          }
        `,
      );
    });
    it("returns the correct query for GET_MANY", () => {
      expect(
        buildGqlQuery(testIntrospection, defaultOurOptions)(
          testUserResource,
          GET_MANY,
          { where },
          null,
        ),
      ).toEqualGraphql(
        gql`
          query users($where: UserWhereInput) {
            items: users(where: $where) {
              id
              email
              firstName
              lastName
              yearOfBirth
              roles {
                id
              }
              gender
              wantsNewsletter
              userSocialMedia {
                id
                instagram
                twitter
                user {
                  id
                }
              }
              blogPosts {
                id
              }
              comments {
                id
              }
              interests
              address {
                street
                city
                countryCode
              }
            }
            total: usersCount(where: $where)
          }
        `,
      );
    });
    it("returns the correct query for GET_MANY_REFERENCE", () => {
      expect(
        buildGqlQuery(testIntrospection, defaultOurOptions)(
          testUserResource,
          GET_MANY_REFERENCE,
          { where },
          null,
        ),
      ).toEqualGraphql(
        gql`
          query users($where: UserWhereInput) {
            items: users(where: $where) {
              id
              email
              firstName
              lastName
              yearOfBirth
              roles {
                id
              }
              gender
              wantsNewsletter
              userSocialMedia {
                id
                instagram
                twitter
                user {
                  id
                }
              }
              blogPosts {
                id
              }
              comments {
                id
              }
              interests
              address {
                street
                city
                countryCode
              }
            }
            total: usersCount(where: $where)
          }
        `,
      );
    });
    it("returns the correct query for GET_ONE", () => {
      expect(
        buildGqlQuery(testIntrospection, defaultOurOptions)(
          testUserResource,
          GET_ONE,

          { where },
          null,
        ),
      ).toEqualGraphql(
        gql`
          query user($where: UserWhereUniqueInput!) {
            data: user(where: $where) {
              id
              email
              firstName
              lastName
              yearOfBirth
              roles {
                id
              }
              gender
              wantsNewsletter
              userSocialMedia {
                id
                instagram
                twitter
                user {
                  id
                }
              }
              blogPosts {
                id
              }
              comments {
                id
              }
              interests
              address {
                street
                city
                countryCode
              }
            }
          }
        `,
      );
    });
    it("returns the correct query for UPDATE", () => {
      expect(
        buildGqlQuery(testIntrospection, defaultOurOptions)(
          testUserResource,
          UPDATE,
          { where, data: {} },
          null,
        ),
      ).toEqualGraphql(
        gql`
          mutation updateOneUser(
            $data: UserUpdateInput!
            $where: UserWhereUniqueInput!
          ) {
            data: updateOneUser(data: $data, where: $where) {
              id
              email
              firstName
              lastName
              yearOfBirth
              roles {
                id
              }
              gender
              wantsNewsletter
              userSocialMedia {
                id
                instagram
                twitter
                user {
                  id
                }
              }
              blogPosts {
                id
              }
              comments {
                id
              }
              interests
              address {
                street
                city
                countryCode
              }
            }
          }
        `,
      );
    });
    it("returns the correct query for CREATE", () => {
      expect(
        buildGqlQuery(testIntrospection, defaultOurOptions)(
          testUserResource,
          CREATE,
          { data: {} },
          null,
        ),
      ).toEqualGraphql(
        gql`
          mutation createOneUser($data: UserCreateInput!) {
            data: createOneUser(data: $data) {
              id
              email
              firstName
              lastName
              yearOfBirth
              roles {
                id
              }
              gender
              wantsNewsletter
              userSocialMedia {
                id
                instagram
                twitter
                user {
                  id
                }
              }
              blogPosts {
                id
              }
              comments {
                id
              }
              interests
              address {
                street
                city
                countryCode
              }
            }
          }
        `,
      );
    });
    it("returns the correct query for DELETE", () => {
      expect(
        buildGqlQuery(testIntrospection, defaultOurOptions)(
          testUserResource,
          DELETE,
          { where },
          null,
        ),
      ).toEqualGraphql(
        gql`
          mutation deleteOneUser($where: UserWhereUniqueInput!) {
            data: deleteOneUser(where: $where) {
              id
            }
          }
        `,
      );
    });

    describe("with prefixed introspections", () => {
      beforeAll(async () => {
        testIntrospection = await getTestIntrospection({
          aliasPrefix: "admin",
        });
        testUserResource = testIntrospection.resources.find(
          (r) => r.type.kind === "OBJECT" && r.type.name === "User",
        );
      });

      it("allows to prefix all queries with a prefix", () => {
        expect(
          buildGqlQuery(testIntrospection, defaultOurOptions)(
            testUserResource,
            GET_LIST,
            { where },
            null,
          ),
        ).toEqualGraphql(
          gql`
            query adminUsers($where: UserWhereInput) {
              items: adminUsers(where: $where) {
                id
                email
                firstName
                lastName
                yearOfBirth
                roles {
                  id
                }
                gender
                wantsNewsletter
                userSocialMedia {
                  id
                  instagram
                  twitter
                  user {
                    id
                  }
                }
                blogPosts {
                  id
                }
                comments {
                  id
                }
                interests
                address {
                  street
                  city
                  countryCode
                }
              }
              total: adminUsersCount(where: $where)
            }
          `,
        );
      });
      it("allows to prefix all mutations with a prefix", () => {
        expect(
          buildGqlQuery(testIntrospection, defaultOurOptions)(
            testUserResource,
            DELETE,
            { where },
            null,
          ),
        ).toEqualGraphql(
          gql`
            mutation adminDeleteOneUser($where: UserWhereUniqueInput!) {
              data: adminDeleteOneUser(where: $where) {
                id
              }
            }
          `,
        );
      });
    });
  });
});
