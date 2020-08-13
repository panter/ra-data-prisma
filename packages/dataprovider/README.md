# `@ra-data-prisma/dataprovider`

Data provider for [react admin](https://github.com/marmelab/react-admin)

## Usage

`yarn add @ra-data-prisma/dataprovider`

make sure you backend api is compatible by using the other package in this repo [backend](../backend/README.md)

```
import buildGraphQLProvider from '@ra-data-prisma/dataprovider'

const dataprovider = await buildGraphQLProvider({
    clientOptions: { uri: "/api/graphql" }
})

```

and add it to your admin app. We suggest to use our hook for that:

```

import React, { Component } from "react"

import { Admin, Resource, Datagrid, TextField, Login } from "react-admin"
import { useDataProvider } from "@ra-data-prisma/dataprovider"
import { UserList, UserEdit, UserCreate } from "./resources/user"

import useAuthProvider from "./useAuthProvider"


const AdminApp = () => {
  const dataProvider = useDataProvider()
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

### Search & Filtering

this dataprovider supports all filtering and searching and adds some convenience to it:

- _intelligent handling of strings and ints_: you don't have to specify `equals` or `contains`, we do that for you. The filter can just be `{firstname: "albert"}` and we create the correct graphql query for that
- _case insensitive_: prisma currently does not support case insensitive queries ([but its on the way](https://github.com/prisma/prisma-client-js/issues/690)), so we currently emulate it query for multiple variations of the search term: as-is, fully lowercase, first letter uppercase. This does work in many cases (searching for terms and names), it fails in some. When prisma supports case insensitive querying, we will adopt that
- _q_ query. `q` is a convention in react-admin for general search. We implement this client side. A query on `q` will search all string fields and int fields on a resource. It additionaly splits multiple search terms and does an AND search
- if you need more sophisticated search, you can use normal nexus-prisma graphql queries. You can even mix it with `q` and the intelligent short notation

### Relations

If you have relations, you can use `ReferenceArrayField/Input` or `Referenceinput/Field`. Make sure that the reference Model is also compatible (by calling `addCrudResolvers("MyReferenceModel")` from `@ra-data-prisma/backend` on your backend).

#### some examples:

_show a list of cities with the country_

```

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

```

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

```
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

Lists currently load all fields on a certain type, but linked resources get sanitized to just load the id.

But sometimes you need to load specific nested fields from a certain resource, for example for an export.
Unfortunatly, react-admin has no mechanism to describe what to fetch exactly (see also https://github.com/marmelab/react-admin/issues/4751)

To fix this, you can specify a `ResourceView` to do that:

```
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

Now you have a new virtual resource `AllParticipantsToInvoice` that can be used to display a List. (notice: update/create/delete is currently not specified, so use it read-only ).

it will have exactly this data.

It's currently also possible to override an existing resource, altough this is not battle tested.
