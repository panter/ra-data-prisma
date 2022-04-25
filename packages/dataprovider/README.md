# `@ra-data-prisma/dataprovider`

Data provider for [react admin](https://github.com/marmelab/react-admin)

## Usage

`yarn add @ra-data-prisma/dataprovider`

Make sure your backend API is compatible by using the other package in this repo [backend](../backend/README.md).
Alternativly, you can connect to a backend that was created using [typegraphql-prisma](https://www.npmjs.com/package/typegraphql-prisma). [See Chapter typegraphql-prisma](#usage-with-typegraphql-prisma)

Add the dataprovider to your react-admin app:

```jsx
import React, { Component } from "react"

import { Admin, Resource, Datagrid, TextField, Login } from "react-admin"
import { useDataProvider } from "@ra-data-prisma/dataprovider"
import { UserList, UserEdit, UserCreate } from "./resources/user"

import useAuthProvider from "./useAuthProvider"


const AdminApp = () => {
  const dataProvider = useDataProvider({
    clientOptions: { uri: "/graphql" }
    aliasPrefix: "admin" // 👈 set this, if you use a aliasPrefix on your backend as well (recommended)
    filters: {} // custom filters
    queryDialect: "nexus-prisma" // customize query dialect, defaults to nexus-prisma,
  })
  const authProvider = useAuthProvider()

  if (!dataProvider) {
    return <div>Loading</div>
  }

  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="User"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  )
}

export default AdminApp
```

## Features

### aliasPrefix

Set `aliasPrefix` if you have set it on the backend as well (see [backend](./packages/backend/README.md) ).

### Search & Filtering

this dataprovider supports all filtering and searching and adds some convenience to it:

- _intelligent handling of strings and ints_: you don't have to specify `equals` or `contains`, we do that for you. The filter can just be `{firstname: "albert"}` and we create the correct graphql query for that
- _extended react-admin input fields_: you can directly use comparison operators on `NumberInputs`, `TextInputs` and `DateInputs`. For example, implementing "Created since" filter (`DateInput` on a field `createdAt`) would become
  ```jsx
  <DateInput label="Created since" source="createdAt_gt" />
  ```
  - available comparisons (default comparison is the one which would be used if omitted):
    - ints, floats and datetimes - `gt`, `gte`, `lt`, `lte`, `equals` (default = `equals`)
    - strings - `gt`, `gte`, `lt`, `lte`, `equals`, `contains`, `startsWith`, `endsWith` (default = `contains`)
- _case insensitive_: If your Prisma version supports it (>= 2.8.0), we automatically query strings as case insensitive. If your Prisma version doesn't support it, we emulate it with query for multiple variations of the search term: as-is, fully lowercase, first letter uppercase. This does work in many cases (searching for terms and names), but fails in some.
- _q_ query. `q` is a convention in react-admin for general search. We implement this client side. A query on `q` will search all string fields and int fields on a resource. It additionaly splits multiple search terms and does an AND search
- if you need more sophisticated search, you can use normal nexus-prisma graphql queries. You can even mix it with `q` and the intelligent short notation

### Custom filters

if you have a complex query, you can define custom filters:

```ts
 const dataProvider = useDataProvider({
    clientOptions: { uri: "/graphql" }

    filters: {
      onlyMillenials: (value?: boolean) =>
        value === true
          ? {
              AND: [
                {
                  yearOfBirth: {
                    gte: 1981,
                  },
                },
                {
                  yearOfBirth: {
                    lte: 1996,
                  },
                },
              ],
            }
          : undefined,
    },
  })

```

Then you can use that in a react-admin filter:

```tsx
const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <BooleanInput
      label="Show only millenials"
      source="onlyMillenials"
      alwaysOn
    />
  </Filter>
);
```

**Notice** if you want to omit the filter, return null or undefined.

### Relations

If you have relations, you can use `ReferenceArrayField/Input` or `Referenceinput/Field`. Make sure that the reference Model is also compatible (by calling `addCrudResolvers("MyReferenceModel")` from `@ra-data-prisma/backend` on your backend).

### Sorting by relations

`<List />`s can be sorted by relations. [Enable it in the backend](../backend#enable-sort-by-relation)

#### some examples:

_show a list of cities with the country_

```jsx
export const CityList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField label="Country" source="country" reference="Country">
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);
```

_show all user roles in the user list_

```jsx
export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      <ReferenceArrayField
        alwaysOn
        label="Roles"
        source="roles"
        reference="UserRole"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton />
    </Datagrid>
  </List>
);
```

_edit the roles for a user_

```jsx
export const UserEdit = (props) => (
  <Edit title={<UserTitle />} {...props} undoable={false}>
    <SimpleForm variant="outlined">
      <TextInput source="userName" />
      <ReferenceArrayInput
        label="Roles"
        source="roles"
        reference="UserRole"
        allowEmpty
        fullWidth
      >
        <SelectArrayInput optionText="id" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);
```

### Customize fetching & virtual Resources

react-admin has [no mechanism to tell the dataprovider which fields are requested for any resources](https://github.com/marmelab/react-admin/issues/4751),
we therefore load all fields for a resource. If a field points to an existing `Resource`, we only fetch the id of that resource.

But sometimes you need to customize this behaviour, e.g.:

- you want to load a nested resource with all properties for easier export
- you have large/slow resolvers in some resources and don't want to load these for performance reasons

We therefore provide a way to customize the loaded field-set by defining fragments, blacklists and whitelists.

Additionaly you can use that to create "virtual resources" that show other fields.

#### Basic usage

using one fragment for both one and many:

```ts

buildGraphQLProvider({
  clientOptions: { uri: "/api/graphql" } as any,
  resourceViews: {
    <local resource name>: {
      resource: <backend resource name>,
      fragment: <fragment to use>
    },
  },
});
```

You can also specify different fragments for one and many (or ommit one of those):

```ts

buildGraphQLProvider({
  clientOptions: { uri: "/api/graphql" } as any,
  resourceViews: {
    <local resource name>: {
      resource: <backend resource name>,
      fragment: {
        one: <fragment for one>
        many: <fragment for many>
      }
    },
  },
});
```

- `<backend resource name>`: the name of an existing `Resource` that is defined on the backend
- `<local resource name>`: if you use the same name as `<backend resource name>`, you basically customize that `Resource`. You can chose a different name
  to create a "virtual" resource.
- `<fragment for ...>`: Specifies which fields are loaded when fetching one or many records. See below for available fragment types
- if you only specify `one` or `many`, it will fall back to the default behavior if either would be used.

Gotcha: when using different fragments for one and many, the detail view might be loaded with certain fields being `undefined`. [See this discussion](https://github.com/panter/ra-data-prisma/issues/40#issuecomment-779441155)

#### Fragment type blacklist / whitelist

Use this if you want to exclude certain fields (blacklist) or only include certain fields:

```ts
// whitelist
buildGraphQLProvider({
  clientOptions: { uri: "/api/graphql" } as any,
  resourceViews: {
    Users: {
      resource: "Users",
      fragment: {
        many: {
          type: "whitelist",
          fields: ["id", "firstName", "lastName"],
        },
      },
    },
  },
});
```

```ts
// blacklist
buildGraphQLProvider({
  clientOptions: { uri: "/api/graphql" } as any,
  resourceViews: {
    Users: {
      resource: "Users",
      fragment: {
        many: {
          type: "blacklist",
          fields: ["roles", "avatarImage"],
        },
      },
    },
  },
});
```

#### Fragment type "document"

You can use graphql Fragments (DocumentNode) to presicely select fields.
This is more verbose than using blacklists / whitelists,
but enables you to deeply select fields. Additionaly your IDE can typecheck the fragment
(e.g. when using the apollo extension in vscode).

By default, the fragment replaces the default fields.

```ts
import gql from "graphql-tag";

buildGraphQLProvider({
  clientOptions: { uri: "/api/graphql" } as any,
  resourceViews: {
    Users: {
      resource: "Users",
      fragment: {
        many: {
          type: "document",
          // mode: "replace" <--- that is the default
          doc: gql`
            fragment OneUserWithTwitter on User {
              id
              firstName
              lastName
              userSocialMedia {
                twitter
              }
            }
          `,
        },
      },
    },
  },
});
```

If you want to extend the default fields with a fragment, use `mode: "extend"` instead:

```ts
import gql from "graphql-tag";

buildGraphQLProvider({
  clientOptions: { uri: "/api/graphql" } as any,
  resourceViews: {
    Users: {
      resource: "Users",
      fragment: {
        many: {
          type: "document",
          mode: "extend"
          doc: gql`
            fragment OneUserWithTwitter on User {
              userSocialMedia {
                twitter
              }
            }
          `,
        },
      },
    },
  },
});
```

this will fetch all default fields plus the fields of the fragment. If the fragment declares a field with the same name as a default field, the fragment's field replaces the default one.

#### Virtual Resources

You can use a different name for a resource, that does not exist on the backend:

```ts
// real world example
buildGraphQLProvider({
  clientOptions: { uri: "/api/graphql" } as any,
  resourceViews: {
    ParticipantsToInvoice: {
      resource: "ChallengeParticipation",
      fragment: {
        one: {
          type: "document",
          doc: gql`
            fragment OneBilling on ChallengeParticipation {
              challenge {
                title
              }
              user {
                email
                firstname
                lastname
                school {
                  name
                  address
                  city {
                    name
                    zipCode
                    canton {
                      id
                    }
                  }
                }
              }
              teamsCount
              teams {
                name
              }
            }
          `,
        },
        many: {
          type: "document",
          doc: gql`
            fragment ManyBillings on ChallengeParticipation {
              challenge {
                title
              }
              user {
                email
                firstname
                lastname
                school {
                  name
                  address
                }
              }
              teams {
                name
              }
            }
          `,
        },
      },
    },
  },
});
```

Now you have a new virtual resource `ParticipantsToInvoice` that can be used to display a List or for one record. (notice: update/create/delete is currently not specified, so use it read-only) and it will have exactly this data.

There are two ways you can use this new virtual resource. If you want to use it with React-Admin's query hooks (`useQuery, useGetList, useGetOne`), you need to add this as a new `<Resource>`:

```jsx
<Admin>
  // ...
  <Resource name="ParticipantsToInvoice" />
</Admin>
```

These hooks rely on Redux store and will throw an error if the resource isn't defined.

However, if you directly use data provider calls, you can use it with defined `<Resource>` but also _without_ as it directly calls data provider.

```ts
const dataProvider = useDataProvider(options);
const { data } = await dataProvider.getList("ParticipantsToInvoice", {
  pagination: { page: 1, perPage: 10 },
  sort: { field: "id", order: "ASC" },
  filter: {},
});
```

### Customize input data on create / update (experimental)

You can alter the data sent to create / update mutations.

E.g. Consider having a field `<TextField source="userEmail" />`. `userEmail` does not exist on the Resource,
but you want to use this field to customize the data sent to the backend:

```ts
const dataProvider = useDataProvider({
  customizeInputData: {
    MyResource: {
      create: (data, params) => ({
        ...data,
        user: {
          connectOrCreate: {
            create: {
              email: params.userEmail,
            },
            where: {
              email: params.userEmail,
            },
          },
        },
      }),
      update: // ...
    },
  },
});
```

## Use without introspection

the dataprovider uses introspection in order to create the right queries for your backend.
But if you bundle the IntrospectionSchema or graphql schema, you can use it directly.

### use the introspection schema

you can download a introspection schema (in the json format) with:

`npx apollo schema:download --endpoint=http://localhost:3000 ./src/graphql-schema.json`

and then:

```
import schema from "../graphql-schema.json";

useDataProvider({
 // ...
 introspection: {
   schema: schema.__schema
 }
})
```

### use with graphql file:

this assumes that you can load and bundle the graphql file (e.g. with raw-loader):

```
import { buildSchema, introspectionFromSchema } from "graphql";


useDataProvider({
 // ...
 introspection: {
   schema: introspectionFromSchema(
      buildSchema(
        require("!!raw-loader!../schema.graphql").default
      )
    ).__schema
 }
})
```

## Usage with typegraphql-prisma

(beta)

You can use the dataprovider to connect to a backend that was created using https://www.npmjs.com/package/typegraphql-prisma.
It has a slightly different dialect. Pass the following option to the dataprovider:

```ts
const dataProvider = useDataProvider({
    clientOptions: { uri: "/graphql" }
    queryDialect: "typegraphql" // 👈
})
```
