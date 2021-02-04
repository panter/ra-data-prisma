import { NexusGenArgTypes } from "../generated/nexus";
import { buildWhere } from "./buildWhere";
import { IntrospectionResult, Resource } from "./constants/interfaces";
import { getTestIntrospection } from "./testUtils/getTestIntrospection";

describe("buildWhere", () => {
  let testIntrospection: IntrospectionResult;
  let testUserResource: Resource;
  let testBlogPostResource: Resource;
  let testFilterResource: Resource;

  beforeAll(async () => {
    testIntrospection = await getTestIntrospection();
    testUserResource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "User",
    );
    testBlogPostResource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "BlogPost",
    );
    testFilterResource = testIntrospection.resources.find(
      (r) => r.type.kind === "OBJECT" && r.type.name === "FilteringTest",
    );
  });

  describe("can handle true case insensitive string search", () => {
    it("will use case insensitive search if available", async () => {
      
    });
    it("can explicitly use case sensitive if you can specify", async () => {

    });
    it("defaults back to original pseudo case insensitive on older Prisma versions", async () => {

    });
  });
  describe("properly handles suffixed fields", () => {
    describe("separating suffix from field name", () => {
      it("valid suffix gets separated", async () => {
        const filter = {
          intField_gt: "12",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          intField: {
            gt: 12,
          },
        });
      });
      it("invalid suffix gets ignored", async () => {
        const filter = {
          intField_bt: "12", // "bigger than"
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          intField_bt: {
            equals: 12,
          },
        });
      });
      it("allows underscores in field name with valid suffix", async () => {
        const filter = {
          snake_field_gt: "12",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          snake_field: {
            gt: 12,
          },
        });
      });
      it("allows underscores in field name with invalid suffix", async () => {
        const filter = {
          snake_field_bt: "12", // "bigger than"
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          snake_field_bt: {
            equals: 12,
          },
        });
      });
    });
    describe("reverts to handling original field when", () => {
      it("no comparator is provided", async () => {
        const filter = {
          intField: "12",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          intField: {
            equals: 12,
          },
        });
      });
      it("no comparator is recognized", async () => {
        const filter = {
          intField_bt: "12",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          intField_bt: {
            equals: 12,
          },
        });
      });
      it("separated field doesn't exist", async () => {
        const filter = {
          myIntField_gt: "12",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({});
      });
      it("separated field exists but its type doesn't support comparison", async () => {
        const filter = {
          boolField_gt: "12",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({});
      });
      it("value is an object", async () => {
        const filter = {
          intField_gt: {
            value: "12",
          },
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({});
      });
      it("value is an array", async () => {
        const filter = {
          intField_gt: ["12", "13"],
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({});
      });
    });
    it("in case of conflict favors comparison", async () => {
      const filter = {
        intField_lt: "12",
      };
      const result = buildWhere(filter, testFilterResource, testIntrospection);

      // intField is Int
      // intField_lt is String
      // => picks lt comparison on Int
      expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
        intField: {
          lt: 12,
        },
      });
    });
    it("works with Boolean fields and explicit equal comparison", async () => {
      const filter = {
        boolField_equals: "true",
      };

      const result = buildWhere(filter, testFilterResource, testIntrospection);

      expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
        boolField: {
          equals: true,
        },
      });
    });
    describe("works with String fields", () => {
      it("equals", async () => {
        const filter = {
          stringField_equals: "aBc",
        };

        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          OR: [
            {
              stringField: {
                equals: "aBc",
              }
            },
            {
              stringField: {
                equals: "abc"
              }
            },
            {
              stringField: {
                equals: "ABc"
              }
            }
          ]
        });
      });
      it("greater than", async () => {
        const filter = {
          stringField_gt: "aBc",
        };

        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          OR: [
            {
              stringField: {
                gt: "aBc",
              }
            },
            {
              stringField: {
                gt: "abc",
              }
            },
            {
              stringField: {
                gt: "ABc",
              }
            }
          ]
        });
      });
      it("greater than or equal", async () => {
        const filter = {
          stringField_gte: "aBc",
        };

        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          OR: [
            {
              stringField: {
                gte: "aBc",
              }
            },
            {
              stringField: {
                gte: "abc",
              }
            },
            {
              stringField: {
                gte: "ABc",
              }
            }
          ]
        });
      });
      it("lesser than", async () => {
        const filter = {
          stringField_lt: "aBc"
        };

        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          OR: [
            {
              stringField: {
                lt: "aBc"
              }
            },
            {
              stringField: {
                lt: "abc"
              }
            },
            {
              stringField: {
                lt: "ABc"
              }
            }
          ]
        });
      });
      it("lesser than or equal", async () => {
        const filter = {
          stringField_lte: "aBc"
        };

        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          OR: [
            {
              stringField: {
                lte: "aBc"
              }
            },
            {
              stringField: {
                lte: "abc"
              }
            },
            {
              stringField: {
                lte: "ABc"
              }
            }
          ]
        });
      });
      it("contains", async () => {
        const filter = {
          stringField_contains: "aBc"
        };

        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          OR: [
            {
              stringField: {
                contains: "aBc"
              }
            },
            {
              stringField: {
                contains: "abc"
              }
            },
            {
              stringField: {
                contains: "ABc"
              }
            }
          ]
        });
      });
      it("starts with", async () => {
        const filter = {
          stringField_startsWith: "aBc"
        };

        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          OR: [
            {
              stringField: {
                startsWith: "aBc"
              }
            },
            {
              stringField: {
                startsWith: "abc"
              }
            },
            {
              stringField: {
                startsWith: "ABc"
              }
            }
          ]
        });
      });
      it("ends with", async () => {
        const filter = {
          stringField_endsWith: "aBc"
        };

        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          OR: [
            {
              stringField: {
                endsWith: "aBc"
              }
            },
            {
              stringField: {
                endsWith: "abc"
              }
            },
            {
              stringField: {
                endsWith: "ABc"
              }
            }
          ]
        });
      });
    });
    describe("works with Int fields", () => {
      it("equals", async () => {
        const filter = {
          intField_equals: "12",
        };

        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          intField: {
            equals: 12,
          },
        });
      });
      it("greater than", async () => {
        const filter = {
          intField_gt: "12",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          intField: {
            gt: 12,
          },
        });
      });
      it("greater than or equal", async () => {
        const filter = {
          intField_gte: "12",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          intField: {
            gte: 12,
          },
        });
      });
      it("lesser than", async () => {
        const filter = {
          intField_lt: "12",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          intField: {
            lt: 12,
          },
        });
      });
      it("lesser than or equal", async () => {
        const filter = {
          intField_lte: "12",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          intField: {
            lte: 12,
          },
        });
      });
    });
    describe("works with Float fields", () => {
      it("equals", async () => {
        const filter = {
          floatField_equals: "12.34",
        };

        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          floatField: {
            equals: 12.34,
          },
        });
      });
      it("greater than", async () => {
        const filter = {
          floatField_gt: "12.34",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          floatField: {
            gt: 12.34,
          },
        });
      });
      it("greater than or equal", async () => {
        const filter = {
          floatField_gte: "12.34",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          floatField: {
            gte: 12.34,
          },
        });
      });
      it("lesser than", async () => {
        const filter = {
          floatField_lt: "12.34",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          floatField: {
            lt: 12.34,
          },
        });
      });
      it("lesser than or equal", async () => {
        const filter = {
          floatField_lte: "12.34",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          floatField: {
            lte: 12.34,
          },
        });
      });
    });
    describe("works with DateTime fields", () => {
      it("equals", async () => {
        const filter = {
          dateTimeField_equals: "2020-12-30",
        };

        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          dateTimeField: {
            equals: new Date("2020-12-30"),
          },
        });
      });
      it("greater than", async () => {
        const filter = {
          dateTimeField_gt: "2020-12-30",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          dateTimeField: {
            gt: new Date("2020-12-30"),
          },
        });
      });
      it("greater than or equal", async () => {
        const filter = {
          dateTimeField_gte: "2020-12-30",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          dateTimeField: {
            gte: new Date("2020-12-30"),
          },
        });
      });
      it("lesser than", async () => {
        const filter = {
          dateTimeField_lt: "2020-12-30",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          dateTimeField: {
            lt: new Date("2020-12-30"),
          },
        });
      });
      it("lesser than or equal", async () => {
        const filter = {
          dateTimeField_lte: "2020-12-30",
        };
        const result = buildWhere(filter, testFilterResource, testIntrospection);

        expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
          dateTimeField: {
            lte: new Date("2020-12-30"),
          },
        });
      });
    });
  });

  it("can handle simple float values", async () => {
    const filter = {
      floatField: "12.34",
    };

    const result = buildWhere(filter, testFilterResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
      floatField: {
        equals: 12.34,
      },
    });
  });

  it("can handle simple datetime values", async () => {
    const filter = {
      dateTimeField: "2020-12-30",
    };

    const result = buildWhere(filter, testFilterResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["filteringTests"]["where"]>({
      dateTimeField: {
        equals: new Date("2020-12-30"),
      },
    });
  });

  // below are previous tests which shouldn't be changed and should pass
  it("can handle simple int values", async () => {
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

  it("can handle simple boolean values", async () => {
    const filter = {
      wantsNewsletter: true,
    };
    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      wantsNewsletter: {
        equals: true,
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

  it("allows to filter for one related id in a 1-1 relation", async () => {
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

  it("allows to filter for related ids in a 1-1 reation", async () => {
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

  it("allows to filter for one related id in a 1-many relation", async () => {
    const filter = {
      author: "einstein-id",
    };
    const result = buildWhere(filter, testBlogPostResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["blogPosts"]["where"]>({
      author: {
        id: {
          equals: "einstein-id",
        },
      },
    });
  });

  it("allows to filter for related ids in a 1-many reation", async () => {
    const filter = {
      author: ["einstein-id", "oppenheimer-id"],
    };

    const result = buildWhere(filter, testBlogPostResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["blogPosts"]["where"]>({
      author: {
        id: {
          in: ["einstein-id", "oppenheimer-id"],
        },
      },
    });
  });

  it("allows to filter for one related id in a n-to-m reation", async () => {
    const filter = {
      roles: "admin",
    };

    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      roles: {
        some: {
          id: {
            equals: "admin",
          },
        },
      },
    });
  });

  it("allows to filter for related ids in a n-to-m reation", async () => {
    const filter = {
      roles: ["admin", "member"],
    };

    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      roles: {
        some: {
          id: {
            in: ["admin", "member"],
          },
        },
      },
    });
  });

  it("allows to use prisma graphql filters", async () => {
    const filter = {
      yearOfBirth: {
        lte: 2020,
        gte: 1900,
      },
    };

    const result = buildWhere(filter, testUserResource, testIntrospection);

    expect(result).toEqual<NexusGenArgTypes["Query"]["users"]["where"]>({
      yearOfBirth: {
        lte: 2020,
        gte: 1900,
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
