import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
  take?: boolean
  skip?: boolean
  cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'Json'

// Prisma model type definitions
interface PrismaModels {
  UserRole: Prisma.UserRole
  UserSocialMedia: Prisma.UserSocialMedia
  BlogPost: Prisma.BlogPost
  BlogPostComment: Prisma.BlogPostComment
  User: Prisma.User
  SomePublicRecordWithIntId: Prisma.SomePublicRecordWithIntId
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    userRoles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'users'
      ordering: 'id' | 'name'
    }
    userSocialMedias: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'instagram' | 'twitter' | 'user' | 'userId'
      ordering: 'id' | 'instagram' | 'twitter' | 'userId'
    }
    blogPosts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'text' | 'author' | 'authorId' | 'comments'
      ordering: 'id' | 'title' | 'text' | 'authorId'
    }
    blogPostComments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'text' | 'post' | 'postId' | 'author' | 'authorId'
      ordering: 'id' | 'text' | 'postId' | 'authorId'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'roles' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'userSocialMedia' | 'address' | 'blogPosts' | 'comments'
      ordering: 'id' | 'email' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'address'
    }
    somePublicRecordWithIntIds: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title'
      ordering: 'id' | 'title'
    }
  },
  UserRole: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'roles' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'userSocialMedia' | 'address' | 'blogPosts' | 'comments'
      ordering: 'id' | 'email' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'address'
    }
  }
  UserSocialMedia: {

  }
  BlogPost: {
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'text' | 'post' | 'postId' | 'author' | 'authorId'
      ordering: 'id' | 'text' | 'postId' | 'authorId'
    }
  }
  BlogPostComment: {

  }
  User: {
    roles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'users'
      ordering: 'id' | 'name'
    }
    blogPosts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'text' | 'author' | 'authorId' | 'comments'
      ordering: 'id' | 'title' | 'text' | 'authorId'
    }
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'text' | 'post' | 'postId' | 'author' | 'authorId'
      ordering: 'id' | 'text' | 'postId' | 'authorId'
    }
  }
  SomePublicRecordWithIntId: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    userRole: 'UserRole'
    userRoles: 'UserRole'
    userSocialMedia: 'UserSocialMedia'
    userSocialMedias: 'UserSocialMedia'
    blogPost: 'BlogPost'
    blogPosts: 'BlogPost'
    blogPostComment: 'BlogPostComment'
    blogPostComments: 'BlogPostComment'
    user: 'User'
    users: 'User'
    somePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    somePublicRecordWithIntIds: 'SomePublicRecordWithIntId'
  },
  Mutation: {
    createOneUserRole: 'UserRole'
    updateOneUserRole: 'UserRole'
    updateManyUserRole: 'BatchPayload'
    deleteOneUserRole: 'UserRole'
    deleteManyUserRole: 'BatchPayload'
    upsertOneUserRole: 'UserRole'
    createOneUserSocialMedia: 'UserSocialMedia'
    updateOneUserSocialMedia: 'UserSocialMedia'
    updateManyUserSocialMedia: 'BatchPayload'
    deleteOneUserSocialMedia: 'UserSocialMedia'
    deleteManyUserSocialMedia: 'BatchPayload'
    upsertOneUserSocialMedia: 'UserSocialMedia'
    createOneBlogPost: 'BlogPost'
    updateOneBlogPost: 'BlogPost'
    updateManyBlogPost: 'BatchPayload'
    deleteOneBlogPost: 'BlogPost'
    deleteManyBlogPost: 'BatchPayload'
    upsertOneBlogPost: 'BlogPost'
    createOneBlogPostComment: 'BlogPostComment'
    updateOneBlogPostComment: 'BlogPostComment'
    updateManyBlogPostComment: 'BatchPayload'
    deleteOneBlogPostComment: 'BlogPostComment'
    deleteManyBlogPostComment: 'BatchPayload'
    upsertOneBlogPostComment: 'BlogPostComment'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'BatchPayload'
    deleteOneUser: 'User'
    deleteManyUser: 'BatchPayload'
    upsertOneUser: 'User'
    createOneSomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    updateOneSomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    updateManySomePublicRecordWithIntId: 'BatchPayload'
    deleteOneSomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    deleteManySomePublicRecordWithIntId: 'BatchPayload'
    upsertOneSomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
  },
  UserRole: {
    id: 'String'
    name: 'String'
    users: 'User'
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
  }
  SomePublicRecordWithIntId: {
    id: 'Int'
    title: 'String'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  UserRole: Typegen.NexusPrismaFields<'UserRole'>
  UserSocialMedia: Typegen.NexusPrismaFields<'UserSocialMedia'>
  BlogPost: Typegen.NexusPrismaFields<'BlogPost'>
  BlogPostComment: Typegen.NexusPrismaFields<'BlogPostComment'>
  User: Typegen.NexusPrismaFields<'User'>
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
  