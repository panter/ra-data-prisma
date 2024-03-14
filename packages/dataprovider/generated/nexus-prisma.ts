import * as Typegen from '@morgothulhu/nexus-plugin-prisma/typegen'
import * as Prisma from '../.prisma';

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
  Site: Prisma.Site
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
    groupByUserRole: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'users'
      ordering: 'id' | 'name' | '_count' | '_max' | '_min'
    }
    companies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'userId' | 'user'
      ordering: 'id' | 'name' | 'userId' | 'user'
    }
    groupByCompany: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'userId' | 'user'
      ordering: 'id' | 'name' | 'userId' | '_count' | '_max' | '_min'
    }
    userSocialMedias: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'instagram' | 'twitter' | 'userId' | 'user'
      ordering: 'id' | 'instagram' | 'twitter' | 'userId' | 'user'
    }
    groupByUserSocialMedia: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'instagram' | 'twitter' | 'userId' | 'user'
      ordering: 'id' | 'instagram' | 'twitter' | 'userId' | '_count' | '_max' | '_min'
    }
    blogPosts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'text' | 'authorId' | 'author' | 'comments'
      ordering: 'id' | 'title' | 'text' | 'authorId' | 'author' | 'comments'
    }
    groupByBlogPost: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'text' | 'authorId' | 'author' | 'comments'
      ordering: 'id' | 'title' | 'text' | 'authorId' | '_count' | '_max' | '_min'
    }
    blogPostComments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'text' | 'postId' | 'authorId' | 'post' | 'author'
      ordering: 'id' | 'text' | 'postId' | 'authorId' | 'post' | 'author'
    }
    groupByBlogPostComment: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'text' | 'postId' | 'authorId' | 'post' | 'author'
      ordering: 'id' | 'text' | 'postId' | 'authorId' | '_count' | '_max' | '_min'
    }
    sites: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'url' | 'userId' | 'owner'
      ordering: 'id' | 'name' | 'url' | 'userId' | 'owner'
    }
    groupBySite: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'url' | 'userId' | 'owner'
      ordering: 'id' | 'name' | 'url' | 'userId' | '_count' | '_max' | '_min'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'address' | 'weddingDate' | 'roles' | 'userSocialMedia' | 'blogPosts' | 'comments' | 'companies' | 'site'
      ordering: 'id' | 'email' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'address' | 'weddingDate' | 'roles' | 'userSocialMedia' | 'blogPosts' | 'comments' | 'companies' | 'site'
    }
    groupByUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'address' | 'weddingDate' | 'roles' | 'userSocialMedia' | 'blogPosts' | 'comments' | 'companies' | 'site'
      ordering: 'id' | 'email' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'address' | 'weddingDate' | '_count' | '_avg' | '_max' | '_min' | '_sum'
    }
    filteringTests: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'intField' | 'floatField' | 'stringField' | 'dateTimeField' | 'boolField' | 'intField_lt' | 'intField_bt' | 'snake_field' | 'snake_field_bt'
      ordering: 'id' | 'intField' | 'floatField' | 'stringField' | 'dateTimeField' | 'boolField' | 'intField_lt' | 'intField_bt' | 'snake_field' | 'snake_field_bt'
    }
    groupByFilteringTest: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'intField' | 'floatField' | 'stringField' | 'dateTimeField' | 'boolField' | 'intField_lt' | 'intField_bt' | 'snake_field' | 'snake_field_bt'
      ordering: 'id' | 'intField' | 'floatField' | 'stringField' | 'dateTimeField' | 'boolField' | 'intField_lt' | 'intField_bt' | 'snake_field' | 'snake_field_bt' | '_count' | '_avg' | '_max' | '_min' | '_sum'
    }
    somePublicRecordWithIntIds: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title'
      ordering: 'id' | 'title'
    }
    groupBySomePublicRecordWithIntId: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title'
      ordering: 'id' | 'title' | '_count' | '_avg' | '_max' | '_min' | '_sum'
    }
  },
  UserRole: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'address' | 'weddingDate' | 'roles' | 'userSocialMedia' | 'blogPosts' | 'comments' | 'companies' | 'site'
      ordering: 'id' | 'email' | 'firstName' | 'lastName' | 'gender' | 'yearOfBirth' | 'wantsNewsletter' | 'interests' | 'address' | 'weddingDate' | 'roles' | 'userSocialMedia' | 'blogPosts' | 'comments' | 'companies' | 'site'
    }
  }
  Company: {

  }
  UserSocialMedia: {

  }
  BlogPost: {
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'text' | 'postId' | 'authorId' | 'post' | 'author'
      ordering: 'id' | 'text' | 'postId' | 'authorId' | 'post' | 'author'
    }
  }
  BlogPostComment: {

  }
  Site: {

  }
  User: {
    roles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'users'
      ordering: 'id' | 'name' | 'users'
    }
    blogPosts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'text' | 'authorId' | 'author' | 'comments'
      ordering: 'id' | 'title' | 'text' | 'authorId' | 'author' | 'comments'
    }
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'text' | 'postId' | 'authorId' | 'post' | 'author'
      ordering: 'id' | 'text' | 'postId' | 'authorId' | 'post' | 'author'
    }
    companies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'userId' | 'user'
      ordering: 'id' | 'name' | 'userId' | 'user'
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
    aggregateUserRole: 'AggregateUserRole'
    userRoles: 'UserRole'
    userRole: 'UserRole'
    groupByUserRole: 'UserRoleGroupByOutputType'
    aggregateCompany: 'AggregateCompany'
    companies: 'Company'
    company: 'Company'
    groupByCompany: 'CompanyGroupByOutputType'
    aggregateUserSocialMedia: 'AggregateUserSocialMedia'
    userSocialMedias: 'UserSocialMedia'
    userSocialMedia: 'UserSocialMedia'
    groupByUserSocialMedia: 'UserSocialMediaGroupByOutputType'
    aggregateBlogPost: 'AggregateBlogPost'
    blogPosts: 'BlogPost'
    blogPost: 'BlogPost'
    groupByBlogPost: 'BlogPostGroupByOutputType'
    aggregateBlogPostComment: 'AggregateBlogPostComment'
    blogPostComments: 'BlogPostComment'
    blogPostComment: 'BlogPostComment'
    groupByBlogPostComment: 'BlogPostCommentGroupByOutputType'
    aggregateSite: 'AggregateSite'
    sites: 'Site'
    site: 'Site'
    groupBySite: 'SiteGroupByOutputType'
    aggregateUser: 'AggregateUser'
    users: 'User'
    user: 'User'
    groupByUser: 'UserGroupByOutputType'
    aggregateFilteringTest: 'AggregateFilteringTest'
    filteringTests: 'FilteringTest'
    filteringTest: 'FilteringTest'
    groupByFilteringTest: 'FilteringTestGroupByOutputType'
    aggregateSomePublicRecordWithIntId: 'AggregateSomePublicRecordWithIntId'
    somePublicRecordWithIntIds: 'SomePublicRecordWithIntId'
    somePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    groupBySomePublicRecordWithIntId: 'SomePublicRecordWithIntIdGroupByOutputType'
  },
  Mutation: {
    createOneUserRole: 'UserRole'
    createManyUserRole: 'AffectedRowsOutput'
    deleteOneUserRole: 'UserRole'
    deleteManyUserRole: 'AffectedRowsOutput'
    updateOneUserRole: 'UserRole'
    updateManyUserRole: 'AffectedRowsOutput'
    upsertOneUserRole: 'UserRole'
    createOneCompany: 'Company'
    createManyCompany: 'AffectedRowsOutput'
    deleteOneCompany: 'Company'
    deleteManyCompany: 'AffectedRowsOutput'
    updateOneCompany: 'Company'
    updateManyCompany: 'AffectedRowsOutput'
    upsertOneCompany: 'Company'
    createOneUserSocialMedia: 'UserSocialMedia'
    createManyUserSocialMedia: 'AffectedRowsOutput'
    deleteOneUserSocialMedia: 'UserSocialMedia'
    deleteManyUserSocialMedia: 'AffectedRowsOutput'
    updateOneUserSocialMedia: 'UserSocialMedia'
    updateManyUserSocialMedia: 'AffectedRowsOutput'
    upsertOneUserSocialMedia: 'UserSocialMedia'
    createOneBlogPost: 'BlogPost'
    createManyBlogPost: 'AffectedRowsOutput'
    deleteOneBlogPost: 'BlogPost'
    deleteManyBlogPost: 'AffectedRowsOutput'
    updateOneBlogPost: 'BlogPost'
    updateManyBlogPost: 'AffectedRowsOutput'
    upsertOneBlogPost: 'BlogPost'
    createOneBlogPostComment: 'BlogPostComment'
    createManyBlogPostComment: 'AffectedRowsOutput'
    deleteOneBlogPostComment: 'BlogPostComment'
    deleteManyBlogPostComment: 'AffectedRowsOutput'
    updateOneBlogPostComment: 'BlogPostComment'
    updateManyBlogPostComment: 'AffectedRowsOutput'
    upsertOneBlogPostComment: 'BlogPostComment'
    createOneSite: 'Site'
    createManySite: 'AffectedRowsOutput'
    deleteOneSite: 'Site'
    deleteManySite: 'AffectedRowsOutput'
    updateOneSite: 'Site'
    updateManySite: 'AffectedRowsOutput'
    upsertOneSite: 'Site'
    createOneUser: 'User'
    createManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneFilteringTest: 'FilteringTest'
    createManyFilteringTest: 'AffectedRowsOutput'
    deleteOneFilteringTest: 'FilteringTest'
    deleteManyFilteringTest: 'AffectedRowsOutput'
    updateOneFilteringTest: 'FilteringTest'
    updateManyFilteringTest: 'AffectedRowsOutput'
    upsertOneFilteringTest: 'FilteringTest'
    createOneSomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    createManySomePublicRecordWithIntId: 'AffectedRowsOutput'
    deleteOneSomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    deleteManySomePublicRecordWithIntId: 'AffectedRowsOutput'
    updateOneSomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
    updateManySomePublicRecordWithIntId: 'AffectedRowsOutput'
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
  Site: {
    id: 'String'
    name: 'String'
    url: 'String'
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
    site: 'Site'
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
  Site: Typegen.NexusPrismaFields<'Site'>
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
  