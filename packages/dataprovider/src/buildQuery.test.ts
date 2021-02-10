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

    it("allows to use a single custom virtual view resources for one and many", () => {
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

    describe("allows to use different custom virtual view resources", () => {
      it("for get one fetch", () => {
        const buildQuery = buildQueryFactory(testIntrospection, {
          resourceViews: {
            UserWithTwitter: {
              resource: "User",
              fragment: {
                one: gqlReal`
                  fragment OneUserWithTwitter on User {
                    id
                    socialMedia {
                      twitter
                    }
                  }
                `,
                many: gqlReal`
                  fragment ManyUsersWithTwitter on User {
                    id
                    email
                    wantsNewsletter
                    socialMedia {
                      twitter
                    }
                  }
                `,
              },
            },
          },
        });

        const { query } = buildQuery("GET_ONE", "UserWithTwitter", { id: 1 });

        expect(query).toEqualGraphql(gql`
          query user($where: UserWhereUniqueInput!) {
            data: user(where: $where) {
              id
              socialMedia {
                twitter
              }
            }
          }
        `);
      });
      it("for get list fetch", () => {
        const buildQuery = buildQueryFactory(testIntrospection, {
          resourceViews: {
            UserWithTwitter: {
              resource: "User",
              fragment: {
                one: gqlReal`
                  fragment OneUserWithTwitter on User {
                    id
                    socialMedia {
                      twitter
                    }
                  }
                `,
                many: gqlReal`
                  fragment ManyUsersWithTwitter on User {
                    id
                    email
                    wantsNewsletter
                    socialMedia {
                      twitter
                    }
                  }
                `,
              },
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
              email
              wantsNewsletter
              socialMedia {
                twitter
              }
            }
            total: usersCount(where: $where)
          }
        `);
      });
      it("for get many fetch", () => {
        const buildQuery = buildQueryFactory(testIntrospection, {
          resourceViews: {
            UserWithTwitter: {
              resource: "User",
              fragment: {
                one: gqlReal`
                  fragment OneUserWithTwitter on User {
                    id
                    socialMedia {
                      twitter
                    }
                  }
                `,
                many: gqlReal`
                  fragment ManyUsersWithTwitter on User {
                    id
                    email
                    wantsNewsletter
                    socialMedia {
                      twitter
                    }
                  }
                `,
              },
            },
          },
        });

        const { query } = buildQuery("GET_MANY", "UserWithTwitter", {
          ids: [1, 2],
        });

        expect(query).toEqualGraphql(gql`
          query users($where: UserWhereInput) {
            items: users(where: $where) {
              id
              email
              wantsNewsletter
              socialMedia {
                twitter
              }
            }
            total: usersCount(where: $where)
          }
        `);
      });
      it("for get many reference fetch", () => {
        const buildQuery = buildQueryFactory(testIntrospection, {
          resourceViews: {
            UserWithTwitter: {
              resource: "User",
              fragment: {
                one: gqlReal`
                  fragment OneUserWithTwitter on User {
                    id
                    socialMedia {
                      twitter
                    }
                  }
                `,
                many: gqlReal`
                  fragment ManyUsersWithTwitter on User {
                    id
                    email
                    wantsNewsletter
                    socialMedia {
                      twitter
                    }
                  }
                `,
              },
            },
          },
        });

        const { query } = buildQuery("GET_MANY_REFERENCE", "UserWithTwitter", {
          pagination: {
            page: 1,
            perPage: 50,
          },
          sort: {},
          id: 1,
          target: "id",
        });

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
              email
              wantsNewsletter
              socialMedia {
                twitter
              }
            }
            total: usersCount(where: $where)
          }
        `);
      });
      describe("should throw an error if only one fragment is defined", () => {
        it("only one", () => {
          const buildQuery = buildQueryFactory(testIntrospection, {
            resourceViews: {
              UserWithTwitter: {
                resource: "User",
                // @ts-ignore
                fragment: {
                  one: gqlReal`
                    fragment OneUserWithTwitter on User {
                      id
                      socialMedia {
                        twitter
                      }
                    }
                  `,
                },
              },
            },
          });

          expect(() => {
            buildQuery("GET_LIST", "UserWithTwitter", {
              pagination: {
                page: 1,
                perPage: 50,
              },
              filter: {},
              sort: {},
            } as GetListParams);
          }).toThrowError(
            "Error in resource view UserWithTwitter - you either must specify both 'one' and 'many' fragments or use a single fragment for both.",
          );
        });
        it("only many", () => {
          const buildQuery = buildQueryFactory(testIntrospection, {
            resourceViews: {
              UserWithTwitter: {
                resource: "User",
                // @ts-ignore
                fragment: {
                  many: gqlReal`
                    fragment ManyUsersWithTwitter on User {
                      id
                      email
                      wantsNewsletter
                      socialMedia {
                        twitter
                      }
                    }
                  `,
                },
              },
            },
          });

          expect(() => {
            buildQuery("GET_LIST", "UserWithTwitter", {
              pagination: {
                page: 1,
                perPage: 50,
              },
              filter: {},
              sort: {},
            } as GetListParams);
          }).toThrowError(
            "Error in resource view UserWithTwitter - you either must specify both 'one' and 'many' fragments or use a single fragment for both.",
          );
        });
      });
    });
  });
});
