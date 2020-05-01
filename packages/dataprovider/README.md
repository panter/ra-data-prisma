# `@ra-data-prisma/dataprovider`

Data provider for [react admin](https://github.com/marmelab/react-admin) 

## Usage




`yarn add @ra-data-prisma/dataprovider`

```
import buildGraphQLProvider from '@ra-data-prisma/dataprovider'



const dataprovider = await buildGraphQLProvider({
    clientOptions: { uri: "/api/graphql" }
})

```

and add it to your admin app. We suggest to use a hook for that:

```
// useDataprovider.ts
import buildGraphQLProvider from "@ra-data-prisma/dataprovider"
import { useEffect, useState } from "react"

export default () => {
  const [dataProvider, setDataProvider] = useState()

  useEffect(() => {
    buildGraphQLProvider({
      clientOptions: { uri: "/api/graphql" } as any,
    }).then((p) => {
      setDataProvider(() => p)
    })
  }, [])
  return dataProvider
}


```

and then in our admin app:

```

import React, { Component } from "react"

import { Admin, Resource, Datagrid, TextField, Login } from "react-admin"
import { UserList, UserEdit, UserCreate } from "./resources/user"

import useDataProvider from "./useDataProvider"
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


## Relations

If you have relations, you can use `ReferenceArrayField/Input` or `Referenceinput/Field`. Make sure that the reference Model is also compatible (by calling `addCrudResolvers("MyReferenceModel")` from `@ra-data-prisma/backend` on your backend).

### some examples:


*show a list of cities with the country*
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

*show all user roles in the user lis**

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

*edit the roles for a user

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

