# `@ra-data-prisma/backend`

## Usage with @nexus/schema

`yarn add @ra-data-prisma/backend`

make sure that you use `@nexus/schema` version `^0.14.0` and `nexus-prisma` version `^0.15.0`.

**important: set `paginationStrategy: "prisma"` and `experimentalCRUD: true` as options for nexusPrismaPlugin`**

`addCrudResolvers(modelName)` will make your Model compatible with react-admin. It will become a `Resource` to react-admin:

```

import { addCrudResolvers } from '@ra-data-prisma/backend';
import { makeSchema } from "@nexus/schema";
import { nexusPrismaPlugin } from "nexus-prisma";

type User = objectType({
  name: "User",
  definition(t) {
    t.field("id") // be sure to expose id for all entities that you want to dit
    t.field("email")
    t.field("firstname")
    t.field("lastname")
  }
})

const schema = makeSchema({
  types: [
    User,
    addCrudResolvers("User") // 👈 this will expose all needed Query's and Mutation's.
  ],
  plugins: [
    nexusPrismaPlugin({
      experimentalCRUD: true, // required!
      paginationStrategy: "prisma", // required!
      outputs: {
        typegen: typegenPath("./generated/nexus-prisma.ts")
      }
    })
  ],
  typegenAutoConfig: {
     // ...
  },
  outputs: {
      // ...
  }
});


```

`addCrudResolvers` will add all needed `Mutation`'s and `Query`'s.
Make sure that you restrict access to these resolvers using something like [graphql-shield](https://github.com/maticzav/graphql-shield)

this could look like this:

```
import { rule, allow, shield } from "graphql-shield";

const isAdmin = rule({ cache: false })(
  async (parent, args, { user, prisma }: Context, info) => {
    if (!user) {
      return false;
    }

    return prisma.user
      .findOne({ where: { id: user.id } })
      .roles({
        where: {
          id: "admin"
        }
      })
      .then(roles => roles.length > 0);
  }
);


const permissions = shield(
  {
    Query: {
      "*": allow,
      users: isAdmin,
      user: isAdmin,

    },
    Mutation: {
      "*": isAdmin,
        // we highly recommend to whitelist the mutations that should be possible for non-admins
    }
  },
);

export default new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  // ...
})


```

in larger projects its recommended that you simply expose a second graphql-endpoint that contains only the admin-CRUD queries and mutations.
The permission handling will then be very simple:

```
const permissions = shield(
  {
  },
  {
      fallbackRule: isAdmin
  }
);
```

use `addCrudResolvers` for every Model that you want to manage in react-admin. Additionaly if you have a relation between two Models, call it for both Models even if you only want to show one in a list

## Usage with nexus framework (experimental)

```
import { schema, use } from "nexus";

import { prisma } from "nexus-plugin-prisma";

import { shield } from "nexus-plugin-shield"; // recommended, it uses graphql-shield like above

import { nexusAddCrudResolvers } from "@ra-data-prisma/backend";

// import your nexus models here

use(
  prisma({
    paginationStrategy: "prisma",
    features: {
      crud: true,
    },
  })
);

// there is a new key-value api to define all resources:
nexusAddCrudResolvers(schema, {
  User: {
    aliasPrefix: "admin",
  },
  BlogPost: {
    aliasPrefix: "admin",
  },
});
```
