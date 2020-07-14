import { NexusGenArgTypes } from "../generated/nexus";
import { buildWhere } from "./buildWhere";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { getTestIntrospection } from "./testUtils/getTestIntrospection";

describe("buildWhere", () => {
  let testIntrospection: IntrospectionResult;
  let testUserResource: Resource;
  beforeAll(async () => {
    testIntrospection = await getTestIntrospection();
    testUserResource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "User",
    );
  });

  it("can handle simple number values", async () => {
    //

    const filter = {
      yearOfBirth: 1879,
    };
    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      yearOfBirth: {
        equals: 1879,
      },
    });
  });

  it("arrays are interpreted as or", async () => {
    const filter = {
      yearOfBirth: [1879, 1920],
    };
    const result = buildWhere(filter, testUserResource, testIntrospection);
    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      OR: [
        {
          yearOfBirth: {
            equals: 1879,
          },
        },
        {
          yearOfBirth: {
            equals: 1920,
          },
        },
      ],
    });
  });

  it("returns where with multiple cases when its a string", async () => {
    //

    const filter = {
      yearOfBirth: 1879,
      firstName: "fooBar",
      lastName: "einstein",
    };
    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      AND: [
        {
          yearOfBirth: {
            equals: 1879,
          },
        },
        {
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
        {
          OR: [
            {
              lastName: {
                contains: "einstein",
              },
            },

            {
              lastName: {
                contains: "Einstein",
              },
            },
          ],
        },
      ],
    });
  });

  it("passes the raw query if its compatible", async () => {
    //

    const filter = {
      AND: [
        {
          yearOfBirth: {
            equals: 1879,
          },
        },
        {
          OR: [
            {
              firstName: {
                contains: "bert",
              },
            },
            {
              lastName: {
                contains: "stein",
              },
            },
          ],
        },
      ],
    };
    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      AND: [
        {
          yearOfBirth: {
            equals: 1879,
          },
        },
        {
          OR: [
            {
              firstName: {
                contains: "bert",
              },
            },
            {
              lastName: {
                contains: "stein",
              },
            },
          ],
        },
      ],
    });
  });
  it("handles mix of raw and simple filters", async () => {
    //

    const filter = {
      yearOfBirth: 1879,
      roles: {
        some: {
          id: {
            equals: "admin",
          },
        },
      },
      OR: [
        {
          firstName: "fooBar",
        },
        {
          lastName: {
            startsWith: "Ein",
          },
        },
        {
          firstName: {
            equals: "Albert",
          },
        },
      ],
    };
    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      AND: [
        {
          yearOfBirth: {
            equals: 1879,
          },
        },
        {
          roles: {
            some: {
              id: {
                equals: "admin",
              },
            },
          },
        },
        {
          OR: [
            {
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
            {
              lastName: {
                startsWith: "Ein",
              },
            },
            {
              firstName: {
                equals: "Albert",
              },
            },
          ],
        },
      ],
    });
  });
  it("handles mixes of arrays as well", async () => {
    const filter = {
      yearOfBirth: [1879, 1920],
      firstName: ["albert", "niels"],
    };
    const result = buildWhere(filter, testUserResource, testIntrospection);
    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      AND: [
        {
          OR: [
            {
              yearOfBirth: {
                equals: 1879,
              },
            },
            {
              yearOfBirth: {
                equals: 1920,
              },
            },
          ],
        },
        {
          OR: [
            {
              OR: [
                {
                  firstName: {
                    contains: "albert",
                  },
                },
                {
                  firstName: {
                    contains: "Albert",
                  },
                },
              ],
            },
            {
              OR: [
                {
                  firstName: {
                    contains: "niels",
                  },
                },
                {
                  firstName: {
                    contains: "Niels",
                  },
                },
              ],
            },
          ],
        },
      ],
    });
  });

  it("allows to filter one for related id", async () => {
    const filter = {
      userSocialMedia: "foo",
    };
    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      userSocialMedia: {
        id: {
          equals: "foo",
        },
      },
    });
  });

  it("allows to filter for related ids", async () => {
    const filter = {
      userSocialMedia: ["foo", "bar"],
    };

    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      userSocialMedia: {
        id: {
          in: ["foo", "bar"],
        },
      },
    });
  });

  it("allows to filter nested data as well", async () => {
    //

    const filter = {
      OR: [
        {
          firstName: "fooBar",
        },
        {
          userSocialMedia: {
            instagram: "fooBar",
          },
        },
      ],
    };
    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      OR: [
        {
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
        {
          userSocialMedia: {
            OR: [
              {
                instagram: {
                  contains: "fooBar",
                },
              },
              {
                instagram: {
                  contains: "foobar",
                },
              },
              {
                instagram: {
                  contains: "FooBar",
                },
              },
            ],
          },
        },
      ],
    });
  });

  it("allows to NOT find certain fields", async () => {
    const filter = {
      NOT: [
        {
          yearOfBirth: 1879,
        },
      ],
    };
    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      NOT: [
        {
          yearOfBirth: {
            equals: 1879,
          },
        },
      ],
    });
  });

  describe("q", () => {
    it("is a special query that searches all text fields", () => {
      const filter = {
        q: "stein",
      };
      const result = buildWhere(filter, testUserResource, testIntrospection);

      expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
        AND: [
          {
            OR: [
              {
                OR: [
                  {
                    email: {
                      contains: "stein",
                    },
                  },
                  {
                    email: {
                      contains: "Stein",
                    },
                  },
                ],
              },
              {
                OR: [
                  {
                    firstName: {
                      contains: "stein",
                    },
                  },
                  {
                    firstName: {
                      contains: "Stein",
                    },
                  },
                ],
              },
              {
                OR: [
                  {
                    lastName: {
                      contains: "stein",
                    },
                  },
                  {
                    lastName: {
                      contains: "Stein",
                    },
                  },
                ],
              },
            ],
          },
        ],
      });
    });
    it("does an AND connection on multiple terms", () => {
      const filter = {
        q: "albert stein",
      };
      const result = buildWhere(filter, testUserResource, testIntrospection);

      expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
        AND: [
          {
            OR: [
              {
                OR: [
                  {
                    email: {
                      contains: "albert",
                    },
                  },
                  {
                    email: {
                      contains: "Albert",
                    },
                  },
                ],
              },
              {
                OR: [
                  {
                    firstName: {
                      contains: "albert",
                    },
                  },
                  {
                    firstName: {
                      contains: "Albert",
                    },
                  },
                ],
              },
              {
                OR: [
                  {
                    lastName: {
                      contains: "albert",
                    },
                  },
                  {
                    lastName: {
                      contains: "Albert",
                    },
                  },
                ],
              },
            ],
          },
          {
            OR: [
              {
                OR: [
                  {
                    email: {
                      contains: "stein",
                    },
                  },
                  {
                    email: {
                      contains: "Stein",
                    },
                  },
                ],
              },
              {
                OR: [
                  {
                    firstName: {
                      contains: "stein",
                    },
                  },
                  {
                    firstName: {
                      contains: "Stein",
                    },
                  },
                ],
              },
              {
                OR: [
                  {
                    lastName: {
                      contains: "stein",
                    },
                  },
                  {
                    lastName: {
                      contains: "Stein",
                    },
                  },
                ],
              },
            ],
          },
        ],
      });
    });
    it("also searches int fields if it is a number", () => {
      const filter = {
        q: "albert 1879",
      };
      const result = buildWhere(filter, testUserResource, testIntrospection);

      expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
        AND: [
          {
            OR: [
              {
                OR: [
                  {
                    email: {
                      contains: "albert",
                    },
                  },
                  {
                    email: {
                      contains: "Albert",
                    },
                  },
                ],
              },
              {
                OR: [
                  {
                    firstName: {
                      contains: "albert",
                    },
                  },
                  {
                    firstName: {
                      contains: "Albert",
                    },
                  },
                ],
              },
              {
                OR: [
                  {
                    lastName: {
                      contains: "albert",
                    },
                  },
                  {
                    lastName: {
                      contains: "Albert",
                    },
                  },
                ],
              },
            ],
          },
          {
            OR: [
              {
                OR: [
                  {
                    email: {
                      contains: "1879",
                    },
                  },
                ],
              },
              {
                OR: [
                  {
                    firstName: {
                      contains: "1879",
                    },
                  },
                ],
              },
              {
                OR: [
                  {
                    lastName: {
                      contains: "1879",
                    },
                  },
                ],
              },
              {
                yearOfBirth: {
                  equals: 1879,
                },
              },
            ],
          },
        ],
      });
    });
  });
});
