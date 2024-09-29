
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
 * Model PHP_ms_login
 * 
 */
export type PHP_ms_login = $Result.DefaultSelection<Prisma.$PHP_ms_loginPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PHP_ms_logins
 * const pHP_ms_logins = await prisma.pHP_ms_login.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more PHP_ms_logins
   * const pHP_ms_logins = await prisma.pHP_ms_login.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.pHP_ms_login`: Exposes CRUD operations for the **PHP_ms_login** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PHP_ms_logins
    * const pHP_ms_logins = await prisma.pHP_ms_login.findMany()
    * ```
    */
  get pHP_ms_login(): Prisma.PHP_ms_loginDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
    PHP_ms_login: 'PHP_ms_login'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "pHP_ms_login"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PHP_ms_login: {
        payload: Prisma.$PHP_ms_loginPayload<ExtArgs>
        fields: Prisma.PHP_ms_loginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PHP_ms_loginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHP_ms_loginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PHP_ms_loginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHP_ms_loginPayload>
          }
          findFirst: {
            args: Prisma.PHP_ms_loginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHP_ms_loginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PHP_ms_loginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHP_ms_loginPayload>
          }
          findMany: {
            args: Prisma.PHP_ms_loginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHP_ms_loginPayload>[]
          }
          create: {
            args: Prisma.PHP_ms_loginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHP_ms_loginPayload>
          }
          createMany: {
            args: Prisma.PHP_ms_loginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PHP_ms_loginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHP_ms_loginPayload>
          }
          update: {
            args: Prisma.PHP_ms_loginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHP_ms_loginPayload>
          }
          deleteMany: {
            args: Prisma.PHP_ms_loginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PHP_ms_loginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PHP_ms_loginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHP_ms_loginPayload>
          }
          aggregate: {
            args: Prisma.PHP_ms_loginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePHP_ms_login>
          }
          groupBy: {
            args: Prisma.PHP_ms_loginGroupByArgs<ExtArgs>
            result: $Utils.Optional<PHP_ms_loginGroupByOutputType>[]
          }
          count: {
            args: Prisma.PHP_ms_loginCountArgs<ExtArgs>
            result: $Utils.Optional<PHP_ms_loginCountAggregateOutputType> | number
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
    | 'createManyAndReturn'
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
   * Models
   */

  /**
   * Model PHP_ms_login
   */

  export type AggregatePHP_ms_login = {
    _count: PHP_ms_loginCountAggregateOutputType | null
    _avg: PHP_ms_loginAvgAggregateOutputType | null
    _sum: PHP_ms_loginSumAggregateOutputType | null
    _min: PHP_ms_loginMinAggregateOutputType | null
    _max: PHP_ms_loginMaxAggregateOutputType | null
  }

  export type PHP_ms_loginAvgAggregateOutputType = {
    n_level: number | null
    ifi_level: number | null
    beclaim_level: number | null
    cms_level: number | null
    qc_level: number | null
    invoice_level: number | null
    visit_level: number | null
    paper_level: number | null
    apps_aktif: number | null
    beclaim_kjy_level: number | null
    ifi_kjy_level: number | null
    invoice_kjy_level: number | null
    beclaim_ho_level: number | null
    ihelprpt_level: number | null
    section: number | null
    sectionParent: number | null
    isCS: number | null
    limaes_level: number | null
    iot_skb: number | null
    gmp_apps: number | null
    gen_apps: number | null
    isEmployee: number | null
    apar_apps: number | null
    qa_apk: number | null
    qa_lims_al4: number | null
    is_temporary_account: number | null
  }

  export type PHP_ms_loginSumAggregateOutputType = {
    n_level: number | null
    ifi_level: number | null
    beclaim_level: number | null
    cms_level: number | null
    qc_level: number | null
    invoice_level: number | null
    visit_level: number | null
    paper_level: number | null
    apps_aktif: number | null
    beclaim_kjy_level: number | null
    ifi_kjy_level: number | null
    invoice_kjy_level: number | null
    beclaim_ho_level: number | null
    ihelprpt_level: number | null
    section: number | null
    sectionParent: number | null
    isCS: number | null
    limaes_level: number | null
    iot_skb: number | null
    gmp_apps: number | null
    gen_apps: number | null
    isEmployee: number | null
    apar_apps: number | null
    qa_apk: number | null
    qa_lims_al4: number | null
    is_temporary_account: number | null
  }

  export type PHP_ms_loginMinAggregateOutputType = {
    lg_nik: string | null
    lg_name: string | null
    lg_password: string | null
    lg_department: string | null
    lg_location: string | null
    lg_product: string | null
    lg_email_aio: string | null
    lg_email_private: string | null
    lg_update: Date | null
    lg_propose: string | null
    lg_admin: string | null
    lg_retur: string | null
    lg_retur_admin: string | null
    lg_level: string | null
    lg_type: string | null
    lg_ga: string | null
    lg_aktif: string | null
    lg_costcenter: string | null
    protean_location: string | null
    protean_department: string | null
    lg_profitcenter: string | null
    lg_corp_cc: string | null
    tgl_rfc: Date | null
    lg_faktur: string | null
    lg_claim_track: string | null
    n_photo: string | null
    n_phone: string | null
    n_level: number | null
    n_info: string | null
    ifi_level: number | null
    beclaim_level: number | null
    cms_level: number | null
    qc_level: number | null
    invoice_level: number | null
    visit_level: number | null
    paper_level: number | null
    apps_aktif: number | null
    beclaim_kjy_level: number | null
    ifi_kjy_level: number | null
    invoice_kjy_level: number | null
    beclaim_ho_level: number | null
    lg_entitas: string | null
    ihelprpt_level: number | null
    rfid: string | null
    section: number | null
    sectionParent: number | null
    categoryShift: string | null
    isCS: number | null
    facebook_URL: string | null
    instagram_URL: string | null
    limaes_level: number | null
    iot_skb: number | null
    lims_oto: string | null
    gmp_apps: number | null
    gen_apps: number | null
    id_telegram: string | null
    head1: string | null
    head2: string | null
    head3: string | null
    isEmployee: number | null
    apar_apps: number | null
    qa_apk: number | null
    role_wp: string | null
    qa_lims_al4: number | null
    is_temporary_account: number | null
    expired_date_temp: Date | null
    nik_intern: string | null
  }

  export type PHP_ms_loginMaxAggregateOutputType = {
    lg_nik: string | null
    lg_name: string | null
    lg_password: string | null
    lg_department: string | null
    lg_location: string | null
    lg_product: string | null
    lg_email_aio: string | null
    lg_email_private: string | null
    lg_update: Date | null
    lg_propose: string | null
    lg_admin: string | null
    lg_retur: string | null
    lg_retur_admin: string | null
    lg_level: string | null
    lg_type: string | null
    lg_ga: string | null
    lg_aktif: string | null
    lg_costcenter: string | null
    protean_location: string | null
    protean_department: string | null
    lg_profitcenter: string | null
    lg_corp_cc: string | null
    tgl_rfc: Date | null
    lg_faktur: string | null
    lg_claim_track: string | null
    n_photo: string | null
    n_phone: string | null
    n_level: number | null
    n_info: string | null
    ifi_level: number | null
    beclaim_level: number | null
    cms_level: number | null
    qc_level: number | null
    invoice_level: number | null
    visit_level: number | null
    paper_level: number | null
    apps_aktif: number | null
    beclaim_kjy_level: number | null
    ifi_kjy_level: number | null
    invoice_kjy_level: number | null
    beclaim_ho_level: number | null
    lg_entitas: string | null
    ihelprpt_level: number | null
    rfid: string | null
    section: number | null
    sectionParent: number | null
    categoryShift: string | null
    isCS: number | null
    facebook_URL: string | null
    instagram_URL: string | null
    limaes_level: number | null
    iot_skb: number | null
    lims_oto: string | null
    gmp_apps: number | null
    gen_apps: number | null
    id_telegram: string | null
    head1: string | null
    head2: string | null
    head3: string | null
    isEmployee: number | null
    apar_apps: number | null
    qa_apk: number | null
    role_wp: string | null
    qa_lims_al4: number | null
    is_temporary_account: number | null
    expired_date_temp: Date | null
    nik_intern: string | null
  }

  export type PHP_ms_loginCountAggregateOutputType = {
    lg_nik: number
    lg_name: number
    lg_password: number
    lg_department: number
    lg_location: number
    lg_product: number
    lg_email_aio: number
    lg_email_private: number
    lg_update: number
    lg_propose: number
    lg_admin: number
    lg_retur: number
    lg_retur_admin: number
    lg_level: number
    lg_type: number
    lg_ga: number
    lg_aktif: number
    lg_costcenter: number
    protean_location: number
    protean_department: number
    lg_profitcenter: number
    lg_corp_cc: number
    tgl_rfc: number
    lg_faktur: number
    lg_claim_track: number
    n_photo: number
    n_phone: number
    n_level: number
    n_info: number
    ifi_level: number
    beclaim_level: number
    cms_level: number
    qc_level: number
    invoice_level: number
    visit_level: number
    paper_level: number
    apps_aktif: number
    beclaim_kjy_level: number
    ifi_kjy_level: number
    invoice_kjy_level: number
    beclaim_ho_level: number
    lg_entitas: number
    ihelprpt_level: number
    rfid: number
    section: number
    sectionParent: number
    categoryShift: number
    isCS: number
    facebook_URL: number
    instagram_URL: number
    limaes_level: number
    iot_skb: number
    lims_oto: number
    gmp_apps: number
    gen_apps: number
    id_telegram: number
    head1: number
    head2: number
    head3: number
    isEmployee: number
    apar_apps: number
    qa_apk: number
    role_wp: number
    qa_lims_al4: number
    is_temporary_account: number
    expired_date_temp: number
    nik_intern: number
    _all: number
  }


  export type PHP_ms_loginAvgAggregateInputType = {
    n_level?: true
    ifi_level?: true
    beclaim_level?: true
    cms_level?: true
    qc_level?: true
    invoice_level?: true
    visit_level?: true
    paper_level?: true
    apps_aktif?: true
    beclaim_kjy_level?: true
    ifi_kjy_level?: true
    invoice_kjy_level?: true
    beclaim_ho_level?: true
    ihelprpt_level?: true
    section?: true
    sectionParent?: true
    isCS?: true
    limaes_level?: true
    iot_skb?: true
    gmp_apps?: true
    gen_apps?: true
    isEmployee?: true
    apar_apps?: true
    qa_apk?: true
    qa_lims_al4?: true
    is_temporary_account?: true
  }

  export type PHP_ms_loginSumAggregateInputType = {
    n_level?: true
    ifi_level?: true
    beclaim_level?: true
    cms_level?: true
    qc_level?: true
    invoice_level?: true
    visit_level?: true
    paper_level?: true
    apps_aktif?: true
    beclaim_kjy_level?: true
    ifi_kjy_level?: true
    invoice_kjy_level?: true
    beclaim_ho_level?: true
    ihelprpt_level?: true
    section?: true
    sectionParent?: true
    isCS?: true
    limaes_level?: true
    iot_skb?: true
    gmp_apps?: true
    gen_apps?: true
    isEmployee?: true
    apar_apps?: true
    qa_apk?: true
    qa_lims_al4?: true
    is_temporary_account?: true
  }

  export type PHP_ms_loginMinAggregateInputType = {
    lg_nik?: true
    lg_name?: true
    lg_password?: true
    lg_department?: true
    lg_location?: true
    lg_product?: true
    lg_email_aio?: true
    lg_email_private?: true
    lg_update?: true
    lg_propose?: true
    lg_admin?: true
    lg_retur?: true
    lg_retur_admin?: true
    lg_level?: true
    lg_type?: true
    lg_ga?: true
    lg_aktif?: true
    lg_costcenter?: true
    protean_location?: true
    protean_department?: true
    lg_profitcenter?: true
    lg_corp_cc?: true
    tgl_rfc?: true
    lg_faktur?: true
    lg_claim_track?: true
    n_photo?: true
    n_phone?: true
    n_level?: true
    n_info?: true
    ifi_level?: true
    beclaim_level?: true
    cms_level?: true
    qc_level?: true
    invoice_level?: true
    visit_level?: true
    paper_level?: true
    apps_aktif?: true
    beclaim_kjy_level?: true
    ifi_kjy_level?: true
    invoice_kjy_level?: true
    beclaim_ho_level?: true
    lg_entitas?: true
    ihelprpt_level?: true
    rfid?: true
    section?: true
    sectionParent?: true
    categoryShift?: true
    isCS?: true
    facebook_URL?: true
    instagram_URL?: true
    limaes_level?: true
    iot_skb?: true
    lims_oto?: true
    gmp_apps?: true
    gen_apps?: true
    id_telegram?: true
    head1?: true
    head2?: true
    head3?: true
    isEmployee?: true
    apar_apps?: true
    qa_apk?: true
    role_wp?: true
    qa_lims_al4?: true
    is_temporary_account?: true
    expired_date_temp?: true
    nik_intern?: true
  }

  export type PHP_ms_loginMaxAggregateInputType = {
    lg_nik?: true
    lg_name?: true
    lg_password?: true
    lg_department?: true
    lg_location?: true
    lg_product?: true
    lg_email_aio?: true
    lg_email_private?: true
    lg_update?: true
    lg_propose?: true
    lg_admin?: true
    lg_retur?: true
    lg_retur_admin?: true
    lg_level?: true
    lg_type?: true
    lg_ga?: true
    lg_aktif?: true
    lg_costcenter?: true
    protean_location?: true
    protean_department?: true
    lg_profitcenter?: true
    lg_corp_cc?: true
    tgl_rfc?: true
    lg_faktur?: true
    lg_claim_track?: true
    n_photo?: true
    n_phone?: true
    n_level?: true
    n_info?: true
    ifi_level?: true
    beclaim_level?: true
    cms_level?: true
    qc_level?: true
    invoice_level?: true
    visit_level?: true
    paper_level?: true
    apps_aktif?: true
    beclaim_kjy_level?: true
    ifi_kjy_level?: true
    invoice_kjy_level?: true
    beclaim_ho_level?: true
    lg_entitas?: true
    ihelprpt_level?: true
    rfid?: true
    section?: true
    sectionParent?: true
    categoryShift?: true
    isCS?: true
    facebook_URL?: true
    instagram_URL?: true
    limaes_level?: true
    iot_skb?: true
    lims_oto?: true
    gmp_apps?: true
    gen_apps?: true
    id_telegram?: true
    head1?: true
    head2?: true
    head3?: true
    isEmployee?: true
    apar_apps?: true
    qa_apk?: true
    role_wp?: true
    qa_lims_al4?: true
    is_temporary_account?: true
    expired_date_temp?: true
    nik_intern?: true
  }

  export type PHP_ms_loginCountAggregateInputType = {
    lg_nik?: true
    lg_name?: true
    lg_password?: true
    lg_department?: true
    lg_location?: true
    lg_product?: true
    lg_email_aio?: true
    lg_email_private?: true
    lg_update?: true
    lg_propose?: true
    lg_admin?: true
    lg_retur?: true
    lg_retur_admin?: true
    lg_level?: true
    lg_type?: true
    lg_ga?: true
    lg_aktif?: true
    lg_costcenter?: true
    protean_location?: true
    protean_department?: true
    lg_profitcenter?: true
    lg_corp_cc?: true
    tgl_rfc?: true
    lg_faktur?: true
    lg_claim_track?: true
    n_photo?: true
    n_phone?: true
    n_level?: true
    n_info?: true
    ifi_level?: true
    beclaim_level?: true
    cms_level?: true
    qc_level?: true
    invoice_level?: true
    visit_level?: true
    paper_level?: true
    apps_aktif?: true
    beclaim_kjy_level?: true
    ifi_kjy_level?: true
    invoice_kjy_level?: true
    beclaim_ho_level?: true
    lg_entitas?: true
    ihelprpt_level?: true
    rfid?: true
    section?: true
    sectionParent?: true
    categoryShift?: true
    isCS?: true
    facebook_URL?: true
    instagram_URL?: true
    limaes_level?: true
    iot_skb?: true
    lims_oto?: true
    gmp_apps?: true
    gen_apps?: true
    id_telegram?: true
    head1?: true
    head2?: true
    head3?: true
    isEmployee?: true
    apar_apps?: true
    qa_apk?: true
    role_wp?: true
    qa_lims_al4?: true
    is_temporary_account?: true
    expired_date_temp?: true
    nik_intern?: true
    _all?: true
  }

  export type PHP_ms_loginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PHP_ms_login to aggregate.
     */
    where?: PHP_ms_loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PHP_ms_logins to fetch.
     */
    orderBy?: PHP_ms_loginOrderByWithRelationInput | PHP_ms_loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PHP_ms_loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PHP_ms_logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PHP_ms_logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PHP_ms_logins
    **/
    _count?: true | PHP_ms_loginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PHP_ms_loginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PHP_ms_loginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PHP_ms_loginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PHP_ms_loginMaxAggregateInputType
  }

  export type GetPHP_ms_loginAggregateType<T extends PHP_ms_loginAggregateArgs> = {
        [P in keyof T & keyof AggregatePHP_ms_login]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePHP_ms_login[P]>
      : GetScalarType<T[P], AggregatePHP_ms_login[P]>
  }




  export type PHP_ms_loginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PHP_ms_loginWhereInput
    orderBy?: PHP_ms_loginOrderByWithAggregationInput | PHP_ms_loginOrderByWithAggregationInput[]
    by: PHP_ms_loginScalarFieldEnum[] | PHP_ms_loginScalarFieldEnum
    having?: PHP_ms_loginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PHP_ms_loginCountAggregateInputType | true
    _avg?: PHP_ms_loginAvgAggregateInputType
    _sum?: PHP_ms_loginSumAggregateInputType
    _min?: PHP_ms_loginMinAggregateInputType
    _max?: PHP_ms_loginMaxAggregateInputType
  }

  export type PHP_ms_loginGroupByOutputType = {
    lg_nik: string
    lg_name: string | null
    lg_password: string | null
    lg_department: string | null
    lg_location: string | null
    lg_product: string | null
    lg_email_aio: string | null
    lg_email_private: string | null
    lg_update: Date | null
    lg_propose: string | null
    lg_admin: string | null
    lg_retur: string | null
    lg_retur_admin: string | null
    lg_level: string | null
    lg_type: string | null
    lg_ga: string | null
    lg_aktif: string | null
    lg_costcenter: string | null
    protean_location: string | null
    protean_department: string | null
    lg_profitcenter: string | null
    lg_corp_cc: string | null
    tgl_rfc: Date | null
    lg_faktur: string | null
    lg_claim_track: string | null
    n_photo: string | null
    n_phone: string | null
    n_level: number | null
    n_info: string | null
    ifi_level: number | null
    beclaim_level: number | null
    cms_level: number | null
    qc_level: number | null
    invoice_level: number | null
    visit_level: number | null
    paper_level: number | null
    apps_aktif: number | null
    beclaim_kjy_level: number | null
    ifi_kjy_level: number | null
    invoice_kjy_level: number | null
    beclaim_ho_level: number | null
    lg_entitas: string | null
    ihelprpt_level: number | null
    rfid: string | null
    section: number | null
    sectionParent: number | null
    categoryShift: string | null
    isCS: number | null
    facebook_URL: string | null
    instagram_URL: string | null
    limaes_level: number | null
    iot_skb: number | null
    lims_oto: string | null
    gmp_apps: number | null
    gen_apps: number | null
    id_telegram: string | null
    head1: string | null
    head2: string | null
    head3: string | null
    isEmployee: number | null
    apar_apps: number | null
    qa_apk: number | null
    role_wp: string | null
    qa_lims_al4: number | null
    is_temporary_account: number | null
    expired_date_temp: Date | null
    nik_intern: string | null
    _count: PHP_ms_loginCountAggregateOutputType | null
    _avg: PHP_ms_loginAvgAggregateOutputType | null
    _sum: PHP_ms_loginSumAggregateOutputType | null
    _min: PHP_ms_loginMinAggregateOutputType | null
    _max: PHP_ms_loginMaxAggregateOutputType | null
  }

  type GetPHP_ms_loginGroupByPayload<T extends PHP_ms_loginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PHP_ms_loginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PHP_ms_loginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PHP_ms_loginGroupByOutputType[P]>
            : GetScalarType<T[P], PHP_ms_loginGroupByOutputType[P]>
        }
      >
    >


  export type PHP_ms_loginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lg_nik?: boolean
    lg_name?: boolean
    lg_password?: boolean
    lg_department?: boolean
    lg_location?: boolean
    lg_product?: boolean
    lg_email_aio?: boolean
    lg_email_private?: boolean
    lg_update?: boolean
    lg_propose?: boolean
    lg_admin?: boolean
    lg_retur?: boolean
    lg_retur_admin?: boolean
    lg_level?: boolean
    lg_type?: boolean
    lg_ga?: boolean
    lg_aktif?: boolean
    lg_costcenter?: boolean
    protean_location?: boolean
    protean_department?: boolean
    lg_profitcenter?: boolean
    lg_corp_cc?: boolean
    tgl_rfc?: boolean
    lg_faktur?: boolean
    lg_claim_track?: boolean
    n_photo?: boolean
    n_phone?: boolean
    n_level?: boolean
    n_info?: boolean
    ifi_level?: boolean
    beclaim_level?: boolean
    cms_level?: boolean
    qc_level?: boolean
    invoice_level?: boolean
    visit_level?: boolean
    paper_level?: boolean
    apps_aktif?: boolean
    beclaim_kjy_level?: boolean
    ifi_kjy_level?: boolean
    invoice_kjy_level?: boolean
    beclaim_ho_level?: boolean
    lg_entitas?: boolean
    ihelprpt_level?: boolean
    rfid?: boolean
    section?: boolean
    sectionParent?: boolean
    categoryShift?: boolean
    isCS?: boolean
    facebook_URL?: boolean
    instagram_URL?: boolean
    limaes_level?: boolean
    iot_skb?: boolean
    lims_oto?: boolean
    gmp_apps?: boolean
    gen_apps?: boolean
    id_telegram?: boolean
    head1?: boolean
    head2?: boolean
    head3?: boolean
    isEmployee?: boolean
    apar_apps?: boolean
    qa_apk?: boolean
    role_wp?: boolean
    qa_lims_al4?: boolean
    is_temporary_account?: boolean
    expired_date_temp?: boolean
    nik_intern?: boolean
  }, ExtArgs["result"]["pHP_ms_login"]>


  export type PHP_ms_loginSelectScalar = {
    lg_nik?: boolean
    lg_name?: boolean
    lg_password?: boolean
    lg_department?: boolean
    lg_location?: boolean
    lg_product?: boolean
    lg_email_aio?: boolean
    lg_email_private?: boolean
    lg_update?: boolean
    lg_propose?: boolean
    lg_admin?: boolean
    lg_retur?: boolean
    lg_retur_admin?: boolean
    lg_level?: boolean
    lg_type?: boolean
    lg_ga?: boolean
    lg_aktif?: boolean
    lg_costcenter?: boolean
    protean_location?: boolean
    protean_department?: boolean
    lg_profitcenter?: boolean
    lg_corp_cc?: boolean
    tgl_rfc?: boolean
    lg_faktur?: boolean
    lg_claim_track?: boolean
    n_photo?: boolean
    n_phone?: boolean
    n_level?: boolean
    n_info?: boolean
    ifi_level?: boolean
    beclaim_level?: boolean
    cms_level?: boolean
    qc_level?: boolean
    invoice_level?: boolean
    visit_level?: boolean
    paper_level?: boolean
    apps_aktif?: boolean
    beclaim_kjy_level?: boolean
    ifi_kjy_level?: boolean
    invoice_kjy_level?: boolean
    beclaim_ho_level?: boolean
    lg_entitas?: boolean
    ihelprpt_level?: boolean
    rfid?: boolean
    section?: boolean
    sectionParent?: boolean
    categoryShift?: boolean
    isCS?: boolean
    facebook_URL?: boolean
    instagram_URL?: boolean
    limaes_level?: boolean
    iot_skb?: boolean
    lims_oto?: boolean
    gmp_apps?: boolean
    gen_apps?: boolean
    id_telegram?: boolean
    head1?: boolean
    head2?: boolean
    head3?: boolean
    isEmployee?: boolean
    apar_apps?: boolean
    qa_apk?: boolean
    role_wp?: boolean
    qa_lims_al4?: boolean
    is_temporary_account?: boolean
    expired_date_temp?: boolean
    nik_intern?: boolean
  }


  export type $PHP_ms_loginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PHP_ms_login"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      lg_nik: string
      lg_name: string | null
      lg_password: string | null
      lg_department: string | null
      lg_location: string | null
      lg_product: string | null
      lg_email_aio: string | null
      lg_email_private: string | null
      lg_update: Date | null
      lg_propose: string | null
      lg_admin: string | null
      lg_retur: string | null
      lg_retur_admin: string | null
      lg_level: string | null
      lg_type: string | null
      lg_ga: string | null
      lg_aktif: string | null
      lg_costcenter: string | null
      protean_location: string | null
      protean_department: string | null
      lg_profitcenter: string | null
      lg_corp_cc: string | null
      tgl_rfc: Date | null
      lg_faktur: string | null
      lg_claim_track: string | null
      n_photo: string | null
      n_phone: string | null
      n_level: number | null
      n_info: string | null
      ifi_level: number | null
      beclaim_level: number | null
      cms_level: number | null
      qc_level: number | null
      invoice_level: number | null
      visit_level: number | null
      paper_level: number | null
      apps_aktif: number | null
      beclaim_kjy_level: number | null
      ifi_kjy_level: number | null
      invoice_kjy_level: number | null
      beclaim_ho_level: number | null
      lg_entitas: string | null
      ihelprpt_level: number | null
      rfid: string | null
      section: number | null
      sectionParent: number | null
      categoryShift: string | null
      isCS: number | null
      facebook_URL: string | null
      instagram_URL: string | null
      limaes_level: number | null
      iot_skb: number | null
      lims_oto: string | null
      gmp_apps: number | null
      gen_apps: number | null
      id_telegram: string | null
      head1: string | null
      head2: string | null
      head3: string | null
      isEmployee: number | null
      apar_apps: number | null
      qa_apk: number | null
      role_wp: string | null
      qa_lims_al4: number | null
      is_temporary_account: number | null
      expired_date_temp: Date | null
      nik_intern: string | null
    }, ExtArgs["result"]["pHP_ms_login"]>
    composites: {}
  }

  type PHP_ms_loginGetPayload<S extends boolean | null | undefined | PHP_ms_loginDefaultArgs> = $Result.GetResult<Prisma.$PHP_ms_loginPayload, S>

  type PHP_ms_loginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PHP_ms_loginFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PHP_ms_loginCountAggregateInputType | true
    }

  export interface PHP_ms_loginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PHP_ms_login'], meta: { name: 'PHP_ms_login' } }
    /**
     * Find zero or one PHP_ms_login that matches the filter.
     * @param {PHP_ms_loginFindUniqueArgs} args - Arguments to find a PHP_ms_login
     * @example
     * // Get one PHP_ms_login
     * const pHP_ms_login = await prisma.pHP_ms_login.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PHP_ms_loginFindUniqueArgs>(args: SelectSubset<T, PHP_ms_loginFindUniqueArgs<ExtArgs>>): Prisma__PHP_ms_loginClient<$Result.GetResult<Prisma.$PHP_ms_loginPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PHP_ms_login that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PHP_ms_loginFindUniqueOrThrowArgs} args - Arguments to find a PHP_ms_login
     * @example
     * // Get one PHP_ms_login
     * const pHP_ms_login = await prisma.pHP_ms_login.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PHP_ms_loginFindUniqueOrThrowArgs>(args: SelectSubset<T, PHP_ms_loginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PHP_ms_loginClient<$Result.GetResult<Prisma.$PHP_ms_loginPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PHP_ms_login that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHP_ms_loginFindFirstArgs} args - Arguments to find a PHP_ms_login
     * @example
     * // Get one PHP_ms_login
     * const pHP_ms_login = await prisma.pHP_ms_login.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PHP_ms_loginFindFirstArgs>(args?: SelectSubset<T, PHP_ms_loginFindFirstArgs<ExtArgs>>): Prisma__PHP_ms_loginClient<$Result.GetResult<Prisma.$PHP_ms_loginPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PHP_ms_login that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHP_ms_loginFindFirstOrThrowArgs} args - Arguments to find a PHP_ms_login
     * @example
     * // Get one PHP_ms_login
     * const pHP_ms_login = await prisma.pHP_ms_login.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PHP_ms_loginFindFirstOrThrowArgs>(args?: SelectSubset<T, PHP_ms_loginFindFirstOrThrowArgs<ExtArgs>>): Prisma__PHP_ms_loginClient<$Result.GetResult<Prisma.$PHP_ms_loginPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PHP_ms_logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHP_ms_loginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PHP_ms_logins
     * const pHP_ms_logins = await prisma.pHP_ms_login.findMany()
     * 
     * // Get first 10 PHP_ms_logins
     * const pHP_ms_logins = await prisma.pHP_ms_login.findMany({ take: 10 })
     * 
     * // Only select the `lg_nik`
     * const pHP_ms_loginWithLg_nikOnly = await prisma.pHP_ms_login.findMany({ select: { lg_nik: true } })
     * 
     */
    findMany<T extends PHP_ms_loginFindManyArgs>(args?: SelectSubset<T, PHP_ms_loginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PHP_ms_loginPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PHP_ms_login.
     * @param {PHP_ms_loginCreateArgs} args - Arguments to create a PHP_ms_login.
     * @example
     * // Create one PHP_ms_login
     * const PHP_ms_login = await prisma.pHP_ms_login.create({
     *   data: {
     *     // ... data to create a PHP_ms_login
     *   }
     * })
     * 
     */
    create<T extends PHP_ms_loginCreateArgs>(args: SelectSubset<T, PHP_ms_loginCreateArgs<ExtArgs>>): Prisma__PHP_ms_loginClient<$Result.GetResult<Prisma.$PHP_ms_loginPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PHP_ms_logins.
     * @param {PHP_ms_loginCreateManyArgs} args - Arguments to create many PHP_ms_logins.
     * @example
     * // Create many PHP_ms_logins
     * const pHP_ms_login = await prisma.pHP_ms_login.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PHP_ms_loginCreateManyArgs>(args?: SelectSubset<T, PHP_ms_loginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PHP_ms_login.
     * @param {PHP_ms_loginDeleteArgs} args - Arguments to delete one PHP_ms_login.
     * @example
     * // Delete one PHP_ms_login
     * const PHP_ms_login = await prisma.pHP_ms_login.delete({
     *   where: {
     *     // ... filter to delete one PHP_ms_login
     *   }
     * })
     * 
     */
    delete<T extends PHP_ms_loginDeleteArgs>(args: SelectSubset<T, PHP_ms_loginDeleteArgs<ExtArgs>>): Prisma__PHP_ms_loginClient<$Result.GetResult<Prisma.$PHP_ms_loginPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PHP_ms_login.
     * @param {PHP_ms_loginUpdateArgs} args - Arguments to update one PHP_ms_login.
     * @example
     * // Update one PHP_ms_login
     * const pHP_ms_login = await prisma.pHP_ms_login.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PHP_ms_loginUpdateArgs>(args: SelectSubset<T, PHP_ms_loginUpdateArgs<ExtArgs>>): Prisma__PHP_ms_loginClient<$Result.GetResult<Prisma.$PHP_ms_loginPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PHP_ms_logins.
     * @param {PHP_ms_loginDeleteManyArgs} args - Arguments to filter PHP_ms_logins to delete.
     * @example
     * // Delete a few PHP_ms_logins
     * const { count } = await prisma.pHP_ms_login.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PHP_ms_loginDeleteManyArgs>(args?: SelectSubset<T, PHP_ms_loginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PHP_ms_logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHP_ms_loginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PHP_ms_logins
     * const pHP_ms_login = await prisma.pHP_ms_login.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PHP_ms_loginUpdateManyArgs>(args: SelectSubset<T, PHP_ms_loginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PHP_ms_login.
     * @param {PHP_ms_loginUpsertArgs} args - Arguments to update or create a PHP_ms_login.
     * @example
     * // Update or create a PHP_ms_login
     * const pHP_ms_login = await prisma.pHP_ms_login.upsert({
     *   create: {
     *     // ... data to create a PHP_ms_login
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PHP_ms_login we want to update
     *   }
     * })
     */
    upsert<T extends PHP_ms_loginUpsertArgs>(args: SelectSubset<T, PHP_ms_loginUpsertArgs<ExtArgs>>): Prisma__PHP_ms_loginClient<$Result.GetResult<Prisma.$PHP_ms_loginPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PHP_ms_logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHP_ms_loginCountArgs} args - Arguments to filter PHP_ms_logins to count.
     * @example
     * // Count the number of PHP_ms_logins
     * const count = await prisma.pHP_ms_login.count({
     *   where: {
     *     // ... the filter for the PHP_ms_logins we want to count
     *   }
     * })
    **/
    count<T extends PHP_ms_loginCountArgs>(
      args?: Subset<T, PHP_ms_loginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PHP_ms_loginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PHP_ms_login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHP_ms_loginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PHP_ms_loginAggregateArgs>(args: Subset<T, PHP_ms_loginAggregateArgs>): Prisma.PrismaPromise<GetPHP_ms_loginAggregateType<T>>

    /**
     * Group by PHP_ms_login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHP_ms_loginGroupByArgs} args - Group by arguments.
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
      T extends PHP_ms_loginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PHP_ms_loginGroupByArgs['orderBy'] }
        : { orderBy?: PHP_ms_loginGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PHP_ms_loginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPHP_ms_loginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PHP_ms_login model
   */
  readonly fields: PHP_ms_loginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PHP_ms_login.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PHP_ms_loginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PHP_ms_login model
   */ 
  interface PHP_ms_loginFieldRefs {
    readonly lg_nik: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_name: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_password: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_department: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_location: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_product: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_email_aio: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_email_private: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_update: FieldRef<"PHP_ms_login", 'DateTime'>
    readonly lg_propose: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_admin: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_retur: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_retur_admin: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_level: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_type: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_ga: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_aktif: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_costcenter: FieldRef<"PHP_ms_login", 'String'>
    readonly protean_location: FieldRef<"PHP_ms_login", 'String'>
    readonly protean_department: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_profitcenter: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_corp_cc: FieldRef<"PHP_ms_login", 'String'>
    readonly tgl_rfc: FieldRef<"PHP_ms_login", 'DateTime'>
    readonly lg_faktur: FieldRef<"PHP_ms_login", 'String'>
    readonly lg_claim_track: FieldRef<"PHP_ms_login", 'String'>
    readonly n_photo: FieldRef<"PHP_ms_login", 'String'>
    readonly n_phone: FieldRef<"PHP_ms_login", 'String'>
    readonly n_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly n_info: FieldRef<"PHP_ms_login", 'String'>
    readonly ifi_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly beclaim_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly cms_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly qc_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly invoice_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly visit_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly paper_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly apps_aktif: FieldRef<"PHP_ms_login", 'Int'>
    readonly beclaim_kjy_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly ifi_kjy_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly invoice_kjy_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly beclaim_ho_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly lg_entitas: FieldRef<"PHP_ms_login", 'String'>
    readonly ihelprpt_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly rfid: FieldRef<"PHP_ms_login", 'String'>
    readonly section: FieldRef<"PHP_ms_login", 'Int'>
    readonly sectionParent: FieldRef<"PHP_ms_login", 'Int'>
    readonly categoryShift: FieldRef<"PHP_ms_login", 'String'>
    readonly isCS: FieldRef<"PHP_ms_login", 'Int'>
    readonly facebook_URL: FieldRef<"PHP_ms_login", 'String'>
    readonly instagram_URL: FieldRef<"PHP_ms_login", 'String'>
    readonly limaes_level: FieldRef<"PHP_ms_login", 'Int'>
    readonly iot_skb: FieldRef<"PHP_ms_login", 'Int'>
    readonly lims_oto: FieldRef<"PHP_ms_login", 'String'>
    readonly gmp_apps: FieldRef<"PHP_ms_login", 'Int'>
    readonly gen_apps: FieldRef<"PHP_ms_login", 'Int'>
    readonly id_telegram: FieldRef<"PHP_ms_login", 'String'>
    readonly head1: FieldRef<"PHP_ms_login", 'String'>
    readonly head2: FieldRef<"PHP_ms_login", 'String'>
    readonly head3: FieldRef<"PHP_ms_login", 'String'>
    readonly isEmployee: FieldRef<"PHP_ms_login", 'Int'>
    readonly apar_apps: FieldRef<"PHP_ms_login", 'Int'>
    readonly qa_apk: FieldRef<"PHP_ms_login", 'Int'>
    readonly role_wp: FieldRef<"PHP_ms_login", 'String'>
    readonly qa_lims_al4: FieldRef<"PHP_ms_login", 'Int'>
    readonly is_temporary_account: FieldRef<"PHP_ms_login", 'Int'>
    readonly expired_date_temp: FieldRef<"PHP_ms_login", 'DateTime'>
    readonly nik_intern: FieldRef<"PHP_ms_login", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PHP_ms_login findUnique
   */
  export type PHP_ms_loginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHP_ms_login
     */
    select?: PHP_ms_loginSelect<ExtArgs> | null
    /**
     * Filter, which PHP_ms_login to fetch.
     */
    where: PHP_ms_loginWhereUniqueInput
  }

  /**
   * PHP_ms_login findUniqueOrThrow
   */
  export type PHP_ms_loginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHP_ms_login
     */
    select?: PHP_ms_loginSelect<ExtArgs> | null
    /**
     * Filter, which PHP_ms_login to fetch.
     */
    where: PHP_ms_loginWhereUniqueInput
  }

  /**
   * PHP_ms_login findFirst
   */
  export type PHP_ms_loginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHP_ms_login
     */
    select?: PHP_ms_loginSelect<ExtArgs> | null
    /**
     * Filter, which PHP_ms_login to fetch.
     */
    where?: PHP_ms_loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PHP_ms_logins to fetch.
     */
    orderBy?: PHP_ms_loginOrderByWithRelationInput | PHP_ms_loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PHP_ms_logins.
     */
    cursor?: PHP_ms_loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PHP_ms_logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PHP_ms_logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PHP_ms_logins.
     */
    distinct?: PHP_ms_loginScalarFieldEnum | PHP_ms_loginScalarFieldEnum[]
  }

  /**
   * PHP_ms_login findFirstOrThrow
   */
  export type PHP_ms_loginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHP_ms_login
     */
    select?: PHP_ms_loginSelect<ExtArgs> | null
    /**
     * Filter, which PHP_ms_login to fetch.
     */
    where?: PHP_ms_loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PHP_ms_logins to fetch.
     */
    orderBy?: PHP_ms_loginOrderByWithRelationInput | PHP_ms_loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PHP_ms_logins.
     */
    cursor?: PHP_ms_loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PHP_ms_logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PHP_ms_logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PHP_ms_logins.
     */
    distinct?: PHP_ms_loginScalarFieldEnum | PHP_ms_loginScalarFieldEnum[]
  }

  /**
   * PHP_ms_login findMany
   */
  export type PHP_ms_loginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHP_ms_login
     */
    select?: PHP_ms_loginSelect<ExtArgs> | null
    /**
     * Filter, which PHP_ms_logins to fetch.
     */
    where?: PHP_ms_loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PHP_ms_logins to fetch.
     */
    orderBy?: PHP_ms_loginOrderByWithRelationInput | PHP_ms_loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PHP_ms_logins.
     */
    cursor?: PHP_ms_loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PHP_ms_logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PHP_ms_logins.
     */
    skip?: number
    distinct?: PHP_ms_loginScalarFieldEnum | PHP_ms_loginScalarFieldEnum[]
  }

  /**
   * PHP_ms_login create
   */
  export type PHP_ms_loginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHP_ms_login
     */
    select?: PHP_ms_loginSelect<ExtArgs> | null
    /**
     * The data needed to create a PHP_ms_login.
     */
    data: XOR<PHP_ms_loginCreateInput, PHP_ms_loginUncheckedCreateInput>
  }

  /**
   * PHP_ms_login createMany
   */
  export type PHP_ms_loginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PHP_ms_logins.
     */
    data: PHP_ms_loginCreateManyInput | PHP_ms_loginCreateManyInput[]
  }

  /**
   * PHP_ms_login update
   */
  export type PHP_ms_loginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHP_ms_login
     */
    select?: PHP_ms_loginSelect<ExtArgs> | null
    /**
     * The data needed to update a PHP_ms_login.
     */
    data: XOR<PHP_ms_loginUpdateInput, PHP_ms_loginUncheckedUpdateInput>
    /**
     * Choose, which PHP_ms_login to update.
     */
    where: PHP_ms_loginWhereUniqueInput
  }

  /**
   * PHP_ms_login updateMany
   */
  export type PHP_ms_loginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PHP_ms_logins.
     */
    data: XOR<PHP_ms_loginUpdateManyMutationInput, PHP_ms_loginUncheckedUpdateManyInput>
    /**
     * Filter which PHP_ms_logins to update
     */
    where?: PHP_ms_loginWhereInput
  }

  /**
   * PHP_ms_login upsert
   */
  export type PHP_ms_loginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHP_ms_login
     */
    select?: PHP_ms_loginSelect<ExtArgs> | null
    /**
     * The filter to search for the PHP_ms_login to update in case it exists.
     */
    where: PHP_ms_loginWhereUniqueInput
    /**
     * In case the PHP_ms_login found by the `where` argument doesn't exist, create a new PHP_ms_login with this data.
     */
    create: XOR<PHP_ms_loginCreateInput, PHP_ms_loginUncheckedCreateInput>
    /**
     * In case the PHP_ms_login was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PHP_ms_loginUpdateInput, PHP_ms_loginUncheckedUpdateInput>
  }

  /**
   * PHP_ms_login delete
   */
  export type PHP_ms_loginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHP_ms_login
     */
    select?: PHP_ms_loginSelect<ExtArgs> | null
    /**
     * Filter which PHP_ms_login to delete.
     */
    where: PHP_ms_loginWhereUniqueInput
  }

  /**
   * PHP_ms_login deleteMany
   */
  export type PHP_ms_loginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PHP_ms_logins to delete
     */
    where?: PHP_ms_loginWhereInput
  }

  /**
   * PHP_ms_login without action
   */
  export type PHP_ms_loginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHP_ms_login
     */
    select?: PHP_ms_loginSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PHP_ms_loginScalarFieldEnum: {
    lg_nik: 'lg_nik',
    lg_name: 'lg_name',
    lg_password: 'lg_password',
    lg_department: 'lg_department',
    lg_location: 'lg_location',
    lg_product: 'lg_product',
    lg_email_aio: 'lg_email_aio',
    lg_email_private: 'lg_email_private',
    lg_update: 'lg_update',
    lg_propose: 'lg_propose',
    lg_admin: 'lg_admin',
    lg_retur: 'lg_retur',
    lg_retur_admin: 'lg_retur_admin',
    lg_level: 'lg_level',
    lg_type: 'lg_type',
    lg_ga: 'lg_ga',
    lg_aktif: 'lg_aktif',
    lg_costcenter: 'lg_costcenter',
    protean_location: 'protean_location',
    protean_department: 'protean_department',
    lg_profitcenter: 'lg_profitcenter',
    lg_corp_cc: 'lg_corp_cc',
    tgl_rfc: 'tgl_rfc',
    lg_faktur: 'lg_faktur',
    lg_claim_track: 'lg_claim_track',
    n_photo: 'n_photo',
    n_phone: 'n_phone',
    n_level: 'n_level',
    n_info: 'n_info',
    ifi_level: 'ifi_level',
    beclaim_level: 'beclaim_level',
    cms_level: 'cms_level',
    qc_level: 'qc_level',
    invoice_level: 'invoice_level',
    visit_level: 'visit_level',
    paper_level: 'paper_level',
    apps_aktif: 'apps_aktif',
    beclaim_kjy_level: 'beclaim_kjy_level',
    ifi_kjy_level: 'ifi_kjy_level',
    invoice_kjy_level: 'invoice_kjy_level',
    beclaim_ho_level: 'beclaim_ho_level',
    lg_entitas: 'lg_entitas',
    ihelprpt_level: 'ihelprpt_level',
    rfid: 'rfid',
    section: 'section',
    sectionParent: 'sectionParent',
    categoryShift: 'categoryShift',
    isCS: 'isCS',
    facebook_URL: 'facebook_URL',
    instagram_URL: 'instagram_URL',
    limaes_level: 'limaes_level',
    iot_skb: 'iot_skb',
    lims_oto: 'lims_oto',
    gmp_apps: 'gmp_apps',
    gen_apps: 'gen_apps',
    id_telegram: 'id_telegram',
    head1: 'head1',
    head2: 'head2',
    head3: 'head3',
    isEmployee: 'isEmployee',
    apar_apps: 'apar_apps',
    qa_apk: 'qa_apk',
    role_wp: 'role_wp',
    qa_lims_al4: 'qa_lims_al4',
    is_temporary_account: 'is_temporary_account',
    expired_date_temp: 'expired_date_temp',
    nik_intern: 'nik_intern'
  };

  export type PHP_ms_loginScalarFieldEnum = (typeof PHP_ms_loginScalarFieldEnum)[keyof typeof PHP_ms_loginScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PHP_ms_loginWhereInput = {
    AND?: PHP_ms_loginWhereInput | PHP_ms_loginWhereInput[]
    OR?: PHP_ms_loginWhereInput[]
    NOT?: PHP_ms_loginWhereInput | PHP_ms_loginWhereInput[]
    lg_nik?: StringFilter<"PHP_ms_login"> | string
    lg_name?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_password?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_department?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_location?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_product?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_email_aio?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_email_private?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_update?: DateTimeNullableFilter<"PHP_ms_login"> | Date | string | null
    lg_propose?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_admin?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_retur?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_retur_admin?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_level?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_type?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_ga?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_aktif?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_costcenter?: StringNullableFilter<"PHP_ms_login"> | string | null
    protean_location?: StringNullableFilter<"PHP_ms_login"> | string | null
    protean_department?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_profitcenter?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_corp_cc?: StringNullableFilter<"PHP_ms_login"> | string | null
    tgl_rfc?: DateTimeNullableFilter<"PHP_ms_login"> | Date | string | null
    lg_faktur?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_claim_track?: StringNullableFilter<"PHP_ms_login"> | string | null
    n_photo?: StringNullableFilter<"PHP_ms_login"> | string | null
    n_phone?: StringNullableFilter<"PHP_ms_login"> | string | null
    n_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    n_info?: StringNullableFilter<"PHP_ms_login"> | string | null
    ifi_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    beclaim_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    cms_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    qc_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    invoice_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    visit_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    paper_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    apps_aktif?: IntNullableFilter<"PHP_ms_login"> | number | null
    beclaim_kjy_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    ifi_kjy_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    invoice_kjy_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    beclaim_ho_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    lg_entitas?: StringNullableFilter<"PHP_ms_login"> | string | null
    ihelprpt_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    rfid?: StringNullableFilter<"PHP_ms_login"> | string | null
    section?: IntNullableFilter<"PHP_ms_login"> | number | null
    sectionParent?: IntNullableFilter<"PHP_ms_login"> | number | null
    categoryShift?: StringNullableFilter<"PHP_ms_login"> | string | null
    isCS?: IntNullableFilter<"PHP_ms_login"> | number | null
    facebook_URL?: StringNullableFilter<"PHP_ms_login"> | string | null
    instagram_URL?: StringNullableFilter<"PHP_ms_login"> | string | null
    limaes_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    iot_skb?: IntNullableFilter<"PHP_ms_login"> | number | null
    lims_oto?: StringNullableFilter<"PHP_ms_login"> | string | null
    gmp_apps?: IntNullableFilter<"PHP_ms_login"> | number | null
    gen_apps?: IntNullableFilter<"PHP_ms_login"> | number | null
    id_telegram?: StringNullableFilter<"PHP_ms_login"> | string | null
    head1?: StringNullableFilter<"PHP_ms_login"> | string | null
    head2?: StringNullableFilter<"PHP_ms_login"> | string | null
    head3?: StringNullableFilter<"PHP_ms_login"> | string | null
    isEmployee?: IntNullableFilter<"PHP_ms_login"> | number | null
    apar_apps?: IntNullableFilter<"PHP_ms_login"> | number | null
    qa_apk?: IntNullableFilter<"PHP_ms_login"> | number | null
    role_wp?: StringNullableFilter<"PHP_ms_login"> | string | null
    qa_lims_al4?: IntNullableFilter<"PHP_ms_login"> | number | null
    is_temporary_account?: IntNullableFilter<"PHP_ms_login"> | number | null
    expired_date_temp?: DateTimeNullableFilter<"PHP_ms_login"> | Date | string | null
    nik_intern?: StringNullableFilter<"PHP_ms_login"> | string | null
  }

  export type PHP_ms_loginOrderByWithRelationInput = {
    lg_nik?: SortOrder
    lg_name?: SortOrderInput | SortOrder
    lg_password?: SortOrderInput | SortOrder
    lg_department?: SortOrderInput | SortOrder
    lg_location?: SortOrderInput | SortOrder
    lg_product?: SortOrderInput | SortOrder
    lg_email_aio?: SortOrderInput | SortOrder
    lg_email_private?: SortOrderInput | SortOrder
    lg_update?: SortOrderInput | SortOrder
    lg_propose?: SortOrderInput | SortOrder
    lg_admin?: SortOrderInput | SortOrder
    lg_retur?: SortOrderInput | SortOrder
    lg_retur_admin?: SortOrderInput | SortOrder
    lg_level?: SortOrderInput | SortOrder
    lg_type?: SortOrderInput | SortOrder
    lg_ga?: SortOrderInput | SortOrder
    lg_aktif?: SortOrderInput | SortOrder
    lg_costcenter?: SortOrderInput | SortOrder
    protean_location?: SortOrderInput | SortOrder
    protean_department?: SortOrderInput | SortOrder
    lg_profitcenter?: SortOrderInput | SortOrder
    lg_corp_cc?: SortOrderInput | SortOrder
    tgl_rfc?: SortOrderInput | SortOrder
    lg_faktur?: SortOrderInput | SortOrder
    lg_claim_track?: SortOrderInput | SortOrder
    n_photo?: SortOrderInput | SortOrder
    n_phone?: SortOrderInput | SortOrder
    n_level?: SortOrderInput | SortOrder
    n_info?: SortOrderInput | SortOrder
    ifi_level?: SortOrderInput | SortOrder
    beclaim_level?: SortOrderInput | SortOrder
    cms_level?: SortOrderInput | SortOrder
    qc_level?: SortOrderInput | SortOrder
    invoice_level?: SortOrderInput | SortOrder
    visit_level?: SortOrderInput | SortOrder
    paper_level?: SortOrderInput | SortOrder
    apps_aktif?: SortOrderInput | SortOrder
    beclaim_kjy_level?: SortOrderInput | SortOrder
    ifi_kjy_level?: SortOrderInput | SortOrder
    invoice_kjy_level?: SortOrderInput | SortOrder
    beclaim_ho_level?: SortOrderInput | SortOrder
    lg_entitas?: SortOrderInput | SortOrder
    ihelprpt_level?: SortOrderInput | SortOrder
    rfid?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    sectionParent?: SortOrderInput | SortOrder
    categoryShift?: SortOrderInput | SortOrder
    isCS?: SortOrderInput | SortOrder
    facebook_URL?: SortOrderInput | SortOrder
    instagram_URL?: SortOrderInput | SortOrder
    limaes_level?: SortOrderInput | SortOrder
    iot_skb?: SortOrderInput | SortOrder
    lims_oto?: SortOrderInput | SortOrder
    gmp_apps?: SortOrderInput | SortOrder
    gen_apps?: SortOrderInput | SortOrder
    id_telegram?: SortOrderInput | SortOrder
    head1?: SortOrderInput | SortOrder
    head2?: SortOrderInput | SortOrder
    head3?: SortOrderInput | SortOrder
    isEmployee?: SortOrderInput | SortOrder
    apar_apps?: SortOrderInput | SortOrder
    qa_apk?: SortOrderInput | SortOrder
    role_wp?: SortOrderInput | SortOrder
    qa_lims_al4?: SortOrderInput | SortOrder
    is_temporary_account?: SortOrderInput | SortOrder
    expired_date_temp?: SortOrderInput | SortOrder
    nik_intern?: SortOrderInput | SortOrder
  }

  export type PHP_ms_loginWhereUniqueInput = Prisma.AtLeast<{
    lg_nik?: string
    AND?: PHP_ms_loginWhereInput | PHP_ms_loginWhereInput[]
    OR?: PHP_ms_loginWhereInput[]
    NOT?: PHP_ms_loginWhereInput | PHP_ms_loginWhereInput[]
    lg_name?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_password?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_department?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_location?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_product?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_email_aio?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_email_private?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_update?: DateTimeNullableFilter<"PHP_ms_login"> | Date | string | null
    lg_propose?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_admin?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_retur?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_retur_admin?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_level?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_type?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_ga?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_aktif?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_costcenter?: StringNullableFilter<"PHP_ms_login"> | string | null
    protean_location?: StringNullableFilter<"PHP_ms_login"> | string | null
    protean_department?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_profitcenter?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_corp_cc?: StringNullableFilter<"PHP_ms_login"> | string | null
    tgl_rfc?: DateTimeNullableFilter<"PHP_ms_login"> | Date | string | null
    lg_faktur?: StringNullableFilter<"PHP_ms_login"> | string | null
    lg_claim_track?: StringNullableFilter<"PHP_ms_login"> | string | null
    n_photo?: StringNullableFilter<"PHP_ms_login"> | string | null
    n_phone?: StringNullableFilter<"PHP_ms_login"> | string | null
    n_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    n_info?: StringNullableFilter<"PHP_ms_login"> | string | null
    ifi_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    beclaim_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    cms_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    qc_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    invoice_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    visit_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    paper_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    apps_aktif?: IntNullableFilter<"PHP_ms_login"> | number | null
    beclaim_kjy_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    ifi_kjy_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    invoice_kjy_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    beclaim_ho_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    lg_entitas?: StringNullableFilter<"PHP_ms_login"> | string | null
    ihelprpt_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    rfid?: StringNullableFilter<"PHP_ms_login"> | string | null
    section?: IntNullableFilter<"PHP_ms_login"> | number | null
    sectionParent?: IntNullableFilter<"PHP_ms_login"> | number | null
    categoryShift?: StringNullableFilter<"PHP_ms_login"> | string | null
    isCS?: IntNullableFilter<"PHP_ms_login"> | number | null
    facebook_URL?: StringNullableFilter<"PHP_ms_login"> | string | null
    instagram_URL?: StringNullableFilter<"PHP_ms_login"> | string | null
    limaes_level?: IntNullableFilter<"PHP_ms_login"> | number | null
    iot_skb?: IntNullableFilter<"PHP_ms_login"> | number | null
    lims_oto?: StringNullableFilter<"PHP_ms_login"> | string | null
    gmp_apps?: IntNullableFilter<"PHP_ms_login"> | number | null
    gen_apps?: IntNullableFilter<"PHP_ms_login"> | number | null
    id_telegram?: StringNullableFilter<"PHP_ms_login"> | string | null
    head1?: StringNullableFilter<"PHP_ms_login"> | string | null
    head2?: StringNullableFilter<"PHP_ms_login"> | string | null
    head3?: StringNullableFilter<"PHP_ms_login"> | string | null
    isEmployee?: IntNullableFilter<"PHP_ms_login"> | number | null
    apar_apps?: IntNullableFilter<"PHP_ms_login"> | number | null
    qa_apk?: IntNullableFilter<"PHP_ms_login"> | number | null
    role_wp?: StringNullableFilter<"PHP_ms_login"> | string | null
    qa_lims_al4?: IntNullableFilter<"PHP_ms_login"> | number | null
    is_temporary_account?: IntNullableFilter<"PHP_ms_login"> | number | null
    expired_date_temp?: DateTimeNullableFilter<"PHP_ms_login"> | Date | string | null
    nik_intern?: StringNullableFilter<"PHP_ms_login"> | string | null
  }, "lg_nik" | "lg_nik">

  export type PHP_ms_loginOrderByWithAggregationInput = {
    lg_nik?: SortOrder
    lg_name?: SortOrderInput | SortOrder
    lg_password?: SortOrderInput | SortOrder
    lg_department?: SortOrderInput | SortOrder
    lg_location?: SortOrderInput | SortOrder
    lg_product?: SortOrderInput | SortOrder
    lg_email_aio?: SortOrderInput | SortOrder
    lg_email_private?: SortOrderInput | SortOrder
    lg_update?: SortOrderInput | SortOrder
    lg_propose?: SortOrderInput | SortOrder
    lg_admin?: SortOrderInput | SortOrder
    lg_retur?: SortOrderInput | SortOrder
    lg_retur_admin?: SortOrderInput | SortOrder
    lg_level?: SortOrderInput | SortOrder
    lg_type?: SortOrderInput | SortOrder
    lg_ga?: SortOrderInput | SortOrder
    lg_aktif?: SortOrderInput | SortOrder
    lg_costcenter?: SortOrderInput | SortOrder
    protean_location?: SortOrderInput | SortOrder
    protean_department?: SortOrderInput | SortOrder
    lg_profitcenter?: SortOrderInput | SortOrder
    lg_corp_cc?: SortOrderInput | SortOrder
    tgl_rfc?: SortOrderInput | SortOrder
    lg_faktur?: SortOrderInput | SortOrder
    lg_claim_track?: SortOrderInput | SortOrder
    n_photo?: SortOrderInput | SortOrder
    n_phone?: SortOrderInput | SortOrder
    n_level?: SortOrderInput | SortOrder
    n_info?: SortOrderInput | SortOrder
    ifi_level?: SortOrderInput | SortOrder
    beclaim_level?: SortOrderInput | SortOrder
    cms_level?: SortOrderInput | SortOrder
    qc_level?: SortOrderInput | SortOrder
    invoice_level?: SortOrderInput | SortOrder
    visit_level?: SortOrderInput | SortOrder
    paper_level?: SortOrderInput | SortOrder
    apps_aktif?: SortOrderInput | SortOrder
    beclaim_kjy_level?: SortOrderInput | SortOrder
    ifi_kjy_level?: SortOrderInput | SortOrder
    invoice_kjy_level?: SortOrderInput | SortOrder
    beclaim_ho_level?: SortOrderInput | SortOrder
    lg_entitas?: SortOrderInput | SortOrder
    ihelprpt_level?: SortOrderInput | SortOrder
    rfid?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    sectionParent?: SortOrderInput | SortOrder
    categoryShift?: SortOrderInput | SortOrder
    isCS?: SortOrderInput | SortOrder
    facebook_URL?: SortOrderInput | SortOrder
    instagram_URL?: SortOrderInput | SortOrder
    limaes_level?: SortOrderInput | SortOrder
    iot_skb?: SortOrderInput | SortOrder
    lims_oto?: SortOrderInput | SortOrder
    gmp_apps?: SortOrderInput | SortOrder
    gen_apps?: SortOrderInput | SortOrder
    id_telegram?: SortOrderInput | SortOrder
    head1?: SortOrderInput | SortOrder
    head2?: SortOrderInput | SortOrder
    head3?: SortOrderInput | SortOrder
    isEmployee?: SortOrderInput | SortOrder
    apar_apps?: SortOrderInput | SortOrder
    qa_apk?: SortOrderInput | SortOrder
    role_wp?: SortOrderInput | SortOrder
    qa_lims_al4?: SortOrderInput | SortOrder
    is_temporary_account?: SortOrderInput | SortOrder
    expired_date_temp?: SortOrderInput | SortOrder
    nik_intern?: SortOrderInput | SortOrder
    _count?: PHP_ms_loginCountOrderByAggregateInput
    _avg?: PHP_ms_loginAvgOrderByAggregateInput
    _max?: PHP_ms_loginMaxOrderByAggregateInput
    _min?: PHP_ms_loginMinOrderByAggregateInput
    _sum?: PHP_ms_loginSumOrderByAggregateInput
  }

  export type PHP_ms_loginScalarWhereWithAggregatesInput = {
    AND?: PHP_ms_loginScalarWhereWithAggregatesInput | PHP_ms_loginScalarWhereWithAggregatesInput[]
    OR?: PHP_ms_loginScalarWhereWithAggregatesInput[]
    NOT?: PHP_ms_loginScalarWhereWithAggregatesInput | PHP_ms_loginScalarWhereWithAggregatesInput[]
    lg_nik?: StringWithAggregatesFilter<"PHP_ms_login"> | string
    lg_name?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_password?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_department?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_location?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_product?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_email_aio?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_email_private?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_update?: DateTimeNullableWithAggregatesFilter<"PHP_ms_login"> | Date | string | null
    lg_propose?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_admin?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_retur?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_retur_admin?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_level?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_type?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_ga?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_aktif?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_costcenter?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    protean_location?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    protean_department?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_profitcenter?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_corp_cc?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    tgl_rfc?: DateTimeNullableWithAggregatesFilter<"PHP_ms_login"> | Date | string | null
    lg_faktur?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    lg_claim_track?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    n_photo?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    n_phone?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    n_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    n_info?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    ifi_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    beclaim_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    cms_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    qc_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    invoice_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    visit_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    paper_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    apps_aktif?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    beclaim_kjy_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    ifi_kjy_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    invoice_kjy_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    beclaim_ho_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    lg_entitas?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    ihelprpt_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    rfid?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    section?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    sectionParent?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    categoryShift?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    isCS?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    facebook_URL?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    instagram_URL?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    limaes_level?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    iot_skb?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    lims_oto?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    gmp_apps?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    gen_apps?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    id_telegram?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    head1?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    head2?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    head3?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    isEmployee?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    apar_apps?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    qa_apk?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    role_wp?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
    qa_lims_al4?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    is_temporary_account?: IntNullableWithAggregatesFilter<"PHP_ms_login"> | number | null
    expired_date_temp?: DateTimeNullableWithAggregatesFilter<"PHP_ms_login"> | Date | string | null
    nik_intern?: StringNullableWithAggregatesFilter<"PHP_ms_login"> | string | null
  }

  export type PHP_ms_loginCreateInput = {
    lg_nik: string
    lg_name?: string | null
    lg_password?: string | null
    lg_department?: string | null
    lg_location?: string | null
    lg_product?: string | null
    lg_email_aio?: string | null
    lg_email_private?: string | null
    lg_update?: Date | string | null
    lg_propose?: string | null
    lg_admin?: string | null
    lg_retur?: string | null
    lg_retur_admin?: string | null
    lg_level?: string | null
    lg_type?: string | null
    lg_ga?: string | null
    lg_aktif?: string | null
    lg_costcenter?: string | null
    protean_location?: string | null
    protean_department?: string | null
    lg_profitcenter?: string | null
    lg_corp_cc?: string | null
    tgl_rfc?: Date | string | null
    lg_faktur?: string | null
    lg_claim_track?: string | null
    n_photo?: string | null
    n_phone?: string | null
    n_level?: number | null
    n_info?: string | null
    ifi_level?: number | null
    beclaim_level?: number | null
    cms_level?: number | null
    qc_level?: number | null
    invoice_level?: number | null
    visit_level?: number | null
    paper_level?: number | null
    apps_aktif?: number | null
    beclaim_kjy_level?: number | null
    ifi_kjy_level?: number | null
    invoice_kjy_level?: number | null
    beclaim_ho_level?: number | null
    lg_entitas?: string | null
    ihelprpt_level?: number | null
    rfid?: string | null
    section?: number | null
    sectionParent?: number | null
    categoryShift?: string | null
    isCS?: number | null
    facebook_URL?: string | null
    instagram_URL?: string | null
    limaes_level?: number | null
    iot_skb?: number | null
    lims_oto?: string | null
    gmp_apps?: number | null
    gen_apps?: number | null
    id_telegram?: string | null
    head1?: string | null
    head2?: string | null
    head3?: string | null
    isEmployee?: number | null
    apar_apps?: number | null
    qa_apk?: number | null
    role_wp?: string | null
    qa_lims_al4?: number | null
    is_temporary_account?: number | null
    expired_date_temp?: Date | string | null
    nik_intern?: string | null
  }

  export type PHP_ms_loginUncheckedCreateInput = {
    lg_nik: string
    lg_name?: string | null
    lg_password?: string | null
    lg_department?: string | null
    lg_location?: string | null
    lg_product?: string | null
    lg_email_aio?: string | null
    lg_email_private?: string | null
    lg_update?: Date | string | null
    lg_propose?: string | null
    lg_admin?: string | null
    lg_retur?: string | null
    lg_retur_admin?: string | null
    lg_level?: string | null
    lg_type?: string | null
    lg_ga?: string | null
    lg_aktif?: string | null
    lg_costcenter?: string | null
    protean_location?: string | null
    protean_department?: string | null
    lg_profitcenter?: string | null
    lg_corp_cc?: string | null
    tgl_rfc?: Date | string | null
    lg_faktur?: string | null
    lg_claim_track?: string | null
    n_photo?: string | null
    n_phone?: string | null
    n_level?: number | null
    n_info?: string | null
    ifi_level?: number | null
    beclaim_level?: number | null
    cms_level?: number | null
    qc_level?: number | null
    invoice_level?: number | null
    visit_level?: number | null
    paper_level?: number | null
    apps_aktif?: number | null
    beclaim_kjy_level?: number | null
    ifi_kjy_level?: number | null
    invoice_kjy_level?: number | null
    beclaim_ho_level?: number | null
    lg_entitas?: string | null
    ihelprpt_level?: number | null
    rfid?: string | null
    section?: number | null
    sectionParent?: number | null
    categoryShift?: string | null
    isCS?: number | null
    facebook_URL?: string | null
    instagram_URL?: string | null
    limaes_level?: number | null
    iot_skb?: number | null
    lims_oto?: string | null
    gmp_apps?: number | null
    gen_apps?: number | null
    id_telegram?: string | null
    head1?: string | null
    head2?: string | null
    head3?: string | null
    isEmployee?: number | null
    apar_apps?: number | null
    qa_apk?: number | null
    role_wp?: string | null
    qa_lims_al4?: number | null
    is_temporary_account?: number | null
    expired_date_temp?: Date | string | null
    nik_intern?: string | null
  }

  export type PHP_ms_loginUpdateInput = {
    lg_nik?: StringFieldUpdateOperationsInput | string
    lg_name?: NullableStringFieldUpdateOperationsInput | string | null
    lg_password?: NullableStringFieldUpdateOperationsInput | string | null
    lg_department?: NullableStringFieldUpdateOperationsInput | string | null
    lg_location?: NullableStringFieldUpdateOperationsInput | string | null
    lg_product?: NullableStringFieldUpdateOperationsInput | string | null
    lg_email_aio?: NullableStringFieldUpdateOperationsInput | string | null
    lg_email_private?: NullableStringFieldUpdateOperationsInput | string | null
    lg_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lg_propose?: NullableStringFieldUpdateOperationsInput | string | null
    lg_admin?: NullableStringFieldUpdateOperationsInput | string | null
    lg_retur?: NullableStringFieldUpdateOperationsInput | string | null
    lg_retur_admin?: NullableStringFieldUpdateOperationsInput | string | null
    lg_level?: NullableStringFieldUpdateOperationsInput | string | null
    lg_type?: NullableStringFieldUpdateOperationsInput | string | null
    lg_ga?: NullableStringFieldUpdateOperationsInput | string | null
    lg_aktif?: NullableStringFieldUpdateOperationsInput | string | null
    lg_costcenter?: NullableStringFieldUpdateOperationsInput | string | null
    protean_location?: NullableStringFieldUpdateOperationsInput | string | null
    protean_department?: NullableStringFieldUpdateOperationsInput | string | null
    lg_profitcenter?: NullableStringFieldUpdateOperationsInput | string | null
    lg_corp_cc?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_rfc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lg_faktur?: NullableStringFieldUpdateOperationsInput | string | null
    lg_claim_track?: NullableStringFieldUpdateOperationsInput | string | null
    n_photo?: NullableStringFieldUpdateOperationsInput | string | null
    n_phone?: NullableStringFieldUpdateOperationsInput | string | null
    n_level?: NullableIntFieldUpdateOperationsInput | number | null
    n_info?: NullableStringFieldUpdateOperationsInput | string | null
    ifi_level?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_level?: NullableIntFieldUpdateOperationsInput | number | null
    cms_level?: NullableIntFieldUpdateOperationsInput | number | null
    qc_level?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_level?: NullableIntFieldUpdateOperationsInput | number | null
    visit_level?: NullableIntFieldUpdateOperationsInput | number | null
    paper_level?: NullableIntFieldUpdateOperationsInput | number | null
    apps_aktif?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    ifi_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_ho_level?: NullableIntFieldUpdateOperationsInput | number | null
    lg_entitas?: NullableStringFieldUpdateOperationsInput | string | null
    ihelprpt_level?: NullableIntFieldUpdateOperationsInput | number | null
    rfid?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableIntFieldUpdateOperationsInput | number | null
    sectionParent?: NullableIntFieldUpdateOperationsInput | number | null
    categoryShift?: NullableStringFieldUpdateOperationsInput | string | null
    isCS?: NullableIntFieldUpdateOperationsInput | number | null
    facebook_URL?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_URL?: NullableStringFieldUpdateOperationsInput | string | null
    limaes_level?: NullableIntFieldUpdateOperationsInput | number | null
    iot_skb?: NullableIntFieldUpdateOperationsInput | number | null
    lims_oto?: NullableStringFieldUpdateOperationsInput | string | null
    gmp_apps?: NullableIntFieldUpdateOperationsInput | number | null
    gen_apps?: NullableIntFieldUpdateOperationsInput | number | null
    id_telegram?: NullableStringFieldUpdateOperationsInput | string | null
    head1?: NullableStringFieldUpdateOperationsInput | string | null
    head2?: NullableStringFieldUpdateOperationsInput | string | null
    head3?: NullableStringFieldUpdateOperationsInput | string | null
    isEmployee?: NullableIntFieldUpdateOperationsInput | number | null
    apar_apps?: NullableIntFieldUpdateOperationsInput | number | null
    qa_apk?: NullableIntFieldUpdateOperationsInput | number | null
    role_wp?: NullableStringFieldUpdateOperationsInput | string | null
    qa_lims_al4?: NullableIntFieldUpdateOperationsInput | number | null
    is_temporary_account?: NullableIntFieldUpdateOperationsInput | number | null
    expired_date_temp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nik_intern?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PHP_ms_loginUncheckedUpdateInput = {
    lg_nik?: StringFieldUpdateOperationsInput | string
    lg_name?: NullableStringFieldUpdateOperationsInput | string | null
    lg_password?: NullableStringFieldUpdateOperationsInput | string | null
    lg_department?: NullableStringFieldUpdateOperationsInput | string | null
    lg_location?: NullableStringFieldUpdateOperationsInput | string | null
    lg_product?: NullableStringFieldUpdateOperationsInput | string | null
    lg_email_aio?: NullableStringFieldUpdateOperationsInput | string | null
    lg_email_private?: NullableStringFieldUpdateOperationsInput | string | null
    lg_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lg_propose?: NullableStringFieldUpdateOperationsInput | string | null
    lg_admin?: NullableStringFieldUpdateOperationsInput | string | null
    lg_retur?: NullableStringFieldUpdateOperationsInput | string | null
    lg_retur_admin?: NullableStringFieldUpdateOperationsInput | string | null
    lg_level?: NullableStringFieldUpdateOperationsInput | string | null
    lg_type?: NullableStringFieldUpdateOperationsInput | string | null
    lg_ga?: NullableStringFieldUpdateOperationsInput | string | null
    lg_aktif?: NullableStringFieldUpdateOperationsInput | string | null
    lg_costcenter?: NullableStringFieldUpdateOperationsInput | string | null
    protean_location?: NullableStringFieldUpdateOperationsInput | string | null
    protean_department?: NullableStringFieldUpdateOperationsInput | string | null
    lg_profitcenter?: NullableStringFieldUpdateOperationsInput | string | null
    lg_corp_cc?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_rfc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lg_faktur?: NullableStringFieldUpdateOperationsInput | string | null
    lg_claim_track?: NullableStringFieldUpdateOperationsInput | string | null
    n_photo?: NullableStringFieldUpdateOperationsInput | string | null
    n_phone?: NullableStringFieldUpdateOperationsInput | string | null
    n_level?: NullableIntFieldUpdateOperationsInput | number | null
    n_info?: NullableStringFieldUpdateOperationsInput | string | null
    ifi_level?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_level?: NullableIntFieldUpdateOperationsInput | number | null
    cms_level?: NullableIntFieldUpdateOperationsInput | number | null
    qc_level?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_level?: NullableIntFieldUpdateOperationsInput | number | null
    visit_level?: NullableIntFieldUpdateOperationsInput | number | null
    paper_level?: NullableIntFieldUpdateOperationsInput | number | null
    apps_aktif?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    ifi_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_ho_level?: NullableIntFieldUpdateOperationsInput | number | null
    lg_entitas?: NullableStringFieldUpdateOperationsInput | string | null
    ihelprpt_level?: NullableIntFieldUpdateOperationsInput | number | null
    rfid?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableIntFieldUpdateOperationsInput | number | null
    sectionParent?: NullableIntFieldUpdateOperationsInput | number | null
    categoryShift?: NullableStringFieldUpdateOperationsInput | string | null
    isCS?: NullableIntFieldUpdateOperationsInput | number | null
    facebook_URL?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_URL?: NullableStringFieldUpdateOperationsInput | string | null
    limaes_level?: NullableIntFieldUpdateOperationsInput | number | null
    iot_skb?: NullableIntFieldUpdateOperationsInput | number | null
    lims_oto?: NullableStringFieldUpdateOperationsInput | string | null
    gmp_apps?: NullableIntFieldUpdateOperationsInput | number | null
    gen_apps?: NullableIntFieldUpdateOperationsInput | number | null
    id_telegram?: NullableStringFieldUpdateOperationsInput | string | null
    head1?: NullableStringFieldUpdateOperationsInput | string | null
    head2?: NullableStringFieldUpdateOperationsInput | string | null
    head3?: NullableStringFieldUpdateOperationsInput | string | null
    isEmployee?: NullableIntFieldUpdateOperationsInput | number | null
    apar_apps?: NullableIntFieldUpdateOperationsInput | number | null
    qa_apk?: NullableIntFieldUpdateOperationsInput | number | null
    role_wp?: NullableStringFieldUpdateOperationsInput | string | null
    qa_lims_al4?: NullableIntFieldUpdateOperationsInput | number | null
    is_temporary_account?: NullableIntFieldUpdateOperationsInput | number | null
    expired_date_temp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nik_intern?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PHP_ms_loginCreateManyInput = {
    lg_nik: string
    lg_name?: string | null
    lg_password?: string | null
    lg_department?: string | null
    lg_location?: string | null
    lg_product?: string | null
    lg_email_aio?: string | null
    lg_email_private?: string | null
    lg_update?: Date | string | null
    lg_propose?: string | null
    lg_admin?: string | null
    lg_retur?: string | null
    lg_retur_admin?: string | null
    lg_level?: string | null
    lg_type?: string | null
    lg_ga?: string | null
    lg_aktif?: string | null
    lg_costcenter?: string | null
    protean_location?: string | null
    protean_department?: string | null
    lg_profitcenter?: string | null
    lg_corp_cc?: string | null
    tgl_rfc?: Date | string | null
    lg_faktur?: string | null
    lg_claim_track?: string | null
    n_photo?: string | null
    n_phone?: string | null
    n_level?: number | null
    n_info?: string | null
    ifi_level?: number | null
    beclaim_level?: number | null
    cms_level?: number | null
    qc_level?: number | null
    invoice_level?: number | null
    visit_level?: number | null
    paper_level?: number | null
    apps_aktif?: number | null
    beclaim_kjy_level?: number | null
    ifi_kjy_level?: number | null
    invoice_kjy_level?: number | null
    beclaim_ho_level?: number | null
    lg_entitas?: string | null
    ihelprpt_level?: number | null
    rfid?: string | null
    section?: number | null
    sectionParent?: number | null
    categoryShift?: string | null
    isCS?: number | null
    facebook_URL?: string | null
    instagram_URL?: string | null
    limaes_level?: number | null
    iot_skb?: number | null
    lims_oto?: string | null
    gmp_apps?: number | null
    gen_apps?: number | null
    id_telegram?: string | null
    head1?: string | null
    head2?: string | null
    head3?: string | null
    isEmployee?: number | null
    apar_apps?: number | null
    qa_apk?: number | null
    role_wp?: string | null
    qa_lims_al4?: number | null
    is_temporary_account?: number | null
    expired_date_temp?: Date | string | null
    nik_intern?: string | null
  }

  export type PHP_ms_loginUpdateManyMutationInput = {
    lg_nik?: StringFieldUpdateOperationsInput | string
    lg_name?: NullableStringFieldUpdateOperationsInput | string | null
    lg_password?: NullableStringFieldUpdateOperationsInput | string | null
    lg_department?: NullableStringFieldUpdateOperationsInput | string | null
    lg_location?: NullableStringFieldUpdateOperationsInput | string | null
    lg_product?: NullableStringFieldUpdateOperationsInput | string | null
    lg_email_aio?: NullableStringFieldUpdateOperationsInput | string | null
    lg_email_private?: NullableStringFieldUpdateOperationsInput | string | null
    lg_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lg_propose?: NullableStringFieldUpdateOperationsInput | string | null
    lg_admin?: NullableStringFieldUpdateOperationsInput | string | null
    lg_retur?: NullableStringFieldUpdateOperationsInput | string | null
    lg_retur_admin?: NullableStringFieldUpdateOperationsInput | string | null
    lg_level?: NullableStringFieldUpdateOperationsInput | string | null
    lg_type?: NullableStringFieldUpdateOperationsInput | string | null
    lg_ga?: NullableStringFieldUpdateOperationsInput | string | null
    lg_aktif?: NullableStringFieldUpdateOperationsInput | string | null
    lg_costcenter?: NullableStringFieldUpdateOperationsInput | string | null
    protean_location?: NullableStringFieldUpdateOperationsInput | string | null
    protean_department?: NullableStringFieldUpdateOperationsInput | string | null
    lg_profitcenter?: NullableStringFieldUpdateOperationsInput | string | null
    lg_corp_cc?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_rfc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lg_faktur?: NullableStringFieldUpdateOperationsInput | string | null
    lg_claim_track?: NullableStringFieldUpdateOperationsInput | string | null
    n_photo?: NullableStringFieldUpdateOperationsInput | string | null
    n_phone?: NullableStringFieldUpdateOperationsInput | string | null
    n_level?: NullableIntFieldUpdateOperationsInput | number | null
    n_info?: NullableStringFieldUpdateOperationsInput | string | null
    ifi_level?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_level?: NullableIntFieldUpdateOperationsInput | number | null
    cms_level?: NullableIntFieldUpdateOperationsInput | number | null
    qc_level?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_level?: NullableIntFieldUpdateOperationsInput | number | null
    visit_level?: NullableIntFieldUpdateOperationsInput | number | null
    paper_level?: NullableIntFieldUpdateOperationsInput | number | null
    apps_aktif?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    ifi_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_ho_level?: NullableIntFieldUpdateOperationsInput | number | null
    lg_entitas?: NullableStringFieldUpdateOperationsInput | string | null
    ihelprpt_level?: NullableIntFieldUpdateOperationsInput | number | null
    rfid?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableIntFieldUpdateOperationsInput | number | null
    sectionParent?: NullableIntFieldUpdateOperationsInput | number | null
    categoryShift?: NullableStringFieldUpdateOperationsInput | string | null
    isCS?: NullableIntFieldUpdateOperationsInput | number | null
    facebook_URL?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_URL?: NullableStringFieldUpdateOperationsInput | string | null
    limaes_level?: NullableIntFieldUpdateOperationsInput | number | null
    iot_skb?: NullableIntFieldUpdateOperationsInput | number | null
    lims_oto?: NullableStringFieldUpdateOperationsInput | string | null
    gmp_apps?: NullableIntFieldUpdateOperationsInput | number | null
    gen_apps?: NullableIntFieldUpdateOperationsInput | number | null
    id_telegram?: NullableStringFieldUpdateOperationsInput | string | null
    head1?: NullableStringFieldUpdateOperationsInput | string | null
    head2?: NullableStringFieldUpdateOperationsInput | string | null
    head3?: NullableStringFieldUpdateOperationsInput | string | null
    isEmployee?: NullableIntFieldUpdateOperationsInput | number | null
    apar_apps?: NullableIntFieldUpdateOperationsInput | number | null
    qa_apk?: NullableIntFieldUpdateOperationsInput | number | null
    role_wp?: NullableStringFieldUpdateOperationsInput | string | null
    qa_lims_al4?: NullableIntFieldUpdateOperationsInput | number | null
    is_temporary_account?: NullableIntFieldUpdateOperationsInput | number | null
    expired_date_temp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nik_intern?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PHP_ms_loginUncheckedUpdateManyInput = {
    lg_nik?: StringFieldUpdateOperationsInput | string
    lg_name?: NullableStringFieldUpdateOperationsInput | string | null
    lg_password?: NullableStringFieldUpdateOperationsInput | string | null
    lg_department?: NullableStringFieldUpdateOperationsInput | string | null
    lg_location?: NullableStringFieldUpdateOperationsInput | string | null
    lg_product?: NullableStringFieldUpdateOperationsInput | string | null
    lg_email_aio?: NullableStringFieldUpdateOperationsInput | string | null
    lg_email_private?: NullableStringFieldUpdateOperationsInput | string | null
    lg_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lg_propose?: NullableStringFieldUpdateOperationsInput | string | null
    lg_admin?: NullableStringFieldUpdateOperationsInput | string | null
    lg_retur?: NullableStringFieldUpdateOperationsInput | string | null
    lg_retur_admin?: NullableStringFieldUpdateOperationsInput | string | null
    lg_level?: NullableStringFieldUpdateOperationsInput | string | null
    lg_type?: NullableStringFieldUpdateOperationsInput | string | null
    lg_ga?: NullableStringFieldUpdateOperationsInput | string | null
    lg_aktif?: NullableStringFieldUpdateOperationsInput | string | null
    lg_costcenter?: NullableStringFieldUpdateOperationsInput | string | null
    protean_location?: NullableStringFieldUpdateOperationsInput | string | null
    protean_department?: NullableStringFieldUpdateOperationsInput | string | null
    lg_profitcenter?: NullableStringFieldUpdateOperationsInput | string | null
    lg_corp_cc?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_rfc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lg_faktur?: NullableStringFieldUpdateOperationsInput | string | null
    lg_claim_track?: NullableStringFieldUpdateOperationsInput | string | null
    n_photo?: NullableStringFieldUpdateOperationsInput | string | null
    n_phone?: NullableStringFieldUpdateOperationsInput | string | null
    n_level?: NullableIntFieldUpdateOperationsInput | number | null
    n_info?: NullableStringFieldUpdateOperationsInput | string | null
    ifi_level?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_level?: NullableIntFieldUpdateOperationsInput | number | null
    cms_level?: NullableIntFieldUpdateOperationsInput | number | null
    qc_level?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_level?: NullableIntFieldUpdateOperationsInput | number | null
    visit_level?: NullableIntFieldUpdateOperationsInput | number | null
    paper_level?: NullableIntFieldUpdateOperationsInput | number | null
    apps_aktif?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    ifi_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_kjy_level?: NullableIntFieldUpdateOperationsInput | number | null
    beclaim_ho_level?: NullableIntFieldUpdateOperationsInput | number | null
    lg_entitas?: NullableStringFieldUpdateOperationsInput | string | null
    ihelprpt_level?: NullableIntFieldUpdateOperationsInput | number | null
    rfid?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableIntFieldUpdateOperationsInput | number | null
    sectionParent?: NullableIntFieldUpdateOperationsInput | number | null
    categoryShift?: NullableStringFieldUpdateOperationsInput | string | null
    isCS?: NullableIntFieldUpdateOperationsInput | number | null
    facebook_URL?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_URL?: NullableStringFieldUpdateOperationsInput | string | null
    limaes_level?: NullableIntFieldUpdateOperationsInput | number | null
    iot_skb?: NullableIntFieldUpdateOperationsInput | number | null
    lims_oto?: NullableStringFieldUpdateOperationsInput | string | null
    gmp_apps?: NullableIntFieldUpdateOperationsInput | number | null
    gen_apps?: NullableIntFieldUpdateOperationsInput | number | null
    id_telegram?: NullableStringFieldUpdateOperationsInput | string | null
    head1?: NullableStringFieldUpdateOperationsInput | string | null
    head2?: NullableStringFieldUpdateOperationsInput | string | null
    head3?: NullableStringFieldUpdateOperationsInput | string | null
    isEmployee?: NullableIntFieldUpdateOperationsInput | number | null
    apar_apps?: NullableIntFieldUpdateOperationsInput | number | null
    qa_apk?: NullableIntFieldUpdateOperationsInput | number | null
    role_wp?: NullableStringFieldUpdateOperationsInput | string | null
    qa_lims_al4?: NullableIntFieldUpdateOperationsInput | number | null
    is_temporary_account?: NullableIntFieldUpdateOperationsInput | number | null
    expired_date_temp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nik_intern?: NullableStringFieldUpdateOperationsInput | string | null
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PHP_ms_loginCountOrderByAggregateInput = {
    lg_nik?: SortOrder
    lg_name?: SortOrder
    lg_password?: SortOrder
    lg_department?: SortOrder
    lg_location?: SortOrder
    lg_product?: SortOrder
    lg_email_aio?: SortOrder
    lg_email_private?: SortOrder
    lg_update?: SortOrder
    lg_propose?: SortOrder
    lg_admin?: SortOrder
    lg_retur?: SortOrder
    lg_retur_admin?: SortOrder
    lg_level?: SortOrder
    lg_type?: SortOrder
    lg_ga?: SortOrder
    lg_aktif?: SortOrder
    lg_costcenter?: SortOrder
    protean_location?: SortOrder
    protean_department?: SortOrder
    lg_profitcenter?: SortOrder
    lg_corp_cc?: SortOrder
    tgl_rfc?: SortOrder
    lg_faktur?: SortOrder
    lg_claim_track?: SortOrder
    n_photo?: SortOrder
    n_phone?: SortOrder
    n_level?: SortOrder
    n_info?: SortOrder
    ifi_level?: SortOrder
    beclaim_level?: SortOrder
    cms_level?: SortOrder
    qc_level?: SortOrder
    invoice_level?: SortOrder
    visit_level?: SortOrder
    paper_level?: SortOrder
    apps_aktif?: SortOrder
    beclaim_kjy_level?: SortOrder
    ifi_kjy_level?: SortOrder
    invoice_kjy_level?: SortOrder
    beclaim_ho_level?: SortOrder
    lg_entitas?: SortOrder
    ihelprpt_level?: SortOrder
    rfid?: SortOrder
    section?: SortOrder
    sectionParent?: SortOrder
    categoryShift?: SortOrder
    isCS?: SortOrder
    facebook_URL?: SortOrder
    instagram_URL?: SortOrder
    limaes_level?: SortOrder
    iot_skb?: SortOrder
    lims_oto?: SortOrder
    gmp_apps?: SortOrder
    gen_apps?: SortOrder
    id_telegram?: SortOrder
    head1?: SortOrder
    head2?: SortOrder
    head3?: SortOrder
    isEmployee?: SortOrder
    apar_apps?: SortOrder
    qa_apk?: SortOrder
    role_wp?: SortOrder
    qa_lims_al4?: SortOrder
    is_temporary_account?: SortOrder
    expired_date_temp?: SortOrder
    nik_intern?: SortOrder
  }

  export type PHP_ms_loginAvgOrderByAggregateInput = {
    n_level?: SortOrder
    ifi_level?: SortOrder
    beclaim_level?: SortOrder
    cms_level?: SortOrder
    qc_level?: SortOrder
    invoice_level?: SortOrder
    visit_level?: SortOrder
    paper_level?: SortOrder
    apps_aktif?: SortOrder
    beclaim_kjy_level?: SortOrder
    ifi_kjy_level?: SortOrder
    invoice_kjy_level?: SortOrder
    beclaim_ho_level?: SortOrder
    ihelprpt_level?: SortOrder
    section?: SortOrder
    sectionParent?: SortOrder
    isCS?: SortOrder
    limaes_level?: SortOrder
    iot_skb?: SortOrder
    gmp_apps?: SortOrder
    gen_apps?: SortOrder
    isEmployee?: SortOrder
    apar_apps?: SortOrder
    qa_apk?: SortOrder
    qa_lims_al4?: SortOrder
    is_temporary_account?: SortOrder
  }

  export type PHP_ms_loginMaxOrderByAggregateInput = {
    lg_nik?: SortOrder
    lg_name?: SortOrder
    lg_password?: SortOrder
    lg_department?: SortOrder
    lg_location?: SortOrder
    lg_product?: SortOrder
    lg_email_aio?: SortOrder
    lg_email_private?: SortOrder
    lg_update?: SortOrder
    lg_propose?: SortOrder
    lg_admin?: SortOrder
    lg_retur?: SortOrder
    lg_retur_admin?: SortOrder
    lg_level?: SortOrder
    lg_type?: SortOrder
    lg_ga?: SortOrder
    lg_aktif?: SortOrder
    lg_costcenter?: SortOrder
    protean_location?: SortOrder
    protean_department?: SortOrder
    lg_profitcenter?: SortOrder
    lg_corp_cc?: SortOrder
    tgl_rfc?: SortOrder
    lg_faktur?: SortOrder
    lg_claim_track?: SortOrder
    n_photo?: SortOrder
    n_phone?: SortOrder
    n_level?: SortOrder
    n_info?: SortOrder
    ifi_level?: SortOrder
    beclaim_level?: SortOrder
    cms_level?: SortOrder
    qc_level?: SortOrder
    invoice_level?: SortOrder
    visit_level?: SortOrder
    paper_level?: SortOrder
    apps_aktif?: SortOrder
    beclaim_kjy_level?: SortOrder
    ifi_kjy_level?: SortOrder
    invoice_kjy_level?: SortOrder
    beclaim_ho_level?: SortOrder
    lg_entitas?: SortOrder
    ihelprpt_level?: SortOrder
    rfid?: SortOrder
    section?: SortOrder
    sectionParent?: SortOrder
    categoryShift?: SortOrder
    isCS?: SortOrder
    facebook_URL?: SortOrder
    instagram_URL?: SortOrder
    limaes_level?: SortOrder
    iot_skb?: SortOrder
    lims_oto?: SortOrder
    gmp_apps?: SortOrder
    gen_apps?: SortOrder
    id_telegram?: SortOrder
    head1?: SortOrder
    head2?: SortOrder
    head3?: SortOrder
    isEmployee?: SortOrder
    apar_apps?: SortOrder
    qa_apk?: SortOrder
    role_wp?: SortOrder
    qa_lims_al4?: SortOrder
    is_temporary_account?: SortOrder
    expired_date_temp?: SortOrder
    nik_intern?: SortOrder
  }

  export type PHP_ms_loginMinOrderByAggregateInput = {
    lg_nik?: SortOrder
    lg_name?: SortOrder
    lg_password?: SortOrder
    lg_department?: SortOrder
    lg_location?: SortOrder
    lg_product?: SortOrder
    lg_email_aio?: SortOrder
    lg_email_private?: SortOrder
    lg_update?: SortOrder
    lg_propose?: SortOrder
    lg_admin?: SortOrder
    lg_retur?: SortOrder
    lg_retur_admin?: SortOrder
    lg_level?: SortOrder
    lg_type?: SortOrder
    lg_ga?: SortOrder
    lg_aktif?: SortOrder
    lg_costcenter?: SortOrder
    protean_location?: SortOrder
    protean_department?: SortOrder
    lg_profitcenter?: SortOrder
    lg_corp_cc?: SortOrder
    tgl_rfc?: SortOrder
    lg_faktur?: SortOrder
    lg_claim_track?: SortOrder
    n_photo?: SortOrder
    n_phone?: SortOrder
    n_level?: SortOrder
    n_info?: SortOrder
    ifi_level?: SortOrder
    beclaim_level?: SortOrder
    cms_level?: SortOrder
    qc_level?: SortOrder
    invoice_level?: SortOrder
    visit_level?: SortOrder
    paper_level?: SortOrder
    apps_aktif?: SortOrder
    beclaim_kjy_level?: SortOrder
    ifi_kjy_level?: SortOrder
    invoice_kjy_level?: SortOrder
    beclaim_ho_level?: SortOrder
    lg_entitas?: SortOrder
    ihelprpt_level?: SortOrder
    rfid?: SortOrder
    section?: SortOrder
    sectionParent?: SortOrder
    categoryShift?: SortOrder
    isCS?: SortOrder
    facebook_URL?: SortOrder
    instagram_URL?: SortOrder
    limaes_level?: SortOrder
    iot_skb?: SortOrder
    lims_oto?: SortOrder
    gmp_apps?: SortOrder
    gen_apps?: SortOrder
    id_telegram?: SortOrder
    head1?: SortOrder
    head2?: SortOrder
    head3?: SortOrder
    isEmployee?: SortOrder
    apar_apps?: SortOrder
    qa_apk?: SortOrder
    role_wp?: SortOrder
    qa_lims_al4?: SortOrder
    is_temporary_account?: SortOrder
    expired_date_temp?: SortOrder
    nik_intern?: SortOrder
  }

  export type PHP_ms_loginSumOrderByAggregateInput = {
    n_level?: SortOrder
    ifi_level?: SortOrder
    beclaim_level?: SortOrder
    cms_level?: SortOrder
    qc_level?: SortOrder
    invoice_level?: SortOrder
    visit_level?: SortOrder
    paper_level?: SortOrder
    apps_aktif?: SortOrder
    beclaim_kjy_level?: SortOrder
    ifi_kjy_level?: SortOrder
    invoice_kjy_level?: SortOrder
    beclaim_ho_level?: SortOrder
    ihelprpt_level?: SortOrder
    section?: SortOrder
    sectionParent?: SortOrder
    isCS?: SortOrder
    limaes_level?: SortOrder
    iot_skb?: SortOrder
    gmp_apps?: SortOrder
    gen_apps?: SortOrder
    isEmployee?: SortOrder
    apar_apps?: SortOrder
    qa_apk?: SortOrder
    qa_lims_al4?: SortOrder
    is_temporary_account?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PHP_ms_loginDefaultArgs instead
     */
    export type PHP_ms_loginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PHP_ms_loginDefaultArgs<ExtArgs>

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