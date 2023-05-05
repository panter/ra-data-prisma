
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model UserRole
 * 
 */
export type UserRole = {
  id: string
  name: string
}

/**
 * Model Company
 * 
 */
export type Company = {
  id: string
  name: string
  userId: string
}

/**
 * Model UserSocialMedia
 * 
 */
export type UserSocialMedia = {
  id: string
  instagram: string
  twitter: string
  userId: string
}

/**
 * Model BlogPost
 * 
 */
export type BlogPost = {
  id: string
  title: string
  text: string
  authorId: string | null
}

/**
 * Model BlogPostComment
 * 
 */
export type BlogPostComment = {
  id: string
  text: string
  postId: string | null
  authorId: string | null
}

/**
 * Model Site
 * 
 */
export type Site = {
  id: string
  name: string
  url: string
  userId: string | null
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  firstName: string | null
  lastName: string | null
  gender: Gender | null
  yearOfBirth: number | null
  wantsNewsletter: boolean
  interests: Topic[]
  /**
   * @TypeGraphQL.omit(output: true)
   */
  address: Prisma.JsonValue | null
  weddingDate: Date | null
}

/**
 * Model FilteringTest
 * 
 */
export type FilteringTest = {
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
}

/**
 * Model SomePublicRecordWithIntId
 * 
 */
