
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "461d6a05159055555eb7dfb337c9fb271cbd4d7e"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserRoleScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.CompanyScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  userId: 'userId'
});

exports.Prisma.UserSocialMediaScalarFieldEnum = makeEnum({
  id: 'id',
  instagram: 'instagram',
  twitter: 'twitter',
  userId: 'userId'
});

exports.Prisma.BlogPostScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  text: 'text',
  authorId: 'authorId'
});

exports.Prisma.BlogPostCommentScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  postId: 'postId',
  authorId: 'authorId'
});

exports.Prisma.SiteScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  url: 'url',
  userId: 'userId'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  gender: 'gender',
  yearOfBirth: 'yearOfBirth',
  wantsNewsletter: 'wantsNewsletter',
  interests: 'interests',
  address: 'address',
  weddingDate: 'weddingDate'
});

exports.Prisma.FilteringTestScalarFieldEnum = makeEnum({
  id: 'id',
  intField: 'intField',
  floatField: 'floatField',
  stringField: 'stringField',
  dateTimeField: 'dateTimeField',
  boolField: 'boolField',
  intField_lt: 'intField_lt',
  intField_bt: 'intField_bt',
  snake_field: 'snake_field',
  snake_field_bt: 'snake_field_bt'
});

exports.Prisma.SomePublicRecordWithIntIdScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});
exports.Gender = makeEnum({
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
});

exports.Topic = makeEnum({
  TOPIC_ONE: 'TOPIC_ONE',
  TOPIC_TWO: 'TOPIC_TWO',
  TOPIC_THREE: 'TOPIC_THREE'
});

exports.Prisma.ModelName = makeEnum({
  UserRole: 'UserRole',
  Company: 'Company',
  UserSocialMedia: 'UserSocialMedia',
  BlogPost: 'BlogPost',
  BlogPostComment: 'BlogPostComment',
  Site: 'Site',
  User: 'User',
  FilteringTest: 'FilteringTest',
  SomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
