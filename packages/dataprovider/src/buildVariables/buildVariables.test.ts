import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_ONE,
  GET_MANY_REFERENCE,
  UPDATE,
} from "react-admin";
import { NexusGenArgTypes } from "../../generated/nexus";
import { buildVariables } from "./";
import { IntrospectionResult, Resource } from "./../constants/interfaces";
import { getTestIntrospectionNexus } from "../testUtils/getTestIntrospection";
import { CustomizeInputData, OurOptions } from "../types";

describe("buildVariables", () => {
  let testIntrospection: IntrospectionResult;
  let testUserResource: Resource;
  let testBlogPostCommentResource: Resource;
  const options: OurOptions = {};

  beforeAll(async () => {
    testIntrospection = await getTestIntrospectionNexus();
    testUserResource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "User",
    )!;
    testBlogPostCommentResource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "BlogPostComment",
    )!;
  });

  describe("GET_LIST", () => {
    it("returns first, where, skip and orderBy", async () => {
      //

      const params = {
        pagination: { page: 10, perPage: 10 },
        sort: { field: "email", order: "ASC" },
        filter: {
          yearOfBirth: 1879,
          firstName: "fooBar",
        },
      };
      const result = buildVariables(testIntrospection, options)(
        testUserResource,
        GET_LIST,
        params,
      );

      expect(result).toEqual<NexusGenArgTypes["Query"]["users"]>({
        where: {
          AND: [
            {
              yearOfBirth: {
                equals: 1879,
              },
            },
            {
              firstName: {
                contains: "fooBar",
                mode: "insensitive",
              },
            },
          ],
        },
        take: 10,
        orderBy: [
          {
            email: "asc",
          },
        ],
        skip: 90,
      });
    });

    it("allows sorting by direct properties", async () => {
      //

      const params = {
        pagination: { page: 1, perPage: 10 },
        sort: { field: "text", order: "ASC" },
      };
      const result = buildVariables(testIntrospection, options)(
        testBlogPostCommentResource,
        GET_LIST,
        params,
      );

      expect(result).toEqual<NexusGenArgTypes["Query"]["blogPostComments"]>({
        take: 10,
        skip: 0,
        where: {},
        orderBy: [
          {
            text: "asc",
          },
        ],
      });
    });
    it("allows sorting by relations", async () => {
      //

      const params = {
        pagination: { page: 1, perPage: 10 },
        sort: { field: "post.text", order: "ASC" },
      };
      const result = buildVariables(testIntrospection, options)(
        testBlogPostCommentResource,
        GET_LIST,
        params,
      );

      expect(result).toEqual<NexusGenArgTypes["Query"]["blogPostComments"]>({
        take: 10,
        skip: 0,
        where: {},
        orderBy: [
          {
            post: {
              text: "asc",
            },
          },
        ],
      });
    });
    it("allows sorting by nested relations", async () => {
      //

      const params = {
        pagination: { page: 1, perPage: 10 },
        sort: { field: "post.author.firstName", order: "DESC" },
      };
      const result = buildVariables(testIntrospection, options)(
        testBlogPostCommentResource,
        GET_LIST,
        params,
      );

      expect(result).toEqual<NexusGenArgTypes["Query"]["blogPostComments"]>({
        take: 10,
        skip: 0,
        where: {},
        orderBy: [
          {
            post: {
              author: {
                firstName: "desc",
              },
            },
          },
        ],
      });
    });
  });

  describe("CREATE", () => {
    it("returns correct variables for simple cases", () => {
      const params = {
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
        },
      });
    });

    it("handles dates correctly", () => {
      const date = new Date("2020-06-25");
      const params = {
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
          weddingDate: "2020-06-25",
        },
      };
      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
          weddingDate: date,
        },
      });
    });

    it("automatically converts objects to json string on type missmatch", () => {
      const params = {
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          wantsNewsletter: true,
          firstName: {
            // ok thats a bad example, but it us useful in other cases
            foo: "asdf",
            bar: "bar",
          },
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          wantsNewsletter: true,
          email: "albert.einstein@patentamt-bern.ch",
          firstName: '{"foo":"asdf","bar":"bar"}',
        },
      });
    });

    // one
    it("create a new entity and create also its relation entity", () => {
      const params = {
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: false,
          userSocialMedia: { twitter: "@twitteru", instagram: "@instagramu" },
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: false,
          userSocialMedia: {
            create: { twitter: "@twitteru", instagram: "@instagramu" },
          },
        },
      });
    });

    it("create a new entity and connect an already existing related entity identified by primitive id", () => {
      const params = {
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: false,
          userSocialMedia: "socialId",
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: false,
          userSocialMedia: {
            connect: { id: "socialId" },
          },
        },
      });
    });

    it("create a new entity and connect an already existing related entity identified by object with id property", () => {
      const params = {
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: false,
          userSocialMedia: { id: "socialId" },
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: false,
          userSocialMedia: {
            connect: { id: "socialId" },
          },
        },
      });
    });

    it("create a new entity and create also it's many relation entities when they provided no id", () => {
      const params = {
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: false,
          roles: [{ name: "admin" }, { name: "user" }],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: false,
          roles: {
            create: [{ name: "admin" }, { name: "user" }],
          },
        },
      });
    });

    it("create a new entity and connect many already existing related entities identified by primitive id", () => {
      const params = {
        data: {
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
          email: "albert.einstein@patentamt-bern.ch",
          roles: ["admin"],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
          roles: {
            connect: [{ id: "admin" }],
          },
        },
      });
    });

    it("create a new entity and connect many already existing related entities identified by object with id property", () => {
      const params = {
        data: {
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
          email: "albert.einstein@patentamt-bern.ch",
          roles: [{ id: "admin" }],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
          roles: {
            connect: [{ id: "admin" }],
          },
        },
      });
    });

    it("create a new entity and it's related entities with mixed primitive and object ids", () => {
      const params = {
        data: {
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
          email: "albert.einstein@patentamt-bern.ch",
          roles: [{ id: "admin" }, { name: "User" }, "coordinator"],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
          roles: {
            create: [{ name: "User" }],
            connect: [{ id: "admin" }, { id: "coordinator" }],
          },
        },
      });
    });

    it("create a new entity and connect an already existing related connect-only entity", () => {
      const params = {
        data: {
          text: "The body of the comment",
          post: { id: "postId" },
          author: { id: "userId" },
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testBlogPostCommentResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneBlogPostComment"]>({
        data: {
          text: "The body of the comment",
          post: { connect: { id: "postId" } },
          author: { connect: { id: "userId" } },
        },
      });
    });

    it("create a new entity with an array of enum", () => {
      const params = {
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
          interests: ["TOPIC_ONE", "TOPIC_TWO"],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
          interests: {
            set: ["TOPIC_ONE", "TOPIC_TWO"],
          },
        },
      });
    });

    it("create a new entity with a custom json input type", () => {
      const params = {
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: false,
          address: {
            street: "Fifth Avenue",
            city: "Ney York",
            countryCode: "US",
          },
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          CREATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: false,
          address: {
            street: "Fifth Avenue",
            city: "Ney York",
            countryCode: "US",
          } as any,
        },
      });
    });

    describe("customize input data on create", () => {
      it("allows to customize data on create", () => {
        const params = {
          data: {
            email: "albert.einstein@patentamt-bern.ch",
            firstName: "Albert",
            lastName: "Einstein",
            wantsNewsletter: true,
            company: {
              name: "Einstein Company",
              id: "einstein-company",
            },
          },
        };
        const customizeInputData: CustomizeInputData = {
          User: {
            create: (data, params) => {
              return {
                ...data,
                companies: {
                  connectOrCreate: [
                    {
                      create: params.company,
                      where: {
                        id: params.company.id,
                      },
                    },
                  ],
                },
              };
            },
          },
        };

        expect(
          buildVariables(testIntrospection, {
            ...options,
            customizeInputData,
          })(testUserResource, CREATE, params),
        ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
          data: {
            email: "albert.einstein@patentamt-bern.ch",
            firstName: "Albert",
            lastName: "Einstein",
            wantsNewsletter: true,
            companies: {
              connectOrCreate: [
                {
                  create: {
                    name: "Einstein Company",
                    id: "einstein-company",
                  },
                  where: {
                    id: "einstein-company",
                  },
                },
              ],
            },
          },
        });
      });
    });
  });

  describe("UPDATE", () => {
    it("returns correct variables for simple cases", () => {
      const params = {
        data: {
          id: "einstein",
          firstName: "Albert",
          lastName: "Zweistein",
        },
        previousData: {
          firstName: "Albert",
          lastName: "Einstein",
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          lastName: { set: "Zweistein" },
        },
      });
    });

    it("handles dates correctly", () => {
      const date = new Date("2020-06-25");
      const params = {
        data: {
          id: "einstein",
          weddingDate: "2020-06-25",
        },
      };
      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          weddingDate: { set: date },
        },
      });
    });

    // one

    it("update an entity and change the relation when objects with new id is passed", () => {
      const params = {
        data: {
          id: "einstein",
          userSocialMedia: { id: "newId", twitter: "tw", instagram: "in" },
        },
        previousData: {
          userSocialMedia: { id: "oldId", twitter: "t", instagram: "i" },
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          userSocialMedia: {
            connect: { id: "newId" },
          },
        },
      });
    });

    it("update an entity and change the relation when _id suffixed field is passed", () => {
      const params = {
        data: {
          id: "einstein",
          userSocialMedia_id: "newId",
        },
        previousData: {
          userSocialMedia_id: "oldId",
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          userSocialMedia: {
            connect: { id: "newId" },
          },
        },
      });
    });
    it("throws when both suffixed and non suffixed version is passed", () => {
      const params = {
        data: {
          id: "einstein",
          userSocialMedia_id: "newId",
          userSocialMedia: {
            id: "newId",
          },
        },
        previousData: {
          userSocialMedia_id: "oldId",
        },
      };
      const func = () =>
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        );
      expect(func).toThrow();
    });

    it("update an entity and update also it's related entity when id is the same", () => {
      const params = {
        data: {
          id: "einstein",
          userSocialMedia: {
            id: "socialId",
            twitter: "another-twitter",
            instagram: "another-instagram",
          },
        },
        previousData: {
          userSocialMedia: {
            id: "socialId",
            twitter: "twitter",
            instagram: "instagram",
          },
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          userSocialMedia: {
            update: {
              twitter: {
                set: "another-twitter",
              },
              instagram: {
                set: "another-instagram",
              },
            },
          },
        },
      });
    });

    it("update an entity and create also new related entity when provided no id", () => {
      const params = {
        data: {
          id: "einstein",
          userSocialMedia: {
            twitter: "new-twitter",
            instagram: "new-instagram",
          },
        },
        previousData: {
          userSocialMedia: {
            id: "socialId",
            twitter: "twitter",
            instagram: "instagram",
          },
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          userSocialMedia: {
            create: { twitter: "new-twitter", instagram: "new-instagram" },
          },
        },
      });
    });

    it("update an entity and disconnect the related entity (if disconnect operation is present)", () => {
      const params = {
        data: {
          id: "einstein",
        },
        previousData: {
          userSocialMedia: { id: "oldId", twitter: "t", instagram: "i" },
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          userSocialMedia: {
            disconnect: true,
          },
        },
      });
    });

    it("update an entity and delete the related entity (if disconnect operation is not present)", () => {
      const params = {
        data: {
          id: "einstein",
        },
        previousData: {
          site: { id: 123, url: "thor.com", name: "Theory of relativity" },
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          site: {
            delete: true,
          },
        },
      });
    });

    //many
    it("update an entity and change it's many relation entities", () => {
      const params = {
        data: {
          id: "einstein",
          roles: ["physicist", "human"],
        },
        previousData: {
          roles: ["student", "human"],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          roles: {
            connect: [
              {
                id: "physicist",
              },
            ],
            disconnect: [
              {
                id: "student",
              },
            ],
          },
        },
      });
    });

    it("update an entity and update also it's related entities", () => {
      const params = {
        data: {
          id: "einstein",
          roles: [
            { id: "student", name: "Student Role" },
            { id: "human", name: "Human" },
          ],
        },
        previousData: {
          roles: [
            { id: "student", name: "Student" },
            { id: "human", name: "Human" },
          ],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          roles: {
            update: [
              {
                where: { id: "student" },
                data: {
                  name: {
                    set: "Student Role",
                  },
                },
              },
            ],
          },
        },
      });
    });

    it("update an entity and creates also new related entities if they provide no id", () => {
      const params = {
        data: {
          id: "einstein",
          roles: [{ name: "Student Role" }, { id: "human", name: "Human" }],
          blogPosts: [{ text: "Lorem ipsum", title: "My super post" }],
        },
        previousData: {
          roles: [{ id: "human", name: "Human" }],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          roles: {
            create: [{ name: "Student Role" }],
          },
          blogPosts: {
            create: [{ text: "Lorem ipsum", title: "My super post" }],
          },
        },
      });
    });

    it("update an entity and creates, update and disconnects related entities accordingly", () => {
      const params = {
        data: {
          id: "einstein",
          roles: [
            { name: "Student Role" },
            { id: "panter", name: "Panter" },
            { id: "manul", name: "Manul is a cat" },
          ],
        },
        previousData: {
          roles: [
            { id: "human", name: "Human" },
            { id: "manul", name: "Manul" },
          ],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          roles: {
            connect: [{ id: "panter" }],
            create: [{ name: "Student Role" }],
            disconnect: [{ id: "human" }],
            update: [
              {
                where: { id: "manul" },
                data: {
                  name: {
                    set: "Manul is a cat",
                  },
                },
              },
            ],
          },
        },
      });
    });

    it("update an entity and connects and disconnects entities when _ids array is passed", () => {
      const params = {
        data: {
          id: "einstein",
          roles_ids: ["professor", "husband", "human"],
        },
        previousData: {
          roles_ids: ["human", "student"],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          roles: {
            connect: [{ id: "professor" }, { id: "husband" }],
            disconnect: [{ id: "student" }],
          },
        },
      });
    });

    it("update an entity and it's related entities accordingly even with mixed primitive and object ids", () => {
      const params = {
        data: {
          id: "einstein",
          roles: [
            { name: "Student Role" },
            "panter",
            { id: "manul", name: "Manul is a cat" },
          ],
        },
        previousData: {
          roles: [
            { id: "human", name: "Human" },
            { id: "manul", name: "Manul" },
          ],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          roles: {
            create: [{ name: "Student Role" }],
            connect: [{ id: "panter" }],
            disconnect: [{ id: "human" }],
            update: [
              {
                where: { id: "manul" },
                data: {
                  name: {
                    set: "Manul is a cat",
                  },
                },
              },
            ],
          },
        },
      });
    });

    it("update an entity with an array of enum", () => {
      const params = {
        data: {
          id: "einstein",
          interests: ["TOPIC_THREE"],
        },
        previousData: {
          interests: ["TOPIC_ONE", "TOPIC_TWO"],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          interests: {
            set: ["TOPIC_THREE"],
          },
        },
      });
    });

    it("update an entity with custom json input type", () => {
      const params = {
        data: {
          id: "einstein",
          address: {
            street: "Forth Avenue",
            city: "Ney York",
            countryCode: "US",
          },
        },
        previousData: {
          address: {
            street: "Fifth Avenue",
            city: "Ney York",
            countryCode: "US",
          },
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          address: {
            street: "Forth Avenue",
            city: "Ney York",
            countryCode: "US",
          } as any,
        },
      });
    });

    it("update an entity and delete the related entities if disconnect is not present", () => {
      const params = {
        data: {
          id: "einstein",
          blogPosts: [],
        },
        previousData: {
          blogPosts: [{ id: "oldId" }],
        },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          UPDATE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          blogPosts: {
            delete: [
              {
                id: "oldId",
              },
            ],
          },
        },
      });
    });
    describe("customize input data on update", () => {
      it("allows to customize data on update", () => {
        const params = {
          data: {
            id: "einstein",
            wantsNewsletter: true,
            company: {
              name: "Einstein Company",
              id: "einstein-company",
            },
          },
        };
        const customizeInputData: CustomizeInputData = {
          User: {
            update: (data, params) => {
              return {
                ...data,
                companies: {
                  connectOrCreate: [
                    {
                      create: params.company,
                      where: {
                        id: params.company.id,
                      },
                    },
                  ],
                },
              };
            },
          },
        };

        expect(
          buildVariables(testIntrospection, {
            ...options,
            customizeInputData,
          })(testUserResource, UPDATE, params),
        ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
          where: {
            id: "einstein",
          },
          data: {
            wantsNewsletter: {
              set: true,
            },
            companies: {
              connectOrCreate: [
                {
                  create: {
                    name: "Einstein Company",
                    id: "einstein-company",
                  },
                  where: {
                    id: "einstein-company",
                  },
                },
              ],
            },
          },
        });
      });
    });
  });

  describe("GET_ONE", () => {
    it("returns correct variables for one record that has a string id", () => {
      const params = {
        id: "some-id",
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          GET_ONE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Query"]["user"]>({
        where: { id: "some-id" },
      });
    });

    it("returns correct variables for one record that has a integer id", () => {
      const params = {
        id: 1234,
      };
      const resource = testIntrospection.resources.find(
        (r) =>
          r.type.kind === "OBJECT" &&
          r.type.name === "SomePublicRecordWithIntId",
      )!;
      expect(
        buildVariables(testIntrospection, options)(resource, GET_ONE, params),
      ).toEqual<NexusGenArgTypes["Query"]["somePublicRecordWithIntId"]>({
        where: { id: 1234 },
      });
    });
    it("returns correct variables for one record that has a integer id even if it comes as a string", () => {
      const params = {
        id: "1234",
      };
      const resource = testIntrospection.resources.find(
        (r) =>
          r.type.kind === "OBJECT" &&
          r.type.name === "SomePublicRecordWithIntId",
      )!;
      const result = buildVariables(testIntrospection, options)(
        resource,
        GET_ONE,
        params,
      );
      expect(result).toEqual<
        NexusGenArgTypes["Query"]["somePublicRecordWithIntId"]
      >({
        where: { id: 1234 },
      });
    });
  });

  describe("GET_MANY", () => {
    it("returns correct variables for many relation", () => {
      const params = {
        ids: ["einstein", "rosen", "penrose"],
      };
      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          GET_MANY,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Query"]["users"]>({
        where: { id: { in: ["einstein", "rosen", "penrose"] } },
      });
    });
  });

  describe("GET_MANY_REFERENCE", () => {
    it("returns correct variables for many relation reference", () => {
      const params = {
        target: "roles",
        id: "roleId",
        pagination: { page: 10, perPage: 10 },
        sort: { field: "email", order: "ASC" },
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          GET_MANY_REFERENCE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Query"]["users"]>({
        skip: 90,
        take: 10,
        orderBy: [{ email: "asc" }],
        where: { roles: { some: { id: { equals: "roleId" } } } },
      });
    });
  });

  describe("DELETE", () => {
    it("returns correct variables", () => {
      const params = {
        id: "some-id",
      };

      expect(
        buildVariables(testIntrospection, options)(
          testUserResource,
          DELETE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Mutation"]["deleteOneUser"]>({
        where: { id: "some-id" },
      });
    });
  });
});
