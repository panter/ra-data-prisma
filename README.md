# ra-data-prisma

Packages to connect [react-admin](https://marmelab.com/react-admin) 🧩 with [prisma version 2](https://github.com/prisma/prisma) 🌈

- [dataprovider](./packages/dataprovider/README.md): the dataprovider for the frontend
- [backend](./packages/backend/README.md): tools to help making a nexus-prisma backend compatible with the data-provider

## Usage

you need to add the [dataprovider](./packages/dataprovider/README.md) to your react-admin app.
Your backend needs additional resolver for all the resoures you gonna need. [backend](./packages/backend/README.md) package will help you with making your backend compatible with the dataprovider!

See the readmes above for further information.

- [dataprovider (frontend)](./packages/dataprovider/README.md)
- [backend](./packages/backend/README.md)

## Develop

call `yarn install` to set it up.

`yarn test` to run unit tests.

Some tests use an actual introspection result from a nexus-prisma backend. If you want to extend the underlying model do:

- edit [datamodel.prisma](packages/dataprovider/test-data/datamodel.prisma) to alter the underlying prisma model
- edit [testSchema.ts](packages/dataprovider/test-data/testSchema.ts) to modify the nexus types
- call `yarn install` in the root to update all types and the test introspection schema

## Prior work

loosly based on https://github.com/Weakky/ra-data-opencrud, thanks @Weakky
