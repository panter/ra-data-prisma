import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  UPDATE,
} from "react-admin";
import { NexusGenArgTypes } from "../generated/nexus";
import buildVariables from "./buildVariables";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { getTestIntrospection } from "./testUtils/getTestIntrospection";

describe("buildVariables", () => {
  let testIntrospection: IntrospectionResult;
  let testUserResource: Resource;
  beforeAll(async () => {
    testIntrospection = await getTestIntrospection();
    testUserResource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "User",
    );
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
      const result = buildVariables(testIntrospection)(
        testUserResource,
        GET_LIST,
        params,
      );

      expect(result).toEqual<NexusGenArgTypes["Query"]["users"]>({
        where: {
          yearOfBirth: {
            equals: 1879,
          },
          OR: [
            {
              firstName: {
                contains: "fooBar",
              },
            },
            {
              firstName: {
                contains: "foobar",
              },
            },
            {
              firstName: {
                contains: "FooBar",
              },
            },
          ],
        },
        first: 10,
        orderBy: {
          email: "asc",
        },
        skip: 90,
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
        buildVariables(testIntrospection)(testUserResource, CREATE, params),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
          wantsNewsletter: true,
        },
      });
    });

    it("returns correct variables when linked with other resources", () => {
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
        buildVariables(testIntrospection)(testUserResource, CREATE, params),
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

    it("returns create new many relations", () => {
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
        buildVariables(testIntrospection)(testUserResource, CREATE, params),
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

    it("returns create one to one relation", () => {
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
        buildVariables(testIntrospection)(testUserResource, CREATE, params),
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
        buildVariables(testIntrospection)(testUserResource, UPDATE, params),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          lastName: "Zweistein",
        },
      });
    });

    it("correctly connects new roles", () => {
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
        buildVariables(testIntrospection)(testUserResource, UPDATE, params),
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

    it("correctly connects new socialmedia", () => {
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
        buildVariables(testIntrospection)(testUserResource, UPDATE, params),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          userSocialMedia: {
            connect: { id: "newId" },
          },
        },
      });
    });

    it("correctly update socialmedia", () => {
      const params = {
        data: {
          id: "einstein",
          userSocialMedia: {
            id: "socialId",
            twitter: "new-twitter",
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
        buildVariables(testIntrospection)(testUserResource, UPDATE, params),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          userSocialMedia: {
            update: { twitter: "new-twitter", instagram: "another-instagram" },
          },
        },
      });
    });

    it("correctly disconnects socialmedia", () => {
      const params = {
        data: {
          id: "einstein",
        },
        previousData: {
          userSocialMedia: { id: "oldId", twitter: "t", instagram: "i" },
        },
      };

      expect(
        buildVariables(testIntrospection)(testUserResource, UPDATE, params),
      ).toEqual<NexusGenArgTypes["Mutation"]["updateOneUser"]>({
        where: { id: "einstein" },
        data: {
          userSocialMedia: {
            disconnect: true,
          },
        },
      });
    });
  });

  describe("GET_MANY", () => {
    it("returns correct variables for many relation", () => {
      const params = {
        ids: ["einstein", "rosen", "penrose"],
      };
      expect(
        buildVariables(testIntrospection)(testUserResource, GET_MANY, params),
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
        buildVariables(testIntrospection)(
          testUserResource,
          GET_MANY_REFERENCE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Query"]["users"]>({
        skip: 90,
        first: 10,
        orderBy: { email: "asc" },
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
        buildVariables(testIntrospection)(testUserResource, DELETE, params),
      ).toEqual<NexusGenArgTypes["Mutation"]["deleteOneUser"]>({
        where: { id: "some-id" },
      });
    });
  });
});
