
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model UserSocialMedia
 * 
 */
export type UserSocialMedia = $Result.DefaultSelection<Prisma.$UserSocialMediaPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model BlogPostComment
 * 
 */
export type BlogPostComment = $Result.DefaultSelection<Prisma.$BlogPostCommentPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FilteringTest
 * 
 */
export type FilteringTest = $Result.DefaultSelection<Prisma.$FilteringTestPayload>
/**
 * Model SomePublicRecordWithIntId
 * 
 */
export type SomePublicRecordWithIntId = $Result.DefaultSelection<Prisma.$SomePublicRecordWithIntIdPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Topic: {
  TOPIC_ONE: 'TOPIC_ONE',
  TOPIC_TWO: 'TOPIC_TWO',
  TOPIC_THREE: 'TOPIC_THREE'
};

export type Topic = (typeof Topic)[keyof typeof Topic]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Topic = $Enums.Topic

export const Topic: typeof $Enums.Topic

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserRoles
 * const userRoles = await prisma.userRole.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserRoles
   * const userRoles = await prisma.userRole.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.userSocialMedia`: Exposes CRUD operations for the **UserSocialMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSocialMedias
    * const userSocialMedias = await prisma.userSocialMedia.findMany()
    * ```
    */
  get userSocialMedia(): Prisma.UserSocialMediaDelegate<ExtArgs>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs>;

  /**
   * `prisma.blogPostComment`: Exposes CRUD operations for the **BlogPostComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPostComments
    * const blogPostComments = await prisma.blogPostComment.findMany()
    * ```
    */
  get blogPostComment(): Prisma.BlogPostCommentDelegate<ExtArgs>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.filteringTest`: Exposes CRUD operations for the **FilteringTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilteringTests
    * const filteringTests = await prisma.filteringTest.findMany()
    * ```
    */
  get filteringTest(): Prisma.FilteringTestDelegate<ExtArgs>;

  /**
   * `prisma.somePublicRecordWithIntId`: Exposes CRUD operations for the **SomePublicRecordWithIntId** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SomePublicRecordWithIntIds
    * const somePublicRecordWithIntIds = await prisma.somePublicRecordWithIntId.findMany()
    * ```
    */
  get somePublicRecordWithIntId(): Prisma.SomePublicRecordWithIntIdDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserRole: 'UserRole',
    Company: 'Company',
    UserSocialMedia: 'UserSocialMedia',
    BlogPost: 'BlogPost',
    BlogPostComment: 'BlogPostComment',
    Site: 'Site',
    User: 'User',
    FilteringTest: 'FilteringTest',
    SomePublicRecordWithIntId: 'SomePublicRecordWithIntId'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'userRole' | 'company' | 'userSocialMedia' | 'blogPost' | 'blogPostComment' | 'site' | 'user' | 'filteringTest' | 'somePublicRecordWithIntId'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>,
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      UserSocialMedia: {
        payload: Prisma.$UserSocialMediaPayload<ExtArgs>
        fields: Prisma.UserSocialMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSocialMediaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSocialMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSocialMediaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSocialMediaPayload>
          }
          findFirst: {
            args: Prisma.UserSocialMediaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSocialMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSocialMediaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSocialMediaPayload>
          }
          findMany: {
            args: Prisma.UserSocialMediaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSocialMediaPayload>[]
          }
          create: {
            args: Prisma.UserSocialMediaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSocialMediaPayload>
          }
          createMany: {
            args: Prisma.UserSocialMediaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserSocialMediaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSocialMediaPayload>
          }
          update: {
            args: Prisma.UserSocialMediaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSocialMediaPayload>
          }
          deleteMany: {
            args: Prisma.UserSocialMediaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserSocialMediaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserSocialMediaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSocialMediaPayload>
          }
          aggregate: {
            args: Prisma.UserSocialMediaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserSocialMedia>
          }
          groupBy: {
            args: Prisma.UserSocialMediaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserSocialMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSocialMediaCountArgs<ExtArgs>,
            result: $Utils.Optional<UserSocialMediaCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>,
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      BlogPostComment: {
        payload: Prisma.$BlogPostCommentPayload<ExtArgs>
        fields: Prisma.BlogPostCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostCommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostCommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostCommentPayload>
          }
          findFirst: {
            args: Prisma.BlogPostCommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostCommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostCommentPayload>
          }
          findMany: {
            args: Prisma.BlogPostCommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostCommentPayload>[]
          }
          create: {
            args: Prisma.BlogPostCommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostCommentPayload>
          }
          createMany: {
            args: Prisma.BlogPostCommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlogPostCommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostCommentPayload>
          }
          update: {
            args: Prisma.BlogPostCommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostCommentPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostCommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostCommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlogPostCommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPostCommentPayload>
          }
          aggregate: {
            args: Prisma.BlogPostCommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlogPostComment>
          }
          groupBy: {
            args: Prisma.BlogPostCommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlogPostCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCommentCountArgs<ExtArgs>,
            result: $Utils.Optional<BlogPostCommentCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>,
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FilteringTest: {
        payload: Prisma.$FilteringTestPayload<ExtArgs>
        fields: Prisma.FilteringTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilteringTestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilteringTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilteringTestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilteringTestPayload>
          }
          findFirst: {
            args: Prisma.FilteringTestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilteringTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilteringTestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilteringTestPayload>
          }
          findMany: {
            args: Prisma.FilteringTestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilteringTestPayload>[]
          }
          create: {
            args: Prisma.FilteringTestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilteringTestPayload>
          }
          createMany: {
            args: Prisma.FilteringTestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FilteringTestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilteringTestPayload>
          }
          update: {
            args: Prisma.FilteringTestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilteringTestPayload>
          }
          deleteMany: {
            args: Prisma.FilteringTestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FilteringTestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FilteringTestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilteringTestPayload>
          }
          aggregate: {
            args: Prisma.FilteringTestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFilteringTest>
          }
          groupBy: {
            args: Prisma.FilteringTestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FilteringTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilteringTestCountArgs<ExtArgs>,
            result: $Utils.Optional<FilteringTestCountAggregateOutputType> | number
          }
        }
      }
      SomePublicRecordWithIntId: {
        payload: Prisma.$SomePublicRecordWithIntIdPayload<ExtArgs>
        fields: Prisma.SomePublicRecordWithIntIdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SomePublicRecordWithIntIdFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SomePublicRecordWithIntIdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SomePublicRecordWithIntIdFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SomePublicRecordWithIntIdPayload>
          }
          findFirst: {
            args: Prisma.SomePublicRecordWithIntIdFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SomePublicRecordWithIntIdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SomePublicRecordWithIntIdFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SomePublicRecordWithIntIdPayload>
          }
          findMany: {
            args: Prisma.SomePublicRecordWithIntIdFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SomePublicRecordWithIntIdPayload>[]
          }
          create: {
            args: Prisma.SomePublicRecordWithIntIdCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SomePublicRecordWithIntIdPayload>
          }
          createMany: {
            args: Prisma.SomePublicRecordWithIntIdCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SomePublicRecordWithIntIdDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SomePublicRecordWithIntIdPayload>
          }
          update: {
            args: Prisma.SomePublicRecordWithIntIdUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SomePublicRecordWithIntIdPayload>
          }
          deleteMany: {
            args: Prisma.SomePublicRecordWithIntIdDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SomePublicRecordWithIntIdUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SomePublicRecordWithIntIdUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SomePublicRecordWithIntIdPayload>
          }
          aggregate: {
            args: Prisma.SomePublicRecordWithIntIdAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSomePublicRecordWithIntId>
          }
          groupBy: {
            args: Prisma.SomePublicRecordWithIntIdGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SomePublicRecordWithIntIdGroupByOutputType>[]
          }
          count: {
            args: Prisma.SomePublicRecordWithIntIdCountArgs<ExtArgs>,
            result: $Utils.Optional<SomePublicRecordWithIntIdCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserRoleCountOutputType
   */

  export type UserRoleCountOutputType = {
    users: number
  }

  export type UserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     */
    select?: UserRoleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type BlogPostCountOutputType
   */

  export type BlogPostCountOutputType = {
    comments: number
  }

  export type BlogPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | BlogPostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     */
    select?: BlogPostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostCommentWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
    blogPosts: number
    comments: number
    companies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    blogPosts?: boolean | UserCountOutputTypeCountBlogPostsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    companies?: boolean | UserCountOutputTypeCountCompaniesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostCommentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }



  /**
   * Models
   */

  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: string
    name: string
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }


  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserRoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserRole that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserRoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserRoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
    **/
    create<T extends UserRoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserRoles.
     *     @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     *     @example
     *     // Create many UserRoles
     *     const userRole = await prisma.userRole.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserRoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
    **/
    delete<T extends UserRoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserRoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserRoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserRoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
    **/
    upsert<T extends UserRoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends UserRole$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'String'>
    readonly name: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }


  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
  }


  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }


  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
  }


  /**
   * UserRole.users
   */
  export type UserRole$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
  }



  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }


  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends CompanyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Companies.
     *     @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends CompanyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly userId: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }


  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
  }



  /**
   * Model UserSocialMedia
   */

  export type AggregateUserSocialMedia = {
    _count: UserSocialMediaCountAggregateOutputType | null
    _min: UserSocialMediaMinAggregateOutputType | null
    _max: UserSocialMediaMaxAggregateOutputType | null
  }

  export type UserSocialMediaMinAggregateOutputType = {
    id: string | null
    instagram: string | null
    twitter: string | null
    userId: string | null
  }

  export type UserSocialMediaMaxAggregateOutputType = {
    id: string | null
    instagram: string | null
    twitter: string | null
    userId: string | null
  }

  export type UserSocialMediaCountAggregateOutputType = {
    id: number
    instagram: number
    twitter: number
    userId: number
    _all: number
  }


  export type UserSocialMediaMinAggregateInputType = {
    id?: true
    instagram?: true
    twitter?: true
    userId?: true
  }

  export type UserSocialMediaMaxAggregateInputType = {
    id?: true
    instagram?: true
    twitter?: true
    userId?: true
  }

  export type UserSocialMediaCountAggregateInputType = {
    id?: true
    instagram?: true
    twitter?: true
    userId?: true
    _all?: true
  }

  export type UserSocialMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSocialMedia to aggregate.
     */
    where?: UserSocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSocialMedias to fetch.
     */
    orderBy?: UserSocialMediaOrderByWithRelationInput | UserSocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSocialMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSocialMedias
    **/
    _count?: true | UserSocialMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSocialMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSocialMediaMaxAggregateInputType
  }

  export type GetUserSocialMediaAggregateType<T extends UserSocialMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSocialMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSocialMedia[P]>
      : GetScalarType<T[P], AggregateUserSocialMedia[P]>
  }




  export type UserSocialMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSocialMediaWhereInput
    orderBy?: UserSocialMediaOrderByWithAggregationInput | UserSocialMediaOrderByWithAggregationInput[]
    by: UserSocialMediaScalarFieldEnum[] | UserSocialMediaScalarFieldEnum
    having?: UserSocialMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSocialMediaCountAggregateInputType | true
    _min?: UserSocialMediaMinAggregateInputType
    _max?: UserSocialMediaMaxAggregateInputType
  }

  export type UserSocialMediaGroupByOutputType = {
    id: string
    instagram: string
    twitter: string
    userId: string
    _count: UserSocialMediaCountAggregateOutputType | null
    _min: UserSocialMediaMinAggregateOutputType | null
    _max: UserSocialMediaMaxAggregateOutputType | null
  }

  type GetUserSocialMediaGroupByPayload<T extends UserSocialMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSocialMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSocialMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSocialMediaGroupByOutputType[P]>
            : GetScalarType<T[P], UserSocialMediaGroupByOutputType[P]>
        }
      >
    >


  export type UserSocialMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instagram?: boolean
    twitter?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSocialMedia"]>

  export type UserSocialMediaSelectScalar = {
    id?: boolean
    instagram?: boolean
    twitter?: boolean
    userId?: boolean
  }

  export type UserSocialMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserSocialMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSocialMedia"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      instagram: string
      twitter: string
      userId: string
    }, ExtArgs["result"]["userSocialMedia"]>
    composites: {}
  }


  type UserSocialMediaGetPayload<S extends boolean | null | undefined | UserSocialMediaDefaultArgs> = $Result.GetResult<Prisma.$UserSocialMediaPayload, S>

  type UserSocialMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserSocialMediaFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserSocialMediaCountAggregateInputType | true
    }

  export interface UserSocialMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSocialMedia'], meta: { name: 'UserSocialMedia' } }
    /**
     * Find zero or one UserSocialMedia that matches the filter.
     * @param {UserSocialMediaFindUniqueArgs} args - Arguments to find a UserSocialMedia
     * @example
     * // Get one UserSocialMedia
     * const userSocialMedia = await prisma.userSocialMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserSocialMediaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserSocialMediaFindUniqueArgs<ExtArgs>>
    ): Prisma__UserSocialMediaClient<$Result.GetResult<Prisma.$UserSocialMediaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserSocialMedia that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserSocialMediaFindUniqueOrThrowArgs} args - Arguments to find a UserSocialMedia
     * @example
     * // Get one UserSocialMedia
     * const userSocialMedia = await prisma.userSocialMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserSocialMediaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSocialMediaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserSocialMediaClient<$Result.GetResult<Prisma.$UserSocialMediaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserSocialMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialMediaFindFirstArgs} args - Arguments to find a UserSocialMedia
     * @example
     * // Get one UserSocialMedia
     * const userSocialMedia = await prisma.userSocialMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserSocialMediaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSocialMediaFindFirstArgs<ExtArgs>>
    ): Prisma__UserSocialMediaClient<$Result.GetResult<Prisma.$UserSocialMediaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserSocialMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialMediaFindFirstOrThrowArgs} args - Arguments to find a UserSocialMedia
     * @example
     * // Get one UserSocialMedia
     * const userSocialMedia = await prisma.userSocialMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserSocialMediaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSocialMediaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserSocialMediaClient<$Result.GetResult<Prisma.$UserSocialMediaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserSocialMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialMediaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSocialMedias
     * const userSocialMedias = await prisma.userSocialMedia.findMany()
     * 
     * // Get first 10 UserSocialMedias
     * const userSocialMedias = await prisma.userSocialMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSocialMediaWithIdOnly = await prisma.userSocialMedia.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserSocialMediaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSocialMediaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSocialMediaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserSocialMedia.
     * @param {UserSocialMediaCreateArgs} args - Arguments to create a UserSocialMedia.
     * @example
     * // Create one UserSocialMedia
     * const UserSocialMedia = await prisma.userSocialMedia.create({
     *   data: {
     *     // ... data to create a UserSocialMedia
     *   }
     * })
     * 
    **/
    create<T extends UserSocialMediaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserSocialMediaCreateArgs<ExtArgs>>
    ): Prisma__UserSocialMediaClient<$Result.GetResult<Prisma.$UserSocialMediaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserSocialMedias.
     *     @param {UserSocialMediaCreateManyArgs} args - Arguments to create many UserSocialMedias.
     *     @example
     *     // Create many UserSocialMedias
     *     const userSocialMedia = await prisma.userSocialMedia.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserSocialMediaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSocialMediaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSocialMedia.
     * @param {UserSocialMediaDeleteArgs} args - Arguments to delete one UserSocialMedia.
     * @example
     * // Delete one UserSocialMedia
     * const UserSocialMedia = await prisma.userSocialMedia.delete({
     *   where: {
     *     // ... filter to delete one UserSocialMedia
     *   }
     * })
     * 
    **/
    delete<T extends UserSocialMediaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserSocialMediaDeleteArgs<ExtArgs>>
    ): Prisma__UserSocialMediaClient<$Result.GetResult<Prisma.$UserSocialMediaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserSocialMedia.
     * @param {UserSocialMediaUpdateArgs} args - Arguments to update one UserSocialMedia.
     * @example
     * // Update one UserSocialMedia
     * const userSocialMedia = await prisma.userSocialMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserSocialMediaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserSocialMediaUpdateArgs<ExtArgs>>
    ): Prisma__UserSocialMediaClient<$Result.GetResult<Prisma.$UserSocialMediaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserSocialMedias.
     * @param {UserSocialMediaDeleteManyArgs} args - Arguments to filter UserSocialMedias to delete.
     * @example
     * // Delete a few UserSocialMedias
     * const { count } = await prisma.userSocialMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserSocialMediaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSocialMediaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSocialMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSocialMedias
     * const userSocialMedia = await prisma.userSocialMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserSocialMediaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserSocialMediaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSocialMedia.
     * @param {UserSocialMediaUpsertArgs} args - Arguments to update or create a UserSocialMedia.
     * @example
     * // Update or create a UserSocialMedia
     * const userSocialMedia = await prisma.userSocialMedia.upsert({
     *   create: {
     *     // ... data to create a UserSocialMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSocialMedia we want to update
     *   }
     * })
    **/
    upsert<T extends UserSocialMediaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserSocialMediaUpsertArgs<ExtArgs>>
    ): Prisma__UserSocialMediaClient<$Result.GetResult<Prisma.$UserSocialMediaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserSocialMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialMediaCountArgs} args - Arguments to filter UserSocialMedias to count.
     * @example
     * // Count the number of UserSocialMedias
     * const count = await prisma.userSocialMedia.count({
     *   where: {
     *     // ... the filter for the UserSocialMedias we want to count
     *   }
     * })
    **/
    count<T extends UserSocialMediaCountArgs>(
      args?: Subset<T, UserSocialMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSocialMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSocialMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSocialMediaAggregateArgs>(args: Subset<T, UserSocialMediaAggregateArgs>): Prisma.PrismaPromise<GetUserSocialMediaAggregateType<T>>

    /**
     * Group by UserSocialMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSocialMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSocialMediaGroupByArgs['orderBy'] }
        : { orderBy?: UserSocialMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSocialMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSocialMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSocialMedia model
   */
  readonly fields: UserSocialMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSocialMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSocialMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserSocialMedia model
   */ 
  interface UserSocialMediaFieldRefs {
    readonly id: FieldRef<"UserSocialMedia", 'String'>
    readonly instagram: FieldRef<"UserSocialMedia", 'String'>
    readonly twitter: FieldRef<"UserSocialMedia", 'String'>
    readonly userId: FieldRef<"UserSocialMedia", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserSocialMedia findUnique
   */
  export type UserSocialMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     */
    select?: UserSocialMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserSocialMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserSocialMedia to fetch.
     */
    where: UserSocialMediaWhereUniqueInput
  }


  /**
   * UserSocialMedia findUniqueOrThrow
   */
  export type UserSocialMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     */
    select?: UserSocialMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserSocialMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserSocialMedia to fetch.
     */
    where: UserSocialMediaWhereUniqueInput
  }


  /**
   * UserSocialMedia findFirst
   */
  export type UserSocialMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     */
    select?: UserSocialMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserSocialMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserSocialMedia to fetch.
     */
    where?: UserSocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSocialMedias to fetch.
     */
    orderBy?: UserSocialMediaOrderByWithRelationInput | UserSocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSocialMedias.
     */
    cursor?: UserSocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSocialMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSocialMedias.
     */
    distinct?: UserSocialMediaScalarFieldEnum | UserSocialMediaScalarFieldEnum[]
  }


  /**
   * UserSocialMedia findFirstOrThrow
   */
  export type UserSocialMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     */
    select?: UserSocialMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserSocialMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserSocialMedia to fetch.
     */
    where?: UserSocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSocialMedias to fetch.
     */
    orderBy?: UserSocialMediaOrderByWithRelationInput | UserSocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSocialMedias.
     */
    cursor?: UserSocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSocialMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSocialMedias.
     */
    distinct?: UserSocialMediaScalarFieldEnum | UserSocialMediaScalarFieldEnum[]
  }


  /**
   * UserSocialMedia findMany
   */
  export type UserSocialMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     */
    select?: UserSocialMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserSocialMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserSocialMedias to fetch.
     */
    where?: UserSocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSocialMedias to fetch.
     */
    orderBy?: UserSocialMediaOrderByWithRelationInput | UserSocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSocialMedias.
     */
    cursor?: UserSocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSocialMedias.
     */
    skip?: number
    distinct?: UserSocialMediaScalarFieldEnum | UserSocialMediaScalarFieldEnum[]
  }


  /**
   * UserSocialMedia create
   */
  export type UserSocialMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     */
    select?: UserSocialMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserSocialMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSocialMedia.
     */
    data: XOR<UserSocialMediaCreateInput, UserSocialMediaUncheckedCreateInput>
  }


  /**
   * UserSocialMedia createMany
   */
  export type UserSocialMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSocialMedias.
     */
    data: UserSocialMediaCreateManyInput | UserSocialMediaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserSocialMedia update
   */
  export type UserSocialMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     */
    select?: UserSocialMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserSocialMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSocialMedia.
     */
    data: XOR<UserSocialMediaUpdateInput, UserSocialMediaUncheckedUpdateInput>
    /**
     * Choose, which UserSocialMedia to update.
     */
    where: UserSocialMediaWhereUniqueInput
  }


  /**
   * UserSocialMedia updateMany
   */
  export type UserSocialMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSocialMedias.
     */
    data: XOR<UserSocialMediaUpdateManyMutationInput, UserSocialMediaUncheckedUpdateManyInput>
    /**
     * Filter which UserSocialMedias to update
     */
    where?: UserSocialMediaWhereInput
  }


  /**
   * UserSocialMedia upsert
   */
  export type UserSocialMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     */
    select?: UserSocialMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserSocialMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSocialMedia to update in case it exists.
     */
    where: UserSocialMediaWhereUniqueInput
    /**
     * In case the UserSocialMedia found by the `where` argument doesn't exist, create a new UserSocialMedia with this data.
     */
    create: XOR<UserSocialMediaCreateInput, UserSocialMediaUncheckedCreateInput>
    /**
     * In case the UserSocialMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSocialMediaUpdateInput, UserSocialMediaUncheckedUpdateInput>
  }


  /**
   * UserSocialMedia delete
   */
  export type UserSocialMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     */
    select?: UserSocialMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserSocialMediaInclude<ExtArgs> | null
    /**
     * Filter which UserSocialMedia to delete.
     */
    where: UserSocialMediaWhereUniqueInput
  }


  /**
   * UserSocialMedia deleteMany
   */
  export type UserSocialMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSocialMedias to delete
     */
    where?: UserSocialMediaWhereInput
  }


  /**
   * UserSocialMedia without action
   */
  export type UserSocialMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     */
    select?: UserSocialMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserSocialMediaInclude<ExtArgs> | null
  }



  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    authorId: string | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    authorId: string | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    title: number
    text: number
    authorId: number
    _all: number
  }


  export type BlogPostMinAggregateInputType = {
    id?: true
    title?: true
    text?: true
    authorId?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    authorId?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    authorId?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    title: string
    text: string
    authorId: string | null
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    authorId?: boolean
    author?: boolean | BlogPost$authorArgs<ExtArgs>
    comments?: boolean | BlogPost$commentsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    title?: boolean
    text?: boolean
    authorId?: boolean
  }

  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | BlogPost$authorArgs<ExtArgs>
    comments?: boolean | BlogPost$commentsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
      comments: Prisma.$BlogPostCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      text: string
      authorId: string | null
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }


  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlogPostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>
    ): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BlogPost that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlogPostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>
    ): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlogPostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
    **/
    create<T extends BlogPostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>
    ): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BlogPosts.
     *     @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     *     @example
     *     // Create many BlogPosts
     *     const blogPost = await prisma.blogPost.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlogPostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
    **/
    delete<T extends BlogPostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>
    ): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlogPostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>
    ): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlogPostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlogPostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
    **/
    upsert<T extends BlogPostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>
    ): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends BlogPost$authorArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    comments<T extends BlogPost$commentsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostCommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BlogPost model
   */ 
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly text: FieldRef<"BlogPost", 'String'>
    readonly authorId: FieldRef<"BlogPost", 'String'>
  }
    

  // Custom InputTypes

  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }


  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }


  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }


  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }


  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }


  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }


  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }


  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
  }


  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }


  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }


  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
  }


  /**
   * BlogPost.author
   */
  export type BlogPost$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * BlogPost.comments
   */
  export type BlogPost$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
    where?: BlogPostCommentWhereInput
    orderBy?: BlogPostCommentOrderByWithRelationInput | BlogPostCommentOrderByWithRelationInput[]
    cursor?: BlogPostCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostCommentScalarFieldEnum | BlogPostCommentScalarFieldEnum[]
  }


  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
  }



  /**
   * Model BlogPostComment
   */

  export type AggregateBlogPostComment = {
    _count: BlogPostCommentCountAggregateOutputType | null
    _min: BlogPostCommentMinAggregateOutputType | null
    _max: BlogPostCommentMaxAggregateOutputType | null
  }

  export type BlogPostCommentMinAggregateOutputType = {
    id: string | null
    text: string | null
    postId: string | null
    authorId: string | null
  }

  export type BlogPostCommentMaxAggregateOutputType = {
    id: string | null
    text: string | null
    postId: string | null
    authorId: string | null
  }

  export type BlogPostCommentCountAggregateOutputType = {
    id: number
    text: number
    postId: number
    authorId: number
    _all: number
  }


  export type BlogPostCommentMinAggregateInputType = {
    id?: true
    text?: true
    postId?: true
    authorId?: true
  }

  export type BlogPostCommentMaxAggregateInputType = {
    id?: true
    text?: true
    postId?: true
    authorId?: true
  }

  export type BlogPostCommentCountAggregateInputType = {
    id?: true
    text?: true
    postId?: true
    authorId?: true
    _all?: true
  }

  export type BlogPostCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostComment to aggregate.
     */
    where?: BlogPostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostComments to fetch.
     */
    orderBy?: BlogPostCommentOrderByWithRelationInput | BlogPostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPostComments
    **/
    _count?: true | BlogPostCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostCommentMaxAggregateInputType
  }

  export type GetBlogPostCommentAggregateType<T extends BlogPostCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPostComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPostComment[P]>
      : GetScalarType<T[P], AggregateBlogPostComment[P]>
  }




  export type BlogPostCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostCommentWhereInput
    orderBy?: BlogPostCommentOrderByWithAggregationInput | BlogPostCommentOrderByWithAggregationInput[]
    by: BlogPostCommentScalarFieldEnum[] | BlogPostCommentScalarFieldEnum
    having?: BlogPostCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCommentCountAggregateInputType | true
    _min?: BlogPostCommentMinAggregateInputType
    _max?: BlogPostCommentMaxAggregateInputType
  }

  export type BlogPostCommentGroupByOutputType = {
    id: string
    text: string
    postId: string | null
    authorId: string | null
    _count: BlogPostCommentCountAggregateOutputType | null
    _min: BlogPostCommentMinAggregateOutputType | null
    _max: BlogPostCommentMaxAggregateOutputType | null
  }

  type GetBlogPostCommentGroupByPayload<T extends BlogPostCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostCommentGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostCommentGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    postId?: boolean
    authorId?: boolean
    post?: boolean | BlogPostComment$postArgs<ExtArgs>
    author?: boolean | BlogPostComment$authorArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostComment"]>

  export type BlogPostCommentSelectScalar = {
    id?: boolean
    text?: boolean
    postId?: boolean
    authorId?: boolean
  }

  export type BlogPostCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostComment$postArgs<ExtArgs>
    author?: boolean | BlogPostComment$authorArgs<ExtArgs>
  }


  export type $BlogPostCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPostComment"
    objects: {
      post: Prisma.$BlogPostPayload<ExtArgs> | null
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      postId: string | null
      authorId: string | null
    }, ExtArgs["result"]["blogPostComment"]>
    composites: {}
  }


  type BlogPostCommentGetPayload<S extends boolean | null | undefined | BlogPostCommentDefaultArgs> = $Result.GetResult<Prisma.$BlogPostCommentPayload, S>

  type BlogPostCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogPostCommentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BlogPostCommentCountAggregateInputType | true
    }

  export interface BlogPostCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPostComment'], meta: { name: 'BlogPostComment' } }
    /**
     * Find zero or one BlogPostComment that matches the filter.
     * @param {BlogPostCommentFindUniqueArgs} args - Arguments to find a BlogPostComment
     * @example
     * // Get one BlogPostComment
     * const blogPostComment = await prisma.blogPostComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlogPostCommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostCommentFindUniqueArgs<ExtArgs>>
    ): Prisma__BlogPostCommentClient<$Result.GetResult<Prisma.$BlogPostCommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BlogPostComment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlogPostCommentFindUniqueOrThrowArgs} args - Arguments to find a BlogPostComment
     * @example
     * // Get one BlogPostComment
     * const blogPostComment = await prisma.blogPostComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlogPostCommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostCommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlogPostCommentClient<$Result.GetResult<Prisma.$BlogPostCommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BlogPostComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCommentFindFirstArgs} args - Arguments to find a BlogPostComment
     * @example
     * // Get one BlogPostComment
     * const blogPostComment = await prisma.blogPostComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlogPostCommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostCommentFindFirstArgs<ExtArgs>>
    ): Prisma__BlogPostCommentClient<$Result.GetResult<Prisma.$BlogPostCommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BlogPostComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCommentFindFirstOrThrowArgs} args - Arguments to find a BlogPostComment
     * @example
     * // Get one BlogPostComment
     * const blogPostComment = await prisma.blogPostComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlogPostCommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostCommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlogPostCommentClient<$Result.GetResult<Prisma.$BlogPostCommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BlogPostComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPostComments
     * const blogPostComments = await prisma.blogPostComment.findMany()
     * 
     * // Get first 10 BlogPostComments
     * const blogPostComments = await prisma.blogPostComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostCommentWithIdOnly = await prisma.blogPostComment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlogPostCommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostCommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostCommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BlogPostComment.
     * @param {BlogPostCommentCreateArgs} args - Arguments to create a BlogPostComment.
     * @example
     * // Create one BlogPostComment
     * const BlogPostComment = await prisma.blogPostComment.create({
     *   data: {
     *     // ... data to create a BlogPostComment
     *   }
     * })
     * 
    **/
    create<T extends BlogPostCommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostCommentCreateArgs<ExtArgs>>
    ): Prisma__BlogPostCommentClient<$Result.GetResult<Prisma.$BlogPostCommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BlogPostComments.
     *     @param {BlogPostCommentCreateManyArgs} args - Arguments to create many BlogPostComments.
     *     @example
     *     // Create many BlogPostComments
     *     const blogPostComment = await prisma.blogPostComment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlogPostCommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostCommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlogPostComment.
     * @param {BlogPostCommentDeleteArgs} args - Arguments to delete one BlogPostComment.
     * @example
     * // Delete one BlogPostComment
     * const BlogPostComment = await prisma.blogPostComment.delete({
     *   where: {
     *     // ... filter to delete one BlogPostComment
     *   }
     * })
     * 
    **/
    delete<T extends BlogPostCommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostCommentDeleteArgs<ExtArgs>>
    ): Prisma__BlogPostCommentClient<$Result.GetResult<Prisma.$BlogPostCommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BlogPostComment.
     * @param {BlogPostCommentUpdateArgs} args - Arguments to update one BlogPostComment.
     * @example
     * // Update one BlogPostComment
     * const blogPostComment = await prisma.blogPostComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlogPostCommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostCommentUpdateArgs<ExtArgs>>
    ): Prisma__BlogPostCommentClient<$Result.GetResult<Prisma.$BlogPostCommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BlogPostComments.
     * @param {BlogPostCommentDeleteManyArgs} args - Arguments to filter BlogPostComments to delete.
     * @example
     * // Delete a few BlogPostComments
     * const { count } = await prisma.blogPostComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlogPostCommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogPostCommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPostComments
     * const blogPostComment = await prisma.blogPostComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlogPostCommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostCommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogPostComment.
     * @param {BlogPostCommentUpsertArgs} args - Arguments to update or create a BlogPostComment.
     * @example
     * // Update or create a BlogPostComment
     * const blogPostComment = await prisma.blogPostComment.upsert({
     *   create: {
     *     // ... data to create a BlogPostComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPostComment we want to update
     *   }
     * })
    **/
    upsert<T extends BlogPostCommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlogPostCommentUpsertArgs<ExtArgs>>
    ): Prisma__BlogPostCommentClient<$Result.GetResult<Prisma.$BlogPostCommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BlogPostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCommentCountArgs} args - Arguments to filter BlogPostComments to count.
     * @example
     * // Count the number of BlogPostComments
     * const count = await prisma.blogPostComment.count({
     *   where: {
     *     // ... the filter for the BlogPostComments we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCommentCountArgs>(
      args?: Subset<T, BlogPostCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPostComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostCommentAggregateArgs>(args: Subset<T, BlogPostCommentAggregateArgs>): Prisma.PrismaPromise<GetBlogPostCommentAggregateType<T>>

    /**
     * Group by BlogPostComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostCommentGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPostComment model
   */
  readonly fields: BlogPostCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPostComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends BlogPostComment$postArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostComment$postArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    author<T extends BlogPostComment$authorArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostComment$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BlogPostComment model
   */ 
  interface BlogPostCommentFieldRefs {
    readonly id: FieldRef<"BlogPostComment", 'String'>
    readonly text: FieldRef<"BlogPostComment", 'String'>
    readonly postId: FieldRef<"BlogPostComment", 'String'>
    readonly authorId: FieldRef<"BlogPostComment", 'String'>
  }
    

  // Custom InputTypes

  /**
   * BlogPostComment findUnique
   */
  export type BlogPostCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostComment to fetch.
     */
    where: BlogPostCommentWhereUniqueInput
  }


  /**
   * BlogPostComment findUniqueOrThrow
   */
  export type BlogPostCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostComment to fetch.
     */
    where: BlogPostCommentWhereUniqueInput
  }


  /**
   * BlogPostComment findFirst
   */
  export type BlogPostCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostComment to fetch.
     */
    where?: BlogPostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostComments to fetch.
     */
    orderBy?: BlogPostCommentOrderByWithRelationInput | BlogPostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostComments.
     */
    cursor?: BlogPostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostComments.
     */
    distinct?: BlogPostCommentScalarFieldEnum | BlogPostCommentScalarFieldEnum[]
  }


  /**
   * BlogPostComment findFirstOrThrow
   */
  export type BlogPostCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostComment to fetch.
     */
    where?: BlogPostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostComments to fetch.
     */
    orderBy?: BlogPostCommentOrderByWithRelationInput | BlogPostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostComments.
     */
    cursor?: BlogPostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostComments.
     */
    distinct?: BlogPostCommentScalarFieldEnum | BlogPostCommentScalarFieldEnum[]
  }


  /**
   * BlogPostComment findMany
   */
  export type BlogPostCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostComments to fetch.
     */
    where?: BlogPostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostComments to fetch.
     */
    orderBy?: BlogPostCommentOrderByWithRelationInput | BlogPostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPostComments.
     */
    cursor?: BlogPostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostComments.
     */
    skip?: number
    distinct?: BlogPostCommentScalarFieldEnum | BlogPostCommentScalarFieldEnum[]
  }


  /**
   * BlogPostComment create
   */
  export type BlogPostCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPostComment.
     */
    data: XOR<BlogPostCommentCreateInput, BlogPostCommentUncheckedCreateInput>
  }


  /**
   * BlogPostComment createMany
   */
  export type BlogPostCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPostComments.
     */
    data: BlogPostCommentCreateManyInput | BlogPostCommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BlogPostComment update
   */
  export type BlogPostCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPostComment.
     */
    data: XOR<BlogPostCommentUpdateInput, BlogPostCommentUncheckedUpdateInput>
    /**
     * Choose, which BlogPostComment to update.
     */
    where: BlogPostCommentWhereUniqueInput
  }


  /**
   * BlogPostComment updateMany
   */
  export type BlogPostCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPostComments.
     */
    data: XOR<BlogPostCommentUpdateManyMutationInput, BlogPostCommentUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostComments to update
     */
    where?: BlogPostCommentWhereInput
  }


  /**
   * BlogPostComment upsert
   */
  export type BlogPostCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPostComment to update in case it exists.
     */
    where: BlogPostCommentWhereUniqueInput
    /**
     * In case the BlogPostComment found by the `where` argument doesn't exist, create a new BlogPostComment with this data.
     */
    create: XOR<BlogPostCommentCreateInput, BlogPostCommentUncheckedCreateInput>
    /**
     * In case the BlogPostComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostCommentUpdateInput, BlogPostCommentUncheckedUpdateInput>
  }


  /**
   * BlogPostComment delete
   */
  export type BlogPostCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
    /**
     * Filter which BlogPostComment to delete.
     */
    where: BlogPostCommentWhereUniqueInput
  }


  /**
   * BlogPostComment deleteMany
   */
  export type BlogPostCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostComments to delete
     */
    where?: BlogPostCommentWhereInput
  }


  /**
   * BlogPostComment.post
   */
  export type BlogPostComment$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
  }


  /**
   * BlogPostComment.author
   */
  export type BlogPostComment$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * BlogPostComment without action
   */
  export type BlogPostCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
  }



  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    userId: string | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    userId: string | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    url: number
    userId: number
    _all: number
  }


  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    userId?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    userId?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    userId?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: string
    name: string
    url: string
    userId: string | null
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    userId?: boolean
    owner?: boolean | Site$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    userId?: boolean
  }

  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Site$ownerArgs<ExtArgs>
  }


  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      userId: string | null
    }, ExtArgs["result"]["site"]>
    composites: {}
  }


  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SiteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Site that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SiteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SiteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
    **/
    create<T extends SiteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SiteCreateArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sites.
     *     @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     *     @example
     *     // Create many Sites
     *     const site = await prisma.site.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SiteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
    **/
    delete<T extends SiteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SiteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SiteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SiteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
    **/
    upsert<T extends SiteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>
    ): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends Site$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Site$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Site model
   */ 
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'String'>
    readonly name: FieldRef<"Site", 'String'>
    readonly url: FieldRef<"Site", 'String'>
    readonly userId: FieldRef<"Site", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }


  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }


  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }


  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }


  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }


  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }


  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }


  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
  }


  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }


  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }


  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
  }


  /**
   * Site.owner
   */
  export type Site$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SiteInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    yearOfBirth: number | null
  }

  export type UserSumAggregateOutputType = {
    yearOfBirth: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    gender: $Enums.Gender | null
    yearOfBirth: number | null
    wantsNewsletter: boolean | null
    weddingDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    gender: $Enums.Gender | null
    yearOfBirth: number | null
    wantsNewsletter: boolean | null
    weddingDate: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    gender: number
    yearOfBirth: number
    wantsNewsletter: number
    interests: number
    address: number
    weddingDate: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    yearOfBirth?: true
  }

  export type UserSumAggregateInputType = {
    yearOfBirth?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    gender?: true
    yearOfBirth?: true
    wantsNewsletter?: true
    weddingDate?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    gender?: true
    yearOfBirth?: true
    wantsNewsletter?: true
    weddingDate?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    gender?: true
    yearOfBirth?: true
    wantsNewsletter?: true
    interests?: true
    address?: true
    weddingDate?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    firstName: string | null
    lastName: string | null
    gender: $Enums.Gender | null
    yearOfBirth: number | null
    wantsNewsletter: boolean
    interests: $Enums.Topic[]
    address: JsonValue | null
    weddingDate: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    yearOfBirth?: boolean
    wantsNewsletter?: boolean
    interests?: boolean
    address?: boolean
    weddingDate?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    userSocialMedia?: boolean | User$userSocialMediaArgs<ExtArgs>
    blogPosts?: boolean | User$blogPostsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    companies?: boolean | User$companiesArgs<ExtArgs>
    site?: boolean | User$siteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    yearOfBirth?: boolean
    wantsNewsletter?: boolean
    interests?: boolean
    address?: boolean
    weddingDate?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    userSocialMedia?: boolean | User$userSocialMediaArgs<ExtArgs>
    blogPosts?: boolean | User$blogPostsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    companies?: boolean | User$companiesArgs<ExtArgs>
    site?: boolean | User$siteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$UserRolePayload<ExtArgs>[]
      userSocialMedia: Prisma.$UserSocialMediaPayload<ExtArgs> | null
      blogPosts: Prisma.$BlogPostPayload<ExtArgs>[]
      comments: Prisma.$BlogPostCommentPayload<ExtArgs>[]
      companies: Prisma.$CompanyPayload<ExtArgs>[]
      /**
       * @TypeGraphQL.omit(output: true)
       */
      site: Prisma.$SitePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string | null
      lastName: string | null
      gender: $Enums.Gender | null
      yearOfBirth: number | null
      wantsNewsletter: boolean
      interests: $Enums.Topic[]
      /**
       * @TypeGraphQL.omit(output: true)
       */
      address: Prisma.JsonValue | null
      weddingDate: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany'> | Null>;

    userSocialMedia<T extends User$userSocialMediaArgs<ExtArgs> = {}>(args?: Subset<T, User$userSocialMediaArgs<ExtArgs>>): Prisma__UserSocialMediaClient<$Result.GetResult<Prisma.$UserSocialMediaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    blogPosts<T extends User$blogPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostCommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    companies<T extends User$companiesArgs<ExtArgs> = {}>(args?: Subset<T, User$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findMany'> | Null>;

    site<T extends User$siteArgs<ExtArgs> = {}>(args?: Subset<T, User$siteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly yearOfBirth: FieldRef<"User", 'Int'>
    readonly wantsNewsletter: FieldRef<"User", 'Boolean'>
    readonly interests: FieldRef<"User", 'Topic[]'>
    readonly address: FieldRef<"User", 'Json'>
    readonly weddingDate: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }


  /**
   * User.userSocialMedia
   */
  export type User$userSocialMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     */
    select?: UserSocialMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserSocialMediaInclude<ExtArgs> | null
    where?: UserSocialMediaWhereInput
  }


  /**
   * User.blogPosts
   */
  export type User$blogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }


  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     */
    select?: BlogPostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogPostCommentInclude<ExtArgs> | null
    where?: BlogPostCommentWhereInput
    orderBy?: BlogPostCommentOrderByWithRelationInput | BlogPostCommentOrderByWithRelationInput[]
    cursor?: BlogPostCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostCommentScalarFieldEnum | BlogPostCommentScalarFieldEnum[]
  }


  /**
   * User.companies
   */
  export type User$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * User.site
   */
  export type User$siteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model FilteringTest
   */

  export type AggregateFilteringTest = {
    _count: FilteringTestCountAggregateOutputType | null
    _avg: FilteringTestAvgAggregateOutputType | null
    _sum: FilteringTestSumAggregateOutputType | null
    _min: FilteringTestMinAggregateOutputType | null
    _max: FilteringTestMaxAggregateOutputType | null
  }

  export type FilteringTestAvgAggregateOutputType = {
    id: number | null
    intField: number | null
    floatField: number | null
    intField_bt: number | null
    snake_field: number | null
    snake_field_bt: number | null
  }

  export type FilteringTestSumAggregateOutputType = {
    id: number | null
    intField: number | null
    floatField: number | null
    intField_bt: number | null
    snake_field: number | null
    snake_field_bt: number | null
  }

  export type FilteringTestMinAggregateOutputType = {
    id: number | null
    intField: number | null
    floatField: number | null
    stringField: string | null
    dateTimeField: Date | null
    boolField: boolean | null
    intField_lt: string | null
    intField_bt: number | null
    snake_field: number | null
    snake_field_bt: number | null
  }

  export type FilteringTestMaxAggregateOutputType = {
    id: number | null
    intField: number | null
    floatField: number | null
    stringField: string | null
    dateTimeField: Date | null
    boolField: boolean | null
    intField_lt: string | null
    intField_bt: number | null
    snake_field: number | null
    snake_field_bt: number | null
  }

  export type FilteringTestCountAggregateOutputType = {
    id: number
    intField: number
    floatField: number
    stringField: number
    dateTimeField: number
    boolField: number
    intField_lt: number
    intField_bt: number
    snake_field: number
    snake_field_bt: number
    _all: number
  }


  export type FilteringTestAvgAggregateInputType = {
    id?: true
    intField?: true
    floatField?: true
    intField_bt?: true
    snake_field?: true
    snake_field_bt?: true
  }

  export type FilteringTestSumAggregateInputType = {
    id?: true
    intField?: true
    floatField?: true
    intField_bt?: true
    snake_field?: true
    snake_field_bt?: true
  }

  export type FilteringTestMinAggregateInputType = {
    id?: true
    intField?: true
    floatField?: true
    stringField?: true
    dateTimeField?: true
    boolField?: true
    intField_lt?: true
    intField_bt?: true
    snake_field?: true
    snake_field_bt?: true
  }

  export type FilteringTestMaxAggregateInputType = {
    id?: true
    intField?: true
    floatField?: true
    stringField?: true
    dateTimeField?: true
    boolField?: true
    intField_lt?: true
    intField_bt?: true
    snake_field?: true
    snake_field_bt?: true
  }

  export type FilteringTestCountAggregateInputType = {
    id?: true
    intField?: true
    floatField?: true
    stringField?: true
    dateTimeField?: true
    boolField?: true
    intField_lt?: true
    intField_bt?: true
    snake_field?: true
    snake_field_bt?: true
    _all?: true
  }

  export type FilteringTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilteringTest to aggregate.
     */
    where?: FilteringTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilteringTests to fetch.
     */
    orderBy?: FilteringTestOrderByWithRelationInput | FilteringTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilteringTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilteringTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilteringTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilteringTests
    **/
    _count?: true | FilteringTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilteringTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilteringTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilteringTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilteringTestMaxAggregateInputType
  }

  export type GetFilteringTestAggregateType<T extends FilteringTestAggregateArgs> = {
        [P in keyof T & keyof AggregateFilteringTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilteringTest[P]>
      : GetScalarType<T[P], AggregateFilteringTest[P]>
  }




  export type FilteringTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilteringTestWhereInput
    orderBy?: FilteringTestOrderByWithAggregationInput | FilteringTestOrderByWithAggregationInput[]
    by: FilteringTestScalarFieldEnum[] | FilteringTestScalarFieldEnum
    having?: FilteringTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilteringTestCountAggregateInputType | true
    _avg?: FilteringTestAvgAggregateInputType
    _sum?: FilteringTestSumAggregateInputType
    _min?: FilteringTestMinAggregateInputType
    _max?: FilteringTestMaxAggregateInputType
  }

  export type FilteringTestGroupByOutputType = {
    id: number
    intField: number
    floatField: number
    stringField: string
    dateTimeField: Date
    boolField: boolean
    intField_lt: string
    intField_bt: number
    snake_field: number
    snake_field_bt: number
    _count: FilteringTestCountAggregateOutputType | null
    _avg: FilteringTestAvgAggregateOutputType | null
    _sum: FilteringTestSumAggregateOutputType | null
    _min: FilteringTestMinAggregateOutputType | null
    _max: FilteringTestMaxAggregateOutputType | null
  }

  type GetFilteringTestGroupByPayload<T extends FilteringTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilteringTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilteringTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilteringTestGroupByOutputType[P]>
            : GetScalarType<T[P], FilteringTestGroupByOutputType[P]>
        }
      >
    >


  export type FilteringTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intField?: boolean
    floatField?: boolean
    stringField?: boolean
    dateTimeField?: boolean
    boolField?: boolean
    intField_lt?: boolean
    intField_bt?: boolean
    snake_field?: boolean
    snake_field_bt?: boolean
  }, ExtArgs["result"]["filteringTest"]>

  export type FilteringTestSelectScalar = {
    id?: boolean
    intField?: boolean
    floatField?: boolean
    stringField?: boolean
    dateTimeField?: boolean
    boolField?: boolean
    intField_lt?: boolean
    intField_bt?: boolean
    snake_field?: boolean
    snake_field_bt?: boolean
  }


  export type $FilteringTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilteringTest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      intField: number
      floatField: number
      stringField: string
      dateTimeField: Date
      boolField: boolean
      intField_lt: string
      intField_bt: number
      snake_field: number
      snake_field_bt: number
    }, ExtArgs["result"]["filteringTest"]>
    composites: {}
  }


  type FilteringTestGetPayload<S extends boolean | null | undefined | FilteringTestDefaultArgs> = $Result.GetResult<Prisma.$FilteringTestPayload, S>

  type FilteringTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FilteringTestFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FilteringTestCountAggregateInputType | true
    }

  export interface FilteringTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilteringTest'], meta: { name: 'FilteringTest' } }
    /**
     * Find zero or one FilteringTest that matches the filter.
     * @param {FilteringTestFindUniqueArgs} args - Arguments to find a FilteringTest
     * @example
     * // Get one FilteringTest
     * const filteringTest = await prisma.filteringTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FilteringTestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FilteringTestFindUniqueArgs<ExtArgs>>
    ): Prisma__FilteringTestClient<$Result.GetResult<Prisma.$FilteringTestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FilteringTest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FilteringTestFindUniqueOrThrowArgs} args - Arguments to find a FilteringTest
     * @example
     * // Get one FilteringTest
     * const filteringTest = await prisma.filteringTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FilteringTestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FilteringTestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FilteringTestClient<$Result.GetResult<Prisma.$FilteringTestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FilteringTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteringTestFindFirstArgs} args - Arguments to find a FilteringTest
     * @example
     * // Get one FilteringTest
     * const filteringTest = await prisma.filteringTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FilteringTestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FilteringTestFindFirstArgs<ExtArgs>>
    ): Prisma__FilteringTestClient<$Result.GetResult<Prisma.$FilteringTestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FilteringTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteringTestFindFirstOrThrowArgs} args - Arguments to find a FilteringTest
     * @example
     * // Get one FilteringTest
     * const filteringTest = await prisma.filteringTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FilteringTestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FilteringTestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FilteringTestClient<$Result.GetResult<Prisma.$FilteringTestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FilteringTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteringTestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilteringTests
     * const filteringTests = await prisma.filteringTest.findMany()
     * 
     * // Get first 10 FilteringTests
     * const filteringTests = await prisma.filteringTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filteringTestWithIdOnly = await prisma.filteringTest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FilteringTestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FilteringTestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilteringTestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FilteringTest.
     * @param {FilteringTestCreateArgs} args - Arguments to create a FilteringTest.
     * @example
     * // Create one FilteringTest
     * const FilteringTest = await prisma.filteringTest.create({
     *   data: {
     *     // ... data to create a FilteringTest
     *   }
     * })
     * 
    **/
    create<T extends FilteringTestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FilteringTestCreateArgs<ExtArgs>>
    ): Prisma__FilteringTestClient<$Result.GetResult<Prisma.$FilteringTestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FilteringTests.
     *     @param {FilteringTestCreateManyArgs} args - Arguments to create many FilteringTests.
     *     @example
     *     // Create many FilteringTests
     *     const filteringTest = await prisma.filteringTest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FilteringTestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FilteringTestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FilteringTest.
     * @param {FilteringTestDeleteArgs} args - Arguments to delete one FilteringTest.
     * @example
     * // Delete one FilteringTest
     * const FilteringTest = await prisma.filteringTest.delete({
     *   where: {
     *     // ... filter to delete one FilteringTest
     *   }
     * })
     * 
    **/
    delete<T extends FilteringTestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FilteringTestDeleteArgs<ExtArgs>>
    ): Prisma__FilteringTestClient<$Result.GetResult<Prisma.$FilteringTestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FilteringTest.
     * @param {FilteringTestUpdateArgs} args - Arguments to update one FilteringTest.
     * @example
     * // Update one FilteringTest
     * const filteringTest = await prisma.filteringTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FilteringTestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FilteringTestUpdateArgs<ExtArgs>>
    ): Prisma__FilteringTestClient<$Result.GetResult<Prisma.$FilteringTestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FilteringTests.
     * @param {FilteringTestDeleteManyArgs} args - Arguments to filter FilteringTests to delete.
     * @example
     * // Delete a few FilteringTests
     * const { count } = await prisma.filteringTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FilteringTestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FilteringTestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilteringTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteringTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilteringTests
     * const filteringTest = await prisma.filteringTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FilteringTestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FilteringTestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FilteringTest.
     * @param {FilteringTestUpsertArgs} args - Arguments to update or create a FilteringTest.
     * @example
     * // Update or create a FilteringTest
     * const filteringTest = await prisma.filteringTest.upsert({
     *   create: {
     *     // ... data to create a FilteringTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilteringTest we want to update
     *   }
     * })
    **/
    upsert<T extends FilteringTestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FilteringTestUpsertArgs<ExtArgs>>
    ): Prisma__FilteringTestClient<$Result.GetResult<Prisma.$FilteringTestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FilteringTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteringTestCountArgs} args - Arguments to filter FilteringTests to count.
     * @example
     * // Count the number of FilteringTests
     * const count = await prisma.filteringTest.count({
     *   where: {
     *     // ... the filter for the FilteringTests we want to count
     *   }
     * })
    **/
    count<T extends FilteringTestCountArgs>(
      args?: Subset<T, FilteringTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilteringTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilteringTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteringTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilteringTestAggregateArgs>(args: Subset<T, FilteringTestAggregateArgs>): Prisma.PrismaPromise<GetFilteringTestAggregateType<T>>

    /**
     * Group by FilteringTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteringTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilteringTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilteringTestGroupByArgs['orderBy'] }
        : { orderBy?: FilteringTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilteringTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilteringTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilteringTest model
   */
  readonly fields: FilteringTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilteringTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilteringTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FilteringTest model
   */ 
  interface FilteringTestFieldRefs {
    readonly id: FieldRef<"FilteringTest", 'Int'>
    readonly intField: FieldRef<"FilteringTest", 'Int'>
    readonly floatField: FieldRef<"FilteringTest", 'Float'>
    readonly stringField: FieldRef<"FilteringTest", 'String'>
    readonly dateTimeField: FieldRef<"FilteringTest", 'DateTime'>
    readonly boolField: FieldRef<"FilteringTest", 'Boolean'>
    readonly intField_lt: FieldRef<"FilteringTest", 'String'>
    readonly intField_bt: FieldRef<"FilteringTest", 'Int'>
    readonly snake_field: FieldRef<"FilteringTest", 'Int'>
    readonly snake_field_bt: FieldRef<"FilteringTest", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * FilteringTest findUnique
   */
  export type FilteringTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteringTest
     */
    select?: FilteringTestSelect<ExtArgs> | null
    /**
     * Filter, which FilteringTest to fetch.
     */
    where: FilteringTestWhereUniqueInput
  }


  /**
   * FilteringTest findUniqueOrThrow
   */
  export type FilteringTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteringTest
     */
    select?: FilteringTestSelect<ExtArgs> | null
    /**
     * Filter, which FilteringTest to fetch.
     */
    where: FilteringTestWhereUniqueInput
  }


  /**
   * FilteringTest findFirst
   */
  export type FilteringTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteringTest
     */
    select?: FilteringTestSelect<ExtArgs> | null
    /**
     * Filter, which FilteringTest to fetch.
     */
    where?: FilteringTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilteringTests to fetch.
     */
    orderBy?: FilteringTestOrderByWithRelationInput | FilteringTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilteringTests.
     */
    cursor?: FilteringTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilteringTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilteringTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilteringTests.
     */
    distinct?: FilteringTestScalarFieldEnum | FilteringTestScalarFieldEnum[]
  }


  /**
   * FilteringTest findFirstOrThrow
   */
  export type FilteringTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteringTest
     */
    select?: FilteringTestSelect<ExtArgs> | null
    /**
     * Filter, which FilteringTest to fetch.
     */
    where?: FilteringTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilteringTests to fetch.
     */
    orderBy?: FilteringTestOrderByWithRelationInput | FilteringTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilteringTests.
     */
    cursor?: FilteringTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilteringTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilteringTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilteringTests.
     */
    distinct?: FilteringTestScalarFieldEnum | FilteringTestScalarFieldEnum[]
  }


  /**
   * FilteringTest findMany
   */
  export type FilteringTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteringTest
     */
    select?: FilteringTestSelect<ExtArgs> | null
    /**
     * Filter, which FilteringTests to fetch.
     */
    where?: FilteringTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilteringTests to fetch.
     */
    orderBy?: FilteringTestOrderByWithRelationInput | FilteringTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilteringTests.
     */
    cursor?: FilteringTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilteringTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilteringTests.
     */
    skip?: number
    distinct?: FilteringTestScalarFieldEnum | FilteringTestScalarFieldEnum[]
  }


  /**
   * FilteringTest create
   */
  export type FilteringTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteringTest
     */
    select?: FilteringTestSelect<ExtArgs> | null
    /**
     * The data needed to create a FilteringTest.
     */
    data: XOR<FilteringTestCreateInput, FilteringTestUncheckedCreateInput>
  }


  /**
   * FilteringTest createMany
   */
  export type FilteringTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilteringTests.
     */
    data: FilteringTestCreateManyInput | FilteringTestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FilteringTest update
   */
  export type FilteringTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteringTest
     */
    select?: FilteringTestSelect<ExtArgs> | null
    /**
     * The data needed to update a FilteringTest.
     */
    data: XOR<FilteringTestUpdateInput, FilteringTestUncheckedUpdateInput>
    /**
     * Choose, which FilteringTest to update.
     */
    where: FilteringTestWhereUniqueInput
  }


  /**
   * FilteringTest updateMany
   */
  export type FilteringTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilteringTests.
     */
    data: XOR<FilteringTestUpdateManyMutationInput, FilteringTestUncheckedUpdateManyInput>
    /**
     * Filter which FilteringTests to update
     */
    where?: FilteringTestWhereInput
  }


  /**
   * FilteringTest upsert
   */
  export type FilteringTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteringTest
     */
    select?: FilteringTestSelect<ExtArgs> | null
    /**
     * The filter to search for the FilteringTest to update in case it exists.
     */
    where: FilteringTestWhereUniqueInput
    /**
     * In case the FilteringTest found by the `where` argument doesn't exist, create a new FilteringTest with this data.
     */
    create: XOR<FilteringTestCreateInput, FilteringTestUncheckedCreateInput>
    /**
     * In case the FilteringTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilteringTestUpdateInput, FilteringTestUncheckedUpdateInput>
  }


  /**
   * FilteringTest delete
   */
  export type FilteringTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteringTest
     */
    select?: FilteringTestSelect<ExtArgs> | null
    /**
     * Filter which FilteringTest to delete.
     */
    where: FilteringTestWhereUniqueInput
  }


  /**
   * FilteringTest deleteMany
   */
  export type FilteringTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilteringTests to delete
     */
    where?: FilteringTestWhereInput
  }


  /**
   * FilteringTest without action
   */
  export type FilteringTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteringTest
     */
    select?: FilteringTestSelect<ExtArgs> | null
  }



  /**
   * Model SomePublicRecordWithIntId
   */

  export type AggregateSomePublicRecordWithIntId = {
    _count: SomePublicRecordWithIntIdCountAggregateOutputType | null
    _avg: SomePublicRecordWithIntIdAvgAggregateOutputType | null
    _sum: SomePublicRecordWithIntIdSumAggregateOutputType | null
    _min: SomePublicRecordWithIntIdMinAggregateOutputType | null
    _max: SomePublicRecordWithIntIdMaxAggregateOutputType | null
  }

  export type SomePublicRecordWithIntIdAvgAggregateOutputType = {
    id: number | null
  }

  export type SomePublicRecordWithIntIdSumAggregateOutputType = {
    id: number | null
  }

  export type SomePublicRecordWithIntIdMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type SomePublicRecordWithIntIdMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type SomePublicRecordWithIntIdCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type SomePublicRecordWithIntIdAvgAggregateInputType = {
    id?: true
  }

  export type SomePublicRecordWithIntIdSumAggregateInputType = {
    id?: true
  }

  export type SomePublicRecordWithIntIdMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type SomePublicRecordWithIntIdMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type SomePublicRecordWithIntIdCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type SomePublicRecordWithIntIdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SomePublicRecordWithIntId to aggregate.
     */
    where?: SomePublicRecordWithIntIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SomePublicRecordWithIntIds to fetch.
     */
    orderBy?: SomePublicRecordWithIntIdOrderByWithRelationInput | SomePublicRecordWithIntIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SomePublicRecordWithIntIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SomePublicRecordWithIntIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SomePublicRecordWithIntIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SomePublicRecordWithIntIds
    **/
    _count?: true | SomePublicRecordWithIntIdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SomePublicRecordWithIntIdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SomePublicRecordWithIntIdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SomePublicRecordWithIntIdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SomePublicRecordWithIntIdMaxAggregateInputType
  }

  export type GetSomePublicRecordWithIntIdAggregateType<T extends SomePublicRecordWithIntIdAggregateArgs> = {
        [P in keyof T & keyof AggregateSomePublicRecordWithIntId]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSomePublicRecordWithIntId[P]>
      : GetScalarType<T[P], AggregateSomePublicRecordWithIntId[P]>
  }




  export type SomePublicRecordWithIntIdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SomePublicRecordWithIntIdWhereInput
    orderBy?: SomePublicRecordWithIntIdOrderByWithAggregationInput | SomePublicRecordWithIntIdOrderByWithAggregationInput[]
    by: SomePublicRecordWithIntIdScalarFieldEnum[] | SomePublicRecordWithIntIdScalarFieldEnum
    having?: SomePublicRecordWithIntIdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SomePublicRecordWithIntIdCountAggregateInputType | true
    _avg?: SomePublicRecordWithIntIdAvgAggregateInputType
    _sum?: SomePublicRecordWithIntIdSumAggregateInputType
    _min?: SomePublicRecordWithIntIdMinAggregateInputType
    _max?: SomePublicRecordWithIntIdMaxAggregateInputType
  }

  export type SomePublicRecordWithIntIdGroupByOutputType = {
    id: number
    title: string
    _count: SomePublicRecordWithIntIdCountAggregateOutputType | null
    _avg: SomePublicRecordWithIntIdAvgAggregateOutputType | null
    _sum: SomePublicRecordWithIntIdSumAggregateOutputType | null
    _min: SomePublicRecordWithIntIdMinAggregateOutputType | null
    _max: SomePublicRecordWithIntIdMaxAggregateOutputType | null
  }

  type GetSomePublicRecordWithIntIdGroupByPayload<T extends SomePublicRecordWithIntIdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SomePublicRecordWithIntIdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SomePublicRecordWithIntIdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SomePublicRecordWithIntIdGroupByOutputType[P]>
            : GetScalarType<T[P], SomePublicRecordWithIntIdGroupByOutputType[P]>
        }
      >
    >


  export type SomePublicRecordWithIntIdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["somePublicRecordWithIntId"]>

  export type SomePublicRecordWithIntIdSelectScalar = {
    id?: boolean
    title?: boolean
  }


  export type $SomePublicRecordWithIntIdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SomePublicRecordWithIntId"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
    }, ExtArgs["result"]["somePublicRecordWithIntId"]>
    composites: {}
  }


  type SomePublicRecordWithIntIdGetPayload<S extends boolean | null | undefined | SomePublicRecordWithIntIdDefaultArgs> = $Result.GetResult<Prisma.$SomePublicRecordWithIntIdPayload, S>

  type SomePublicRecordWithIntIdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SomePublicRecordWithIntIdFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SomePublicRecordWithIntIdCountAggregateInputType | true
    }

  export interface SomePublicRecordWithIntIdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SomePublicRecordWithIntId'], meta: { name: 'SomePublicRecordWithIntId' } }
    /**
     * Find zero or one SomePublicRecordWithIntId that matches the filter.
     * @param {SomePublicRecordWithIntIdFindUniqueArgs} args - Arguments to find a SomePublicRecordWithIntId
     * @example
     * // Get one SomePublicRecordWithIntId
     * const somePublicRecordWithIntId = await prisma.somePublicRecordWithIntId.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SomePublicRecordWithIntIdFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SomePublicRecordWithIntIdFindUniqueArgs<ExtArgs>>
    ): Prisma__SomePublicRecordWithIntIdClient<$Result.GetResult<Prisma.$SomePublicRecordWithIntIdPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SomePublicRecordWithIntId that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SomePublicRecordWithIntIdFindUniqueOrThrowArgs} args - Arguments to find a SomePublicRecordWithIntId
     * @example
     * // Get one SomePublicRecordWithIntId
     * const somePublicRecordWithIntId = await prisma.somePublicRecordWithIntId.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SomePublicRecordWithIntIdFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SomePublicRecordWithIntIdFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SomePublicRecordWithIntIdClient<$Result.GetResult<Prisma.$SomePublicRecordWithIntIdPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SomePublicRecordWithIntId that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SomePublicRecordWithIntIdFindFirstArgs} args - Arguments to find a SomePublicRecordWithIntId
     * @example
     * // Get one SomePublicRecordWithIntId
     * const somePublicRecordWithIntId = await prisma.somePublicRecordWithIntId.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SomePublicRecordWithIntIdFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SomePublicRecordWithIntIdFindFirstArgs<ExtArgs>>
    ): Prisma__SomePublicRecordWithIntIdClient<$Result.GetResult<Prisma.$SomePublicRecordWithIntIdPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SomePublicRecordWithIntId that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SomePublicRecordWithIntIdFindFirstOrThrowArgs} args - Arguments to find a SomePublicRecordWithIntId
     * @example
     * // Get one SomePublicRecordWithIntId
     * const somePublicRecordWithIntId = await prisma.somePublicRecordWithIntId.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SomePublicRecordWithIntIdFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SomePublicRecordWithIntIdFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SomePublicRecordWithIntIdClient<$Result.GetResult<Prisma.$SomePublicRecordWithIntIdPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SomePublicRecordWithIntIds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SomePublicRecordWithIntIdFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SomePublicRecordWithIntIds
     * const somePublicRecordWithIntIds = await prisma.somePublicRecordWithIntId.findMany()
     * 
     * // Get first 10 SomePublicRecordWithIntIds
     * const somePublicRecordWithIntIds = await prisma.somePublicRecordWithIntId.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const somePublicRecordWithIntIdWithIdOnly = await prisma.somePublicRecordWithIntId.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SomePublicRecordWithIntIdFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SomePublicRecordWithIntIdFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SomePublicRecordWithIntIdPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SomePublicRecordWithIntId.
     * @param {SomePublicRecordWithIntIdCreateArgs} args - Arguments to create a SomePublicRecordWithIntId.
     * @example
     * // Create one SomePublicRecordWithIntId
     * const SomePublicRecordWithIntId = await prisma.somePublicRecordWithIntId.create({
     *   data: {
     *     // ... data to create a SomePublicRecordWithIntId
     *   }
     * })
     * 
    **/
    create<T extends SomePublicRecordWithIntIdCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SomePublicRecordWithIntIdCreateArgs<ExtArgs>>
    ): Prisma__SomePublicRecordWithIntIdClient<$Result.GetResult<Prisma.$SomePublicRecordWithIntIdPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SomePublicRecordWithIntIds.
     *     @param {SomePublicRecordWithIntIdCreateManyArgs} args - Arguments to create many SomePublicRecordWithIntIds.
     *     @example
     *     // Create many SomePublicRecordWithIntIds
     *     const somePublicRecordWithIntId = await prisma.somePublicRecordWithIntId.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SomePublicRecordWithIntIdCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SomePublicRecordWithIntIdCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SomePublicRecordWithIntId.
     * @param {SomePublicRecordWithIntIdDeleteArgs} args - Arguments to delete one SomePublicRecordWithIntId.
     * @example
     * // Delete one SomePublicRecordWithIntId
     * const SomePublicRecordWithIntId = await prisma.somePublicRecordWithIntId.delete({
     *   where: {
     *     // ... filter to delete one SomePublicRecordWithIntId
     *   }
     * })
     * 
    **/
    delete<T extends SomePublicRecordWithIntIdDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SomePublicRecordWithIntIdDeleteArgs<ExtArgs>>
    ): Prisma__SomePublicRecordWithIntIdClient<$Result.GetResult<Prisma.$SomePublicRecordWithIntIdPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SomePublicRecordWithIntId.
     * @param {SomePublicRecordWithIntIdUpdateArgs} args - Arguments to update one SomePublicRecordWithIntId.
     * @example
     * // Update one SomePublicRecordWithIntId
     * const somePublicRecordWithIntId = await prisma.somePublicRecordWithIntId.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SomePublicRecordWithIntIdUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SomePublicRecordWithIntIdUpdateArgs<ExtArgs>>
    ): Prisma__SomePublicRecordWithIntIdClient<$Result.GetResult<Prisma.$SomePublicRecordWithIntIdPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SomePublicRecordWithIntIds.
     * @param {SomePublicRecordWithIntIdDeleteManyArgs} args - Arguments to filter SomePublicRecordWithIntIds to delete.
     * @example
     * // Delete a few SomePublicRecordWithIntIds
     * const { count } = await prisma.somePublicRecordWithIntId.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SomePublicRecordWithIntIdDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SomePublicRecordWithIntIdDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SomePublicRecordWithIntIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SomePublicRecordWithIntIdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SomePublicRecordWithIntIds
     * const somePublicRecordWithIntId = await prisma.somePublicRecordWithIntId.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SomePublicRecordWithIntIdUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SomePublicRecordWithIntIdUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SomePublicRecordWithIntId.
     * @param {SomePublicRecordWithIntIdUpsertArgs} args - Arguments to update or create a SomePublicRecordWithIntId.
     * @example
     * // Update or create a SomePublicRecordWithIntId
     * const somePublicRecordWithIntId = await prisma.somePublicRecordWithIntId.upsert({
     *   create: {
     *     // ... data to create a SomePublicRecordWithIntId
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SomePublicRecordWithIntId we want to update
     *   }
     * })
    **/
    upsert<T extends SomePublicRecordWithIntIdUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SomePublicRecordWithIntIdUpsertArgs<ExtArgs>>
    ): Prisma__SomePublicRecordWithIntIdClient<$Result.GetResult<Prisma.$SomePublicRecordWithIntIdPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SomePublicRecordWithIntIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SomePublicRecordWithIntIdCountArgs} args - Arguments to filter SomePublicRecordWithIntIds to count.
     * @example
     * // Count the number of SomePublicRecordWithIntIds
     * const count = await prisma.somePublicRecordWithIntId.count({
     *   where: {
     *     // ... the filter for the SomePublicRecordWithIntIds we want to count
     *   }
     * })
    **/
    count<T extends SomePublicRecordWithIntIdCountArgs>(
      args?: Subset<T, SomePublicRecordWithIntIdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SomePublicRecordWithIntIdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SomePublicRecordWithIntId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SomePublicRecordWithIntIdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SomePublicRecordWithIntIdAggregateArgs>(args: Subset<T, SomePublicRecordWithIntIdAggregateArgs>): Prisma.PrismaPromise<GetSomePublicRecordWithIntIdAggregateType<T>>

    /**
     * Group by SomePublicRecordWithIntId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SomePublicRecordWithIntIdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SomePublicRecordWithIntIdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SomePublicRecordWithIntIdGroupByArgs['orderBy'] }
        : { orderBy?: SomePublicRecordWithIntIdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SomePublicRecordWithIntIdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSomePublicRecordWithIntIdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SomePublicRecordWithIntId model
   */
  readonly fields: SomePublicRecordWithIntIdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SomePublicRecordWithIntId.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SomePublicRecordWithIntIdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SomePublicRecordWithIntId model
   */ 
  interface SomePublicRecordWithIntIdFieldRefs {
    readonly id: FieldRef<"SomePublicRecordWithIntId", 'Int'>
    readonly title: FieldRef<"SomePublicRecordWithIntId", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SomePublicRecordWithIntId findUnique
   */
  export type SomePublicRecordWithIntIdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     */
    select?: SomePublicRecordWithIntIdSelect<ExtArgs> | null
    /**
     * Filter, which SomePublicRecordWithIntId to fetch.
     */
    where: SomePublicRecordWithIntIdWhereUniqueInput
  }


  /**
   * SomePublicRecordWithIntId findUniqueOrThrow
   */
  export type SomePublicRecordWithIntIdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     */
    select?: SomePublicRecordWithIntIdSelect<ExtArgs> | null
    /**
     * Filter, which SomePublicRecordWithIntId to fetch.
     */
    where: SomePublicRecordWithIntIdWhereUniqueInput
  }


  /**
   * SomePublicRecordWithIntId findFirst
   */
  export type SomePublicRecordWithIntIdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     */
    select?: SomePublicRecordWithIntIdSelect<ExtArgs> | null
    /**
     * Filter, which SomePublicRecordWithIntId to fetch.
     */
    where?: SomePublicRecordWithIntIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SomePublicRecordWithIntIds to fetch.
     */
    orderBy?: SomePublicRecordWithIntIdOrderByWithRelationInput | SomePublicRecordWithIntIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SomePublicRecordWithIntIds.
     */
    cursor?: SomePublicRecordWithIntIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SomePublicRecordWithIntIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SomePublicRecordWithIntIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SomePublicRecordWithIntIds.
     */
    distinct?: SomePublicRecordWithIntIdScalarFieldEnum | SomePublicRecordWithIntIdScalarFieldEnum[]
  }


  /**
   * SomePublicRecordWithIntId findFirstOrThrow
   */
  export type SomePublicRecordWithIntIdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     */
    select?: SomePublicRecordWithIntIdSelect<ExtArgs> | null
    /**
     * Filter, which SomePublicRecordWithIntId to fetch.
     */
    where?: SomePublicRecordWithIntIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SomePublicRecordWithIntIds to fetch.
     */
    orderBy?: SomePublicRecordWithIntIdOrderByWithRelationInput | SomePublicRecordWithIntIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SomePublicRecordWithIntIds.
     */
    cursor?: SomePublicRecordWithIntIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SomePublicRecordWithIntIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SomePublicRecordWithIntIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SomePublicRecordWithIntIds.
     */
    distinct?: SomePublicRecordWithIntIdScalarFieldEnum | SomePublicRecordWithIntIdScalarFieldEnum[]
  }


  /**
   * SomePublicRecordWithIntId findMany
   */
  export type SomePublicRecordWithIntIdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     */
    select?: SomePublicRecordWithIntIdSelect<ExtArgs> | null
    /**
     * Filter, which SomePublicRecordWithIntIds to fetch.
     */
    where?: SomePublicRecordWithIntIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SomePublicRecordWithIntIds to fetch.
     */
    orderBy?: SomePublicRecordWithIntIdOrderByWithRelationInput | SomePublicRecordWithIntIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SomePublicRecordWithIntIds.
     */
    cursor?: SomePublicRecordWithIntIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SomePublicRecordWithIntIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SomePublicRecordWithIntIds.
     */
    skip?: number
    distinct?: SomePublicRecordWithIntIdScalarFieldEnum | SomePublicRecordWithIntIdScalarFieldEnum[]
  }


  /**
   * SomePublicRecordWithIntId create
   */
  export type SomePublicRecordWithIntIdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     */
    select?: SomePublicRecordWithIntIdSelect<ExtArgs> | null
    /**
     * The data needed to create a SomePublicRecordWithIntId.
     */
    data: XOR<SomePublicRecordWithIntIdCreateInput, SomePublicRecordWithIntIdUncheckedCreateInput>
  }


  /**
   * SomePublicRecordWithIntId createMany
   */
  export type SomePublicRecordWithIntIdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SomePublicRecordWithIntIds.
     */
    data: SomePublicRecordWithIntIdCreateManyInput | SomePublicRecordWithIntIdCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SomePublicRecordWithIntId update
   */
  export type SomePublicRecordWithIntIdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     */
    select?: SomePublicRecordWithIntIdSelect<ExtArgs> | null
    /**
     * The data needed to update a SomePublicRecordWithIntId.
     */
    data: XOR<SomePublicRecordWithIntIdUpdateInput, SomePublicRecordWithIntIdUncheckedUpdateInput>
    /**
     * Choose, which SomePublicRecordWithIntId to update.
     */
    where: SomePublicRecordWithIntIdWhereUniqueInput
  }


  /**
   * SomePublicRecordWithIntId updateMany
   */
  export type SomePublicRecordWithIntIdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SomePublicRecordWithIntIds.
     */
    data: XOR<SomePublicRecordWithIntIdUpdateManyMutationInput, SomePublicRecordWithIntIdUncheckedUpdateManyInput>
    /**
     * Filter which SomePublicRecordWithIntIds to update
     */
    where?: SomePublicRecordWithIntIdWhereInput
  }


  /**
   * SomePublicRecordWithIntId upsert
   */
  export type SomePublicRecordWithIntIdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     */
    select?: SomePublicRecordWithIntIdSelect<ExtArgs> | null
    /**
     * The filter to search for the SomePublicRecordWithIntId to update in case it exists.
     */
    where: SomePublicRecordWithIntIdWhereUniqueInput
    /**
     * In case the SomePublicRecordWithIntId found by the `where` argument doesn't exist, create a new SomePublicRecordWithIntId with this data.
     */
    create: XOR<SomePublicRecordWithIntIdCreateInput, SomePublicRecordWithIntIdUncheckedCreateInput>
    /**
     * In case the SomePublicRecordWithIntId was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SomePublicRecordWithIntIdUpdateInput, SomePublicRecordWithIntIdUncheckedUpdateInput>
  }


  /**
   * SomePublicRecordWithIntId delete
   */
  export type SomePublicRecordWithIntIdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     */
    select?: SomePublicRecordWithIntIdSelect<ExtArgs> | null
    /**
     * Filter which SomePublicRecordWithIntId to delete.
     */
    where: SomePublicRecordWithIntIdWhereUniqueInput
  }


  /**
   * SomePublicRecordWithIntId deleteMany
   */
  export type SomePublicRecordWithIntIdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SomePublicRecordWithIntIds to delete
     */
    where?: SomePublicRecordWithIntIdWhereInput
  }


  /**
   * SomePublicRecordWithIntId without action
   */
  export type SomePublicRecordWithIntIdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     */
    select?: SomePublicRecordWithIntIdSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const UserSocialMediaScalarFieldEnum: {
    id: 'id',
    instagram: 'instagram',
    twitter: 'twitter',
    userId: 'userId'
  };

  export type UserSocialMediaScalarFieldEnum = (typeof UserSocialMediaScalarFieldEnum)[keyof typeof UserSocialMediaScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    authorId: 'authorId'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const BlogPostCommentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    postId: 'postId',
    authorId: 'authorId'
  };

  export type BlogPostCommentScalarFieldEnum = (typeof BlogPostCommentScalarFieldEnum)[keyof typeof BlogPostCommentScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    userId: 'userId'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FilteringTestScalarFieldEnum: {
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
  };

  export type FilteringTestScalarFieldEnum = (typeof FilteringTestScalarFieldEnum)[keyof typeof FilteringTestScalarFieldEnum]


  export const SomePublicRecordWithIntIdScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type SomePublicRecordWithIntIdScalarFieldEnum = (typeof SomePublicRecordWithIntIdScalarFieldEnum)[keyof typeof SomePublicRecordWithIntIdScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Topic[]'
   */
  export type ListEnumTopicFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Topic[]'>
    


  /**
   * Reference to a field of type 'Topic'
   */
  export type EnumTopicFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Topic'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: StringFilter<"UserRole"> | string
    name?: StringFilter<"UserRole"> | string
    users?: UserListRelationFilter
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    name?: StringFilter<"UserRole"> | string
    users?: UserListRelationFilter
  }, "id">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRole"> | string
    name?: StringWithAggregatesFilter<"UserRole"> | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    userId?: StringFilter<"Company"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    userId?: StringFilter<"Company"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    userId?: StringWithAggregatesFilter<"Company"> | string
  }

  export type UserSocialMediaWhereInput = {
    AND?: UserSocialMediaWhereInput | UserSocialMediaWhereInput[]
    OR?: UserSocialMediaWhereInput[]
    NOT?: UserSocialMediaWhereInput | UserSocialMediaWhereInput[]
    id?: StringFilter<"UserSocialMedia"> | string
    instagram?: StringFilter<"UserSocialMedia"> | string
    twitter?: StringFilter<"UserSocialMedia"> | string
    userId?: StringFilter<"UserSocialMedia"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserSocialMediaOrderByWithRelationInput = {
    id?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSocialMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserSocialMediaWhereInput | UserSocialMediaWhereInput[]
    OR?: UserSocialMediaWhereInput[]
    NOT?: UserSocialMediaWhereInput | UserSocialMediaWhereInput[]
    instagram?: StringFilter<"UserSocialMedia"> | string
    twitter?: StringFilter<"UserSocialMedia"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSocialMediaOrderByWithAggregationInput = {
    id?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    userId?: SortOrder
    _count?: UserSocialMediaCountOrderByAggregateInput
    _max?: UserSocialMediaMaxOrderByAggregateInput
    _min?: UserSocialMediaMinOrderByAggregateInput
  }

  export type UserSocialMediaScalarWhereWithAggregatesInput = {
    AND?: UserSocialMediaScalarWhereWithAggregatesInput | UserSocialMediaScalarWhereWithAggregatesInput[]
    OR?: UserSocialMediaScalarWhereWithAggregatesInput[]
    NOT?: UserSocialMediaScalarWhereWithAggregatesInput | UserSocialMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSocialMedia"> | string
    instagram?: StringWithAggregatesFilter<"UserSocialMedia"> | string
    twitter?: StringWithAggregatesFilter<"UserSocialMedia"> | string
    userId?: StringWithAggregatesFilter<"UserSocialMedia"> | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    text?: StringFilter<"BlogPost"> | string
    authorId?: StringNullableFilter<"BlogPost"> | string | null
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    comments?: BlogPostCommentListRelationFilter
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    authorId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    comments?: BlogPostCommentOrderByRelationAggregateInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    title?: StringFilter<"BlogPost"> | string
    text?: StringFilter<"BlogPost"> | string
    authorId?: StringNullableFilter<"BlogPost"> | string | null
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    comments?: BlogPostCommentListRelationFilter
  }, "id">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    text?: StringWithAggregatesFilter<"BlogPost"> | string
    authorId?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
  }

  export type BlogPostCommentWhereInput = {
    AND?: BlogPostCommentWhereInput | BlogPostCommentWhereInput[]
    OR?: BlogPostCommentWhereInput[]
    NOT?: BlogPostCommentWhereInput | BlogPostCommentWhereInput[]
    id?: StringFilter<"BlogPostComment"> | string
    text?: StringFilter<"BlogPostComment"> | string
    postId?: StringNullableFilter<"BlogPostComment"> | string | null
    authorId?: StringNullableFilter<"BlogPostComment"> | string | null
    post?: XOR<BlogPostNullableRelationFilter, BlogPostWhereInput> | null
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type BlogPostCommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    postId?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    post?: BlogPostOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type BlogPostCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogPostCommentWhereInput | BlogPostCommentWhereInput[]
    OR?: BlogPostCommentWhereInput[]
    NOT?: BlogPostCommentWhereInput | BlogPostCommentWhereInput[]
    text?: StringFilter<"BlogPostComment"> | string
    postId?: StringNullableFilter<"BlogPostComment"> | string | null
    authorId?: StringNullableFilter<"BlogPostComment"> | string | null
    post?: XOR<BlogPostNullableRelationFilter, BlogPostWhereInput> | null
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type BlogPostCommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    postId?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: BlogPostCommentCountOrderByAggregateInput
    _max?: BlogPostCommentMaxOrderByAggregateInput
    _min?: BlogPostCommentMinOrderByAggregateInput
  }

  export type BlogPostCommentScalarWhereWithAggregatesInput = {
    AND?: BlogPostCommentScalarWhereWithAggregatesInput | BlogPostCommentScalarWhereWithAggregatesInput[]
    OR?: BlogPostCommentScalarWhereWithAggregatesInput[]
    NOT?: BlogPostCommentScalarWhereWithAggregatesInput | BlogPostCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPostComment"> | string
    text?: StringWithAggregatesFilter<"BlogPostComment"> | string
    postId?: StringNullableWithAggregatesFilter<"BlogPostComment"> | string | null
    authorId?: StringNullableWithAggregatesFilter<"BlogPostComment"> | string | null
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    url?: StringFilter<"Site"> | string
    userId?: StringNullableFilter<"Site"> | string | null
    owner?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    userId?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    url?: StringFilter<"Site"> | string
    owner?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "userId">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: SiteCountOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Site"> | string
    name?: StringWithAggregatesFilter<"Site"> | string
    url?: StringWithAggregatesFilter<"Site"> | string
    userId?: StringNullableWithAggregatesFilter<"Site"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    yearOfBirth?: IntNullableFilter<"User"> | number | null
    wantsNewsletter?: BoolFilter<"User"> | boolean
    interests?: EnumTopicNullableListFilter<"User">
    address?: JsonNullableFilter<"User">
    weddingDate?: DateTimeNullableFilter<"User"> | Date | string | null
    roles?: UserRoleListRelationFilter
    userSocialMedia?: XOR<UserSocialMediaNullableRelationFilter, UserSocialMediaWhereInput> | null
    blogPosts?: BlogPostListRelationFilter
    comments?: BlogPostCommentListRelationFilter
    companies?: CompanyListRelationFilter
    site?: XOR<SiteNullableRelationFilter, SiteWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    yearOfBirth?: SortOrderInput | SortOrder
    wantsNewsletter?: SortOrder
    interests?: SortOrder
    address?: SortOrderInput | SortOrder
    weddingDate?: SortOrderInput | SortOrder
    roles?: UserRoleOrderByRelationAggregateInput
    userSocialMedia?: UserSocialMediaOrderByWithRelationInput
    blogPosts?: BlogPostOrderByRelationAggregateInput
    comments?: BlogPostCommentOrderByRelationAggregateInput
    companies?: CompanyOrderByRelationAggregateInput
    site?: SiteOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    yearOfBirth?: IntNullableFilter<"User"> | number | null
    wantsNewsletter?: BoolFilter<"User"> | boolean
    interests?: EnumTopicNullableListFilter<"User">
    address?: JsonNullableFilter<"User">
    weddingDate?: DateTimeNullableFilter<"User"> | Date | string | null
    roles?: UserRoleListRelationFilter
    userSocialMedia?: XOR<UserSocialMediaNullableRelationFilter, UserSocialMediaWhereInput> | null
    blogPosts?: BlogPostListRelationFilter
    comments?: BlogPostCommentListRelationFilter
    companies?: CompanyListRelationFilter
    site?: XOR<SiteNullableRelationFilter, SiteWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    yearOfBirth?: SortOrderInput | SortOrder
    wantsNewsletter?: SortOrder
    interests?: SortOrder
    address?: SortOrderInput | SortOrder
    weddingDate?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    yearOfBirth?: IntNullableWithAggregatesFilter<"User"> | number | null
    wantsNewsletter?: BoolWithAggregatesFilter<"User"> | boolean
    interests?: EnumTopicNullableListFilter<"User">
    address?: JsonNullableWithAggregatesFilter<"User">
    weddingDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type FilteringTestWhereInput = {
    AND?: FilteringTestWhereInput | FilteringTestWhereInput[]
    OR?: FilteringTestWhereInput[]
    NOT?: FilteringTestWhereInput | FilteringTestWhereInput[]
    id?: IntFilter<"FilteringTest"> | number
    intField?: IntFilter<"FilteringTest"> | number
    floatField?: FloatFilter<"FilteringTest"> | number
    stringField?: StringFilter<"FilteringTest"> | string
    dateTimeField?: DateTimeFilter<"FilteringTest"> | Date | string
    boolField?: BoolFilter<"FilteringTest"> | boolean
    intField_lt?: StringFilter<"FilteringTest"> | string
    intField_bt?: IntFilter<"FilteringTest"> | number
    snake_field?: IntFilter<"FilteringTest"> | number
    snake_field_bt?: IntFilter<"FilteringTest"> | number
  }

  export type FilteringTestOrderByWithRelationInput = {
    id?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    stringField?: SortOrder
    dateTimeField?: SortOrder
    boolField?: SortOrder
    intField_lt?: SortOrder
    intField_bt?: SortOrder
    snake_field?: SortOrder
    snake_field_bt?: SortOrder
  }

  export type FilteringTestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FilteringTestWhereInput | FilteringTestWhereInput[]
    OR?: FilteringTestWhereInput[]
    NOT?: FilteringTestWhereInput | FilteringTestWhereInput[]
    intField?: IntFilter<"FilteringTest"> | number
    floatField?: FloatFilter<"FilteringTest"> | number
    stringField?: StringFilter<"FilteringTest"> | string
    dateTimeField?: DateTimeFilter<"FilteringTest"> | Date | string
    boolField?: BoolFilter<"FilteringTest"> | boolean
    intField_lt?: StringFilter<"FilteringTest"> | string
    intField_bt?: IntFilter<"FilteringTest"> | number
    snake_field?: IntFilter<"FilteringTest"> | number
    snake_field_bt?: IntFilter<"FilteringTest"> | number
  }, "id">

  export type FilteringTestOrderByWithAggregationInput = {
    id?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    stringField?: SortOrder
    dateTimeField?: SortOrder
    boolField?: SortOrder
    intField_lt?: SortOrder
    intField_bt?: SortOrder
    snake_field?: SortOrder
    snake_field_bt?: SortOrder
    _count?: FilteringTestCountOrderByAggregateInput
    _avg?: FilteringTestAvgOrderByAggregateInput
    _max?: FilteringTestMaxOrderByAggregateInput
    _min?: FilteringTestMinOrderByAggregateInput
    _sum?: FilteringTestSumOrderByAggregateInput
  }

  export type FilteringTestScalarWhereWithAggregatesInput = {
    AND?: FilteringTestScalarWhereWithAggregatesInput | FilteringTestScalarWhereWithAggregatesInput[]
    OR?: FilteringTestScalarWhereWithAggregatesInput[]
    NOT?: FilteringTestScalarWhereWithAggregatesInput | FilteringTestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FilteringTest"> | number
    intField?: IntWithAggregatesFilter<"FilteringTest"> | number
    floatField?: FloatWithAggregatesFilter<"FilteringTest"> | number
    stringField?: StringWithAggregatesFilter<"FilteringTest"> | string
    dateTimeField?: DateTimeWithAggregatesFilter<"FilteringTest"> | Date | string
    boolField?: BoolWithAggregatesFilter<"FilteringTest"> | boolean
    intField_lt?: StringWithAggregatesFilter<"FilteringTest"> | string
    intField_bt?: IntWithAggregatesFilter<"FilteringTest"> | number
    snake_field?: IntWithAggregatesFilter<"FilteringTest"> | number
    snake_field_bt?: IntWithAggregatesFilter<"FilteringTest"> | number
  }

  export type SomePublicRecordWithIntIdWhereInput = {
    AND?: SomePublicRecordWithIntIdWhereInput | SomePublicRecordWithIntIdWhereInput[]
    OR?: SomePublicRecordWithIntIdWhereInput[]
    NOT?: SomePublicRecordWithIntIdWhereInput | SomePublicRecordWithIntIdWhereInput[]
    id?: IntFilter<"SomePublicRecordWithIntId"> | number
    title?: StringFilter<"SomePublicRecordWithIntId"> | string
  }

  export type SomePublicRecordWithIntIdOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type SomePublicRecordWithIntIdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SomePublicRecordWithIntIdWhereInput | SomePublicRecordWithIntIdWhereInput[]
    OR?: SomePublicRecordWithIntIdWhereInput[]
    NOT?: SomePublicRecordWithIntIdWhereInput | SomePublicRecordWithIntIdWhereInput[]
    title?: StringFilter<"SomePublicRecordWithIntId"> | string
  }, "id">

  export type SomePublicRecordWithIntIdOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: SomePublicRecordWithIntIdCountOrderByAggregateInput
    _avg?: SomePublicRecordWithIntIdAvgOrderByAggregateInput
    _max?: SomePublicRecordWithIntIdMaxOrderByAggregateInput
    _min?: SomePublicRecordWithIntIdMinOrderByAggregateInput
    _sum?: SomePublicRecordWithIntIdSumOrderByAggregateInput
  }

  export type SomePublicRecordWithIntIdScalarWhereWithAggregatesInput = {
    AND?: SomePublicRecordWithIntIdScalarWhereWithAggregatesInput | SomePublicRecordWithIntIdScalarWhereWithAggregatesInput[]
    OR?: SomePublicRecordWithIntIdScalarWhereWithAggregatesInput[]
    NOT?: SomePublicRecordWithIntIdScalarWhereWithAggregatesInput | SomePublicRecordWithIntIdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SomePublicRecordWithIntId"> | number
    title?: StringWithAggregatesFilter<"SomePublicRecordWithIntId"> | string
  }

  export type UserRoleCreateInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type UserRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type UserRoleCreateManyInput = {
    id?: string
    name: string
  }

  export type UserRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSocialMediaCreateInput = {
    id?: string
    instagram: string
    twitter: string
    user: UserCreateNestedOneWithoutUserSocialMediaInput
  }

  export type UserSocialMediaUncheckedCreateInput = {
    id?: string
    instagram: string
    twitter: string
    userId: string
  }

  export type UserSocialMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserSocialMediaNestedInput
  }

  export type UserSocialMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSocialMediaCreateManyInput = {
    id?: string
    instagram: string
    twitter: string
    userId: string
  }

  export type UserSocialMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
  }

  export type UserSocialMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostCreateInput = {
    id?: string
    title: string
    text: string
    author?: UserCreateNestedOneWithoutBlogPostsInput
    comments?: BlogPostCommentCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    title: string
    text: string
    authorId?: string | null
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneWithoutBlogPostsNestedInput
    comments?: BlogPostCommentUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: BlogPostCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostCreateManyInput = {
    id?: string
    title: string
    text: string
    authorId?: string | null
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostCommentCreateInput = {
    id?: string
    text: string
    post?: BlogPostCreateNestedOneWithoutCommentsInput
    author?: UserCreateNestedOneWithoutCommentsInput
  }

  export type BlogPostCommentUncheckedCreateInput = {
    id?: string
    text: string
    postId?: string | null
    authorId?: string | null
  }

  export type BlogPostCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    post?: BlogPostUpdateOneWithoutCommentsNestedInput
    author?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type BlogPostCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostCommentCreateManyInput = {
    id?: string
    text: string
    postId?: string | null
    authorId?: string | null
  }

  export type BlogPostCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SiteCreateInput = {
    id?: string
    name: string
    url: string
    owner?: UserCreateNestedOneWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    userId?: string | null
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SiteCreateManyInput = {
    id?: string
    name: string
    url: string
    userId?: string | null
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
    site?: SiteUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUsersNestedInput
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    comments?: BlogPostCommentUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUpdateManyWithoutUserNestedInput
    site?: SiteUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUsersNestedInput
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUserNestedInput
    site?: SiteUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FilteringTestCreateInput = {
    intField: number
    floatField: number
    stringField: string
    dateTimeField: Date | string
    boolField: boolean
    intField_lt: string
    intField_bt: number
    snake_field: number
    snake_field_bt: number
  }

  export type FilteringTestUncheckedCreateInput = {
    id?: number
    intField: number
    floatField: number
    stringField: string
    dateTimeField: Date | string
    boolField: boolean
    intField_lt: string
    intField_bt: number
    snake_field: number
    snake_field_bt: number
  }

  export type FilteringTestUpdateInput = {
    intField?: IntFieldUpdateOperationsInput | number
    floatField?: FloatFieldUpdateOperationsInput | number
    stringField?: StringFieldUpdateOperationsInput | string
    dateTimeField?: DateTimeFieldUpdateOperationsInput | Date | string
    boolField?: BoolFieldUpdateOperationsInput | boolean
    intField_lt?: StringFieldUpdateOperationsInput | string
    intField_bt?: IntFieldUpdateOperationsInput | number
    snake_field?: IntFieldUpdateOperationsInput | number
    snake_field_bt?: IntFieldUpdateOperationsInput | number
  }

  export type FilteringTestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    intField?: IntFieldUpdateOperationsInput | number
    floatField?: FloatFieldUpdateOperationsInput | number
    stringField?: StringFieldUpdateOperationsInput | string
    dateTimeField?: DateTimeFieldUpdateOperationsInput | Date | string
    boolField?: BoolFieldUpdateOperationsInput | boolean
    intField_lt?: StringFieldUpdateOperationsInput | string
    intField_bt?: IntFieldUpdateOperationsInput | number
    snake_field?: IntFieldUpdateOperationsInput | number
    snake_field_bt?: IntFieldUpdateOperationsInput | number
  }

  export type FilteringTestCreateManyInput = {
    id?: number
    intField: number
    floatField: number
    stringField: string
    dateTimeField: Date | string
    boolField: boolean
    intField_lt: string
    intField_bt: number
    snake_field: number
    snake_field_bt: number
  }

  export type FilteringTestUpdateManyMutationInput = {
    intField?: IntFieldUpdateOperationsInput | number
    floatField?: FloatFieldUpdateOperationsInput | number
    stringField?: StringFieldUpdateOperationsInput | string
    dateTimeField?: DateTimeFieldUpdateOperationsInput | Date | string
    boolField?: BoolFieldUpdateOperationsInput | boolean
    intField_lt?: StringFieldUpdateOperationsInput | string
    intField_bt?: IntFieldUpdateOperationsInput | number
    snake_field?: IntFieldUpdateOperationsInput | number
    snake_field_bt?: IntFieldUpdateOperationsInput | number
  }

  export type FilteringTestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    intField?: IntFieldUpdateOperationsInput | number
    floatField?: FloatFieldUpdateOperationsInput | number
    stringField?: StringFieldUpdateOperationsInput | string
    dateTimeField?: DateTimeFieldUpdateOperationsInput | Date | string
    boolField?: BoolFieldUpdateOperationsInput | boolean
    intField_lt?: StringFieldUpdateOperationsInput | string
    intField_bt?: IntFieldUpdateOperationsInput | number
    snake_field?: IntFieldUpdateOperationsInput | number
    snake_field_bt?: IntFieldUpdateOperationsInput | number
  }

  export type SomePublicRecordWithIntIdCreateInput = {
    title: string
  }

  export type SomePublicRecordWithIntIdUncheckedCreateInput = {
    id?: number
    title: string
  }

  export type SomePublicRecordWithIntIdUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type SomePublicRecordWithIntIdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type SomePublicRecordWithIntIdCreateManyInput = {
    id?: number
    title: string
  }

  export type SomePublicRecordWithIntIdUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type SomePublicRecordWithIntIdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type UserSocialMediaCountOrderByAggregateInput = {
    id?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    userId?: SortOrder
  }

  export type UserSocialMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    userId?: SortOrder
  }

  export type UserSocialMediaMinOrderByAggregateInput = {
    id?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BlogPostCommentListRelationFilter = {
    every?: BlogPostCommentWhereInput
    some?: BlogPostCommentWhereInput
    none?: BlogPostCommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogPostCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BlogPostNullableRelationFilter = {
    is?: BlogPostWhereInput | null
    isNot?: BlogPostWhereInput | null
  }

  export type BlogPostCommentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type BlogPostCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type BlogPostCommentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    userId?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    userId?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    userId?: SortOrder
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumTopicNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Topic[] | ListEnumTopicFieldRefInput<$PrismaModel> | null
    has?: $Enums.Topic | EnumTopicFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Topic[] | ListEnumTopicFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Topic[] | ListEnumTopicFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type UserSocialMediaNullableRelationFilter = {
    is?: UserSocialMediaWhereInput | null
    isNot?: UserSocialMediaWhereInput | null
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type SiteNullableRelationFilter = {
    is?: SiteWhereInput | null
    isNot?: SiteWhereInput | null
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    yearOfBirth?: SortOrder
    wantsNewsletter?: SortOrder
    interests?: SortOrder
    address?: SortOrder
    weddingDate?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    yearOfBirth?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    yearOfBirth?: SortOrder
    wantsNewsletter?: SortOrder
    weddingDate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    yearOfBirth?: SortOrder
    wantsNewsletter?: SortOrder
    weddingDate?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    yearOfBirth?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FilteringTestCountOrderByAggregateInput = {
    id?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    stringField?: SortOrder
    dateTimeField?: SortOrder
    boolField?: SortOrder
    intField_lt?: SortOrder
    intField_bt?: SortOrder
    snake_field?: SortOrder
    snake_field_bt?: SortOrder
  }

  export type FilteringTestAvgOrderByAggregateInput = {
    id?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    intField_bt?: SortOrder
    snake_field?: SortOrder
    snake_field_bt?: SortOrder
  }

  export type FilteringTestMaxOrderByAggregateInput = {
    id?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    stringField?: SortOrder
    dateTimeField?: SortOrder
    boolField?: SortOrder
    intField_lt?: SortOrder
    intField_bt?: SortOrder
    snake_field?: SortOrder
    snake_field_bt?: SortOrder
  }

  export type FilteringTestMinOrderByAggregateInput = {
    id?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    stringField?: SortOrder
    dateTimeField?: SortOrder
    boolField?: SortOrder
    intField_lt?: SortOrder
    intField_bt?: SortOrder
    snake_field?: SortOrder
    snake_field_bt?: SortOrder
  }

  export type FilteringTestSumOrderByAggregateInput = {
    id?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    intField_bt?: SortOrder
    snake_field?: SortOrder
    snake_field_bt?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SomePublicRecordWithIntIdCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type SomePublicRecordWithIntIdAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SomePublicRecordWithIntIdMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type SomePublicRecordWithIntIdMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type SomePublicRecordWithIntIdSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput
    upsert?: UserUpsertWithoutCompaniesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompaniesInput, UserUpdateWithoutCompaniesInput>, UserUncheckedUpdateWithoutCompaniesInput>
  }

  export type UserCreateNestedOneWithoutUserSocialMediaInput = {
    create?: XOR<UserCreateWithoutUserSocialMediaInput, UserUncheckedCreateWithoutUserSocialMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSocialMediaInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSocialMediaNestedInput = {
    create?: XOR<UserCreateWithoutUserSocialMediaInput, UserUncheckedCreateWithoutUserSocialMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSocialMediaInput
    upsert?: UserUpsertWithoutUserSocialMediaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSocialMediaInput, UserUpdateWithoutUserSocialMediaInput>, UserUncheckedUpdateWithoutUserSocialMediaInput>
  }

  export type UserCreateNestedOneWithoutBlogPostsInput = {
    create?: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostCommentCreateNestedManyWithoutPostInput = {
    create?: XOR<BlogPostCommentCreateWithoutPostInput, BlogPostCommentUncheckedCreateWithoutPostInput> | BlogPostCommentCreateWithoutPostInput[] | BlogPostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostCommentCreateOrConnectWithoutPostInput | BlogPostCommentCreateOrConnectWithoutPostInput[]
    createMany?: BlogPostCommentCreateManyPostInputEnvelope
    connect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
  }

  export type BlogPostCommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<BlogPostCommentCreateWithoutPostInput, BlogPostCommentUncheckedCreateWithoutPostInput> | BlogPostCommentCreateWithoutPostInput[] | BlogPostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostCommentCreateOrConnectWithoutPostInput | BlogPostCommentCreateOrConnectWithoutPostInput[]
    createMany?: BlogPostCommentCreateManyPostInputEnvelope
    connect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutBlogPostsNestedInput = {
    create?: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostsInput
    upsert?: UserUpsertWithoutBlogPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogPostsInput, UserUpdateWithoutBlogPostsInput>, UserUncheckedUpdateWithoutBlogPostsInput>
  }

  export type BlogPostCommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<BlogPostCommentCreateWithoutPostInput, BlogPostCommentUncheckedCreateWithoutPostInput> | BlogPostCommentCreateWithoutPostInput[] | BlogPostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostCommentCreateOrConnectWithoutPostInput | BlogPostCommentCreateOrConnectWithoutPostInput[]
    upsert?: BlogPostCommentUpsertWithWhereUniqueWithoutPostInput | BlogPostCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BlogPostCommentCreateManyPostInputEnvelope
    set?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    disconnect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    delete?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    connect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    update?: BlogPostCommentUpdateWithWhereUniqueWithoutPostInput | BlogPostCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BlogPostCommentUpdateManyWithWhereWithoutPostInput | BlogPostCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BlogPostCommentScalarWhereInput | BlogPostCommentScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BlogPostCommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<BlogPostCommentCreateWithoutPostInput, BlogPostCommentUncheckedCreateWithoutPostInput> | BlogPostCommentCreateWithoutPostInput[] | BlogPostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostCommentCreateOrConnectWithoutPostInput | BlogPostCommentCreateOrConnectWithoutPostInput[]
    upsert?: BlogPostCommentUpsertWithWhereUniqueWithoutPostInput | BlogPostCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BlogPostCommentCreateManyPostInputEnvelope
    set?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    disconnect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    delete?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    connect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    update?: BlogPostCommentUpdateWithWhereUniqueWithoutPostInput | BlogPostCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BlogPostCommentUpdateManyWithWhereWithoutPostInput | BlogPostCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BlogPostCommentScalarWhereInput | BlogPostCommentScalarWhereInput[]
  }

  export type BlogPostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCommentsInput
    connect?: BlogPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCommentsInput
    upsert?: BlogPostUpsertWithoutCommentsInput
    disconnect?: BlogPostWhereInput | boolean
    delete?: BlogPostWhereInput | boolean
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutCommentsInput, BlogPostUpdateWithoutCommentsInput>, BlogPostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutSiteInput = {
    create?: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutSiteInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSiteNestedInput = {
    create?: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutSiteInput
    upsert?: UserUpsertWithoutSiteInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSiteInput, UserUpdateWithoutSiteInput>, UserUncheckedUpdateWithoutSiteInput>
  }

  export type UserCreateinterestsInput = {
    set: $Enums.Topic[]
  }

  export type UserRoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput> | UserRoleCreateWithoutUsersInput[] | UserRoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput | UserRoleCreateOrConnectWithoutUsersInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserSocialMediaCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSocialMediaCreateWithoutUserInput, UserSocialMediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSocialMediaCreateOrConnectWithoutUserInput
    connect?: UserSocialMediaWhereUniqueInput
  }

  export type BlogPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BlogPostCommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogPostCommentCreateWithoutAuthorInput, BlogPostCommentUncheckedCreateWithoutAuthorInput> | BlogPostCommentCreateWithoutAuthorInput[] | BlogPostCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCommentCreateOrConnectWithoutAuthorInput | BlogPostCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogPostCommentCreateManyAuthorInputEnvelope
    connect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
  }

  export type CompanyCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type SiteCreateNestedOneWithoutOwnerInput = {
    create?: XOR<SiteCreateWithoutOwnerInput, SiteUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOwnerInput
    connect?: SiteWhereUniqueInput
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput> | UserRoleCreateWithoutUsersInput[] | UserRoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput | UserRoleCreateOrConnectWithoutUsersInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserSocialMediaUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSocialMediaCreateWithoutUserInput, UserSocialMediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSocialMediaCreateOrConnectWithoutUserInput
    connect?: UserSocialMediaWhereUniqueInput
  }

  export type BlogPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogPostCommentCreateWithoutAuthorInput, BlogPostCommentUncheckedCreateWithoutAuthorInput> | BlogPostCommentCreateWithoutAuthorInput[] | BlogPostCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCommentCreateOrConnectWithoutAuthorInput | BlogPostCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogPostCommentCreateManyAuthorInputEnvelope
    connect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type SiteUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: XOR<SiteCreateWithoutOwnerInput, SiteUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOwnerInput
    connect?: SiteWhereUniqueInput
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateinterestsInput = {
    set?: $Enums.Topic[]
    push?: $Enums.Topic | $Enums.Topic[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserRoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput> | UserRoleCreateWithoutUsersInput[] | UserRoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput | UserRoleCreateOrConnectWithoutUsersInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUsersInput | UserRoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUsersInput | UserRoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUsersInput | UserRoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserSocialMediaUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSocialMediaCreateWithoutUserInput, UserSocialMediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSocialMediaCreateOrConnectWithoutUserInput
    upsert?: UserSocialMediaUpsertWithoutUserInput
    disconnect?: UserSocialMediaWhereInput | boolean
    delete?: UserSocialMediaWhereInput | boolean
    connect?: UserSocialMediaWhereUniqueInput
    update?: XOR<XOR<UserSocialMediaUpdateToOneWithWhereWithoutUserInput, UserSocialMediaUpdateWithoutUserInput>, UserSocialMediaUncheckedUpdateWithoutUserInput>
  }

  export type BlogPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAuthorInput | BlogPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAuthorInput | BlogPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAuthorInput | BlogPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BlogPostCommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogPostCommentCreateWithoutAuthorInput, BlogPostCommentUncheckedCreateWithoutAuthorInput> | BlogPostCommentCreateWithoutAuthorInput[] | BlogPostCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCommentCreateOrConnectWithoutAuthorInput | BlogPostCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogPostCommentUpsertWithWhereUniqueWithoutAuthorInput | BlogPostCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogPostCommentCreateManyAuthorInputEnvelope
    set?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    disconnect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    delete?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    connect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    update?: BlogPostCommentUpdateWithWhereUniqueWithoutAuthorInput | BlogPostCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogPostCommentUpdateManyWithWhereWithoutAuthorInput | BlogPostCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogPostCommentScalarWhereInput | BlogPostCommentScalarWhereInput[]
  }

  export type CompanyUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutUserInput | CompanyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutUserInput | CompanyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutUserInput | CompanyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type SiteUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<SiteCreateWithoutOwnerInput, SiteUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOwnerInput
    upsert?: SiteUpsertWithoutOwnerInput
    disconnect?: SiteWhereInput | boolean
    delete?: SiteWhereInput | boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutOwnerInput, SiteUpdateWithoutOwnerInput>, SiteUncheckedUpdateWithoutOwnerInput>
  }

  export type UserRoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput> | UserRoleCreateWithoutUsersInput[] | UserRoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput | UserRoleCreateOrConnectWithoutUsersInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUsersInput | UserRoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUsersInput | UserRoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUsersInput | UserRoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserSocialMediaUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSocialMediaCreateWithoutUserInput, UserSocialMediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSocialMediaCreateOrConnectWithoutUserInput
    upsert?: UserSocialMediaUpsertWithoutUserInput
    disconnect?: UserSocialMediaWhereInput | boolean
    delete?: UserSocialMediaWhereInput | boolean
    connect?: UserSocialMediaWhereUniqueInput
    update?: XOR<XOR<UserSocialMediaUpdateToOneWithWhereWithoutUserInput, UserSocialMediaUpdateWithoutUserInput>, UserSocialMediaUncheckedUpdateWithoutUserInput>
  }

  export type BlogPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAuthorInput | BlogPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAuthorInput | BlogPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAuthorInput | BlogPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BlogPostCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogPostCommentCreateWithoutAuthorInput, BlogPostCommentUncheckedCreateWithoutAuthorInput> | BlogPostCommentCreateWithoutAuthorInput[] | BlogPostCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCommentCreateOrConnectWithoutAuthorInput | BlogPostCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogPostCommentUpsertWithWhereUniqueWithoutAuthorInput | BlogPostCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogPostCommentCreateManyAuthorInputEnvelope
    set?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    disconnect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    delete?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    connect?: BlogPostCommentWhereUniqueInput | BlogPostCommentWhereUniqueInput[]
    update?: BlogPostCommentUpdateWithWhereUniqueWithoutAuthorInput | BlogPostCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogPostCommentUpdateManyWithWhereWithoutAuthorInput | BlogPostCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogPostCommentScalarWhereInput | BlogPostCommentScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutUserInput | CompanyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutUserInput | CompanyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutUserInput | CompanyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type SiteUncheckedUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<SiteCreateWithoutOwnerInput, SiteUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOwnerInput
    upsert?: SiteUpsertWithoutOwnerInput
    disconnect?: SiteWhereInput | boolean
    delete?: SiteWhereInput | boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutOwnerInput, SiteUpdateWithoutOwnerInput>, SiteUncheckedUpdateWithoutOwnerInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
    site?: SiteUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    yearOfBirth?: IntNullableFilter<"User"> | number | null
    wantsNewsletter?: BoolFilter<"User"> | boolean
    interests?: EnumTopicNullableListFilter<"User">
    address?: JsonNullableFilter<"User">
    weddingDate?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserCreateWithoutCompaniesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCompaniesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    site?: SiteUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCompaniesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
  }

  export type UserUpsertWithoutCompaniesInput = {
    update: XOR<UserUpdateWithoutCompaniesInput, UserUncheckedUpdateWithoutCompaniesInput>
    create: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompaniesInput, UserUncheckedUpdateWithoutCompaniesInput>
  }

  export type UserUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUsersNestedInput
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    comments?: BlogPostCommentUpdateManyWithoutAuthorNestedInput
    site?: SiteUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUsersNestedInput
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorNestedInput
    site?: SiteUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type UserCreateWithoutUserSocialMediaInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutUserSocialMediaInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
    site?: SiteUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutUserSocialMediaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSocialMediaInput, UserUncheckedCreateWithoutUserSocialMediaInput>
  }

  export type UserUpsertWithoutUserSocialMediaInput = {
    update: XOR<UserUpdateWithoutUserSocialMediaInput, UserUncheckedUpdateWithoutUserSocialMediaInput>
    create: XOR<UserCreateWithoutUserSocialMediaInput, UserUncheckedCreateWithoutUserSocialMediaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSocialMediaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSocialMediaInput, UserUncheckedUpdateWithoutUserSocialMediaInput>
  }

  export type UserUpdateWithoutUserSocialMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUsersNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    comments?: BlogPostCommentUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUpdateManyWithoutUserNestedInput
    site?: SiteUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSocialMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUsersNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUserNestedInput
    site?: SiteUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type UserCreateWithoutBlogPostsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBlogPostsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
    site?: SiteUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBlogPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
  }

  export type BlogPostCommentCreateWithoutPostInput = {
    id?: string
    text: string
    author?: UserCreateNestedOneWithoutCommentsInput
  }

  export type BlogPostCommentUncheckedCreateWithoutPostInput = {
    id?: string
    text: string
    authorId?: string | null
  }

  export type BlogPostCommentCreateOrConnectWithoutPostInput = {
    where: BlogPostCommentWhereUniqueInput
    create: XOR<BlogPostCommentCreateWithoutPostInput, BlogPostCommentUncheckedCreateWithoutPostInput>
  }

  export type BlogPostCommentCreateManyPostInputEnvelope = {
    data: BlogPostCommentCreateManyPostInput | BlogPostCommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBlogPostsInput = {
    update: XOR<UserUpdateWithoutBlogPostsInput, UserUncheckedUpdateWithoutBlogPostsInput>
    create: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogPostsInput, UserUncheckedUpdateWithoutBlogPostsInput>
  }

  export type UserUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUsersNestedInput
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserNestedInput
    comments?: BlogPostCommentUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUpdateManyWithoutUserNestedInput
    site?: SiteUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUsersNestedInput
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserNestedInput
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUserNestedInput
    site?: SiteUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type BlogPostCommentUpsertWithWhereUniqueWithoutPostInput = {
    where: BlogPostCommentWhereUniqueInput
    update: XOR<BlogPostCommentUpdateWithoutPostInput, BlogPostCommentUncheckedUpdateWithoutPostInput>
    create: XOR<BlogPostCommentCreateWithoutPostInput, BlogPostCommentUncheckedCreateWithoutPostInput>
  }

  export type BlogPostCommentUpdateWithWhereUniqueWithoutPostInput = {
    where: BlogPostCommentWhereUniqueInput
    data: XOR<BlogPostCommentUpdateWithoutPostInput, BlogPostCommentUncheckedUpdateWithoutPostInput>
  }

  export type BlogPostCommentUpdateManyWithWhereWithoutPostInput = {
    where: BlogPostCommentScalarWhereInput
    data: XOR<BlogPostCommentUpdateManyMutationInput, BlogPostCommentUncheckedUpdateManyWithoutPostInput>
  }

  export type BlogPostCommentScalarWhereInput = {
    AND?: BlogPostCommentScalarWhereInput | BlogPostCommentScalarWhereInput[]
    OR?: BlogPostCommentScalarWhereInput[]
    NOT?: BlogPostCommentScalarWhereInput | BlogPostCommentScalarWhereInput[]
    id?: StringFilter<"BlogPostComment"> | string
    text?: StringFilter<"BlogPostComment"> | string
    postId?: StringNullableFilter<"BlogPostComment"> | string | null
    authorId?: StringNullableFilter<"BlogPostComment"> | string | null
  }

  export type BlogPostCreateWithoutCommentsInput = {
    id?: string
    title: string
    text: string
    author?: UserCreateNestedOneWithoutBlogPostsInput
  }

  export type BlogPostUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    text: string
    authorId?: string | null
  }

  export type BlogPostCreateOrConnectWithoutCommentsInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
    site?: SiteUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type BlogPostUpsertWithoutCommentsInput = {
    update: XOR<BlogPostUpdateWithoutCommentsInput, BlogPostUncheckedUpdateWithoutCommentsInput>
    create: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutCommentsInput, BlogPostUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogPostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneWithoutBlogPostsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUsersNestedInput
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUpdateManyWithoutUserNestedInput
    site?: SiteUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUsersNestedInput
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUserNestedInput
    site?: SiteUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type UserCreateWithoutSiteInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSiteInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: $Enums.Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSiteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
  }

  export type UserUpsertWithoutSiteInput = {
    update: XOR<UserUpdateWithoutSiteInput, UserUncheckedUpdateWithoutSiteInput>
    create: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSiteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSiteInput, UserUncheckedUpdateWithoutSiteInput>
  }

  export type UserUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUsersNestedInput
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    comments?: BlogPostCommentUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUsersNestedInput
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserRoleCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type UserRoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type UserRoleCreateOrConnectWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
  }

  export type UserSocialMediaCreateWithoutUserInput = {
    id?: string
    instagram: string
    twitter: string
  }

  export type UserSocialMediaUncheckedCreateWithoutUserInput = {
    id?: string
    instagram: string
    twitter: string
  }

  export type UserSocialMediaCreateOrConnectWithoutUserInput = {
    where: UserSocialMediaWhereUniqueInput
    create: XOR<UserSocialMediaCreateWithoutUserInput, UserSocialMediaUncheckedCreateWithoutUserInput>
  }

  export type BlogPostCreateWithoutAuthorInput = {
    id?: string
    title: string
    text: string
    comments?: BlogPostCommentCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    text: string
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostCreateOrConnectWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput>
  }

  export type BlogPostCreateManyAuthorInputEnvelope = {
    data: BlogPostCreateManyAuthorInput | BlogPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostCommentCreateWithoutAuthorInput = {
    id?: string
    text: string
    post?: BlogPostCreateNestedOneWithoutCommentsInput
  }

  export type BlogPostCommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    text: string
    postId?: string | null
  }

  export type BlogPostCommentCreateOrConnectWithoutAuthorInput = {
    where: BlogPostCommentWhereUniqueInput
    create: XOR<BlogPostCommentCreateWithoutAuthorInput, BlogPostCommentUncheckedCreateWithoutAuthorInput>
  }

  export type BlogPostCommentCreateManyAuthorInputEnvelope = {
    data: BlogPostCommentCreateManyAuthorInput | BlogPostCommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutUserInput = {
    id?: string
    name: string
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type CompanyCreateManyUserInputEnvelope = {
    data: CompanyCreateManyUserInput | CompanyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SiteCreateWithoutOwnerInput = {
    id?: string
    name: string
    url: string
  }

  export type SiteUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    url: string
  }

  export type SiteCreateOrConnectWithoutOwnerInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutOwnerInput, SiteUncheckedCreateWithoutOwnerInput>
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUsersInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    id?: StringFilter<"UserRole"> | string
    name?: StringFilter<"UserRole"> | string
  }

  export type UserSocialMediaUpsertWithoutUserInput = {
    update: XOR<UserSocialMediaUpdateWithoutUserInput, UserSocialMediaUncheckedUpdateWithoutUserInput>
    create: XOR<UserSocialMediaCreateWithoutUserInput, UserSocialMediaUncheckedCreateWithoutUserInput>
    where?: UserSocialMediaWhereInput
  }

  export type UserSocialMediaUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSocialMediaWhereInput
    data: XOR<UserSocialMediaUpdateWithoutUserInput, UserSocialMediaUncheckedUpdateWithoutUserInput>
  }

  export type UserSocialMediaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
  }

  export type UserSocialMediaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutAuthorInput, BlogPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutAuthorInput, BlogPostUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    text?: StringFilter<"BlogPost"> | string
    authorId?: StringNullableFilter<"BlogPost"> | string | null
  }

  export type BlogPostCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogPostCommentWhereUniqueInput
    update: XOR<BlogPostCommentUpdateWithoutAuthorInput, BlogPostCommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogPostCommentCreateWithoutAuthorInput, BlogPostCommentUncheckedCreateWithoutAuthorInput>
  }

  export type BlogPostCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogPostCommentWhereUniqueInput
    data: XOR<BlogPostCommentUpdateWithoutAuthorInput, BlogPostCommentUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogPostCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogPostCommentScalarWhereInput
    data: XOR<BlogPostCommentUpdateManyMutationInput, BlogPostCommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CompanyUpsertWithWhereUniqueWithoutUserInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutUserInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateManyWithWhereWithoutUserInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutUserInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    userId?: StringFilter<"Company"> | string
  }

  export type SiteUpsertWithoutOwnerInput = {
    update: XOR<SiteUpdateWithoutOwnerInput, SiteUncheckedUpdateWithoutOwnerInput>
    create: XOR<SiteCreateWithoutOwnerInput, SiteUncheckedCreateWithoutOwnerInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutOwnerInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutOwnerInput, SiteUncheckedUpdateWithoutOwnerInput>
  }

  export type SiteUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SiteUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    comments?: BlogPostCommentUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUpdateManyWithoutUserNestedInput
    site?: SiteUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUserNestedInput
    site?: SiteUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | $Enums.Topic[]
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogPostCommentCreateManyPostInput = {
    id?: string
    text: string
    authorId?: string | null
  }

  export type BlogPostCommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type BlogPostCommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostCommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostCreateManyAuthorInput = {
    id?: string
    title: string
    text: string
  }

  export type BlogPostCommentCreateManyAuthorInput = {
    id?: string
    text: string
    postId?: string | null
  }

  export type CompanyCreateManyUserInput = {
    id?: string
    name: string
  }

  export type UserRoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    comments?: BlogPostCommentUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    comments?: BlogPostCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostCommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    post?: BlogPostUpdateOneWithoutCommentsNestedInput
  }

  export type BlogPostCommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostCommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserRoleCountOutputTypeDefaultArgs instead
     */
    export type UserRoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogPostCountOutputTypeDefaultArgs instead
     */
    export type BlogPostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogPostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleDefaultArgs instead
     */
    export type UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserSocialMediaDefaultArgs instead
     */
    export type UserSocialMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserSocialMediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogPostDefaultArgs instead
     */
    export type BlogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogPostCommentDefaultArgs instead
     */
    export type BlogPostCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogPostCommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SiteDefaultArgs instead
     */
    export type SiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SiteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FilteringTestDefaultArgs instead
     */
    export type FilteringTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FilteringTestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SomePublicRecordWithIntIdDefaultArgs instead
     */
    export type SomePublicRecordWithIntIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SomePublicRecordWithIntIdDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}