import { buildQueryFactory } from "./buildQuery";
import gql from "plain-tag";
import gqlReal from "graphql-tag";
import { GetListParams } from "./buildVariables";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { getTestIntrospection } from "./testUtils/getTestIntrospection";

import "./testUtils/testTypes";
import { defaultOurOptions } from "./buildDataProvider";

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
      buildQueryFactory(testIntrospection, defaultOurOptions)(
        "GET_LIST",
        "Airplane",
        {} as any,
      ),
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
          ...defaultOurOptions,
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

    it("enables to whitelist fields", () => {
      const buildQuery = buildQueryFactory(testIntrospection, {
        ...defaultOurOptions,
        resourceViews: {
          UserWithTwitter: {
            resource: "User",
            fragment: {
              type: "whitelist",
              fields: ["id", "firstName", "lastName", "userSocialMedia"],
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
          $orderBy: [UserOrderByWithRelationInput!]
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
            firstName
            lastName
            userSocialMedia {
              id
              instagram
              twitter
              user {
                id
              }
            }
          }
          total: usersCount(where: $where)
        }
      `);
    });

    it("enables to blacklist fields", () => {
      const buildQuery = buildQueryFactory(testIntrospection, {
        ...defaultOurOptions,
        resourceViews: {
          UserWithTwitter: {
            resource: "User",
            fragment: {
              type: "blacklist",
              fields: [
                "userSocialMedia",
                "blogPosts",
                "comments",
                "companies",
                "address",
                "roles",
              ],
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
          $orderBy: [UserOrderByWithRelationInput!]
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
            firstName
            lastName
            yearOfBirth

            gender
            wantsNewsletter

            interests
            weddingDate
          }
          total: usersCount(where: $where)
        }
      `);
    });

    it("allows to use a single custom virtual view resources for one and many", () => {
      const buildQuery = buildQueryFactory(testIntrospection, {
        ...defaultOurOptions,
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
          $orderBy: [UserOrderByWithRelationInput!]
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
          ...defaultOurOptions,
          resourceViews: {
            UserWithTwitter: {
              resource: "User",
              fragment: {
                one: gqlReal`
                  fragment OneUserWithTwitter on User {
                    id
                    userSocialMedia {
                      twitter
                    }
                  }
                `,
                many: gqlReal`
                  fragment ManyUsersWithTwitter on User {
                    id
                    email
                    wantsNewsletter
                    userSocialMedia {
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
              userSocialMedia {
                twitter
              }
            }
          }
        `);
      });
      it("for get list fetch", () => {
        const buildQuery = buildQueryFactory(testIntrospection, {
          ...defaultOurOptions,
          resourceViews: {
            UserWithTwitter: {
              resource: "User",
              fragment: {
                one: gqlReal`
                  fragment OneUserWithTwitter on User {
                    id
                    userSocialMedia {
                      twitter
                    }
                  }
                `,
                many: gqlReal`
                  fragment ManyUsersWithTwitter on User {
                    id
                    email
                    wantsNewsletter
                    userSocialMedia {
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
            $orderBy: [UserOrderByWithRelationInput!]
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
              userSocialMedia {
                twitter
              }
            }
            total: usersCount(where: $where)
          }
        `);
      });
      it("for get list fetch with typegraphql count option", () => {
        const buildQuery = buildQueryFactory(testIntrospection, {
          queryDialect: "typegraphql",
          resourceViews: {
            UserWithTwitter: {
              resource: "User",
              fragment: {
                one: gqlReal`
                  fragment OneUserWithTwitter on User {
                    id
                    userSocialMedia {
                      twitter
                    }
                  }
                `,
                many: gqlReal`
                  fragment ManyUsersWithTwitter on User {
                    id
                    email
                    wantsNewsletter
                    userSocialMedia {
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
          sort: { field: "id", order: "ASC" },
        } as GetListParams);

        expect(query).toEqualGraphql(gql`
          query users(
            $where: UserWhereInput
            $orderBy: [UserOrderByWithRelationInput!]
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
              userSocialMedia {
                twitter
              }
            }
            total: aggregateUser(where: $where) {
              count {
                _all
              }
            }
          }
        `);
      });
      it("for get list fetch with typegraphql count option - plural ending in 'ies'", () => {
        const buildQuery = buildQueryFactory(testIntrospection, {
          queryDialect: "typegraphql",
          resourceViews: {
            CompanyWithUser: {
              resource: "Company",
              fragment: {
                one: gqlReal`
                  fragment OneCompanyWithUser on Company {
                    id
                    user {
                      id
                      email
                    }
                  }
                `,
                many: gqlReal`
                  fragment ManyCompaniesWithUser on Company {
                    id
                    user {
                        id
                        email
                    }
                  }
                `,
              },
            },
          },
        });

        const { query } = buildQuery("GET_LIST", "CompanyWithUser", {
          pagination: {
            page: 1,
            perPage: 50,
          },
          filter: {},
          sort: { field: "id", order: "ASC" },
        } as GetListParams);

        expect(query).toEqualGraphql(gql`
          query companies(
            $where: CompanyWhereInput
            $orderBy: [CompanyOrderByWithRelationInput!]
            $take: Int
            $skip: Int
          ) {
            items: companies(
              where: $where
              orderBy: $orderBy
              take: $take
              skip: $skip
            ) {
              id
              user {
                id
                email
              }
            }
            total: aggregateCompany(where: $where) {
              count {
                _all
              }
            }
          }
        `);
      });

      it("for get list fetch with typegraphql count option, without order", () => {
        const buildQuery = buildQueryFactory(testIntrospection, {
          queryDialect: "typegraphql",
          resourceViews: {
            UserWithTwitter: {
              resource: "User",
              fragment: {
                one: gqlReal`
                  fragment OneUserWithTwitter on User {
                    id
                    userSocialMedia {
                      twitter
                    }
                  }
                `,
                many: gqlReal`
                  fragment ManyUsersWithTwitter on User {
                    id
                    email
                    wantsNewsletter
                    userSocialMedia {
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
          query users($where: UserWhereInput, $take: Int, $skip: Int) {
            items: users(where: $where, take: $take, skip: $skip) {
              id
              email
              wantsNewsletter
              userSocialMedia {
                twitter
              }
            }
            total: aggregateUser(where: $where) {
              count {
                _all
              }
            }
          }
        `);
      });

      it("for get many fetch", () => {
        const buildQuery = buildQueryFactory(testIntrospection, {
          ...defaultOurOptions,
          resourceViews: {
            UserWithTwitter: {
              resource: "User",
              fragment: {
                one: gqlReal`
                  fragment OneUserWithTwitter on User {
                    id
                    userSocialMedia {
                      twitter
                    }
                  }
                `,
                many: gqlReal`
                  fragment ManyUsersWithTwitter on User {
                    id
                    email
                    wantsNewsletter
                    userSocialMedia {
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
              userSocialMedia {
                twitter
              }
            }
            total: usersCount(where: $where)
          }
        `);
      });
      it("for get many reference fetch", () => {
        const buildQuery = buildQueryFactory(testIntrospection, {
          ...defaultOurOptions,
          resourceViews: {
            UserWithTwitter: {
              resource: "User",
              fragment: {
                one: gqlReal`
                  fragment OneUserWithTwitter on User {
                    id
                    userSocialMedia {
                      twitter
                    }
                  }
                `,
                many: gqlReal`
                  fragment ManyUsersWithTwitter on User {
                    id
                    email
                    wantsNewsletter
                    userSocialMedia {
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
            $orderBy: [UserOrderByWithRelationInput!]
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
              userSocialMedia {
                twitter
              }
            }
            total: usersCount(where: $where)
          }
        `);
      });
      describe("supports defining only one or many", () => {
        it("uses the fragment for one, but the default for many", () => {
          const buildQuery = buildQueryFactory(testIntrospection, {
            resourceViews: {
              UserWithTwitter: {
                resource: "User",
                // @ts-ignore
                fragment: {
                  one: gqlReal`
                    fragment OneUserWithTwitter on User {
                      id
                      userSocialMedia {
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
              $orderBy: [UserOrderByWithRelationInput!]
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
                companies {
                  id
                }
                interests
                weddingDate
                address {
                  street
                  city
                  countryCode
                }
              }
            }
          `);

          const { query: oneQuery } = buildQuery("GET_ONE", "UserWithTwitter", {
            pagination: {
              page: 1,
              perPage: 50,
            },
            filter: {},
            sort: {},
          } as GetListParams);
          expect(oneQuery).toEqualGraphql(gql`
            query user($where: UserWhereUniqueInput!) {
              data: user(where: $where) {
                id
                userSocialMedia {
                  twitter
                }
              }
            }
          `);
        });
      });
    });
  });
});
