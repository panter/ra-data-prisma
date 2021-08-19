import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'Json' | 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  UserRole: Prisma.UserRole
  Company: Prisma.Company
  UserSocialMedia: Prisma.UserSocialMedia
  BlogPost: Prisma.BlogPost
  BlogPostComment: Prisma.BlogPostComment
  Cat: Prisma.Cat
  User: Prisma.User
  FilteringTest: Prisma.FilteringTest
  SomePublicRecordWithIntId: Prisma.SomePublicRecordWithIntId
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    userRoles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'users'
      ordering: 'id' | 'name' | 'users'
    }
    companies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'user' | 'userId'
      ordering: 'id' | 'name' | 'user' | 'userId'
    }
    userSocialMedias: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'instagram' | 'twitter' | 'user' | 'userId'
      ordering: 'id' | 'instagram' | 'twitter' | 'user' | 'userId'
    }
    blogPosts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'text' | 'author' | 'authorId' | 'comments'
      ordering: 'id' | 'title' | 'text' | 'author' | 'authorId' | 'comments'
    }
    blogPostComments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'text' | 'post' | 'postId' | 'author' | 'authorId'
      ordering: 'id' | 'text' | 'post' | 'postId' | 'author' | 'authorId'
    }
    cats: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'owner' | 'userId'
      ordering: 'id' | 'name' | 'owner' | 'userId'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'roles' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'userSocialMedia' | 'address' | 'blogPosts' | 'comments' | 'companies' | 'weddingDate' | 'cat'
      ordering: 'id' | 'email' | 'roles' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'userSocialMedia' | 'address' | 'blogPosts' | 'comments' | 'companies' | 'weddingDate' | 'cat'
    }
    filteringTests: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'intField' | 'floatField' | 'stringField' | 'dateTimeField' | 'boolField' | 'intField_lt' | 'intField_bt' | 'snake_field' | 'snake_field_bt'
      ordering: 'id' | 'intField' | 'floatField' | 'stringField' | 'dateTimeField' | 'boolField' | 'intField_lt' | 'intField_bt' | 'snake_field' | 'snake_field_bt'
    }
    somePublicRecordWithIntIds: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title'
      ordering: 'id' | 'title'
    }
  },
  UserRole: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'roles' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'userSocialMedia' | 'address' | 'blogPosts' | 'comments' | 'companies' | 'weddingDate' | 'cat'
      ordering: 'id' | 'email' | 'roles' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'userSocialMedia' | 'address' | 'blogPosts' | 'comments' | 'companies' | 'weddingDate' | 'cat'
    }
  }
  Company: {

  }
  UserSocialMedia: {

  }
  BlogPost: {
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'text' | 'post' | 'postId' | 'author' | 'authorId'
      ordering: 'id' | 'text' | 'post' | 'postId' | 'author' | 'authorId'
    }
  }
  BlogPostComment: {

  }
  Cat: {

  }
  User: {
    roles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'users'
      ordering: 'id' | 'name' | 'users'
    }
    blogPosts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'text' | 'author' | 'authorId' | 'comments'
      ordering: 'id' | 'title' | 'text' | 'author' | 'authorId' | 'comments'
    }
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'text' | 'post' | 'postId' | 'author' | 'authorId'
      ordering: 'id' | 'text' | 'post' | 'postId' | 'author' | 'authorId'
    }
    companies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'user' | 'userId'
      ordering: 'id' | 'name' | 'user' | 'userId'
    }
  }
  FilteringTest: {

  }
  SomePublicRecordWithIntId: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    userRole: 'UserRole'
    userRoles: 'UserRole'
    company: 'Company'
    companies: 'Company'
    userSocialMedia: 'UserSocialMedia'
    userSocialMedias: 'UserSocialMedia'
    blogPost: 'BlogPost'
    blogPosts: 'BlogPost'
    blogPostComment: 'BlogPostComment'
    blogPostComments: 'BlogPostComment'
    cat: 'Cat'
    cats: 'Cat'
    user: 'User'
    users: 'User'
    filteringTest: 'FilteringTest'
    filteringTests: 'FilteringTest'
    somePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    somePublicRecordWithIntIds: 'SomePublicRecordWithIntId'
  },
  Mutation: {
    createOneUserRole: 'UserRole'
    updateOneUserRole: 'UserRole'
    updateManyUserRole: 'AffectedRowsOutput'
    deleteOneUserRole: 'UserRole'
    deleteManyUserRole: 'AffectedRowsOutput'
    upsertOneUserRole: 'UserRole'
    createOneCompany: 'Company'
    updateOneCompany: 'Company'
    updateManyCompany: 'AffectedRowsOutput'
    deleteOneCompany: 'Company'
    deleteManyCompany: 'AffectedRowsOutput'
    upsertOneCompany: 'Company'
    createOneUserSocialMedia: 'UserSocialMedia'
    updateOneUserSocialMedia: 'UserSocialMedia'
    updateManyUserSocialMedia: 'AffectedRowsOutput'
    deleteOneUserSocialMedia: 'UserSocialMedia'
    deleteManyUserSocialMedia: 'AffectedRowsOutput'
    upsertOneUserSocialMedia: 'UserSocialMedia'
    createOneBlogPost: 'BlogPost'
    updateOneBlogPost: 'BlogPost'
    updateManyBlogPost: 'AffectedRowsOutput'
    deleteOneBlogPost: 'BlogPost'
    deleteManyBlogPost: 'AffectedRowsOutput'
    upsertOneBlogPost: 'BlogPost'
    createOneBlogPostComment: 'BlogPostComment'
    updateOneBlogPostComment: 'BlogPostComment'
    updateManyBlogPostComment: 'AffectedRowsOutput'
    deleteOneBlogPostComment: 'BlogPostComment'
    deleteManyBlogPostComment: 'AffectedRowsOutput'
    upsertOneBlogPostComment: 'BlogPostComment'
    createOneCat: 'Cat'
    updateOneCat: 'Cat'
    updateManyCat: 'AffectedRowsOutput'
    deleteOneCat: 'Cat'
    deleteManyCat: 'AffectedRowsOutput'
    upsertOneCat: 'Cat'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneFilteringTest: 'FilteringTest'
    updateOneFilteringTest: 'FilteringTest'
    updateManyFilteringTest: 'AffectedRowsOutput'
    deleteOneFilteringTest: 'FilteringTest'
    deleteManyFilteringTest: 'AffectedRowsOutput'
    upsertOneFilteringTest: 'FilteringTest'
    createOneSomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    updateOneSomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    updateManySomePublicRecordWithIntId: 'AffectedRowsOutput'
    deleteOneSomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    deleteManySomePublicRecordWithIntId: 'AffectedRowsOutput'
    upsertOneSomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
  },
  UserRole: {
    id: 'String'
    name: 'String'
    users: 'User'
  }
  Company: {
    id: 'String'
    name: 'String'
    user: 'User'
    userId: 'String'
  }
  UserSocialMedia: {
    id: 'String'
    instagram: 'String'
    twitter: 'String'
    user: 'User'
    userId: 'String'
  }
  BlogPost: {
    id: 'String'
    title: 'String'
    text: 'String'
    author: 'User'
    authorId: 'String'
    comments: 'BlogPostComment'
  }
  BlogPostComment: {
    id: 'String'
    text: 'String'
    post: 'BlogPost'
    postId: 'String'
    author: 'User'
    authorId: 'String'
  }
  Cat: {
    id: 'String'
    name: 'String'
    owner: 'User'
    userId: 'String'
  }
  User: {
    id: 'String'
    email: 'String'
    roles: 'UserRole'
    firstName: 'String'
    lastName: 'String'
    gender: 'Gender'
    yearOfBirth: 'Int'
    wantsNewsletter: 'Boolean'
    interests: 'Topic'
    userSocialMedia: 'UserSocialMedia'
    address: 'Json'
    blogPosts: 'BlogPost'
    comments: 'BlogPostComment'
    companies: 'Company'
    weddingDate: 'DateTime'
    cat: 'Cat'
  }
  FilteringTest: {
    id: 'Int'
    intField: 'Int'
    floatField: 'Float'
    stringField: 'String'
    dateTimeField: 'DateTime'
    boolField: 'Boolean'
    intField_lt: 'String'
    intField_bt: 'Int'
    snake_field: 'Int'
    snake_field_bt: 'Int'
  }
  SomePublicRecordWithIntId: {
    id: 'Int'
    title: 'String'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  UserRole: Typegen.NexusPrismaFields<'UserRole'>
  Company: Typegen.NexusPrismaFields<'Company'>
  UserSocialMedia: Typegen.NexusPrismaFields<'UserSocialMedia'>
  BlogPost: Typegen.NexusPrismaFields<'BlogPost'>
  BlogPostComment: Typegen.NexusPrismaFields<'BlogPostComment'>
  Cat: Typegen.NexusPrismaFields<'Cat'>
  User: Typegen.NexusPrismaFields<'User'>
  FilteringTest: Typegen.NexusPrismaFields<'FilteringTest'>
  SomePublicRecordWithIntId: Typegen.NexusPrismaFields<'SomePublicRecordWithIntId'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  