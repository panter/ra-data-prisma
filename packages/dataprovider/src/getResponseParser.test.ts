import { TypeKind } from "graphql";
import {
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
} from "react-admin";
import getResponseParser from "./getResponseParser";
import { Resource, IntrospectionResult } from "./constants/interfaces";

import { getTestIntrospectionNexus } from "./testUtils/getTestIntrospection";
import { FetchType, OurOptions } from "./types";

const defaultOptions: Required<Pick<OurOptions, "queryDialect">> = {
  queryDialect: "nexus-prisma",
};

const testListTypes = (type: FetchType) => {
  it(`returns the response expected by RA for ${type}`, async () => {
    const testIntrospection: IntrospectionResult =
      await getTestIntrospectionNexus();
    const testUserResource: Resource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "User",
    );

    const response = {
      data: {
        items: [
          {
            id: "user1",
            firstName: "firstName1",
            roles: [
              {
                id: "admin",
              },
            ],
          },
          {
            id: "post2",
            firstName: "firstName2",
            roles: [
              {
                id: "admin",
              },
            ],
          },
        ],
        total: 100,
      },
    };

    expect(
      getResponseParser(testIntrospection, defaultOptions)(
        type,
        testUserResource,
      )(response),
    ).toEqual({
      data: [
        {
          id: "user1",
          firstName: "firstName1",
          roles: ["admin"],
        },
        {
          id: "post2",
          firstName: "firstName2",
          roles: ["admin"],
        },
      ],
      total: 100,
    });
  });

  it(`returns the response expected by RA for ${type}, with typegraphql count format`, async () => {
    const testIntrospection: IntrospectionResult =
      await getTestIntrospectionNexus();
    const testUserResource: Resource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "User",
    );

    const response = {
      data: {
        items: [
          {
            id: "user1",
            firstName: "firstName1",
            roles: [
              {
                id: "admin",
              },
            ],
          },
          {
            id: "post2",
            firstName: "firstName2",
            roles: [
              {
                id: "admin",
              },
            ],
          },
        ],
        total: { _count: { _all: 100 } },
      },
    };

    expect(
      getResponseParser(testIntrospection, { queryDialect: "typegraphql" })(
        type,
        testUserResource,
      )(response),
    ).toEqual({
      data: [
        {
          id: "user1",
          firstName: "firstName1",
          roles: ["admin"],
        },
        {
          id: "post2",
          firstName: "firstName2",
          roles: ["admin"],
        },
      ],
      total: 100,
    });
  });
};

const testSingleTypes = (type: FetchType) => {
  it(`returns the response expected by RA for ${type}`, async () => {
    const testIntrospection: IntrospectionResult =
      await getTestIntrospectionNexus();
    const testUserResource: Resource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "User",
    );
    const response = {
      data: {
        data: {
          id: "user1",
          firstName: "firstName1",
          roles: [
            {
              id: "admin",
            },
          ],
        },
      },
    };
    expect(
      getResponseParser(testIntrospection, defaultOptions)(
        type,
        testUserResource,
      )(response),
    ).toEqual({
      data: {
        id: "user1",
        firstName: "firstName1",
        roles: ["admin"],
      },
    });
  });
};

describe("getResponseParser", () => {
  testListTypes(GET_LIST);
  testListTypes(GET_MANY);
  testListTypes(GET_MANY_REFERENCE);
  testSingleTypes(CREATE);
  testSingleTypes(UPDATE);
  testSingleTypes(DELETE);
});
