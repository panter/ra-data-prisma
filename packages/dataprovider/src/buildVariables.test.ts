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
    it("returns first, skip and orderBy", async () => {
      //

      const params = {
        pagination: { page: 10, perPage: 10 },
        sort: { field: "email", order: "ASC" },
      };
      const result = buildVariables(testIntrospection)(
        testUserResource,
        GET_LIST,
        params,
      );

      expect(result).toEqual<NexusGenArgTypes["Query"]["users"]>({
        where: {},
        first: 10,
        orderBy: {
          email: "asc",
        },
        skip: 90,
      });
    });

    describe("filter by string value", () => {
      it("returns where with multiple cases", async () => {
        //

        const params = {
          filter: {
            yearOfBirth: 1879,
            firstName: "fooBar",
          },
          pagination: { page: 10, perPage: 10 },
          sort: { field: "email", order: "DESC" },
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
            email: "desc",
          },
          skip: 90,
        });
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
        },
      };

      expect(
        buildVariables(testIntrospection)(testUserResource, CREATE, params),
      ).toEqual<NexusGenArgTypes["Mutation"]["createOneUser"]>({
        data: {
          email: "albert.einstein@patentamt-bern.ch",
          firstName: "Albert",
          lastName: "Einstein",
        },
      });
    });

    it("returns correct variables when linked with other resources", () => {
      const params = {
        data: {
          firstName: "Albert",
          lastName: "Einstein",
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
          roles: {
            connect: [{ id: "admin" }],
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
  });

  describe("GET_MANY", () => {
    it("returns correct variables", () => {
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
    it("returns correct variables", () => {
      const params = {
        target: "author.id",
        id: "author1",
      };

      expect(
        buildVariables(testIntrospection)(
          testUserResource,
          GET_MANY_REFERENCE,
          params,
        ),
      ).toEqual<NexusGenArgTypes["Query"]["users"]>({
        where: { id: { in: ["author1"] } },
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
