
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Build
 * 
 */
export type Build = $Result.DefaultSelection<Prisma.$BuildPayload>
/**
 * Model Gw2Cache
 * 
 */
export type Gw2Cache = $Result.DefaultSelection<Prisma.$Gw2CachePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.build`: Exposes CRUD operations for the **Build** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Builds
    * const builds = await prisma.build.findMany()
    * ```
    */
  get build(): Prisma.BuildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gw2Cache`: Exposes CRUD operations for the **Gw2Cache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gw2Caches
    * const gw2Caches = await prisma.gw2Cache.findMany()
    * ```
    */
  get gw2Cache(): Prisma.Gw2CacheDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Build: 'Build',
    Gw2Cache: 'Gw2Cache'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "build" | "gw2Cache"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Build: {
        payload: Prisma.$BuildPayload<ExtArgs>
        fields: Prisma.BuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          findFirst: {
            args: Prisma.BuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          findMany: {
            args: Prisma.BuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>[]
          }
          create: {
            args: Prisma.BuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          createMany: {
            args: Prisma.BuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          update: {
            args: Prisma.BuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          deleteMany: {
            args: Prisma.BuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          aggregate: {
            args: Prisma.BuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuild>
          }
          groupBy: {
            args: Prisma.BuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildCountArgs<ExtArgs>
            result: $Utils.Optional<BuildCountAggregateOutputType> | number
          }
        }
      }
      Gw2Cache: {
        payload: Prisma.$Gw2CachePayload<ExtArgs>
        fields: Prisma.Gw2CacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Gw2CacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Gw2CachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Gw2CacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Gw2CachePayload>
          }
          findFirst: {
            args: Prisma.Gw2CacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Gw2CachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Gw2CacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Gw2CachePayload>
          }
          findMany: {
            args: Prisma.Gw2CacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Gw2CachePayload>[]
          }
          create: {
            args: Prisma.Gw2CacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Gw2CachePayload>
          }
          createMany: {
            args: Prisma.Gw2CacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Gw2CacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Gw2CachePayload>
          }
          update: {
            args: Prisma.Gw2CacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Gw2CachePayload>
          }
          deleteMany: {
            args: Prisma.Gw2CacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Gw2CacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Gw2CacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Gw2CachePayload>
          }
          aggregate: {
            args: Prisma.Gw2CacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGw2Cache>
          }
          groupBy: {
            args: Prisma.Gw2CacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gw2CacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.Gw2CacheCountArgs<ExtArgs>
            result: $Utils.Optional<Gw2CacheCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    build?: BuildOmit
    gw2Cache?: Gw2CacheOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    builds: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    builds?: boolean | UserCountOutputTypeCountBuildsArgs
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
  export type UserCountOutputTypeCountBuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildWhereInput
  }


  /**
   * Models
   */

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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
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
    id: number
    username: string
    passwordHash: string
    createdAt: Date
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
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    builds?: boolean | User$buildsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    builds?: boolean | User$buildsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      builds: Prisma.$BuildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      passwordHash: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    builds<T extends User$buildsArgs<ExtArgs> = {}>(args?: Subset<T, User$buildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.builds
   */
  export type User$buildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    where?: BuildWhereInput
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    cursor?: BuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Build
   */

  export type AggregateBuild = {
    _count: BuildCountAggregateOutputType | null
    _avg: BuildAvgAggregateOutputType | null
    _sum: BuildSumAggregateOutputType | null
    _min: BuildMinAggregateOutputType | null
    _max: BuildMaxAggregateOutputType | null
  }

  export type BuildAvgAggregateOutputType = {
    id: number | null
    buildClass: number | null
    buildSpec: number | null
    position: number | null
    ownerId: number | null
  }

  export type BuildSumAggregateOutputType = {
    id: number | null
    buildClass: number | null
    buildSpec: number | null
    position: number | null
    ownerId: number | null
  }

  export type BuildMinAggregateOutputType = {
    id: number | null
    title: string | null
    styleTemplate: string | null
    buildTemplate: string | null
    buildClass: number | null
    buildSpec: number | null
    buildEquipment: string | null
    isPublic: boolean | null
    createdAt: Date | null
    slug: string | null
    position: number | null
    ownerId: number | null
  }

  export type BuildMaxAggregateOutputType = {
    id: number | null
    title: string | null
    styleTemplate: string | null
    buildTemplate: string | null
    buildClass: number | null
    buildSpec: number | null
    buildEquipment: string | null
    isPublic: boolean | null
    createdAt: Date | null
    slug: string | null
    position: number | null
    ownerId: number | null
  }

  export type BuildCountAggregateOutputType = {
    id: number
    title: number
    styleTemplate: number
    buildTemplate: number
    buildClass: number
    buildSpec: number
    buildEquipment: number
    isPublic: number
    createdAt: number
    slug: number
    position: number
    ownerId: number
    _all: number
  }


  export type BuildAvgAggregateInputType = {
    id?: true
    buildClass?: true
    buildSpec?: true
    position?: true
    ownerId?: true
  }

  export type BuildSumAggregateInputType = {
    id?: true
    buildClass?: true
    buildSpec?: true
    position?: true
    ownerId?: true
  }

  export type BuildMinAggregateInputType = {
    id?: true
    title?: true
    styleTemplate?: true
    buildTemplate?: true
    buildClass?: true
    buildSpec?: true
    buildEquipment?: true
    isPublic?: true
    createdAt?: true
    slug?: true
    position?: true
    ownerId?: true
  }

  export type BuildMaxAggregateInputType = {
    id?: true
    title?: true
    styleTemplate?: true
    buildTemplate?: true
    buildClass?: true
    buildSpec?: true
    buildEquipment?: true
    isPublic?: true
    createdAt?: true
    slug?: true
    position?: true
    ownerId?: true
  }

  export type BuildCountAggregateInputType = {
    id?: true
    title?: true
    styleTemplate?: true
    buildTemplate?: true
    buildClass?: true
    buildSpec?: true
    buildEquipment?: true
    isPublic?: true
    createdAt?: true
    slug?: true
    position?: true
    ownerId?: true
    _all?: true
  }

  export type BuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Build to aggregate.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Builds
    **/
    _count?: true | BuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildMaxAggregateInputType
  }

  export type GetBuildAggregateType<T extends BuildAggregateArgs> = {
        [P in keyof T & keyof AggregateBuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuild[P]>
      : GetScalarType<T[P], AggregateBuild[P]>
  }




  export type BuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildWhereInput
    orderBy?: BuildOrderByWithAggregationInput | BuildOrderByWithAggregationInput[]
    by: BuildScalarFieldEnum[] | BuildScalarFieldEnum
    having?: BuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildCountAggregateInputType | true
    _avg?: BuildAvgAggregateInputType
    _sum?: BuildSumAggregateInputType
    _min?: BuildMinAggregateInputType
    _max?: BuildMaxAggregateInputType
  }

  export type BuildGroupByOutputType = {
    id: number
    title: string
    styleTemplate: string
    buildTemplate: string
    buildClass: number
    buildSpec: number
    buildEquipment: string
    isPublic: boolean
    createdAt: Date
    slug: string | null
    position: number
    ownerId: number
    _count: BuildCountAggregateOutputType | null
    _avg: BuildAvgAggregateOutputType | null
    _sum: BuildSumAggregateOutputType | null
    _min: BuildMinAggregateOutputType | null
    _max: BuildMaxAggregateOutputType | null
  }

  type GetBuildGroupByPayload<T extends BuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildGroupByOutputType[P]>
            : GetScalarType<T[P], BuildGroupByOutputType[P]>
        }
      >
    >


  export type BuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    styleTemplate?: boolean
    buildTemplate?: boolean
    buildClass?: boolean
    buildSpec?: boolean
    buildEquipment?: boolean
    isPublic?: boolean
    createdAt?: boolean
    slug?: boolean
    position?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["build"]>



  export type BuildSelectScalar = {
    id?: boolean
    title?: boolean
    styleTemplate?: boolean
    buildTemplate?: boolean
    buildClass?: boolean
    buildSpec?: boolean
    buildEquipment?: boolean
    isPublic?: boolean
    createdAt?: boolean
    slug?: boolean
    position?: boolean
    ownerId?: boolean
  }

  export type BuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "styleTemplate" | "buildTemplate" | "buildClass" | "buildSpec" | "buildEquipment" | "isPublic" | "createdAt" | "slug" | "position" | "ownerId", ExtArgs["result"]["build"]>
  export type BuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Build"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      styleTemplate: string
      buildTemplate: string
      buildClass: number
      buildSpec: number
      buildEquipment: string
      isPublic: boolean
      createdAt: Date
      slug: string | null
      position: number
      ownerId: number
    }, ExtArgs["result"]["build"]>
    composites: {}
  }

  type BuildGetPayload<S extends boolean | null | undefined | BuildDefaultArgs> = $Result.GetResult<Prisma.$BuildPayload, S>

  type BuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildCountAggregateInputType | true
    }

  export interface BuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Build'], meta: { name: 'Build' } }
    /**
     * Find zero or one Build that matches the filter.
     * @param {BuildFindUniqueArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildFindUniqueArgs>(args: SelectSubset<T, BuildFindUniqueArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Build that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildFindUniqueOrThrowArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Build that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindFirstArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildFindFirstArgs>(args?: SelectSubset<T, BuildFindFirstArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Build that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindFirstOrThrowArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Builds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Builds
     * const builds = await prisma.build.findMany()
     * 
     * // Get first 10 Builds
     * const builds = await prisma.build.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildWithIdOnly = await prisma.build.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildFindManyArgs>(args?: SelectSubset<T, BuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Build.
     * @param {BuildCreateArgs} args - Arguments to create a Build.
     * @example
     * // Create one Build
     * const Build = await prisma.build.create({
     *   data: {
     *     // ... data to create a Build
     *   }
     * })
     * 
     */
    create<T extends BuildCreateArgs>(args: SelectSubset<T, BuildCreateArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Builds.
     * @param {BuildCreateManyArgs} args - Arguments to create many Builds.
     * @example
     * // Create many Builds
     * const build = await prisma.build.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildCreateManyArgs>(args?: SelectSubset<T, BuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Build.
     * @param {BuildDeleteArgs} args - Arguments to delete one Build.
     * @example
     * // Delete one Build
     * const Build = await prisma.build.delete({
     *   where: {
     *     // ... filter to delete one Build
     *   }
     * })
     * 
     */
    delete<T extends BuildDeleteArgs>(args: SelectSubset<T, BuildDeleteArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Build.
     * @param {BuildUpdateArgs} args - Arguments to update one Build.
     * @example
     * // Update one Build
     * const build = await prisma.build.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildUpdateArgs>(args: SelectSubset<T, BuildUpdateArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Builds.
     * @param {BuildDeleteManyArgs} args - Arguments to filter Builds to delete.
     * @example
     * // Delete a few Builds
     * const { count } = await prisma.build.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildDeleteManyArgs>(args?: SelectSubset<T, BuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Builds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Builds
     * const build = await prisma.build.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildUpdateManyArgs>(args: SelectSubset<T, BuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Build.
     * @param {BuildUpsertArgs} args - Arguments to update or create a Build.
     * @example
     * // Update or create a Build
     * const build = await prisma.build.upsert({
     *   create: {
     *     // ... data to create a Build
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Build we want to update
     *   }
     * })
     */
    upsert<T extends BuildUpsertArgs>(args: SelectSubset<T, BuildUpsertArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Builds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildCountArgs} args - Arguments to filter Builds to count.
     * @example
     * // Count the number of Builds
     * const count = await prisma.build.count({
     *   where: {
     *     // ... the filter for the Builds we want to count
     *   }
     * })
    **/
    count<T extends BuildCountArgs>(
      args?: Subset<T, BuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Build.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuildAggregateArgs>(args: Subset<T, BuildAggregateArgs>): Prisma.PrismaPromise<GetBuildAggregateType<T>>

    /**
     * Group by Build.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildGroupByArgs} args - Group by arguments.
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
      T extends BuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildGroupByArgs['orderBy'] }
        : { orderBy?: BuildGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Build model
   */
  readonly fields: BuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Build.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Build model
   */
  interface BuildFieldRefs {
    readonly id: FieldRef<"Build", 'Int'>
    readonly title: FieldRef<"Build", 'String'>
    readonly styleTemplate: FieldRef<"Build", 'String'>
    readonly buildTemplate: FieldRef<"Build", 'String'>
    readonly buildClass: FieldRef<"Build", 'Int'>
    readonly buildSpec: FieldRef<"Build", 'Int'>
    readonly buildEquipment: FieldRef<"Build", 'String'>
    readonly isPublic: FieldRef<"Build", 'Boolean'>
    readonly createdAt: FieldRef<"Build", 'DateTime'>
    readonly slug: FieldRef<"Build", 'String'>
    readonly position: FieldRef<"Build", 'Int'>
    readonly ownerId: FieldRef<"Build", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Build findUnique
   */
  export type BuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build findUniqueOrThrow
   */
  export type BuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build findFirst
   */
  export type BuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Builds.
     */
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * Build findFirstOrThrow
   */
  export type BuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Builds.
     */
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * Build findMany
   */
  export type BuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Builds to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * Build create
   */
  export type BuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The data needed to create a Build.
     */
    data: XOR<BuildCreateInput, BuildUncheckedCreateInput>
  }

  /**
   * Build createMany
   */
  export type BuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Builds.
     */
    data: BuildCreateManyInput | BuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Build update
   */
  export type BuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The data needed to update a Build.
     */
    data: XOR<BuildUpdateInput, BuildUncheckedUpdateInput>
    /**
     * Choose, which Build to update.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build updateMany
   */
  export type BuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Builds.
     */
    data: XOR<BuildUpdateManyMutationInput, BuildUncheckedUpdateManyInput>
    /**
     * Filter which Builds to update
     */
    where?: BuildWhereInput
    /**
     * Limit how many Builds to update.
     */
    limit?: number
  }

  /**
   * Build upsert
   */
  export type BuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The filter to search for the Build to update in case it exists.
     */
    where: BuildWhereUniqueInput
    /**
     * In case the Build found by the `where` argument doesn't exist, create a new Build with this data.
     */
    create: XOR<BuildCreateInput, BuildUncheckedCreateInput>
    /**
     * In case the Build was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildUpdateInput, BuildUncheckedUpdateInput>
  }

  /**
   * Build delete
   */
  export type BuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter which Build to delete.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build deleteMany
   */
  export type BuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Builds to delete
     */
    where?: BuildWhereInput
    /**
     * Limit how many Builds to delete.
     */
    limit?: number
  }

  /**
   * Build without action
   */
  export type BuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
  }


  /**
   * Model Gw2Cache
   */

  export type AggregateGw2Cache = {
    _count: Gw2CacheCountAggregateOutputType | null
    _min: Gw2CacheMinAggregateOutputType | null
    _max: Gw2CacheMaxAggregateOutputType | null
  }

  export type Gw2CacheMinAggregateOutputType = {
    key: string | null
    data: string | null
    updatedAt: Date | null
  }

  export type Gw2CacheMaxAggregateOutputType = {
    key: string | null
    data: string | null
    updatedAt: Date | null
  }

  export type Gw2CacheCountAggregateOutputType = {
    key: number
    data: number
    updatedAt: number
    _all: number
  }


  export type Gw2CacheMinAggregateInputType = {
    key?: true
    data?: true
    updatedAt?: true
  }

  export type Gw2CacheMaxAggregateInputType = {
    key?: true
    data?: true
    updatedAt?: true
  }

  export type Gw2CacheCountAggregateInputType = {
    key?: true
    data?: true
    updatedAt?: true
    _all?: true
  }

  export type Gw2CacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gw2Cache to aggregate.
     */
    where?: Gw2CacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gw2Caches to fetch.
     */
    orderBy?: Gw2CacheOrderByWithRelationInput | Gw2CacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Gw2CacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gw2Caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gw2Caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gw2Caches
    **/
    _count?: true | Gw2CacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gw2CacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gw2CacheMaxAggregateInputType
  }

  export type GetGw2CacheAggregateType<T extends Gw2CacheAggregateArgs> = {
        [P in keyof T & keyof AggregateGw2Cache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGw2Cache[P]>
      : GetScalarType<T[P], AggregateGw2Cache[P]>
  }




  export type Gw2CacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Gw2CacheWhereInput
    orderBy?: Gw2CacheOrderByWithAggregationInput | Gw2CacheOrderByWithAggregationInput[]
    by: Gw2CacheScalarFieldEnum[] | Gw2CacheScalarFieldEnum
    having?: Gw2CacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gw2CacheCountAggregateInputType | true
    _min?: Gw2CacheMinAggregateInputType
    _max?: Gw2CacheMaxAggregateInputType
  }

  export type Gw2CacheGroupByOutputType = {
    key: string
    data: string
    updatedAt: Date
    _count: Gw2CacheCountAggregateOutputType | null
    _min: Gw2CacheMinAggregateOutputType | null
    _max: Gw2CacheMaxAggregateOutputType | null
  }

  type GetGw2CacheGroupByPayload<T extends Gw2CacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gw2CacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gw2CacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gw2CacheGroupByOutputType[P]>
            : GetScalarType<T[P], Gw2CacheGroupByOutputType[P]>
        }
      >
    >


  export type Gw2CacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    data?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gw2Cache"]>



  export type Gw2CacheSelectScalar = {
    key?: boolean
    data?: boolean
    updatedAt?: boolean
  }

  export type Gw2CacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "data" | "updatedAt", ExtArgs["result"]["gw2Cache"]>

  export type $Gw2CachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gw2Cache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      data: string
      updatedAt: Date
    }, ExtArgs["result"]["gw2Cache"]>
    composites: {}
  }

  type Gw2CacheGetPayload<S extends boolean | null | undefined | Gw2CacheDefaultArgs> = $Result.GetResult<Prisma.$Gw2CachePayload, S>

  type Gw2CacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Gw2CacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Gw2CacheCountAggregateInputType | true
    }

  export interface Gw2CacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gw2Cache'], meta: { name: 'Gw2Cache' } }
    /**
     * Find zero or one Gw2Cache that matches the filter.
     * @param {Gw2CacheFindUniqueArgs} args - Arguments to find a Gw2Cache
     * @example
     * // Get one Gw2Cache
     * const gw2Cache = await prisma.gw2Cache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Gw2CacheFindUniqueArgs>(args: SelectSubset<T, Gw2CacheFindUniqueArgs<ExtArgs>>): Prisma__Gw2CacheClient<$Result.GetResult<Prisma.$Gw2CachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gw2Cache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Gw2CacheFindUniqueOrThrowArgs} args - Arguments to find a Gw2Cache
     * @example
     * // Get one Gw2Cache
     * const gw2Cache = await prisma.gw2Cache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Gw2CacheFindUniqueOrThrowArgs>(args: SelectSubset<T, Gw2CacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Gw2CacheClient<$Result.GetResult<Prisma.$Gw2CachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gw2Cache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gw2CacheFindFirstArgs} args - Arguments to find a Gw2Cache
     * @example
     * // Get one Gw2Cache
     * const gw2Cache = await prisma.gw2Cache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Gw2CacheFindFirstArgs>(args?: SelectSubset<T, Gw2CacheFindFirstArgs<ExtArgs>>): Prisma__Gw2CacheClient<$Result.GetResult<Prisma.$Gw2CachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gw2Cache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gw2CacheFindFirstOrThrowArgs} args - Arguments to find a Gw2Cache
     * @example
     * // Get one Gw2Cache
     * const gw2Cache = await prisma.gw2Cache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Gw2CacheFindFirstOrThrowArgs>(args?: SelectSubset<T, Gw2CacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__Gw2CacheClient<$Result.GetResult<Prisma.$Gw2CachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gw2Caches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gw2CacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gw2Caches
     * const gw2Caches = await prisma.gw2Cache.findMany()
     * 
     * // Get first 10 Gw2Caches
     * const gw2Caches = await prisma.gw2Cache.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const gw2CacheWithKeyOnly = await prisma.gw2Cache.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends Gw2CacheFindManyArgs>(args?: SelectSubset<T, Gw2CacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Gw2CachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gw2Cache.
     * @param {Gw2CacheCreateArgs} args - Arguments to create a Gw2Cache.
     * @example
     * // Create one Gw2Cache
     * const Gw2Cache = await prisma.gw2Cache.create({
     *   data: {
     *     // ... data to create a Gw2Cache
     *   }
     * })
     * 
     */
    create<T extends Gw2CacheCreateArgs>(args: SelectSubset<T, Gw2CacheCreateArgs<ExtArgs>>): Prisma__Gw2CacheClient<$Result.GetResult<Prisma.$Gw2CachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gw2Caches.
     * @param {Gw2CacheCreateManyArgs} args - Arguments to create many Gw2Caches.
     * @example
     * // Create many Gw2Caches
     * const gw2Cache = await prisma.gw2Cache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Gw2CacheCreateManyArgs>(args?: SelectSubset<T, Gw2CacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gw2Cache.
     * @param {Gw2CacheDeleteArgs} args - Arguments to delete one Gw2Cache.
     * @example
     * // Delete one Gw2Cache
     * const Gw2Cache = await prisma.gw2Cache.delete({
     *   where: {
     *     // ... filter to delete one Gw2Cache
     *   }
     * })
     * 
     */
    delete<T extends Gw2CacheDeleteArgs>(args: SelectSubset<T, Gw2CacheDeleteArgs<ExtArgs>>): Prisma__Gw2CacheClient<$Result.GetResult<Prisma.$Gw2CachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gw2Cache.
     * @param {Gw2CacheUpdateArgs} args - Arguments to update one Gw2Cache.
     * @example
     * // Update one Gw2Cache
     * const gw2Cache = await prisma.gw2Cache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Gw2CacheUpdateArgs>(args: SelectSubset<T, Gw2CacheUpdateArgs<ExtArgs>>): Prisma__Gw2CacheClient<$Result.GetResult<Prisma.$Gw2CachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gw2Caches.
     * @param {Gw2CacheDeleteManyArgs} args - Arguments to filter Gw2Caches to delete.
     * @example
     * // Delete a few Gw2Caches
     * const { count } = await prisma.gw2Cache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Gw2CacheDeleteManyArgs>(args?: SelectSubset<T, Gw2CacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gw2Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gw2CacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gw2Caches
     * const gw2Cache = await prisma.gw2Cache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Gw2CacheUpdateManyArgs>(args: SelectSubset<T, Gw2CacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gw2Cache.
     * @param {Gw2CacheUpsertArgs} args - Arguments to update or create a Gw2Cache.
     * @example
     * // Update or create a Gw2Cache
     * const gw2Cache = await prisma.gw2Cache.upsert({
     *   create: {
     *     // ... data to create a Gw2Cache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gw2Cache we want to update
     *   }
     * })
     */
    upsert<T extends Gw2CacheUpsertArgs>(args: SelectSubset<T, Gw2CacheUpsertArgs<ExtArgs>>): Prisma__Gw2CacheClient<$Result.GetResult<Prisma.$Gw2CachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gw2Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gw2CacheCountArgs} args - Arguments to filter Gw2Caches to count.
     * @example
     * // Count the number of Gw2Caches
     * const count = await prisma.gw2Cache.count({
     *   where: {
     *     // ... the filter for the Gw2Caches we want to count
     *   }
     * })
    **/
    count<T extends Gw2CacheCountArgs>(
      args?: Subset<T, Gw2CacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gw2CacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gw2Cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gw2CacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Gw2CacheAggregateArgs>(args: Subset<T, Gw2CacheAggregateArgs>): Prisma.PrismaPromise<GetGw2CacheAggregateType<T>>

    /**
     * Group by Gw2Cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gw2CacheGroupByArgs} args - Group by arguments.
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
      T extends Gw2CacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Gw2CacheGroupByArgs['orderBy'] }
        : { orderBy?: Gw2CacheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Gw2CacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGw2CacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gw2Cache model
   */
  readonly fields: Gw2CacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gw2Cache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Gw2CacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gw2Cache model
   */
  interface Gw2CacheFieldRefs {
    readonly key: FieldRef<"Gw2Cache", 'String'>
    readonly data: FieldRef<"Gw2Cache", 'String'>
    readonly updatedAt: FieldRef<"Gw2Cache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gw2Cache findUnique
   */
  export type Gw2CacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gw2Cache
     */
    select?: Gw2CacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gw2Cache
     */
    omit?: Gw2CacheOmit<ExtArgs> | null
    /**
     * Filter, which Gw2Cache to fetch.
     */
    where: Gw2CacheWhereUniqueInput
  }

  /**
   * Gw2Cache findUniqueOrThrow
   */
  export type Gw2CacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gw2Cache
     */
    select?: Gw2CacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gw2Cache
     */
    omit?: Gw2CacheOmit<ExtArgs> | null
    /**
     * Filter, which Gw2Cache to fetch.
     */
    where: Gw2CacheWhereUniqueInput
  }

  /**
   * Gw2Cache findFirst
   */
  export type Gw2CacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gw2Cache
     */
    select?: Gw2CacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gw2Cache
     */
    omit?: Gw2CacheOmit<ExtArgs> | null
    /**
     * Filter, which Gw2Cache to fetch.
     */
    where?: Gw2CacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gw2Caches to fetch.
     */
    orderBy?: Gw2CacheOrderByWithRelationInput | Gw2CacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gw2Caches.
     */
    cursor?: Gw2CacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gw2Caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gw2Caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gw2Caches.
     */
    distinct?: Gw2CacheScalarFieldEnum | Gw2CacheScalarFieldEnum[]
  }

  /**
   * Gw2Cache findFirstOrThrow
   */
  export type Gw2CacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gw2Cache
     */
    select?: Gw2CacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gw2Cache
     */
    omit?: Gw2CacheOmit<ExtArgs> | null
    /**
     * Filter, which Gw2Cache to fetch.
     */
    where?: Gw2CacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gw2Caches to fetch.
     */
    orderBy?: Gw2CacheOrderByWithRelationInput | Gw2CacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gw2Caches.
     */
    cursor?: Gw2CacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gw2Caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gw2Caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gw2Caches.
     */
    distinct?: Gw2CacheScalarFieldEnum | Gw2CacheScalarFieldEnum[]
  }

  /**
   * Gw2Cache findMany
   */
  export type Gw2CacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gw2Cache
     */
    select?: Gw2CacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gw2Cache
     */
    omit?: Gw2CacheOmit<ExtArgs> | null
    /**
     * Filter, which Gw2Caches to fetch.
     */
    where?: Gw2CacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gw2Caches to fetch.
     */
    orderBy?: Gw2CacheOrderByWithRelationInput | Gw2CacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gw2Caches.
     */
    cursor?: Gw2CacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gw2Caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gw2Caches.
     */
    skip?: number
    distinct?: Gw2CacheScalarFieldEnum | Gw2CacheScalarFieldEnum[]
  }

  /**
   * Gw2Cache create
   */
  export type Gw2CacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gw2Cache
     */
    select?: Gw2CacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gw2Cache
     */
    omit?: Gw2CacheOmit<ExtArgs> | null
    /**
     * The data needed to create a Gw2Cache.
     */
    data: XOR<Gw2CacheCreateInput, Gw2CacheUncheckedCreateInput>
  }

  /**
   * Gw2Cache createMany
   */
  export type Gw2CacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gw2Caches.
     */
    data: Gw2CacheCreateManyInput | Gw2CacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gw2Cache update
   */
  export type Gw2CacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gw2Cache
     */
    select?: Gw2CacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gw2Cache
     */
    omit?: Gw2CacheOmit<ExtArgs> | null
    /**
     * The data needed to update a Gw2Cache.
     */
    data: XOR<Gw2CacheUpdateInput, Gw2CacheUncheckedUpdateInput>
    /**
     * Choose, which Gw2Cache to update.
     */
    where: Gw2CacheWhereUniqueInput
  }

  /**
   * Gw2Cache updateMany
   */
  export type Gw2CacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gw2Caches.
     */
    data: XOR<Gw2CacheUpdateManyMutationInput, Gw2CacheUncheckedUpdateManyInput>
    /**
     * Filter which Gw2Caches to update
     */
    where?: Gw2CacheWhereInput
    /**
     * Limit how many Gw2Caches to update.
     */
    limit?: number
  }

  /**
   * Gw2Cache upsert
   */
  export type Gw2CacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gw2Cache
     */
    select?: Gw2CacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gw2Cache
     */
    omit?: Gw2CacheOmit<ExtArgs> | null
    /**
     * The filter to search for the Gw2Cache to update in case it exists.
     */
    where: Gw2CacheWhereUniqueInput
    /**
     * In case the Gw2Cache found by the `where` argument doesn't exist, create a new Gw2Cache with this data.
     */
    create: XOR<Gw2CacheCreateInput, Gw2CacheUncheckedCreateInput>
    /**
     * In case the Gw2Cache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Gw2CacheUpdateInput, Gw2CacheUncheckedUpdateInput>
  }

  /**
   * Gw2Cache delete
   */
  export type Gw2CacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gw2Cache
     */
    select?: Gw2CacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gw2Cache
     */
    omit?: Gw2CacheOmit<ExtArgs> | null
    /**
     * Filter which Gw2Cache to delete.
     */
    where: Gw2CacheWhereUniqueInput
  }

  /**
   * Gw2Cache deleteMany
   */
  export type Gw2CacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gw2Caches to delete
     */
    where?: Gw2CacheWhereInput
    /**
     * Limit how many Gw2Caches to delete.
     */
    limit?: number
  }

  /**
   * Gw2Cache without action
   */
  export type Gw2CacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gw2Cache
     */
    select?: Gw2CacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gw2Cache
     */
    omit?: Gw2CacheOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BuildScalarFieldEnum: {
    id: 'id',
    title: 'title',
    styleTemplate: 'styleTemplate',
    buildTemplate: 'buildTemplate',
    buildClass: 'buildClass',
    buildSpec: 'buildSpec',
    buildEquipment: 'buildEquipment',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    slug: 'slug',
    position: 'position',
    ownerId: 'ownerId'
  };

  export type BuildScalarFieldEnum = (typeof BuildScalarFieldEnum)[keyof typeof BuildScalarFieldEnum]


  export const Gw2CacheScalarFieldEnum: {
    key: 'key',
    data: 'data',
    updatedAt: 'updatedAt'
  };

  export type Gw2CacheScalarFieldEnum = (typeof Gw2CacheScalarFieldEnum)[keyof typeof Gw2CacheScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    passwordHash: 'passwordHash'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BuildOrderByRelevanceFieldEnum: {
    title: 'title',
    styleTemplate: 'styleTemplate',
    buildTemplate: 'buildTemplate',
    buildEquipment: 'buildEquipment',
    slug: 'slug'
  };

  export type BuildOrderByRelevanceFieldEnum = (typeof BuildOrderByRelevanceFieldEnum)[keyof typeof BuildOrderByRelevanceFieldEnum]


  export const Gw2CacheOrderByRelevanceFieldEnum: {
    key: 'key',
    data: 'data'
  };

  export type Gw2CacheOrderByRelevanceFieldEnum = (typeof Gw2CacheOrderByRelevanceFieldEnum)[keyof typeof Gw2CacheOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    builds?: BuildListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    builds?: BuildOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    builds?: BuildListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BuildWhereInput = {
    AND?: BuildWhereInput | BuildWhereInput[]
    OR?: BuildWhereInput[]
    NOT?: BuildWhereInput | BuildWhereInput[]
    id?: IntFilter<"Build"> | number
    title?: StringFilter<"Build"> | string
    styleTemplate?: StringFilter<"Build"> | string
    buildTemplate?: StringFilter<"Build"> | string
    buildClass?: IntFilter<"Build"> | number
    buildSpec?: IntFilter<"Build"> | number
    buildEquipment?: StringFilter<"Build"> | string
    isPublic?: BoolFilter<"Build"> | boolean
    createdAt?: DateTimeFilter<"Build"> | Date | string
    slug?: StringNullableFilter<"Build"> | string | null
    position?: IntFilter<"Build"> | number
    ownerId?: IntFilter<"Build"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BuildOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    styleTemplate?: SortOrder
    buildTemplate?: SortOrder
    buildClass?: SortOrder
    buildSpec?: SortOrder
    buildEquipment?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    slug?: SortOrderInput | SortOrder
    position?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    _relevance?: BuildOrderByRelevanceInput
  }

  export type BuildWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: BuildWhereInput | BuildWhereInput[]
    OR?: BuildWhereInput[]
    NOT?: BuildWhereInput | BuildWhereInput[]
    title?: StringFilter<"Build"> | string
    styleTemplate?: StringFilter<"Build"> | string
    buildTemplate?: StringFilter<"Build"> | string
    buildClass?: IntFilter<"Build"> | number
    buildSpec?: IntFilter<"Build"> | number
    buildEquipment?: StringFilter<"Build"> | string
    isPublic?: BoolFilter<"Build"> | boolean
    createdAt?: DateTimeFilter<"Build"> | Date | string
    position?: IntFilter<"Build"> | number
    ownerId?: IntFilter<"Build"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "slug">

  export type BuildOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    styleTemplate?: SortOrder
    buildTemplate?: SortOrder
    buildClass?: SortOrder
    buildSpec?: SortOrder
    buildEquipment?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    slug?: SortOrderInput | SortOrder
    position?: SortOrder
    ownerId?: SortOrder
    _count?: BuildCountOrderByAggregateInput
    _avg?: BuildAvgOrderByAggregateInput
    _max?: BuildMaxOrderByAggregateInput
    _min?: BuildMinOrderByAggregateInput
    _sum?: BuildSumOrderByAggregateInput
  }

  export type BuildScalarWhereWithAggregatesInput = {
    AND?: BuildScalarWhereWithAggregatesInput | BuildScalarWhereWithAggregatesInput[]
    OR?: BuildScalarWhereWithAggregatesInput[]
    NOT?: BuildScalarWhereWithAggregatesInput | BuildScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Build"> | number
    title?: StringWithAggregatesFilter<"Build"> | string
    styleTemplate?: StringWithAggregatesFilter<"Build"> | string
    buildTemplate?: StringWithAggregatesFilter<"Build"> | string
    buildClass?: IntWithAggregatesFilter<"Build"> | number
    buildSpec?: IntWithAggregatesFilter<"Build"> | number
    buildEquipment?: StringWithAggregatesFilter<"Build"> | string
    isPublic?: BoolWithAggregatesFilter<"Build"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Build"> | Date | string
    slug?: StringNullableWithAggregatesFilter<"Build"> | string | null
    position?: IntWithAggregatesFilter<"Build"> | number
    ownerId?: IntWithAggregatesFilter<"Build"> | number
  }

  export type Gw2CacheWhereInput = {
    AND?: Gw2CacheWhereInput | Gw2CacheWhereInput[]
    OR?: Gw2CacheWhereInput[]
    NOT?: Gw2CacheWhereInput | Gw2CacheWhereInput[]
    key?: StringFilter<"Gw2Cache"> | string
    data?: StringFilter<"Gw2Cache"> | string
    updatedAt?: DateTimeFilter<"Gw2Cache"> | Date | string
  }

  export type Gw2CacheOrderByWithRelationInput = {
    key?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
    _relevance?: Gw2CacheOrderByRelevanceInput
  }

  export type Gw2CacheWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: Gw2CacheWhereInput | Gw2CacheWhereInput[]
    OR?: Gw2CacheWhereInput[]
    NOT?: Gw2CacheWhereInput | Gw2CacheWhereInput[]
    data?: StringFilter<"Gw2Cache"> | string
    updatedAt?: DateTimeFilter<"Gw2Cache"> | Date | string
  }, "key">

  export type Gw2CacheOrderByWithAggregationInput = {
    key?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
    _count?: Gw2CacheCountOrderByAggregateInput
    _max?: Gw2CacheMaxOrderByAggregateInput
    _min?: Gw2CacheMinOrderByAggregateInput
  }

  export type Gw2CacheScalarWhereWithAggregatesInput = {
    AND?: Gw2CacheScalarWhereWithAggregatesInput | Gw2CacheScalarWhereWithAggregatesInput[]
    OR?: Gw2CacheScalarWhereWithAggregatesInput[]
    NOT?: Gw2CacheScalarWhereWithAggregatesInput | Gw2CacheScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Gw2Cache"> | string
    data?: StringWithAggregatesFilter<"Gw2Cache"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gw2Cache"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    passwordHash: string
    createdAt?: Date | string
    builds?: BuildCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    passwordHash: string
    createdAt?: Date | string
    builds?: BuildUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    builds?: BuildUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    builds?: BuildUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildCreateInput = {
    title: string
    styleTemplate?: string
    buildTemplate: string
    buildClass?: number
    buildSpec?: number
    buildEquipment: string
    isPublic?: boolean
    createdAt?: Date | string
    slug?: string | null
    position?: number
    owner: UserCreateNestedOneWithoutBuildsInput
  }

  export type BuildUncheckedCreateInput = {
    id?: number
    title: string
    styleTemplate?: string
    buildTemplate: string
    buildClass?: number
    buildSpec?: number
    buildEquipment: string
    isPublic?: boolean
    createdAt?: Date | string
    slug?: string | null
    position?: number
    ownerId: number
  }

  export type BuildUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    styleTemplate?: StringFieldUpdateOperationsInput | string
    buildTemplate?: StringFieldUpdateOperationsInput | string
    buildClass?: IntFieldUpdateOperationsInput | number
    buildSpec?: IntFieldUpdateOperationsInput | number
    buildEquipment?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    owner?: UserUpdateOneRequiredWithoutBuildsNestedInput
  }

  export type BuildUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    styleTemplate?: StringFieldUpdateOperationsInput | string
    buildTemplate?: StringFieldUpdateOperationsInput | string
    buildClass?: IntFieldUpdateOperationsInput | number
    buildSpec?: IntFieldUpdateOperationsInput | number
    buildEquipment?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type BuildCreateManyInput = {
    id?: number
    title: string
    styleTemplate?: string
    buildTemplate: string
    buildClass?: number
    buildSpec?: number
    buildEquipment: string
    isPublic?: boolean
    createdAt?: Date | string
    slug?: string | null
    position?: number
    ownerId: number
  }

  export type BuildUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    styleTemplate?: StringFieldUpdateOperationsInput | string
    buildTemplate?: StringFieldUpdateOperationsInput | string
    buildClass?: IntFieldUpdateOperationsInput | number
    buildSpec?: IntFieldUpdateOperationsInput | number
    buildEquipment?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type BuildUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    styleTemplate?: StringFieldUpdateOperationsInput | string
    buildTemplate?: StringFieldUpdateOperationsInput | string
    buildClass?: IntFieldUpdateOperationsInput | number
    buildSpec?: IntFieldUpdateOperationsInput | number
    buildEquipment?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type Gw2CacheCreateInput = {
    key: string
    data: string
    updatedAt?: Date | string
  }

  export type Gw2CacheUncheckedCreateInput = {
    key: string
    data: string
    updatedAt?: Date | string
  }

  export type Gw2CacheUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Gw2CacheUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Gw2CacheCreateManyInput = {
    key: string
    data: string
    updatedAt?: Date | string
  }

  export type Gw2CacheUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Gw2CacheUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BuildListRelationFilter = {
    every?: BuildWhereInput
    some?: BuildWhereInput
    none?: BuildWhereInput
  }

  export type BuildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BuildOrderByRelevanceInput = {
    fields: BuildOrderByRelevanceFieldEnum | BuildOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BuildCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    styleTemplate?: SortOrder
    buildTemplate?: SortOrder
    buildClass?: SortOrder
    buildSpec?: SortOrder
    buildEquipment?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    ownerId?: SortOrder
  }

  export type BuildAvgOrderByAggregateInput = {
    id?: SortOrder
    buildClass?: SortOrder
    buildSpec?: SortOrder
    position?: SortOrder
    ownerId?: SortOrder
  }

  export type BuildMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    styleTemplate?: SortOrder
    buildTemplate?: SortOrder
    buildClass?: SortOrder
    buildSpec?: SortOrder
    buildEquipment?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    ownerId?: SortOrder
  }

  export type BuildMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    styleTemplate?: SortOrder
    buildTemplate?: SortOrder
    buildClass?: SortOrder
    buildSpec?: SortOrder
    buildEquipment?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    slug?: SortOrder
    position?: SortOrder
    ownerId?: SortOrder
  }

  export type BuildSumOrderByAggregateInput = {
    id?: SortOrder
    buildClass?: SortOrder
    buildSpec?: SortOrder
    position?: SortOrder
    ownerId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Gw2CacheOrderByRelevanceInput = {
    fields: Gw2CacheOrderByRelevanceFieldEnum | Gw2CacheOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Gw2CacheCountOrderByAggregateInput = {
    key?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
  }

  export type Gw2CacheMaxOrderByAggregateInput = {
    key?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
  }

  export type Gw2CacheMinOrderByAggregateInput = {
    key?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BuildCreateWithoutOwnerInput, BuildUncheckedCreateWithoutOwnerInput> | BuildCreateWithoutOwnerInput[] | BuildUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutOwnerInput | BuildCreateOrConnectWithoutOwnerInput[]
    createMany?: BuildCreateManyOwnerInputEnvelope
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
  }

  export type BuildUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BuildCreateWithoutOwnerInput, BuildUncheckedCreateWithoutOwnerInput> | BuildCreateWithoutOwnerInput[] | BuildUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutOwnerInput | BuildCreateOrConnectWithoutOwnerInput[]
    createMany?: BuildCreateManyOwnerInputEnvelope
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BuildUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BuildCreateWithoutOwnerInput, BuildUncheckedCreateWithoutOwnerInput> | BuildCreateWithoutOwnerInput[] | BuildUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutOwnerInput | BuildCreateOrConnectWithoutOwnerInput[]
    upsert?: BuildUpsertWithWhereUniqueWithoutOwnerInput | BuildUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BuildCreateManyOwnerInputEnvelope
    set?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    disconnect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    delete?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    update?: BuildUpdateWithWhereUniqueWithoutOwnerInput | BuildUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BuildUpdateManyWithWhereWithoutOwnerInput | BuildUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BuildScalarWhereInput | BuildScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BuildUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BuildCreateWithoutOwnerInput, BuildUncheckedCreateWithoutOwnerInput> | BuildCreateWithoutOwnerInput[] | BuildUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutOwnerInput | BuildCreateOrConnectWithoutOwnerInput[]
    upsert?: BuildUpsertWithWhereUniqueWithoutOwnerInput | BuildUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BuildCreateManyOwnerInputEnvelope
    set?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    disconnect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    delete?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    update?: BuildUpdateWithWhereUniqueWithoutOwnerInput | BuildUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BuildUpdateManyWithWhereWithoutOwnerInput | BuildUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BuildScalarWhereInput | BuildScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBuildsInput = {
    create?: XOR<UserCreateWithoutBuildsInput, UserUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuildsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutBuildsNestedInput = {
    create?: XOR<UserCreateWithoutBuildsInput, UserUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuildsInput
    upsert?: UserUpsertWithoutBuildsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBuildsInput, UserUpdateWithoutBuildsInput>, UserUncheckedUpdateWithoutBuildsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BuildCreateWithoutOwnerInput = {
    title: string
    styleTemplate?: string
    buildTemplate: string
    buildClass?: number
    buildSpec?: number
    buildEquipment: string
    isPublic?: boolean
    createdAt?: Date | string
    slug?: string | null
    position?: number
  }

  export type BuildUncheckedCreateWithoutOwnerInput = {
    id?: number
    title: string
    styleTemplate?: string
    buildTemplate: string
    buildClass?: number
    buildSpec?: number
    buildEquipment: string
    isPublic?: boolean
    createdAt?: Date | string
    slug?: string | null
    position?: number
  }

  export type BuildCreateOrConnectWithoutOwnerInput = {
    where: BuildWhereUniqueInput
    create: XOR<BuildCreateWithoutOwnerInput, BuildUncheckedCreateWithoutOwnerInput>
  }

  export type BuildCreateManyOwnerInputEnvelope = {
    data: BuildCreateManyOwnerInput | BuildCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BuildUpsertWithWhereUniqueWithoutOwnerInput = {
    where: BuildWhereUniqueInput
    update: XOR<BuildUpdateWithoutOwnerInput, BuildUncheckedUpdateWithoutOwnerInput>
    create: XOR<BuildCreateWithoutOwnerInput, BuildUncheckedCreateWithoutOwnerInput>
  }

  export type BuildUpdateWithWhereUniqueWithoutOwnerInput = {
    where: BuildWhereUniqueInput
    data: XOR<BuildUpdateWithoutOwnerInput, BuildUncheckedUpdateWithoutOwnerInput>
  }

  export type BuildUpdateManyWithWhereWithoutOwnerInput = {
    where: BuildScalarWhereInput
    data: XOR<BuildUpdateManyMutationInput, BuildUncheckedUpdateManyWithoutOwnerInput>
  }

  export type BuildScalarWhereInput = {
    AND?: BuildScalarWhereInput | BuildScalarWhereInput[]
    OR?: BuildScalarWhereInput[]
    NOT?: BuildScalarWhereInput | BuildScalarWhereInput[]
    id?: IntFilter<"Build"> | number
    title?: StringFilter<"Build"> | string
    styleTemplate?: StringFilter<"Build"> | string
    buildTemplate?: StringFilter<"Build"> | string
    buildClass?: IntFilter<"Build"> | number
    buildSpec?: IntFilter<"Build"> | number
    buildEquipment?: StringFilter<"Build"> | string
    isPublic?: BoolFilter<"Build"> | boolean
    createdAt?: DateTimeFilter<"Build"> | Date | string
    slug?: StringNullableFilter<"Build"> | string | null
    position?: IntFilter<"Build"> | number
    ownerId?: IntFilter<"Build"> | number
  }

  export type UserCreateWithoutBuildsInput = {
    username: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBuildsInput = {
    id?: number
    username: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBuildsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBuildsInput, UserUncheckedCreateWithoutBuildsInput>
  }

  export type UserUpsertWithoutBuildsInput = {
    update: XOR<UserUpdateWithoutBuildsInput, UserUncheckedUpdateWithoutBuildsInput>
    create: XOR<UserCreateWithoutBuildsInput, UserUncheckedCreateWithoutBuildsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBuildsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBuildsInput, UserUncheckedUpdateWithoutBuildsInput>
  }

  export type UserUpdateWithoutBuildsInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBuildsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildCreateManyOwnerInput = {
    id?: number
    title: string
    styleTemplate?: string
    buildTemplate: string
    buildClass?: number
    buildSpec?: number
    buildEquipment: string
    isPublic?: boolean
    createdAt?: Date | string
    slug?: string | null
    position?: number
  }

  export type BuildUpdateWithoutOwnerInput = {
    title?: StringFieldUpdateOperationsInput | string
    styleTemplate?: StringFieldUpdateOperationsInput | string
    buildTemplate?: StringFieldUpdateOperationsInput | string
    buildClass?: IntFieldUpdateOperationsInput | number
    buildSpec?: IntFieldUpdateOperationsInput | number
    buildEquipment?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type BuildUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    styleTemplate?: StringFieldUpdateOperationsInput | string
    buildTemplate?: StringFieldUpdateOperationsInput | string
    buildClass?: IntFieldUpdateOperationsInput | number
    buildSpec?: IntFieldUpdateOperationsInput | number
    buildEquipment?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type BuildUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    styleTemplate?: StringFieldUpdateOperationsInput | string
    buildTemplate?: StringFieldUpdateOperationsInput | string
    buildClass?: IntFieldUpdateOperationsInput | number
    buildSpec?: IntFieldUpdateOperationsInput | number
    buildEquipment?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
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
  export const dmmf: runtime.BaseDMMF
}