export type SomePublicRecordWithIntId = {
  id: number
  title: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

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
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

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
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<GlobalReject>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<GlobalReject>;

  /**
   * `prisma.userSocialMedia`: Exposes CRUD operations for the **UserSocialMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSocialMedias
    * const userSocialMedias = await prisma.userSocialMedia.findMany()
    * ```
    */
  get userSocialMedia(): Prisma.UserSocialMediaDelegate<GlobalReject>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<GlobalReject>;

  /**
   * `prisma.blogPostComment`: Exposes CRUD operations for the **BlogPostComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPostComments
    * const blogPostComments = await prisma.blogPostComment.findMany()
    * ```
    */
  get blogPostComment(): Prisma.BlogPostCommentDelegate<GlobalReject>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.filteringTest`: Exposes CRUD operations for the **FilteringTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilteringTests
    * const filteringTests = await prisma.filteringTest.findMany()
    * ```
    */
  get filteringTest(): Prisma.FilteringTestDelegate<GlobalReject>;

  /**
   * `prisma.somePublicRecordWithIntId`: Exposes CRUD operations for the **SomePublicRecordWithIntId** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SomePublicRecordWithIntIds
    * const somePublicRecordWithIntIds = await prisma.somePublicRecordWithIntId.findMany()
    * ```
    */
  get somePublicRecordWithIntId(): Prisma.SomePublicRecordWithIntIdDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

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

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

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

  export type UserRoleCountOutputTypeSelect = {
    users?: boolean
  }

  export type UserRoleCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserRoleCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserRoleCountOutputType
    : S extends undefined
    ? never
    : S extends UserRoleCountOutputTypeArgs
    ?'include' extends U
    ? UserRoleCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserRoleCountOutputType ? UserRoleCountOutputType[P] : never
  } 
    : UserRoleCountOutputType
  : UserRoleCountOutputType




  // Custom InputTypes

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     * 
    **/
    select?: UserRoleCountOutputTypeSelect | null
  }



  /**
   * Count Type BlogPostCountOutputType
   */


  export type BlogPostCountOutputType = {
    comments: number
  }

  export type BlogPostCountOutputTypeSelect = {
    comments?: boolean
  }

  export type BlogPostCountOutputTypeGetPayload<
    S extends boolean | null | undefined | BlogPostCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? BlogPostCountOutputType
    : S extends undefined
    ? never
    : S extends BlogPostCountOutputTypeArgs
    ?'include' extends U
    ? BlogPostCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof BlogPostCountOutputType ? BlogPostCountOutputType[P] : never
  } 
    : BlogPostCountOutputType
  : BlogPostCountOutputType




  // Custom InputTypes

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     * 
    **/
    select?: BlogPostCountOutputTypeSelect | null
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

  export type UserCountOutputTypeSelect = {
    roles?: boolean
    blogPosts?: boolean
    comments?: boolean
    companies?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
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

  export type UserRoleAggregateArgs = {
    /**
     * Filter which UserRole to aggregate.
     * 
    **/
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     * 
    **/
    orderBy?: Enumerable<UserRoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     * 
    **/
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




  export type UserRoleGroupByArgs = {
    where?: UserRoleWhereInput
    orderBy?: Enumerable<UserRoleOrderByWithAggregationInput>
    by: Array<UserRoleScalarFieldEnum>
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

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect = {
    id?: boolean
    name?: boolean
    users?: boolean | UserFindManyArgs
    _count?: boolean | UserRoleCountOutputTypeArgs
  }

  export type UserRoleInclude = {
    users?: boolean | UserFindManyArgs
    _count?: boolean | UserRoleCountOutputTypeArgs
  }

  export type UserRoleGetPayload<
    S extends boolean | null | undefined | UserRoleArgs,
    U = keyof S
      > = S extends true
        ? UserRole
    : S extends undefined
    ? never
    : S extends UserRoleArgs | UserRoleFindManyArgs
    ?'include' extends U
    ? UserRole  & {
    [P in TrueKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserRoleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserRoleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserRole ? UserRole[P] : never
  } 
    : UserRole
  : UserRole


  type UserRoleCountArgs = Merge<
    Omit<UserRoleFindManyArgs, 'select' | 'include'> & {
      select?: UserRoleCountAggregateInputType | true
    }
  >

  export interface UserRoleDelegate<GlobalRejectSettings> {
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
    findUnique<T extends UserRoleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserRoleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserRole'> extends True ? CheckSelect<T, Prisma__UserRoleClient<UserRole>, Prisma__UserRoleClient<UserRoleGetPayload<T>>> : CheckSelect<T, Prisma__UserRoleClient<UserRole | null >, Prisma__UserRoleClient<UserRoleGetPayload<T> | null >>

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
    findFirst<T extends UserRoleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserRoleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserRole'> extends True ? CheckSelect<T, Prisma__UserRoleClient<UserRole>, Prisma__UserRoleClient<UserRoleGetPayload<T>>> : CheckSelect<T, Prisma__UserRoleClient<UserRole | null >, Prisma__UserRoleClient<UserRoleGetPayload<T> | null >>

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
    findMany<T extends UserRoleFindManyArgs>(
      args?: SelectSubset<T, UserRoleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserRole>>, PrismaPromise<Array<UserRoleGetPayload<T>>>>

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
    create<T extends UserRoleCreateArgs>(
      args: SelectSubset<T, UserRoleCreateArgs>
    ): CheckSelect<T, Prisma__UserRoleClient<UserRole>, Prisma__UserRoleClient<UserRoleGetPayload<T>>>

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
    createMany<T extends UserRoleCreateManyArgs>(
      args?: SelectSubset<T, UserRoleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    delete<T extends UserRoleDeleteArgs>(
      args: SelectSubset<T, UserRoleDeleteArgs>
    ): CheckSelect<T, Prisma__UserRoleClient<UserRole>, Prisma__UserRoleClient<UserRoleGetPayload<T>>>

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
    update<T extends UserRoleUpdateArgs>(
      args: SelectSubset<T, UserRoleUpdateArgs>
    ): CheckSelect<T, Prisma__UserRoleClient<UserRole>, Prisma__UserRoleClient<UserRoleGetPayload<T>>>

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
    deleteMany<T extends UserRoleDeleteManyArgs>(
      args?: SelectSubset<T, UserRoleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    updateMany<T extends UserRoleUpdateManyArgs>(
      args: SelectSubset<T, UserRoleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    upsert<T extends UserRoleUpsertArgs>(
      args: SelectSubset<T, UserRoleUpsertArgs>
    ): CheckSelect<T, Prisma__UserRoleClient<UserRole>, Prisma__UserRoleClient<UserRoleGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): PrismaPromise<GetUserRoleAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserRoleClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UserRole
     * 
    **/
    select?: UserRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserRoleInclude | null
    /**
     * Throw an Error if a UserRole can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserRole to fetch.
     * 
    **/
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UserRole
     * 
    **/
    select?: UserRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserRoleInclude | null
    /**
     * Throw an Error if a UserRole can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserRole to fetch.
     * 
    **/
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     * 
    **/
    orderBy?: Enumerable<UserRoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     * 
    **/
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     * 
    **/
    distinct?: Enumerable<UserRoleScalarFieldEnum>
  }


  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserRole
     * 
    **/
    select?: UserRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserRoleInclude | null
    /**
     * Filter, which UserRoles to fetch.
     * 
    **/
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     * 
    **/
    orderBy?: Enumerable<UserRoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     * 
    **/
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserRoleScalarFieldEnum>
  }


  /**
   * UserRole create
   */
  export type UserRoleCreateArgs = {
    /**
     * Select specific fields to fetch from the UserRole
     * 
    **/
    select?: UserRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserRoleInclude | null
    /**
     * The data needed to create a UserRole.
     * 
    **/
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }


  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs = {
    /**
     * The data used to create many UserRoles.
     * 
    **/
    data: Enumerable<UserRoleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserRole
     * 
    **/
    select?: UserRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserRoleInclude | null
    /**
     * The data needed to update a UserRole.
     * 
    **/
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     * 
    **/
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs = {
    /**
     * The data used to update UserRoles.
     * 
    **/
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     * 
    **/
    where?: UserRoleWhereInput
  }


  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserRole
     * 
    **/
    select?: UserRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserRoleInclude | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     * 
    **/
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     * 
    **/
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }


  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserRole
     * 
    **/
    select?: UserRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserRoleInclude | null
    /**
     * Filter which UserRole to delete.
     * 
    **/
    where: UserRoleWhereUniqueInput
  }


  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs = {
    /**
     * Filter which UserRoles to delete
     * 
    **/
    where?: UserRoleWhereInput
  }


  /**
   * UserRole without action
   */
  export type UserRoleArgs = {
    /**
     * Select specific fields to fetch from the UserRole
     * 
    **/
    select?: UserRoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserRoleInclude | null
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

  export type CompanyAggregateArgs = {
    /**
     * Filter which Company to aggregate.
     * 
    **/
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
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




  export type CompanyGroupByArgs = {
    where?: CompanyWhereInput
    orderBy?: Enumerable<CompanyOrderByWithAggregationInput>
    by: Array<CompanyScalarFieldEnum>
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

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect = {
    id?: boolean
    name?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }

  export type CompanyInclude = {
    user?: boolean | UserArgs
  }

  export type CompanyGetPayload<
    S extends boolean | null | undefined | CompanyArgs,
    U = keyof S
      > = S extends true
        ? Company
    : S extends undefined
    ? never
    : S extends CompanyArgs | CompanyFindManyArgs
    ?'include' extends U
    ? Company  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Company ? Company[P] : never
  } 
    : Company
  : Company


  type CompanyCountArgs = Merge<
    Omit<CompanyFindManyArgs, 'select' | 'include'> & {
      select?: CompanyCountAggregateInputType | true
    }
  >

  export interface CompanyDelegate<GlobalRejectSettings> {
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
    findUnique<T extends CompanyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompanyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Company'> extends True ? CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>> : CheckSelect<T, Prisma__CompanyClient<Company | null >, Prisma__CompanyClient<CompanyGetPayload<T> | null >>

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
    findFirst<T extends CompanyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompanyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Company'> extends True ? CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>> : CheckSelect<T, Prisma__CompanyClient<Company | null >, Prisma__CompanyClient<CompanyGetPayload<T> | null >>

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
    findMany<T extends CompanyFindManyArgs>(
      args?: SelectSubset<T, CompanyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Company>>, PrismaPromise<Array<CompanyGetPayload<T>>>>

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
    create<T extends CompanyCreateArgs>(
      args: SelectSubset<T, CompanyCreateArgs>
    ): CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>>

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
    createMany<T extends CompanyCreateManyArgs>(
      args?: SelectSubset<T, CompanyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    delete<T extends CompanyDeleteArgs>(
      args: SelectSubset<T, CompanyDeleteArgs>
    ): CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>>

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
    update<T extends CompanyUpdateArgs>(
      args: SelectSubset<T, CompanyUpdateArgs>
    ): CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>>

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
    deleteMany<T extends CompanyDeleteManyArgs>(
      args?: SelectSubset<T, CompanyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    updateMany<T extends CompanyUpdateManyArgs>(
      args: SelectSubset<T, CompanyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    upsert<T extends CompanyUpsertArgs>(
      args: SelectSubset<T, CompanyUpsertArgs>
    ): CheckSelect<T, Prisma__CompanyClient<Company>, Prisma__CompanyClient<CompanyGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): PrismaPromise<GetCompanyAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompanyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Throw an Error if a Company can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Company to fetch.
     * 
    **/
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Throw an Error if a Company can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Company to fetch.
     * 
    **/
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     * 
    **/
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     * 
    **/
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Filter, which Companies to fetch.
     * 
    **/
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     * 
    **/
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * The data needed to create a Company.
     * 
    **/
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs = {
    /**
     * The data used to create many Companies.
     * 
    **/
    data: Enumerable<CompanyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * The data needed to update a Company.
     * 
    **/
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     * 
    **/
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs = {
    /**
     * The data used to update Companies.
     * 
    **/
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     * 
    **/
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * The filter to search for the Company to update in case it exists.
     * 
    **/
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     * 
    **/
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Filter which Company to delete.
     * 
    **/
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs = {
    /**
     * Filter which Companies to delete
     * 
    **/
    where?: CompanyWhereInput
  }


  /**
   * Company without action
   */
  export type CompanyArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
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

  export type UserSocialMediaAggregateArgs = {
    /**
     * Filter which UserSocialMedia to aggregate.
     * 
    **/
    where?: UserSocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSocialMedias to fetch.
     * 
    **/
    orderBy?: Enumerable<UserSocialMediaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserSocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSocialMedias from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSocialMedias.
     * 
    **/
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




  export type UserSocialMediaGroupByArgs = {
    where?: UserSocialMediaWhereInput
    orderBy?: Enumerable<UserSocialMediaOrderByWithAggregationInput>
    by: Array<UserSocialMediaScalarFieldEnum>
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

  type GetUserSocialMediaGroupByPayload<T extends UserSocialMediaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserSocialMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSocialMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSocialMediaGroupByOutputType[P]>
            : GetScalarType<T[P], UserSocialMediaGroupByOutputType[P]>
        }
      >
    >


  export type UserSocialMediaSelect = {
    id?: boolean
    instagram?: boolean
    twitter?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }

  export type UserSocialMediaInclude = {
    user?: boolean | UserArgs
  }

  export type UserSocialMediaGetPayload<
    S extends boolean | null | undefined | UserSocialMediaArgs,
    U = keyof S
      > = S extends true
        ? UserSocialMedia
    : S extends undefined
    ? never
    : S extends UserSocialMediaArgs | UserSocialMediaFindManyArgs
    ?'include' extends U
    ? UserSocialMedia  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserSocialMedia ? UserSocialMedia[P] : never
  } 
    : UserSocialMedia
  : UserSocialMedia


  type UserSocialMediaCountArgs = Merge<
    Omit<UserSocialMediaFindManyArgs, 'select' | 'include'> & {
      select?: UserSocialMediaCountAggregateInputType | true
    }
  >

  export interface UserSocialMediaDelegate<GlobalRejectSettings> {
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
    findUnique<T extends UserSocialMediaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserSocialMediaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserSocialMedia'> extends True ? CheckSelect<T, Prisma__UserSocialMediaClient<UserSocialMedia>, Prisma__UserSocialMediaClient<UserSocialMediaGetPayload<T>>> : CheckSelect<T, Prisma__UserSocialMediaClient<UserSocialMedia | null >, Prisma__UserSocialMediaClient<UserSocialMediaGetPayload<T> | null >>

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
    findFirst<T extends UserSocialMediaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserSocialMediaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserSocialMedia'> extends True ? CheckSelect<T, Prisma__UserSocialMediaClient<UserSocialMedia>, Prisma__UserSocialMediaClient<UserSocialMediaGetPayload<T>>> : CheckSelect<T, Prisma__UserSocialMediaClient<UserSocialMedia | null >, Prisma__UserSocialMediaClient<UserSocialMediaGetPayload<T> | null >>

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
    findMany<T extends UserSocialMediaFindManyArgs>(
      args?: SelectSubset<T, UserSocialMediaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserSocialMedia>>, PrismaPromise<Array<UserSocialMediaGetPayload<T>>>>

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
    create<T extends UserSocialMediaCreateArgs>(
      args: SelectSubset<T, UserSocialMediaCreateArgs>
    ): CheckSelect<T, Prisma__UserSocialMediaClient<UserSocialMedia>, Prisma__UserSocialMediaClient<UserSocialMediaGetPayload<T>>>

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
    createMany<T extends UserSocialMediaCreateManyArgs>(
      args?: SelectSubset<T, UserSocialMediaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    delete<T extends UserSocialMediaDeleteArgs>(
      args: SelectSubset<T, UserSocialMediaDeleteArgs>
    ): CheckSelect<T, Prisma__UserSocialMediaClient<UserSocialMedia>, Prisma__UserSocialMediaClient<UserSocialMediaGetPayload<T>>>

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
    update<T extends UserSocialMediaUpdateArgs>(
      args: SelectSubset<T, UserSocialMediaUpdateArgs>
    ): CheckSelect<T, Prisma__UserSocialMediaClient<UserSocialMedia>, Prisma__UserSocialMediaClient<UserSocialMediaGetPayload<T>>>

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
    deleteMany<T extends UserSocialMediaDeleteManyArgs>(
      args?: SelectSubset<T, UserSocialMediaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    updateMany<T extends UserSocialMediaUpdateManyArgs>(
      args: SelectSubset<T, UserSocialMediaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    upsert<T extends UserSocialMediaUpsertArgs>(
      args: SelectSubset<T, UserSocialMediaUpsertArgs>
    ): CheckSelect<T, Prisma__UserSocialMediaClient<UserSocialMedia>, Prisma__UserSocialMediaClient<UserSocialMediaGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserSocialMediaAggregateArgs>(args: Subset<T, UserSocialMediaAggregateArgs>): PrismaPromise<GetUserSocialMediaAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserSocialMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSocialMediaGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSocialMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserSocialMediaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserSocialMedia findUnique
   */
  export type UserSocialMediaFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     * 
    **/
    select?: UserSocialMediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserSocialMediaInclude | null
    /**
     * Throw an Error if a UserSocialMedia can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserSocialMedia to fetch.
     * 
    **/
    where: UserSocialMediaWhereUniqueInput
  }


  /**
   * UserSocialMedia findFirst
   */
  export type UserSocialMediaFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     * 
    **/
    select?: UserSocialMediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserSocialMediaInclude | null
    /**
     * Throw an Error if a UserSocialMedia can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserSocialMedia to fetch.
     * 
    **/
    where?: UserSocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSocialMedias to fetch.
     * 
    **/
    orderBy?: Enumerable<UserSocialMediaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSocialMedias.
     * 
    **/
    cursor?: UserSocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSocialMedias from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSocialMedias.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSocialMedias.
     * 
    **/
    distinct?: Enumerable<UserSocialMediaScalarFieldEnum>
  }


  /**
   * UserSocialMedia findMany
   */
  export type UserSocialMediaFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     * 
    **/
    select?: UserSocialMediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserSocialMediaInclude | null
    /**
     * Filter, which UserSocialMedias to fetch.
     * 
    **/
    where?: UserSocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSocialMedias to fetch.
     * 
    **/
    orderBy?: Enumerable<UserSocialMediaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSocialMedias.
     * 
    **/
    cursor?: UserSocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSocialMedias from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSocialMedias.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserSocialMediaScalarFieldEnum>
  }


  /**
   * UserSocialMedia create
   */
  export type UserSocialMediaCreateArgs = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     * 
    **/
    select?: UserSocialMediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserSocialMediaInclude | null
    /**
     * The data needed to create a UserSocialMedia.
     * 
    **/
    data: XOR<UserSocialMediaCreateInput, UserSocialMediaUncheckedCreateInput>
  }


  /**
   * UserSocialMedia createMany
   */
  export type UserSocialMediaCreateManyArgs = {
    /**
     * The data used to create many UserSocialMedias.
     * 
    **/
    data: Enumerable<UserSocialMediaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserSocialMedia update
   */
  export type UserSocialMediaUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     * 
    **/
    select?: UserSocialMediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserSocialMediaInclude | null
    /**
     * The data needed to update a UserSocialMedia.
     * 
    **/
    data: XOR<UserSocialMediaUpdateInput, UserSocialMediaUncheckedUpdateInput>
    /**
     * Choose, which UserSocialMedia to update.
     * 
    **/
    where: UserSocialMediaWhereUniqueInput
  }


  /**
   * UserSocialMedia updateMany
   */
  export type UserSocialMediaUpdateManyArgs = {
    /**
     * The data used to update UserSocialMedias.
     * 
    **/
    data: XOR<UserSocialMediaUpdateManyMutationInput, UserSocialMediaUncheckedUpdateManyInput>
    /**
     * Filter which UserSocialMedias to update
     * 
    **/
    where?: UserSocialMediaWhereInput
  }


  /**
   * UserSocialMedia upsert
   */
  export type UserSocialMediaUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     * 
    **/
    select?: UserSocialMediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserSocialMediaInclude | null
    /**
     * The filter to search for the UserSocialMedia to update in case it exists.
     * 
    **/
    where: UserSocialMediaWhereUniqueInput
    /**
     * In case the UserSocialMedia found by the `where` argument doesn't exist, create a new UserSocialMedia with this data.
     * 
    **/
    create: XOR<UserSocialMediaCreateInput, UserSocialMediaUncheckedCreateInput>
    /**
     * In case the UserSocialMedia was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserSocialMediaUpdateInput, UserSocialMediaUncheckedUpdateInput>
  }


  /**
   * UserSocialMedia delete
   */
  export type UserSocialMediaDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     * 
    **/
    select?: UserSocialMediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserSocialMediaInclude | null
    /**
     * Filter which UserSocialMedia to delete.
     * 
    **/
    where: UserSocialMediaWhereUniqueInput
  }


  /**
   * UserSocialMedia deleteMany
   */
  export type UserSocialMediaDeleteManyArgs = {
    /**
     * Filter which UserSocialMedias to delete
     * 
    **/
    where?: UserSocialMediaWhereInput
  }


  /**
   * UserSocialMedia without action
   */
  export type UserSocialMediaArgs = {
    /**
     * Select specific fields to fetch from the UserSocialMedia
     * 
    **/
    select?: UserSocialMediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserSocialMediaInclude | null
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

  export type BlogPostAggregateArgs = {
    /**
     * Filter which BlogPost to aggregate.
     * 
    **/
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     * 
    **/
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




  export type BlogPostGroupByArgs = {
    where?: BlogPostWhereInput
    orderBy?: Enumerable<BlogPostOrderByWithAggregationInput>
    by: Array<BlogPostScalarFieldEnum>
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

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect = {
    id?: boolean
    title?: boolean
    text?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
    comments?: boolean | BlogPostCommentFindManyArgs
    _count?: boolean | BlogPostCountOutputTypeArgs
  }

  export type BlogPostInclude = {
    author?: boolean | UserArgs
    comments?: boolean | BlogPostCommentFindManyArgs
    _count?: boolean | BlogPostCountOutputTypeArgs
  }

  export type BlogPostGetPayload<
    S extends boolean | null | undefined | BlogPostArgs,
    U = keyof S
      > = S extends true
        ? BlogPost
    : S extends undefined
    ? never
    : S extends BlogPostArgs | BlogPostFindManyArgs
    ?'include' extends U
    ? BlogPost  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> | null :
        P extends 'comments' ? Array < BlogPostCommentGetPayload<S['include'][P]>>  :
        P extends '_count' ? BlogPostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> | null :
        P extends 'comments' ? Array < BlogPostCommentGetPayload<S['select'][P]>>  :
        P extends '_count' ? BlogPostCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BlogPost ? BlogPost[P] : never
  } 
    : BlogPost
  : BlogPost


  type BlogPostCountArgs = Merge<
    Omit<BlogPostFindManyArgs, 'select' | 'include'> & {
      select?: BlogPostCountAggregateInputType | true
    }
  >

  export interface BlogPostDelegate<GlobalRejectSettings> {
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
    findUnique<T extends BlogPostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BlogPostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BlogPost'> extends True ? CheckSelect<T, Prisma__BlogPostClient<BlogPost>, Prisma__BlogPostClient<BlogPostGetPayload<T>>> : CheckSelect<T, Prisma__BlogPostClient<BlogPost | null >, Prisma__BlogPostClient<BlogPostGetPayload<T> | null >>

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
    findFirst<T extends BlogPostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BlogPostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BlogPost'> extends True ? CheckSelect<T, Prisma__BlogPostClient<BlogPost>, Prisma__BlogPostClient<BlogPostGetPayload<T>>> : CheckSelect<T, Prisma__BlogPostClient<BlogPost | null >, Prisma__BlogPostClient<BlogPostGetPayload<T> | null >>

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
    findMany<T extends BlogPostFindManyArgs>(
      args?: SelectSubset<T, BlogPostFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<BlogPost>>, PrismaPromise<Array<BlogPostGetPayload<T>>>>

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
    create<T extends BlogPostCreateArgs>(
      args: SelectSubset<T, BlogPostCreateArgs>
    ): CheckSelect<T, Prisma__BlogPostClient<BlogPost>, Prisma__BlogPostClient<BlogPostGetPayload<T>>>

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
    createMany<T extends BlogPostCreateManyArgs>(
      args?: SelectSubset<T, BlogPostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    delete<T extends BlogPostDeleteArgs>(
      args: SelectSubset<T, BlogPostDeleteArgs>
    ): CheckSelect<T, Prisma__BlogPostClient<BlogPost>, Prisma__BlogPostClient<BlogPostGetPayload<T>>>

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
    update<T extends BlogPostUpdateArgs>(
      args: SelectSubset<T, BlogPostUpdateArgs>
    ): CheckSelect<T, Prisma__BlogPostClient<BlogPost>, Prisma__BlogPostClient<BlogPostGetPayload<T>>>

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
    deleteMany<T extends BlogPostDeleteManyArgs>(
      args?: SelectSubset<T, BlogPostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    updateMany<T extends BlogPostUpdateManyArgs>(
      args: SelectSubset<T, BlogPostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    upsert<T extends BlogPostUpsertArgs>(
      args: SelectSubset<T, BlogPostUpsertArgs>
    ): CheckSelect<T, Prisma__BlogPostClient<BlogPost>, Prisma__BlogPostClient<BlogPostGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): PrismaPromise<GetBlogPostAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BlogPostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    comments<T extends BlogPostCommentFindManyArgs = {}>(args?: Subset<T, BlogPostCommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BlogPostComment>>, PrismaPromise<Array<BlogPostCommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the BlogPost
     * 
    **/
    select?: BlogPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostInclude | null
    /**
     * Throw an Error if a BlogPost can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BlogPost to fetch.
     * 
    **/
    where: BlogPostWhereUniqueInput
  }


  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the BlogPost
     * 
    **/
    select?: BlogPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostInclude | null
    /**
     * Throw an Error if a BlogPost can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BlogPost to fetch.
     * 
    **/
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     * 
    **/
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     * 
    **/
    distinct?: Enumerable<BlogPostScalarFieldEnum>
  }


  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs = {
    /**
     * Select specific fields to fetch from the BlogPost
     * 
    **/
    select?: BlogPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostInclude | null
    /**
     * Filter, which BlogPosts to fetch.
     * 
    **/
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     * 
    **/
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BlogPostScalarFieldEnum>
  }


  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs = {
    /**
     * Select specific fields to fetch from the BlogPost
     * 
    **/
    select?: BlogPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostInclude | null
    /**
     * The data needed to create a BlogPost.
     * 
    **/
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }


  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs = {
    /**
     * The data used to create many BlogPosts.
     * 
    **/
    data: Enumerable<BlogPostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs = {
    /**
     * Select specific fields to fetch from the BlogPost
     * 
    **/
    select?: BlogPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostInclude | null
    /**
     * The data needed to update a BlogPost.
     * 
    **/
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     * 
    **/
    where: BlogPostWhereUniqueInput
  }


  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs = {
    /**
     * The data used to update BlogPosts.
     * 
    **/
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     * 
    **/
    where?: BlogPostWhereInput
  }


  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs = {
    /**
     * Select specific fields to fetch from the BlogPost
     * 
    **/
    select?: BlogPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostInclude | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     * 
    **/
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     * 
    **/
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }


  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs = {
    /**
     * Select specific fields to fetch from the BlogPost
     * 
    **/
    select?: BlogPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostInclude | null
    /**
     * Filter which BlogPost to delete.
     * 
    **/
    where: BlogPostWhereUniqueInput
  }


  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs = {
    /**
     * Filter which BlogPosts to delete
     * 
    **/
    where?: BlogPostWhereInput
  }


  /**
   * BlogPost without action
   */
  export type BlogPostArgs = {
    /**
     * Select specific fields to fetch from the BlogPost
     * 
    **/
    select?: BlogPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostInclude | null
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

  export type BlogPostCommentAggregateArgs = {
    /**
     * Filter which BlogPostComment to aggregate.
     * 
    **/
    where?: BlogPostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostComments to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogPostCommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BlogPostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostComments.
     * 
    **/
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




  export type BlogPostCommentGroupByArgs = {
    where?: BlogPostCommentWhereInput
    orderBy?: Enumerable<BlogPostCommentOrderByWithAggregationInput>
    by: Array<BlogPostCommentScalarFieldEnum>
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

  type GetBlogPostCommentGroupByPayload<T extends BlogPostCommentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BlogPostCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostCommentGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostCommentGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostCommentSelect = {
    id?: boolean
    text?: boolean
    post?: boolean | BlogPostArgs
    postId?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
  }

  export type BlogPostCommentInclude = {
    post?: boolean | BlogPostArgs
    author?: boolean | UserArgs
  }

  export type BlogPostCommentGetPayload<
    S extends boolean | null | undefined | BlogPostCommentArgs,
    U = keyof S
      > = S extends true
        ? BlogPostComment
    : S extends undefined
    ? never
    : S extends BlogPostCommentArgs | BlogPostCommentFindManyArgs
    ?'include' extends U
    ? BlogPostComment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'post' ? BlogPostGetPayload<S['include'][P]> | null :
        P extends 'author' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'post' ? BlogPostGetPayload<S['select'][P]> | null :
        P extends 'author' ? UserGetPayload<S['select'][P]> | null :  P extends keyof BlogPostComment ? BlogPostComment[P] : never
  } 
    : BlogPostComment
  : BlogPostComment


  type BlogPostCommentCountArgs = Merge<
    Omit<BlogPostCommentFindManyArgs, 'select' | 'include'> & {
      select?: BlogPostCommentCountAggregateInputType | true
    }
  >

  export interface BlogPostCommentDelegate<GlobalRejectSettings> {
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
    findUnique<T extends BlogPostCommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BlogPostCommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BlogPostComment'> extends True ? CheckSelect<T, Prisma__BlogPostCommentClient<BlogPostComment>, Prisma__BlogPostCommentClient<BlogPostCommentGetPayload<T>>> : CheckSelect<T, Prisma__BlogPostCommentClient<BlogPostComment | null >, Prisma__BlogPostCommentClient<BlogPostCommentGetPayload<T> | null >>

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
    findFirst<T extends BlogPostCommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BlogPostCommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BlogPostComment'> extends True ? CheckSelect<T, Prisma__BlogPostCommentClient<BlogPostComment>, Prisma__BlogPostCommentClient<BlogPostCommentGetPayload<T>>> : CheckSelect<T, Prisma__BlogPostCommentClient<BlogPostComment | null >, Prisma__BlogPostCommentClient<BlogPostCommentGetPayload<T> | null >>

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
    findMany<T extends BlogPostCommentFindManyArgs>(
      args?: SelectSubset<T, BlogPostCommentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<BlogPostComment>>, PrismaPromise<Array<BlogPostCommentGetPayload<T>>>>

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
    create<T extends BlogPostCommentCreateArgs>(
      args: SelectSubset<T, BlogPostCommentCreateArgs>
    ): CheckSelect<T, Prisma__BlogPostCommentClient<BlogPostComment>, Prisma__BlogPostCommentClient<BlogPostCommentGetPayload<T>>>

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
    createMany<T extends BlogPostCommentCreateManyArgs>(
      args?: SelectSubset<T, BlogPostCommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    delete<T extends BlogPostCommentDeleteArgs>(
      args: SelectSubset<T, BlogPostCommentDeleteArgs>
    ): CheckSelect<T, Prisma__BlogPostCommentClient<BlogPostComment>, Prisma__BlogPostCommentClient<BlogPostCommentGetPayload<T>>>

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
    update<T extends BlogPostCommentUpdateArgs>(
      args: SelectSubset<T, BlogPostCommentUpdateArgs>
    ): CheckSelect<T, Prisma__BlogPostCommentClient<BlogPostComment>, Prisma__BlogPostCommentClient<BlogPostCommentGetPayload<T>>>

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
    deleteMany<T extends BlogPostCommentDeleteManyArgs>(
      args?: SelectSubset<T, BlogPostCommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    updateMany<T extends BlogPostCommentUpdateManyArgs>(
      args: SelectSubset<T, BlogPostCommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    upsert<T extends BlogPostCommentUpsertArgs>(
      args: SelectSubset<T, BlogPostCommentUpsertArgs>
    ): CheckSelect<T, Prisma__BlogPostCommentClient<BlogPostComment>, Prisma__BlogPostCommentClient<BlogPostCommentGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends BlogPostCommentAggregateArgs>(args: Subset<T, BlogPostCommentAggregateArgs>): PrismaPromise<GetBlogPostCommentAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BlogPostCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostCommentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPostComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BlogPostCommentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    post<T extends BlogPostArgs = {}>(args?: Subset<T, BlogPostArgs>): CheckSelect<T, Prisma__BlogPostClient<BlogPost | null >, Prisma__BlogPostClient<BlogPostGetPayload<T> | null >>;

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * BlogPostComment findUnique
   */
  export type BlogPostCommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     * 
    **/
    select?: BlogPostCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostCommentInclude | null
    /**
     * Throw an Error if a BlogPostComment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BlogPostComment to fetch.
     * 
    **/
    where: BlogPostCommentWhereUniqueInput
  }


  /**
   * BlogPostComment findFirst
   */
  export type BlogPostCommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     * 
    **/
    select?: BlogPostCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostCommentInclude | null
    /**
     * Throw an Error if a BlogPostComment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BlogPostComment to fetch.
     * 
    **/
    where?: BlogPostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostComments to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogPostCommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostComments.
     * 
    **/
    cursor?: BlogPostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostComments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostComments.
     * 
    **/
    distinct?: Enumerable<BlogPostCommentScalarFieldEnum>
  }


  /**
   * BlogPostComment findMany
   */
  export type BlogPostCommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     * 
    **/
    select?: BlogPostCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostCommentInclude | null
    /**
     * Filter, which BlogPostComments to fetch.
     * 
    **/
    where?: BlogPostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostComments to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogPostCommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPostComments.
     * 
    **/
    cursor?: BlogPostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostComments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BlogPostCommentScalarFieldEnum>
  }


  /**
   * BlogPostComment create
   */
  export type BlogPostCommentCreateArgs = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     * 
    **/
    select?: BlogPostCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostCommentInclude | null
    /**
     * The data needed to create a BlogPostComment.
     * 
    **/
    data: XOR<BlogPostCommentCreateInput, BlogPostCommentUncheckedCreateInput>
  }


  /**
   * BlogPostComment createMany
   */
  export type BlogPostCommentCreateManyArgs = {
    /**
     * The data used to create many BlogPostComments.
     * 
    **/
    data: Enumerable<BlogPostCommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BlogPostComment update
   */
  export type BlogPostCommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     * 
    **/
    select?: BlogPostCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostCommentInclude | null
    /**
     * The data needed to update a BlogPostComment.
     * 
    **/
    data: XOR<BlogPostCommentUpdateInput, BlogPostCommentUncheckedUpdateInput>
    /**
     * Choose, which BlogPostComment to update.
     * 
    **/
    where: BlogPostCommentWhereUniqueInput
  }


  /**
   * BlogPostComment updateMany
   */
  export type BlogPostCommentUpdateManyArgs = {
    /**
     * The data used to update BlogPostComments.
     * 
    **/
    data: XOR<BlogPostCommentUpdateManyMutationInput, BlogPostCommentUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostComments to update
     * 
    **/
    where?: BlogPostCommentWhereInput
  }


  /**
   * BlogPostComment upsert
   */
  export type BlogPostCommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     * 
    **/
    select?: BlogPostCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostCommentInclude | null
    /**
     * The filter to search for the BlogPostComment to update in case it exists.
     * 
    **/
    where: BlogPostCommentWhereUniqueInput
    /**
     * In case the BlogPostComment found by the `where` argument doesn't exist, create a new BlogPostComment with this data.
     * 
    **/
    create: XOR<BlogPostCommentCreateInput, BlogPostCommentUncheckedCreateInput>
    /**
     * In case the BlogPostComment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BlogPostCommentUpdateInput, BlogPostCommentUncheckedUpdateInput>
  }


  /**
   * BlogPostComment delete
   */
  export type BlogPostCommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     * 
    **/
    select?: BlogPostCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostCommentInclude | null
    /**
     * Filter which BlogPostComment to delete.
     * 
    **/
    where: BlogPostCommentWhereUniqueInput
  }


  /**
   * BlogPostComment deleteMany
   */
  export type BlogPostCommentDeleteManyArgs = {
    /**
     * Filter which BlogPostComments to delete
     * 
    **/
    where?: BlogPostCommentWhereInput
  }


  /**
   * BlogPostComment without action
   */
  export type BlogPostCommentArgs = {
    /**
     * Select specific fields to fetch from the BlogPostComment
     * 
    **/
    select?: BlogPostCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogPostCommentInclude | null
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

  export type SiteAggregateArgs = {
    /**
     * Filter which Site to aggregate.
     * 
    **/
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     * 
    **/
    orderBy?: Enumerable<SiteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     * 
    **/
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




  export type SiteGroupByArgs = {
    where?: SiteWhereInput
    orderBy?: Enumerable<SiteOrderByWithAggregationInput>
    by: Array<SiteScalarFieldEnum>
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

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect = {
    id?: boolean
    name?: boolean
    url?: boolean
    owner?: boolean | UserArgs
    userId?: boolean
  }

  export type SiteInclude = {
    owner?: boolean | UserArgs
  }

  export type SiteGetPayload<
    S extends boolean | null | undefined | SiteArgs,
    U = keyof S
      > = S extends true
        ? Site
    : S extends undefined
    ? never
    : S extends SiteArgs | SiteFindManyArgs
    ?'include' extends U
    ? Site  & {
    [P in TrueKeys<S['include']>]:
        P extends 'owner' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Site ? Site[P] : never
  } 
    : Site
  : Site


  type SiteCountArgs = Merge<
    Omit<SiteFindManyArgs, 'select' | 'include'> & {
      select?: SiteCountAggregateInputType | true
    }
  >

  export interface SiteDelegate<GlobalRejectSettings> {
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
    findUnique<T extends SiteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SiteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Site'> extends True ? CheckSelect<T, Prisma__SiteClient<Site>, Prisma__SiteClient<SiteGetPayload<T>>> : CheckSelect<T, Prisma__SiteClient<Site | null >, Prisma__SiteClient<SiteGetPayload<T> | null >>

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
    findFirst<T extends SiteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SiteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Site'> extends True ? CheckSelect<T, Prisma__SiteClient<Site>, Prisma__SiteClient<SiteGetPayload<T>>> : CheckSelect<T, Prisma__SiteClient<Site | null >, Prisma__SiteClient<SiteGetPayload<T> | null >>

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
    findMany<T extends SiteFindManyArgs>(
      args?: SelectSubset<T, SiteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Site>>, PrismaPromise<Array<SiteGetPayload<T>>>>

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
    create<T extends SiteCreateArgs>(
      args: SelectSubset<T, SiteCreateArgs>
    ): CheckSelect<T, Prisma__SiteClient<Site>, Prisma__SiteClient<SiteGetPayload<T>>>

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
    createMany<T extends SiteCreateManyArgs>(
      args?: SelectSubset<T, SiteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    delete<T extends SiteDeleteArgs>(
      args: SelectSubset<T, SiteDeleteArgs>
    ): CheckSelect<T, Prisma__SiteClient<Site>, Prisma__SiteClient<SiteGetPayload<T>>>

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
    update<T extends SiteUpdateArgs>(
      args: SelectSubset<T, SiteUpdateArgs>
    ): CheckSelect<T, Prisma__SiteClient<Site>, Prisma__SiteClient<SiteGetPayload<T>>>

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
    deleteMany<T extends SiteDeleteManyArgs>(
      args?: SelectSubset<T, SiteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    updateMany<T extends SiteUpdateManyArgs>(
      args: SelectSubset<T, SiteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    upsert<T extends SiteUpsertArgs>(
      args: SelectSubset<T, SiteUpsertArgs>
    ): CheckSelect<T, Prisma__SiteClient<Site>, Prisma__SiteClient<SiteGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): PrismaPromise<GetSiteAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SiteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    owner<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Site
     * 
    **/
    select?: SiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SiteInclude | null
    /**
     * Throw an Error if a Site can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Site to fetch.
     * 
    **/
    where: SiteWhereUniqueInput
  }


  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Site
     * 
    **/
    select?: SiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SiteInclude | null
    /**
     * Throw an Error if a Site can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Site to fetch.
     * 
    **/
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     * 
    **/
    orderBy?: Enumerable<SiteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     * 
    **/
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     * 
    **/
    distinct?: Enumerable<SiteScalarFieldEnum>
  }


  /**
   * Site findMany
   */
  export type SiteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Site
     * 
    **/
    select?: SiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SiteInclude | null
    /**
     * Filter, which Sites to fetch.
     * 
    **/
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     * 
    **/
    orderBy?: Enumerable<SiteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     * 
    **/
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SiteScalarFieldEnum>
  }


  /**
   * Site create
   */
  export type SiteCreateArgs = {
    /**
     * Select specific fields to fetch from the Site
     * 
    **/
    select?: SiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SiteInclude | null
    /**
     * The data needed to create a Site.
     * 
    **/
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }


  /**
   * Site createMany
   */
  export type SiteCreateManyArgs = {
    /**
     * The data used to create many Sites.
     * 
    **/
    data: Enumerable<SiteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Site update
   */
  export type SiteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Site
     * 
    **/
    select?: SiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SiteInclude | null
    /**
     * The data needed to update a Site.
     * 
    **/
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     * 
    **/
    where: SiteWhereUniqueInput
  }


  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs = {
    /**
     * The data used to update Sites.
     * 
    **/
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     * 
    **/
    where?: SiteWhereInput
  }


  /**
   * Site upsert
   */
  export type SiteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Site
     * 
    **/
    select?: SiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SiteInclude | null
    /**
     * The filter to search for the Site to update in case it exists.
     * 
    **/
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     * 
    **/
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }


  /**
   * Site delete
   */
  export type SiteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Site
     * 
    **/
    select?: SiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SiteInclude | null
    /**
     * Filter which Site to delete.
     * 
    **/
    where: SiteWhereUniqueInput
  }


  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs = {
    /**
     * Filter which Sites to delete
     * 
    **/
    where?: SiteWhereInput
  }


  /**
   * Site without action
   */
  export type SiteArgs = {
    /**
     * Select specific fields to fetch from the Site
     * 
    **/
    select?: SiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SiteInclude | null
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
    gender: Gender | null
    yearOfBirth: number | null
    wantsNewsletter: boolean | null
    weddingDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    gender: Gender | null
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

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
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
    gender: Gender | null
    yearOfBirth: number | null
    wantsNewsletter: boolean
    interests: Topic[]
    address: JsonValue | null
    weddingDate: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    roles?: boolean | UserRoleFindManyArgs
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    yearOfBirth?: boolean
    wantsNewsletter?: boolean
    interests?: boolean
    userSocialMedia?: boolean | UserSocialMediaArgs
    address?: boolean
    blogPosts?: boolean | BlogPostFindManyArgs
    comments?: boolean | BlogPostCommentFindManyArgs
    companies?: boolean | CompanyFindManyArgs
    weddingDate?: boolean
    site?: boolean | SiteArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    roles?: boolean | UserRoleFindManyArgs
    userSocialMedia?: boolean | UserSocialMediaArgs
    blogPosts?: boolean | BlogPostFindManyArgs
    comments?: boolean | BlogPostCommentFindManyArgs
    companies?: boolean | CompanyFindManyArgs
    site?: boolean | SiteArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'roles' ? Array < UserRoleGetPayload<S['include'][P]>>  :
        P extends 'userSocialMedia' ? UserSocialMediaGetPayload<S['include'][P]> | null :
        P extends 'blogPosts' ? Array < BlogPostGetPayload<S['include'][P]>>  :
        P extends 'comments' ? Array < BlogPostCommentGetPayload<S['include'][P]>>  :
        P extends 'companies' ? Array < CompanyGetPayload<S['include'][P]>>  :
        P extends 'site' ? SiteGetPayload<S['include'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'roles' ? Array < UserRoleGetPayload<S['select'][P]>>  :
        P extends 'userSocialMedia' ? UserSocialMediaGetPayload<S['select'][P]> | null :
        P extends 'blogPosts' ? Array < BlogPostGetPayload<S['select'][P]>>  :
        P extends 'comments' ? Array < BlogPostCommentGetPayload<S['select'][P]>>  :
        P extends 'companies' ? Array < CompanyGetPayload<S['select'][P]>>  :
        P extends 'site' ? SiteGetPayload<S['select'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    roles<T extends UserRoleFindManyArgs = {}>(args?: Subset<T, UserRoleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserRole>>, PrismaPromise<Array<UserRoleGetPayload<T>>>>;

    userSocialMedia<T extends UserSocialMediaArgs = {}>(args?: Subset<T, UserSocialMediaArgs>): CheckSelect<T, Prisma__UserSocialMediaClient<UserSocialMedia | null >, Prisma__UserSocialMediaClient<UserSocialMediaGetPayload<T> | null >>;

    blogPosts<T extends BlogPostFindManyArgs = {}>(args?: Subset<T, BlogPostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BlogPost>>, PrismaPromise<Array<BlogPostGetPayload<T>>>>;

    comments<T extends BlogPostCommentFindManyArgs = {}>(args?: Subset<T, BlogPostCommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BlogPostComment>>, PrismaPromise<Array<BlogPostCommentGetPayload<T>>>>;

    companies<T extends CompanyFindManyArgs = {}>(args?: Subset<T, CompanyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Company>>, PrismaPromise<Array<CompanyGetPayload<T>>>>;

    site<T extends SiteArgs = {}>(args?: Subset<T, SiteArgs>): CheckSelect<T, Prisma__SiteClient<Site | null >, Prisma__SiteClient<SiteGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
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

  export type FilteringTestAggregateArgs = {
    /**
     * Filter which FilteringTest to aggregate.
     * 
    **/
    where?: FilteringTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilteringTests to fetch.
     * 
    **/
    orderBy?: Enumerable<FilteringTestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FilteringTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilteringTests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilteringTests.
     * 
    **/
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




  export type FilteringTestGroupByArgs = {
    where?: FilteringTestWhereInput
    orderBy?: Enumerable<FilteringTestOrderByWithAggregationInput>
    by: Array<FilteringTestScalarFieldEnum>
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

  type GetFilteringTestGroupByPayload<T extends FilteringTestGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FilteringTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilteringTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilteringTestGroupByOutputType[P]>
            : GetScalarType<T[P], FilteringTestGroupByOutputType[P]>
        }
      >
    >


  export type FilteringTestSelect = {
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

  export type FilteringTestGetPayload<
    S extends boolean | null | undefined | FilteringTestArgs,
    U = keyof S
      > = S extends true
        ? FilteringTest
    : S extends undefined
    ? never
    : S extends FilteringTestArgs | FilteringTestFindManyArgs
    ?'include' extends U
    ? FilteringTest 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof FilteringTest ? FilteringTest[P] : never
  } 
    : FilteringTest
  : FilteringTest


  type FilteringTestCountArgs = Merge<
    Omit<FilteringTestFindManyArgs, 'select' | 'include'> & {
      select?: FilteringTestCountAggregateInputType | true
    }
  >

  export interface FilteringTestDelegate<GlobalRejectSettings> {
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
    findUnique<T extends FilteringTestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FilteringTestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FilteringTest'> extends True ? CheckSelect<T, Prisma__FilteringTestClient<FilteringTest>, Prisma__FilteringTestClient<FilteringTestGetPayload<T>>> : CheckSelect<T, Prisma__FilteringTestClient<FilteringTest | null >, Prisma__FilteringTestClient<FilteringTestGetPayload<T> | null >>

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
    findFirst<T extends FilteringTestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FilteringTestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FilteringTest'> extends True ? CheckSelect<T, Prisma__FilteringTestClient<FilteringTest>, Prisma__FilteringTestClient<FilteringTestGetPayload<T>>> : CheckSelect<T, Prisma__FilteringTestClient<FilteringTest | null >, Prisma__FilteringTestClient<FilteringTestGetPayload<T> | null >>

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
    findMany<T extends FilteringTestFindManyArgs>(
      args?: SelectSubset<T, FilteringTestFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<FilteringTest>>, PrismaPromise<Array<FilteringTestGetPayload<T>>>>

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
    create<T extends FilteringTestCreateArgs>(
      args: SelectSubset<T, FilteringTestCreateArgs>
    ): CheckSelect<T, Prisma__FilteringTestClient<FilteringTest>, Prisma__FilteringTestClient<FilteringTestGetPayload<T>>>

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
    createMany<T extends FilteringTestCreateManyArgs>(
      args?: SelectSubset<T, FilteringTestCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    delete<T extends FilteringTestDeleteArgs>(
      args: SelectSubset<T, FilteringTestDeleteArgs>
    ): CheckSelect<T, Prisma__FilteringTestClient<FilteringTest>, Prisma__FilteringTestClient<FilteringTestGetPayload<T>>>

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
    update<T extends FilteringTestUpdateArgs>(
      args: SelectSubset<T, FilteringTestUpdateArgs>
    ): CheckSelect<T, Prisma__FilteringTestClient<FilteringTest>, Prisma__FilteringTestClient<FilteringTestGetPayload<T>>>

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
    deleteMany<T extends FilteringTestDeleteManyArgs>(
      args?: SelectSubset<T, FilteringTestDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    updateMany<T extends FilteringTestUpdateManyArgs>(
      args: SelectSubset<T, FilteringTestUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    upsert<T extends FilteringTestUpsertArgs>(
      args: SelectSubset<T, FilteringTestUpsertArgs>
    ): CheckSelect<T, Prisma__FilteringTestClient<FilteringTest>, Prisma__FilteringTestClient<FilteringTestGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends FilteringTestAggregateArgs>(args: Subset<T, FilteringTestAggregateArgs>): PrismaPromise<GetFilteringTestAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FilteringTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilteringTestGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilteringTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FilteringTestClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FilteringTest findUnique
   */
  export type FilteringTestFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the FilteringTest
     * 
    **/
    select?: FilteringTestSelect | null
    /**
     * Throw an Error if a FilteringTest can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FilteringTest to fetch.
     * 
    **/
    where: FilteringTestWhereUniqueInput
  }


  /**
   * FilteringTest findFirst
   */
  export type FilteringTestFindFirstArgs = {
    /**
     * Select specific fields to fetch from the FilteringTest
     * 
    **/
    select?: FilteringTestSelect | null
    /**
     * Throw an Error if a FilteringTest can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FilteringTest to fetch.
     * 
    **/
    where?: FilteringTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilteringTests to fetch.
     * 
    **/
    orderBy?: Enumerable<FilteringTestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilteringTests.
     * 
    **/
    cursor?: FilteringTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilteringTests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilteringTests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilteringTests.
     * 
    **/
    distinct?: Enumerable<FilteringTestScalarFieldEnum>
  }


  /**
   * FilteringTest findMany
   */
  export type FilteringTestFindManyArgs = {
    /**
     * Select specific fields to fetch from the FilteringTest
     * 
    **/
    select?: FilteringTestSelect | null
    /**
     * Filter, which FilteringTests to fetch.
     * 
    **/
    where?: FilteringTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilteringTests to fetch.
     * 
    **/
    orderBy?: Enumerable<FilteringTestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilteringTests.
     * 
    **/
    cursor?: FilteringTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilteringTests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilteringTests.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FilteringTestScalarFieldEnum>
  }


  /**
   * FilteringTest create
   */
  export type FilteringTestCreateArgs = {
    /**
     * Select specific fields to fetch from the FilteringTest
     * 
    **/
    select?: FilteringTestSelect | null
    /**
     * The data needed to create a FilteringTest.
     * 
    **/
    data: XOR<FilteringTestCreateInput, FilteringTestUncheckedCreateInput>
  }


  /**
   * FilteringTest createMany
   */
  export type FilteringTestCreateManyArgs = {
    /**
     * The data used to create many FilteringTests.
     * 
    **/
    data: Enumerable<FilteringTestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FilteringTest update
   */
  export type FilteringTestUpdateArgs = {
    /**
     * Select specific fields to fetch from the FilteringTest
     * 
    **/
    select?: FilteringTestSelect | null
    /**
     * The data needed to update a FilteringTest.
     * 
    **/
    data: XOR<FilteringTestUpdateInput, FilteringTestUncheckedUpdateInput>
    /**
     * Choose, which FilteringTest to update.
     * 
    **/
    where: FilteringTestWhereUniqueInput
  }


  /**
   * FilteringTest updateMany
   */
  export type FilteringTestUpdateManyArgs = {
    /**
     * The data used to update FilteringTests.
     * 
    **/
    data: XOR<FilteringTestUpdateManyMutationInput, FilteringTestUncheckedUpdateManyInput>
    /**
     * Filter which FilteringTests to update
     * 
    **/
    where?: FilteringTestWhereInput
  }


  /**
   * FilteringTest upsert
   */
  export type FilteringTestUpsertArgs = {
    /**
     * Select specific fields to fetch from the FilteringTest
     * 
    **/
    select?: FilteringTestSelect | null
    /**
     * The filter to search for the FilteringTest to update in case it exists.
     * 
    **/
    where: FilteringTestWhereUniqueInput
    /**
     * In case the FilteringTest found by the `where` argument doesn't exist, create a new FilteringTest with this data.
     * 
    **/
    create: XOR<FilteringTestCreateInput, FilteringTestUncheckedCreateInput>
    /**
     * In case the FilteringTest was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FilteringTestUpdateInput, FilteringTestUncheckedUpdateInput>
  }


  /**
   * FilteringTest delete
   */
  export type FilteringTestDeleteArgs = {
    /**
     * Select specific fields to fetch from the FilteringTest
     * 
    **/
    select?: FilteringTestSelect | null
    /**
     * Filter which FilteringTest to delete.
     * 
    **/
    where: FilteringTestWhereUniqueInput
  }


  /**
   * FilteringTest deleteMany
   */
  export type FilteringTestDeleteManyArgs = {
    /**
     * Filter which FilteringTests to delete
     * 
    **/
    where?: FilteringTestWhereInput
  }


  /**
   * FilteringTest without action
   */
  export type FilteringTestArgs = {
    /**
     * Select specific fields to fetch from the FilteringTest
     * 
    **/
    select?: FilteringTestSelect | null
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

  export type SomePublicRecordWithIntIdAggregateArgs = {
    /**
     * Filter which SomePublicRecordWithIntId to aggregate.
     * 
    **/
    where?: SomePublicRecordWithIntIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SomePublicRecordWithIntIds to fetch.
     * 
    **/
    orderBy?: Enumerable<SomePublicRecordWithIntIdOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SomePublicRecordWithIntIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SomePublicRecordWithIntIds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SomePublicRecordWithIntIds.
     * 
    **/
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




  export type SomePublicRecordWithIntIdGroupByArgs = {
    where?: SomePublicRecordWithIntIdWhereInput
    orderBy?: Enumerable<SomePublicRecordWithIntIdOrderByWithAggregationInput>
    by: Array<SomePublicRecordWithIntIdScalarFieldEnum>
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

  type GetSomePublicRecordWithIntIdGroupByPayload<T extends SomePublicRecordWithIntIdGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SomePublicRecordWithIntIdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SomePublicRecordWithIntIdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SomePublicRecordWithIntIdGroupByOutputType[P]>
            : GetScalarType<T[P], SomePublicRecordWithIntIdGroupByOutputType[P]>
        }
      >
    >


  export type SomePublicRecordWithIntIdSelect = {
    id?: boolean
    title?: boolean
  }

  export type SomePublicRecordWithIntIdGetPayload<
    S extends boolean | null | undefined | SomePublicRecordWithIntIdArgs,
    U = keyof S
      > = S extends true
        ? SomePublicRecordWithIntId
    : S extends undefined
    ? never
    : S extends SomePublicRecordWithIntIdArgs | SomePublicRecordWithIntIdFindManyArgs
    ?'include' extends U
    ? SomePublicRecordWithIntId 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SomePublicRecordWithIntId ? SomePublicRecordWithIntId[P] : never
  } 
    : SomePublicRecordWithIntId
  : SomePublicRecordWithIntId


  type SomePublicRecordWithIntIdCountArgs = Merge<
    Omit<SomePublicRecordWithIntIdFindManyArgs, 'select' | 'include'> & {
      select?: SomePublicRecordWithIntIdCountAggregateInputType | true
    }
  >

  export interface SomePublicRecordWithIntIdDelegate<GlobalRejectSettings> {
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
    findUnique<T extends SomePublicRecordWithIntIdFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SomePublicRecordWithIntIdFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SomePublicRecordWithIntId'> extends True ? CheckSelect<T, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntId>, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntIdGetPayload<T>>> : CheckSelect<T, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntId | null >, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntIdGetPayload<T> | null >>

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
    findFirst<T extends SomePublicRecordWithIntIdFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SomePublicRecordWithIntIdFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SomePublicRecordWithIntId'> extends True ? CheckSelect<T, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntId>, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntIdGetPayload<T>>> : CheckSelect<T, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntId | null >, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntIdGetPayload<T> | null >>

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
    findMany<T extends SomePublicRecordWithIntIdFindManyArgs>(
      args?: SelectSubset<T, SomePublicRecordWithIntIdFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SomePublicRecordWithIntId>>, PrismaPromise<Array<SomePublicRecordWithIntIdGetPayload<T>>>>

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
    create<T extends SomePublicRecordWithIntIdCreateArgs>(
      args: SelectSubset<T, SomePublicRecordWithIntIdCreateArgs>
    ): CheckSelect<T, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntId>, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntIdGetPayload<T>>>

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
    createMany<T extends SomePublicRecordWithIntIdCreateManyArgs>(
      args?: SelectSubset<T, SomePublicRecordWithIntIdCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    delete<T extends SomePublicRecordWithIntIdDeleteArgs>(
      args: SelectSubset<T, SomePublicRecordWithIntIdDeleteArgs>
    ): CheckSelect<T, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntId>, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntIdGetPayload<T>>>

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
    update<T extends SomePublicRecordWithIntIdUpdateArgs>(
      args: SelectSubset<T, SomePublicRecordWithIntIdUpdateArgs>
    ): CheckSelect<T, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntId>, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntIdGetPayload<T>>>

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
    deleteMany<T extends SomePublicRecordWithIntIdDeleteManyArgs>(
      args?: SelectSubset<T, SomePublicRecordWithIntIdDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    updateMany<T extends SomePublicRecordWithIntIdUpdateManyArgs>(
      args: SelectSubset<T, SomePublicRecordWithIntIdUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    upsert<T extends SomePublicRecordWithIntIdUpsertArgs>(
      args: SelectSubset<T, SomePublicRecordWithIntIdUpsertArgs>
    ): CheckSelect<T, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntId>, Prisma__SomePublicRecordWithIntIdClient<SomePublicRecordWithIntIdGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends SomePublicRecordWithIntIdAggregateArgs>(args: Subset<T, SomePublicRecordWithIntIdAggregateArgs>): PrismaPromise<GetSomePublicRecordWithIntIdAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SomePublicRecordWithIntIdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSomePublicRecordWithIntIdGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SomePublicRecordWithIntId.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SomePublicRecordWithIntIdClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SomePublicRecordWithIntId findUnique
   */
  export type SomePublicRecordWithIntIdFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     * 
    **/
    select?: SomePublicRecordWithIntIdSelect | null
    /**
     * Throw an Error if a SomePublicRecordWithIntId can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SomePublicRecordWithIntId to fetch.
     * 
    **/
    where: SomePublicRecordWithIntIdWhereUniqueInput
  }


  /**
   * SomePublicRecordWithIntId findFirst
   */
  export type SomePublicRecordWithIntIdFindFirstArgs = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     * 
    **/
    select?: SomePublicRecordWithIntIdSelect | null
    /**
     * Throw an Error if a SomePublicRecordWithIntId can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SomePublicRecordWithIntId to fetch.
     * 
    **/
    where?: SomePublicRecordWithIntIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SomePublicRecordWithIntIds to fetch.
     * 
    **/
    orderBy?: Enumerable<SomePublicRecordWithIntIdOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SomePublicRecordWithIntIds.
     * 
    **/
    cursor?: SomePublicRecordWithIntIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SomePublicRecordWithIntIds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SomePublicRecordWithIntIds.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SomePublicRecordWithIntIds.
     * 
    **/
    distinct?: Enumerable<SomePublicRecordWithIntIdScalarFieldEnum>
  }


  /**
   * SomePublicRecordWithIntId findMany
   */
  export type SomePublicRecordWithIntIdFindManyArgs = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     * 
    **/
    select?: SomePublicRecordWithIntIdSelect | null
    /**
     * Filter, which SomePublicRecordWithIntIds to fetch.
     * 
    **/
    where?: SomePublicRecordWithIntIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SomePublicRecordWithIntIds to fetch.
     * 
    **/
    orderBy?: Enumerable<SomePublicRecordWithIntIdOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SomePublicRecordWithIntIds.
     * 
    **/
    cursor?: SomePublicRecordWithIntIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SomePublicRecordWithIntIds from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SomePublicRecordWithIntIds.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SomePublicRecordWithIntIdScalarFieldEnum>
  }


  /**
   * SomePublicRecordWithIntId create
   */
  export type SomePublicRecordWithIntIdCreateArgs = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     * 
    **/
    select?: SomePublicRecordWithIntIdSelect | null
    /**
     * The data needed to create a SomePublicRecordWithIntId.
     * 
    **/
    data: XOR<SomePublicRecordWithIntIdCreateInput, SomePublicRecordWithIntIdUncheckedCreateInput>
  }


  /**
   * SomePublicRecordWithIntId createMany
   */
  export type SomePublicRecordWithIntIdCreateManyArgs = {
    /**
     * The data used to create many SomePublicRecordWithIntIds.
     * 
    **/
    data: Enumerable<SomePublicRecordWithIntIdCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SomePublicRecordWithIntId update
   */
  export type SomePublicRecordWithIntIdUpdateArgs = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     * 
    **/
    select?: SomePublicRecordWithIntIdSelect | null
    /**
     * The data needed to update a SomePublicRecordWithIntId.
     * 
    **/
    data: XOR<SomePublicRecordWithIntIdUpdateInput, SomePublicRecordWithIntIdUncheckedUpdateInput>
    /**
     * Choose, which SomePublicRecordWithIntId to update.
     * 
    **/
    where: SomePublicRecordWithIntIdWhereUniqueInput
  }


  /**
   * SomePublicRecordWithIntId updateMany
   */
  export type SomePublicRecordWithIntIdUpdateManyArgs = {
    /**
     * The data used to update SomePublicRecordWithIntIds.
     * 
    **/
    data: XOR<SomePublicRecordWithIntIdUpdateManyMutationInput, SomePublicRecordWithIntIdUncheckedUpdateManyInput>
    /**
     * Filter which SomePublicRecordWithIntIds to update
     * 
    **/
    where?: SomePublicRecordWithIntIdWhereInput
  }


  /**
   * SomePublicRecordWithIntId upsert
   */
  export type SomePublicRecordWithIntIdUpsertArgs = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     * 
    **/
    select?: SomePublicRecordWithIntIdSelect | null
    /**
     * The filter to search for the SomePublicRecordWithIntId to update in case it exists.
     * 
    **/
    where: SomePublicRecordWithIntIdWhereUniqueInput
    /**
     * In case the SomePublicRecordWithIntId found by the `where` argument doesn't exist, create a new SomePublicRecordWithIntId with this data.
     * 
    **/
    create: XOR<SomePublicRecordWithIntIdCreateInput, SomePublicRecordWithIntIdUncheckedCreateInput>
    /**
     * In case the SomePublicRecordWithIntId was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SomePublicRecordWithIntIdUpdateInput, SomePublicRecordWithIntIdUncheckedUpdateInput>
  }


  /**
   * SomePublicRecordWithIntId delete
   */
  export type SomePublicRecordWithIntIdDeleteArgs = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     * 
    **/
    select?: SomePublicRecordWithIntIdSelect | null
    /**
     * Filter which SomePublicRecordWithIntId to delete.
     * 
    **/
    where: SomePublicRecordWithIntIdWhereUniqueInput
  }


  /**
   * SomePublicRecordWithIntId deleteMany
   */
  export type SomePublicRecordWithIntIdDeleteManyArgs = {
    /**
     * Filter which SomePublicRecordWithIntIds to delete
     * 
    **/
    where?: SomePublicRecordWithIntIdWhereInput
  }


  /**
   * SomePublicRecordWithIntId without action
   */
  export type SomePublicRecordWithIntIdArgs = {
    /**
     * Select specific fields to fetch from the SomePublicRecordWithIntId
     * 
    **/
    select?: SomePublicRecordWithIntIdSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

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
    DbNull: 'DbNull',
    JsonNull: 'JsonNull'
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull',
    AnyNull: 'AnyNull'
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type UserRoleWhereInput = {
    AND?: Enumerable<UserRoleWhereInput>
    OR?: Enumerable<UserRoleWhereInput>
    NOT?: Enumerable<UserRoleWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    users?: UserListRelationFilter
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserRoleWhereUniqueInput = {
    id?: string
  }

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserRoleScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserRoleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserRoleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type CompanyWhereInput = {
    AND?: Enumerable<CompanyWhereInput>
    OR?: Enumerable<CompanyWhereInput>
    NOT?: Enumerable<CompanyWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type CompanyWhereUniqueInput = {
    id?: string
  }

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type UserSocialMediaWhereInput = {
    AND?: Enumerable<UserSocialMediaWhereInput>
    OR?: Enumerable<UserSocialMediaWhereInput>
    NOT?: Enumerable<UserSocialMediaWhereInput>
    id?: StringFilter | string
    instagram?: StringFilter | string
    twitter?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
  }

  export type UserSocialMediaOrderByWithRelationInput = {
    id?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type UserSocialMediaWhereUniqueInput = {
    id?: string
    userId?: string
  }

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
    AND?: Enumerable<UserSocialMediaScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserSocialMediaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserSocialMediaScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    instagram?: StringWithAggregatesFilter | string
    twitter?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type BlogPostWhereInput = {
    AND?: Enumerable<BlogPostWhereInput>
    OR?: Enumerable<BlogPostWhereInput>
    NOT?: Enumerable<BlogPostWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    text?: StringFilter | string
    author?: XOR<UserRelationFilter, UserWhereInput> | null
    authorId?: StringNullableFilter | string | null
    comments?: BlogPostCommentListRelationFilter
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    author?: UserOrderByWithRelationInput
    authorId?: SortOrder
    comments?: BlogPostCommentOrderByRelationAggregateInput
  }

  export type BlogPostWhereUniqueInput = {
    id?: string
  }

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BlogPostScalarWhereWithAggregatesInput>
    OR?: Enumerable<BlogPostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BlogPostScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    authorId?: StringNullableWithAggregatesFilter | string | null
  }

  export type BlogPostCommentWhereInput = {
    AND?: Enumerable<BlogPostCommentWhereInput>
    OR?: Enumerable<BlogPostCommentWhereInput>
    NOT?: Enumerable<BlogPostCommentWhereInput>
    id?: StringFilter | string
    text?: StringFilter | string
    post?: XOR<BlogPostRelationFilter, BlogPostWhereInput> | null
    postId?: StringNullableFilter | string | null
    author?: XOR<UserRelationFilter, UserWhereInput> | null
    authorId?: StringNullableFilter | string | null
  }

  export type BlogPostCommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    post?: BlogPostOrderByWithRelationInput
    postId?: SortOrder
    author?: UserOrderByWithRelationInput
    authorId?: SortOrder
  }

  export type BlogPostCommentWhereUniqueInput = {
    id?: string
  }

  export type BlogPostCommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    _count?: BlogPostCommentCountOrderByAggregateInput
    _max?: BlogPostCommentMaxOrderByAggregateInput
    _min?: BlogPostCommentMinOrderByAggregateInput
  }

  export type BlogPostCommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BlogPostCommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<BlogPostCommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BlogPostCommentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    postId?: StringNullableWithAggregatesFilter | string | null
    authorId?: StringNullableWithAggregatesFilter | string | null
  }

  export type SiteWhereInput = {
    AND?: Enumerable<SiteWhereInput>
    OR?: Enumerable<SiteWhereInput>
    NOT?: Enumerable<SiteWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    url?: StringFilter | string
    owner?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: StringNullableFilter | string | null
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    owner?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type SiteWhereUniqueInput = {
    id?: string
    userId?: string
  }

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    _count?: SiteCountOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SiteScalarWhereWithAggregatesInput>
    OR?: Enumerable<SiteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SiteScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    userId?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    roles?: UserRoleListRelationFilter
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    gender?: EnumGenderNullableFilter | Gender | null
    yearOfBirth?: IntNullableFilter | number | null
    wantsNewsletter?: BoolFilter | boolean
    interests?: EnumTopicNullableListFilter
    userSocialMedia?: XOR<UserSocialMediaRelationFilter, UserSocialMediaWhereInput> | null
    address?: JsonNullableFilter
    blogPosts?: BlogPostListRelationFilter
    comments?: BlogPostCommentListRelationFilter
    companies?: CompanyListRelationFilter
    weddingDate?: DateTimeNullableFilter | Date | string | null
    site?: XOR<SiteRelationFilter, SiteWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    roles?: UserRoleOrderByRelationAggregateInput
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    yearOfBirth?: SortOrder
    wantsNewsletter?: SortOrder
    interests?: SortOrder
    userSocialMedia?: UserSocialMediaOrderByWithRelationInput
    address?: SortOrder
    blogPosts?: BlogPostOrderByRelationAggregateInput
    comments?: BlogPostCommentOrderByRelationAggregateInput
    companies?: CompanyOrderByRelationAggregateInput
    weddingDate?: SortOrder
    site?: SiteOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
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
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    gender?: EnumGenderNullableWithAggregatesFilter | Gender | null
    yearOfBirth?: IntNullableWithAggregatesFilter | number | null
    wantsNewsletter?: BoolWithAggregatesFilter | boolean
    interests?: EnumTopicNullableListFilter
    address?: JsonNullableWithAggregatesFilter
    weddingDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type FilteringTestWhereInput = {
    AND?: Enumerable<FilteringTestWhereInput>
    OR?: Enumerable<FilteringTestWhereInput>
    NOT?: Enumerable<FilteringTestWhereInput>
    id?: IntFilter | number
    intField?: IntFilter | number
    floatField?: FloatFilter | number
    stringField?: StringFilter | string
    dateTimeField?: DateTimeFilter | Date | string
    boolField?: BoolFilter | boolean
    intField_lt?: StringFilter | string
    intField_bt?: IntFilter | number
    snake_field?: IntFilter | number
    snake_field_bt?: IntFilter | number
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

  export type FilteringTestWhereUniqueInput = {
    id?: number
  }

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
    AND?: Enumerable<FilteringTestScalarWhereWithAggregatesInput>
    OR?: Enumerable<FilteringTestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FilteringTestScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    intField?: IntWithAggregatesFilter | number
    floatField?: FloatWithAggregatesFilter | number
    stringField?: StringWithAggregatesFilter | string
    dateTimeField?: DateTimeWithAggregatesFilter | Date | string
    boolField?: BoolWithAggregatesFilter | boolean
    intField_lt?: StringWithAggregatesFilter | string
    intField_bt?: IntWithAggregatesFilter | number
    snake_field?: IntWithAggregatesFilter | number
    snake_field_bt?: IntWithAggregatesFilter | number
  }

  export type SomePublicRecordWithIntIdWhereInput = {
    AND?: Enumerable<SomePublicRecordWithIntIdWhereInput>
    OR?: Enumerable<SomePublicRecordWithIntIdWhereInput>
    NOT?: Enumerable<SomePublicRecordWithIntIdWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
  }

  export type SomePublicRecordWithIntIdOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type SomePublicRecordWithIntIdWhereUniqueInput = {
    id?: number
  }

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
    AND?: Enumerable<SomePublicRecordWithIntIdScalarWhereWithAggregatesInput>
    OR?: Enumerable<SomePublicRecordWithIntIdScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SomePublicRecordWithIntIdScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
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
    users?: UserUpdateManyWithoutRolesInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRolesInput
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
    user?: UserUpdateOneRequiredWithoutCompaniesInput
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
    user?: UserUpdateOneRequiredWithoutUserSocialMediaInput
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
    author?: UserUpdateOneWithoutBlogPostsInput
    comments?: BlogPostCommentUpdateManyWithoutPostInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: BlogPostCommentUncheckedUpdateManyWithoutPostInput
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
    post?: BlogPostUpdateOneWithoutCommentsInput
    author?: UserUpdateOneWithoutCommentsInput
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
    owner?: UserUpdateOneWithoutSiteInput
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
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
    site?: SiteUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUpdateManyWithoutAuthorInput
    comments?: BlogPostCommentUpdateManyWithoutAuthorInput
    companies?: CompanyUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUpdateOneWithoutOwnerInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUncheckedUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorInput
    companies?: CompanyUncheckedUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUncheckedUpdateOneWithoutOwnerInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    address?: NullableJsonNullValueInput | InputJsonValue
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
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

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
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

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BlogPostCommentListRelationFilter = {
    every?: BlogPostCommentWhereInput
    some?: BlogPostCommentWhereInput
    none?: BlogPostCommentWhereInput
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

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BlogPostRelationFilter = {
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

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type EnumGenderNullableFilter = {
    equals?: Gender | null
    in?: Enumerable<Gender> | null
    notIn?: Enumerable<Gender> | null
    not?: NestedEnumGenderNullableFilter | Gender | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumTopicNullableListFilter = {
    equals?: Enumerable<Topic> | null
    has?: Topic | null
    hasEvery?: Enumerable<Topic>
    hasSome?: Enumerable<Topic>
    isEmpty?: boolean
  }

  export type UserSocialMediaRelationFilter = {
    is?: UserSocialMediaWhereInput | null
    isNot?: UserSocialMediaWhereInput | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
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

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type SiteRelationFilter = {
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

  export type EnumGenderNullableWithAggregatesFilter = {
    equals?: Gender | null
    in?: Enumerable<Gender> | null
    notIn?: Enumerable<Gender> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter | Gender | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumGenderNullableFilter
    _max?: NestedEnumGenderNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
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

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
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
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutRolesInput = {
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRolesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    create?: XOR<Enumerable<UserCreateWithoutRolesInput>, Enumerable<UserUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRolesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCompaniesInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput
    upsert?: UserUpsertWithoutCompaniesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCompaniesInput, UserUncheckedUpdateWithoutCompaniesInput>
  }

  export type UserCreateNestedOneWithoutUserSocialMediaInput = {
    create?: XOR<UserCreateWithoutUserSocialMediaInput, UserUncheckedCreateWithoutUserSocialMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSocialMediaInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSocialMediaInput = {
    create?: XOR<UserCreateWithoutUserSocialMediaInput, UserUncheckedCreateWithoutUserSocialMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSocialMediaInput
    upsert?: UserUpsertWithoutUserSocialMediaInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserSocialMediaInput, UserUncheckedUpdateWithoutUserSocialMediaInput>
  }

  export type UserCreateNestedOneWithoutBlogPostsInput = {
    create?: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostCommentCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<BlogPostCommentCreateWithoutPostInput>, Enumerable<BlogPostCommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<BlogPostCommentCreateOrConnectWithoutPostInput>
    createMany?: BlogPostCommentCreateManyPostInputEnvelope
    connect?: Enumerable<BlogPostCommentWhereUniqueInput>
  }

  export type BlogPostCommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<BlogPostCommentCreateWithoutPostInput>, Enumerable<BlogPostCommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<BlogPostCommentCreateOrConnectWithoutPostInput>
    createMany?: BlogPostCommentCreateManyPostInputEnvelope
    connect?: Enumerable<BlogPostCommentWhereUniqueInput>
  }

  export type UserUpdateOneWithoutBlogPostsInput = {
    create?: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostsInput
    upsert?: UserUpsertWithoutBlogPostsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBlogPostsInput, UserUncheckedUpdateWithoutBlogPostsInput>
  }

  export type BlogPostCommentUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<BlogPostCommentCreateWithoutPostInput>, Enumerable<BlogPostCommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<BlogPostCommentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<BlogPostCommentUpsertWithWhereUniqueWithoutPostInput>
    createMany?: BlogPostCommentCreateManyPostInputEnvelope
    set?: Enumerable<BlogPostCommentWhereUniqueInput>
    disconnect?: Enumerable<BlogPostCommentWhereUniqueInput>
    delete?: Enumerable<BlogPostCommentWhereUniqueInput>
    connect?: Enumerable<BlogPostCommentWhereUniqueInput>
    update?: Enumerable<BlogPostCommentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<BlogPostCommentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<BlogPostCommentScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BlogPostCommentUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<BlogPostCommentCreateWithoutPostInput>, Enumerable<BlogPostCommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<BlogPostCommentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<BlogPostCommentUpsertWithWhereUniqueWithoutPostInput>
    createMany?: BlogPostCommentCreateManyPostInputEnvelope
    set?: Enumerable<BlogPostCommentWhereUniqueInput>
    disconnect?: Enumerable<BlogPostCommentWhereUniqueInput>
    delete?: Enumerable<BlogPostCommentWhereUniqueInput>
    connect?: Enumerable<BlogPostCommentWhereUniqueInput>
    update?: Enumerable<BlogPostCommentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<BlogPostCommentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<BlogPostCommentScalarWhereInput>
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

  export type BlogPostUpdateOneWithoutCommentsInput = {
    create?: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCommentsInput
    upsert?: BlogPostUpsertWithoutCommentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: BlogPostWhereUniqueInput
    update?: XOR<BlogPostUpdateWithoutCommentsInput, BlogPostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutSiteInput = {
    create?: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutSiteInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSiteInput = {
    create?: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutSiteInput
    upsert?: UserUpsertWithoutSiteInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSiteInput, UserUncheckedUpdateWithoutSiteInput>
  }

  export type UserRoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<UserRoleCreateWithoutUsersInput>, Enumerable<UserRoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserRoleCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<UserRoleWhereUniqueInput>
  }

  export type UserCreateinterestsInput = {
    set: Enumerable<Topic>
  }

  export type UserSocialMediaCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSocialMediaCreateWithoutUserInput, UserSocialMediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSocialMediaCreateOrConnectWithoutUserInput
    connect?: UserSocialMediaWhereUniqueInput
  }

  export type BlogPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogPostCreateWithoutAuthorInput>, Enumerable<BlogPostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogPostCreateOrConnectWithoutAuthorInput>
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    connect?: Enumerable<BlogPostWhereUniqueInput>
  }

  export type BlogPostCommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogPostCommentCreateWithoutAuthorInput>, Enumerable<BlogPostCommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogPostCommentCreateOrConnectWithoutAuthorInput>
    createMany?: BlogPostCommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<BlogPostCommentWhereUniqueInput>
  }

  export type CompanyCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CompanyCreateWithoutUserInput>, Enumerable<CompanyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CompanyCreateOrConnectWithoutUserInput>
    createMany?: CompanyCreateManyUserInputEnvelope
    connect?: Enumerable<CompanyWhereUniqueInput>
  }

  export type SiteCreateNestedOneWithoutOwnerInput = {
    create?: XOR<SiteCreateWithoutOwnerInput, SiteUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOwnerInput
    connect?: SiteWhereUniqueInput
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<UserRoleCreateWithoutUsersInput>, Enumerable<UserRoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserRoleCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<UserRoleWhereUniqueInput>
  }

  export type UserSocialMediaUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSocialMediaCreateWithoutUserInput, UserSocialMediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSocialMediaCreateOrConnectWithoutUserInput
    connect?: UserSocialMediaWhereUniqueInput
  }

  export type BlogPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogPostCreateWithoutAuthorInput>, Enumerable<BlogPostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogPostCreateOrConnectWithoutAuthorInput>
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    connect?: Enumerable<BlogPostWhereUniqueInput>
  }

  export type BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogPostCommentCreateWithoutAuthorInput>, Enumerable<BlogPostCommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogPostCommentCreateOrConnectWithoutAuthorInput>
    createMany?: BlogPostCommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<BlogPostCommentWhereUniqueInput>
  }

  export type CompanyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CompanyCreateWithoutUserInput>, Enumerable<CompanyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CompanyCreateOrConnectWithoutUserInput>
    createMany?: CompanyCreateManyUserInputEnvelope
    connect?: Enumerable<CompanyWhereUniqueInput>
  }

  export type SiteUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: XOR<SiteCreateWithoutOwnerInput, SiteUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOwnerInput
    connect?: SiteWhereUniqueInput
  }

  export type UserRoleUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<UserRoleCreateWithoutUsersInput>, Enumerable<UserRoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserRoleCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<UserRoleUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<UserRoleWhereUniqueInput>
    disconnect?: Enumerable<UserRoleWhereUniqueInput>
    delete?: Enumerable<UserRoleWhereUniqueInput>
    connect?: Enumerable<UserRoleWhereUniqueInput>
    update?: Enumerable<UserRoleUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<UserRoleUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<UserRoleScalarWhereInput>
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: Gender | null
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
    set?: Enumerable<Topic>
    push?: Enumerable<Topic>
  }

  export type UserSocialMediaUpdateOneWithoutUserInput = {
    create?: XOR<UserSocialMediaCreateWithoutUserInput, UserSocialMediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSocialMediaCreateOrConnectWithoutUserInput
    upsert?: UserSocialMediaUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserSocialMediaWhereUniqueInput
    update?: XOR<UserSocialMediaUpdateWithoutUserInput, UserSocialMediaUncheckedUpdateWithoutUserInput>
  }

  export type BlogPostUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogPostCreateWithoutAuthorInput>, Enumerable<BlogPostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogPostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BlogPostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    set?: Enumerable<BlogPostWhereUniqueInput>
    disconnect?: Enumerable<BlogPostWhereUniqueInput>
    delete?: Enumerable<BlogPostWhereUniqueInput>
    connect?: Enumerable<BlogPostWhereUniqueInput>
    update?: Enumerable<BlogPostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BlogPostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BlogPostScalarWhereInput>
  }

  export type BlogPostCommentUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogPostCommentCreateWithoutAuthorInput>, Enumerable<BlogPostCommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogPostCommentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BlogPostCommentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BlogPostCommentCreateManyAuthorInputEnvelope
    set?: Enumerable<BlogPostCommentWhereUniqueInput>
    disconnect?: Enumerable<BlogPostCommentWhereUniqueInput>
    delete?: Enumerable<BlogPostCommentWhereUniqueInput>
    connect?: Enumerable<BlogPostCommentWhereUniqueInput>
    update?: Enumerable<BlogPostCommentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BlogPostCommentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BlogPostCommentScalarWhereInput>
  }

  export type CompanyUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CompanyCreateWithoutUserInput>, Enumerable<CompanyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CompanyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CompanyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CompanyCreateManyUserInputEnvelope
    set?: Enumerable<CompanyWhereUniqueInput>
    disconnect?: Enumerable<CompanyWhereUniqueInput>
    delete?: Enumerable<CompanyWhereUniqueInput>
    connect?: Enumerable<CompanyWhereUniqueInput>
    update?: Enumerable<CompanyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CompanyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CompanyScalarWhereInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SiteUpdateOneWithoutOwnerInput = {
    create?: XOR<SiteCreateWithoutOwnerInput, SiteUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOwnerInput
    upsert?: SiteUpsertWithoutOwnerInput
    disconnect?: boolean
    delete?: boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<SiteUpdateWithoutOwnerInput, SiteUncheckedUpdateWithoutOwnerInput>
  }

  export type UserRoleUncheckedUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<UserRoleCreateWithoutUsersInput>, Enumerable<UserRoleUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserRoleCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<UserRoleUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<UserRoleWhereUniqueInput>
    disconnect?: Enumerable<UserRoleWhereUniqueInput>
    delete?: Enumerable<UserRoleWhereUniqueInput>
    connect?: Enumerable<UserRoleWhereUniqueInput>
    update?: Enumerable<UserRoleUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<UserRoleUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<UserRoleScalarWhereInput>
  }

  export type UserSocialMediaUncheckedUpdateOneWithoutUserInput = {
    create?: XOR<UserSocialMediaCreateWithoutUserInput, UserSocialMediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSocialMediaCreateOrConnectWithoutUserInput
    upsert?: UserSocialMediaUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserSocialMediaWhereUniqueInput
    update?: XOR<UserSocialMediaUpdateWithoutUserInput, UserSocialMediaUncheckedUpdateWithoutUserInput>
  }

  export type BlogPostUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogPostCreateWithoutAuthorInput>, Enumerable<BlogPostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogPostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BlogPostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    set?: Enumerable<BlogPostWhereUniqueInput>
    disconnect?: Enumerable<BlogPostWhereUniqueInput>
    delete?: Enumerable<BlogPostWhereUniqueInput>
    connect?: Enumerable<BlogPostWhereUniqueInput>
    update?: Enumerable<BlogPostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BlogPostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BlogPostScalarWhereInput>
  }

  export type BlogPostCommentUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogPostCommentCreateWithoutAuthorInput>, Enumerable<BlogPostCommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogPostCommentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BlogPostCommentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BlogPostCommentCreateManyAuthorInputEnvelope
    set?: Enumerable<BlogPostCommentWhereUniqueInput>
    disconnect?: Enumerable<BlogPostCommentWhereUniqueInput>
    delete?: Enumerable<BlogPostCommentWhereUniqueInput>
    connect?: Enumerable<BlogPostCommentWhereUniqueInput>
    update?: Enumerable<BlogPostCommentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BlogPostCommentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BlogPostCommentScalarWhereInput>
  }

  export type CompanyUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CompanyCreateWithoutUserInput>, Enumerable<CompanyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CompanyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CompanyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CompanyCreateManyUserInputEnvelope
    set?: Enumerable<CompanyWhereUniqueInput>
    disconnect?: Enumerable<CompanyWhereUniqueInput>
    delete?: Enumerable<CompanyWhereUniqueInput>
    connect?: Enumerable<CompanyWhereUniqueInput>
    update?: Enumerable<CompanyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CompanyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CompanyScalarWhereInput>
  }

  export type SiteUncheckedUpdateOneWithoutOwnerInput = {
    create?: XOR<SiteCreateWithoutOwnerInput, SiteUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOwnerInput
    upsert?: SiteUpsertWithoutOwnerInput
    disconnect?: boolean
    delete?: boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<SiteUpdateWithoutOwnerInput, SiteUncheckedUpdateWithoutOwnerInput>
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

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumGenderNullableFilter = {
    equals?: Gender | null
    in?: Enumerable<Gender> | null
    notIn?: Enumerable<Gender> | null
    not?: NestedEnumGenderNullableFilter | Gender | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter = {
    equals?: Gender | null
    in?: Enumerable<Gender> | null
    notIn?: Enumerable<Gender> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter | Gender | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumGenderNullableFilter
    _max?: NestedEnumGenderNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
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
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    gender?: EnumGenderNullableFilter | Gender | null
    yearOfBirth?: IntNullableFilter | number | null
    wantsNewsletter?: BoolFilter | boolean
    interests?: EnumTopicNullableListFilter
    address?: JsonNullableFilter
    weddingDate?: DateTimeNullableFilter | Date | string | null
  }

  export type UserCreateWithoutCompaniesInput = {
    id?: string
    email: string
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    weddingDate?: Date | string | null
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCompaniesInput = {
    id?: string
    email: string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    weddingDate?: Date | string | null
    site?: SiteUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCompaniesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
  }

  export type UserUpsertWithoutCompaniesInput = {
    update: XOR<UserUpdateWithoutCompaniesInput, UserUncheckedUpdateWithoutCompaniesInput>
    create: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
  }

  export type UserUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUpdateManyWithoutAuthorInput
    comments?: BlogPostCommentUpdateManyWithoutAuthorInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUpdateOneWithoutOwnerInput
  }

  export type UserUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUncheckedUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUncheckedUpdateOneWithoutOwnerInput
  }

  export type UserCreateWithoutUserSocialMediaInput = {
    id?: string
    email: string
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutUserSocialMediaInput = {
    id?: string
    email: string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
    site?: SiteUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutUserSocialMediaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSocialMediaInput, UserUncheckedCreateWithoutUserSocialMediaInput>
  }

  export type UserUpsertWithoutUserSocialMediaInput = {
    update: XOR<UserUpdateWithoutUserSocialMediaInput, UserUncheckedUpdateWithoutUserSocialMediaInput>
    create: XOR<UserCreateWithoutUserSocialMediaInput, UserUncheckedCreateWithoutUserSocialMediaInput>
  }

  export type UserUpdateWithoutUserSocialMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUpdateManyWithoutAuthorInput
    comments?: BlogPostCommentUpdateManyWithoutAuthorInput
    companies?: CompanyUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUpdateOneWithoutOwnerInput
  }

  export type UserUncheckedUpdateWithoutUserSocialMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUncheckedUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorInput
    companies?: CompanyUncheckedUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUncheckedUpdateOneWithoutOwnerInput
  }

  export type UserCreateWithoutBlogPostsInput = {
    id?: string
    email: string
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBlogPostsInput = {
    id?: string
    email: string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
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
    data: Enumerable<BlogPostCommentCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBlogPostsInput = {
    update: XOR<UserUpdateWithoutBlogPostsInput, UserUncheckedUpdateWithoutBlogPostsInput>
    create: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
  }

  export type UserUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    comments?: BlogPostCommentUpdateManyWithoutAuthorInput
    companies?: CompanyUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUpdateOneWithoutOwnerInput
  }

  export type UserUncheckedUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUncheckedUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorInput
    companies?: CompanyUncheckedUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUncheckedUpdateOneWithoutOwnerInput
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
    data: XOR<BlogPostCommentUpdateManyMutationInput, BlogPostCommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type BlogPostCommentScalarWhereInput = {
    AND?: Enumerable<BlogPostCommentScalarWhereInput>
    OR?: Enumerable<BlogPostCommentScalarWhereInput>
    NOT?: Enumerable<BlogPostCommentScalarWhereInput>
    id?: StringFilter | string
    text?: StringFilter | string
    postId?: StringNullableFilter | string | null
    authorId?: StringNullableFilter | string | null
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
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
    site?: SiteCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
    site?: SiteUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type BlogPostUpsertWithoutCommentsInput = {
    update: XOR<BlogPostUpdateWithoutCommentsInput, BlogPostUncheckedUpdateWithoutCommentsInput>
    create: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
  }

  export type BlogPostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneWithoutBlogPostsInput
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
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUpdateManyWithoutAuthorInput
    companies?: CompanyUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUpdateOneWithoutOwnerInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUncheckedUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorInput
    companies?: CompanyUncheckedUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUncheckedUpdateOneWithoutOwnerInput
  }

  export type UserCreateWithoutSiteInput = {
    id?: string
    email: string
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentCreateNestedManyWithoutAuthorInput
    companies?: CompanyCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
  }

  export type UserUncheckedCreateWithoutSiteInput = {
    id?: string
    email: string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    firstName?: string | null
    lastName?: string | null
    gender?: Gender | null
    yearOfBirth?: number | null
    wantsNewsletter: boolean
    interests?: UserCreateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedCreateNestedOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedCreateNestedManyWithoutAuthorInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
    weddingDate?: Date | string | null
  }

  export type UserCreateOrConnectWithoutSiteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
  }

  export type UserUpsertWithoutSiteInput = {
    update: XOR<UserUpdateWithoutSiteInput, UserUncheckedUpdateWithoutSiteInput>
    create: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
  }

  export type UserUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUpdateManyWithoutAuthorInput
    comments?: BlogPostCommentUpdateManyWithoutAuthorInput
    companies?: CompanyUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roles?: UserRoleUncheckedUpdateManyWithoutUsersInput
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorInput
    companies?: CompanyUncheckedUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    data: Enumerable<BlogPostCreateManyAuthorInput>
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
    data: Enumerable<BlogPostCommentCreateManyAuthorInput>
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
    data: Enumerable<CompanyCreateManyUserInput>
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
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: Enumerable<UserRoleScalarWhereInput>
    OR?: Enumerable<UserRoleScalarWhereInput>
    NOT?: Enumerable<UserRoleScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type UserSocialMediaUpsertWithoutUserInput = {
    update: XOR<UserSocialMediaUpdateWithoutUserInput, UserSocialMediaUncheckedUpdateWithoutUserInput>
    create: XOR<UserSocialMediaCreateWithoutUserInput, UserSocialMediaUncheckedCreateWithoutUserInput>
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
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutBlogPostsInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: Enumerable<BlogPostScalarWhereInput>
    OR?: Enumerable<BlogPostScalarWhereInput>
    NOT?: Enumerable<BlogPostScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    text?: StringFilter | string
    authorId?: StringNullableFilter | string | null
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
    data: XOR<BlogPostCommentUpdateManyMutationInput, BlogPostCommentUncheckedUpdateManyWithoutCommentsInput>
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
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutCompaniesInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: Enumerable<CompanyScalarWhereInput>
    OR?: Enumerable<CompanyScalarWhereInput>
    NOT?: Enumerable<CompanyScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    userId?: StringFilter | string
  }

  export type SiteUpsertWithoutOwnerInput = {
    update: XOR<SiteUpdateWithoutOwnerInput, SiteUncheckedUpdateWithoutOwnerInput>
    create: XOR<SiteCreateWithoutOwnerInput, SiteUncheckedCreateWithoutOwnerInput>
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
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUpdateManyWithoutAuthorInput
    comments?: BlogPostCommentUpdateManyWithoutAuthorInput
    companies?: CompanyUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUpdateOneWithoutOwnerInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
    userSocialMedia?: UserSocialMediaUncheckedUpdateOneWithoutUserInput
    address?: NullableJsonNullValueInput | InputJsonValue
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorInput
    comments?: BlogPostCommentUncheckedUpdateManyWithoutAuthorInput
    companies?: CompanyUncheckedUpdateManyWithoutUserInput
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUncheckedUpdateOneWithoutOwnerInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    yearOfBirth?: NullableIntFieldUpdateOperationsInput | number | null
    wantsNewsletter?: BoolFieldUpdateOperationsInput | boolean
    interests?: UserUpdateinterestsInput | Enumerable<Topic>
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
    author?: UserUpdateOneWithoutCommentsInput
  }

  export type BlogPostCommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostCommentUncheckedUpdateManyWithoutCommentsInput = {
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

  export type UserRoleUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    comments?: BlogPostCommentUpdateManyWithoutPostInput
  }

  export type BlogPostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    comments?: BlogPostCommentUncheckedUpdateManyWithoutPostInput
  }

  export type BlogPostUncheckedUpdateManyWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostCommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    post?: BlogPostUpdateOneWithoutCommentsInput
  }

  export type BlogPostCommentUncheckedUpdateWithoutAuthorInput = {
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

  export type CompanyUncheckedUpdateManyWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}