import { buildQueryFactory } from "./buildQuery";
import gql from "dummy-tag";
import gqlReal from "graphql-tag";
import { GetListParams } from "./buildVariables";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { getTestIntrospection } from "./testUtils/getTestIntrospection";

import "./testUtils/testTypes";
describe("buildQueryFactory", () => {
  let testIntrospection: IntrospectionResult;
  let testUserResource: Resource;
  beforeAll(async () => {
    testIntrospection = await getTestIntrospection();
    testUserResource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "User",
    );
  });

  it("throws an error if resource is unknown", () => {
    expect(() =>
      buildQueryFactory(testIntrospection)("GET_LIST", "Airplane", {} as any),
    ).toThrow(
      "Unknown resource Airplane. Make sure it has been declared on your server side schema. Known resources are User, UserRole",
    );
  });

  /*
  it("throws an error if resource does not have a query or mutation for specified AOR fetch type", () => {
    expect(() =>
      buildQueryFactory(testIntrospection)("CREATE", "Post", {} as any),
    ).toThrow(
      "No query or mutation matching aor fetch type CREATE could be found for resource Post",
    );
  });
  */

  describe("resourceViews", () => {
    it("throws an error if a view resource point to a non-existing resource", () => {
      expect(() =>
        buildQueryFactory(testIntrospection, {
          resourceViews: {
            AirplaneWithManufacturer: {
              resource: "Airplane",
              fragment: gqlReal`
                fragment AirplaneWithManufacturer on Airplane {
                  id
                  manufacturer {
                    id
                  }
                }
              `,
            },
          },
        })("GET_LIST", "AirplaneWithManufacturer", {} as any),
      ).toThrow(
        "Unknown resource Airplane. Make sure it has been declared on your server side schema. Known resources are User, UserRole",
      );
    });

    it("allows to use custom virtual view resources", () => {
      const buildQuery = buildQueryFactory(testIntrospection, {
        resourceViews: {
          UserWithTwitter: {
            resource: "User",
            fragment: gqlReal`
              fragment UserWithTwitter on User {
                id
                socialMedia {
                  twitter
                }
              }
            `,
          },
        },
      });

      const { query } = buildQuery("GET_LIST", "UserWithTwitter", {
        pagination: {
          page: 1,
          perPage: 50,
        },
        filter: {},
        sort: {},
      } as GetListParams);

      expect(query).toEqualGraphql(gql`
        query users(
          $where: UserWhereInput
          $orderBy: [UserOrderByInput!]
          $take: Int
          $skip: Int
        ) {
          items: users(
            where: $where
            orderBy: $orderBy
            take: $take
            skip: $skip
          ) {
            id
            socialMedia {
              twitter
            }
          }
          total: usersCount(where: $where)
        }
      `);
    });
  });
});
