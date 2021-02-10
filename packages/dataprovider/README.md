# `@ra-data-prisma/dataprovider`

Data provider for [react admin](https://github.com/marmelab/react-admin)

## Usage

`yarn add @ra-data-prisma/dataprovider`

Make sure your backend API is compatible by using the other package in this repo [backend](../backend/README.md)

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

### Relations

If you have relations, you can use `ReferenceArrayField/Input` or `Referenceinput/Field`. Make sure that the reference Model is also compatible (by calling `addCrudResolvers("MyReferenceModel")` from `@ra-data-prisma/backend` on your backend).

#### some examples:

_show a list of cities with the country_

```jsx
export const CityList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField
        label="Country"
        source="country"
        reference="Country"
      >
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
)

```

_show all user roles in the user list_

```jsx
export const UserList = (props) => (
  <List {...props} >
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
)
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
)

```

### Virtual Resources / Views (_experimental_)

Lists currently load all fields on a certain type, but linked resources get sanitized to **just load the id**.

But sometimes you need to load specific nested fields from a certain resource, for example for an export.
Unfortunatly, react-admin has no mechanism to describe what to fetch exactly (see also https://github.com/marmelab/react-admin/issues/4751)

To fix this, you can specify a `ResourceView` to do that:

```ts
// real world example
buildGraphQLProvider({
  clientOptions: { uri: "/api/graphql" } as any,
  resourceViews: {
    AllParticipantsToInvoice: {
      resource: "ChallengeParticipation",
      fragment: gql`
        fragment Billing on ChallengeParticipation {
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
  },
})
```
You can also have separate fragments for "one" record and for "many" records (e.g. different views for detail of a resource and for their list):
```ts
// real world example
buildGraphQLProvider({
  clientOptions: { uri: "/api/graphql" } as any,
  resourceViews: {
    ParticipantsToInvoice: {
      resource: "ChallengeParticipation",
      fragment: {
        one: gql`
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
        many: gql`
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
      }
    },
  },
})
```
Now you have a new virtual resource `AllParticipantsToInvoice` that can be used to display a List or for one record. (notice: update/create/delete is currently not specified, so use it read-only) and it will have exactly this data.

There are two ways you can use this new virtual resource. If you want to use it with React-Admin's query hooks (`useQuery, useGetList, useGetOne`), you need to add this as a new `<Resource>`, because these hooks rely on Redux store and it will throw an error if the resource is unknown:
```jsx
<Admin>
  // ...
  <Resource name="ParticipantsToInvoice" />
</Admin>
```

However, if you directly use data provider calls, you can use it with defined `<Resource>` but also _without_ as it directly calls data provider.
```ts
const dataProvider = useDataProvider()
const { data } = await dataProvider.getList('ParticipantsToInvoice', {
  pagination: { page: 1, perPage: 10 },
  sort: { field: 'id', order: 'ASC' },
  filter: {}
}),
```

It's currently also possible to override an existing resource, altough this is not battle tested.
