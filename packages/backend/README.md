# `@ra-data-prisma/backend`

this package makes your graphql-nexus api compatible with the dataprovider by exposing all needed Queries and Mutations.

## Usage with @nexus/schema

`yarn add @ra-data-prisma/backend`

make sure that you use `@nexus/schema` version `^0.15.0` and `nexus-plugin-prisma` version `^0.18.2`.

**important: set `paginationStrategy: "prisma"` and `experimentalCRUD: true` as options for nexusPrismaPlugin`**

`addCrudResolvers(modelName, options)` will make your Model compatible with react-admin. It will become a `Resource` to react-admin:

```

import { addCrudResolvers } from '@ra-data-prisma/backend';
import { makeSchema } from "@nexus/schema";
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'

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
    addCrudResolvers("User") // 👈 this will expose all required Query's and Mutation's.
  ],
  plugins: [
    nexusSchemaPrisma({
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

use `addCrudResolvers` for every Model that you want to manage in react-admin. Additionaly if you have a relation between two Models, call it for both Models even if you only want to show one in a list

## Security

Make sure that you restrict access to these resolvers using [graphql-shield](https://github.com/maticzav/graphql-shield) (@nexus/schema)

this could look like this (for @nexus/schema)

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

### prefix all queries and mutations

To make it more obvious which resolvers are for the admin area (and therefore need access control), we recommend to set `aliasPrefix`:

_nexus schema_

```

addCrudResolvers("User", {aliasPrefix: "admin"})

```

\*\*Make sure that your dataprovider uses the same `aliasPrefix` as well.

### alternative approach

in larger projects it could be a good idea that you simply expose a second graphql-endpoint that contains only the admin-CRUD queries and mutations.
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
