export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any
}

export type Car = Node & {
  __typename?: 'Car'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  id: Scalars['Int']
  name: Scalars['String']
  images: Array<Maybe<Scalars['String']>>
  createdAt?: Maybe<Scalars['Datetime']>
  year?: Maybe<Scalars['Int']>
}

/** A condition to be used against `Car` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CarCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `images` field. */
  images?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `year` field. */
  year?: Maybe<Scalars['Int']>
}

/** An input for mutations affecting `Car` */
export type CarInput = {
  id?: Maybe<Scalars['Int']>
  name: Scalars['String']
  images: Array<Maybe<Scalars['String']>>
  createdAt?: Maybe<Scalars['Datetime']>
  year?: Maybe<Scalars['Int']>
}

/** Represents an update to a `Car`. Fields that are set will be updated. */
export type CarPatch = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  images?: Maybe<Array<Maybe<Scalars['String']>>>
  createdAt?: Maybe<Scalars['Datetime']>
  year?: Maybe<Scalars['Int']>
}

/** A connection to a list of `Car` values. */
export type CarsConnection = {
  __typename?: 'CarsConnection'
  /** A list of `Car` objects. */
  nodes: Array<Car>
  /** A list of edges which contains the `Car` and cursor to aid in pagination. */
  edges: Array<CarsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Car` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `Car` edge in the connection. */
export type CarsEdge = {
  __typename?: 'CarsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Car` at the end of the edge. */
  node: Car
}

/** Methods to use when ordering `Car`. */
export enum CarsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ImagesAsc = 'IMAGES_ASC',
  ImagesDesc = 'IMAGES_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** All input for the create `Car` mutation. */
export type CreateCarInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Car` to be created by this mutation. */
  car: CarInput
}

/** The output of our create `Car` mutation. */
export type CreateCarPayload = {
  __typename?: 'CreateCarPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Car` that was created by this mutation. */
  car?: Maybe<Car>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Car`. May be used by Relay 1. */
  carEdge?: Maybe<CarsEdge>
}

/** The output of our create `Car` mutation. */
export type CreateCarPayloadCarEdgeArgs = {
  orderBy?: Maybe<Array<CarsOrderBy>>
}

/** All input for the `deleteCarById` mutation. */
export type DeleteCarByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  id: Scalars['Int']
}

/** All input for the `deleteCar` mutation. */
export type DeleteCarInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `Car` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `Car` mutation. */
export type DeleteCarPayload = {
  __typename?: 'DeleteCarPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Car` that was deleted by this mutation. */
  car?: Maybe<Car>
  deletedCarId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Car`. May be used by Relay 1. */
  carEdge?: Maybe<CarsEdge>
}

/** The output of our delete `Car` mutation. */
export type DeleteCarPayloadCarEdgeArgs = {
  orderBy?: Maybe<Array<CarsOrderBy>>
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation'
  /** Creates a single `Car`. */
  createCar?: Maybe<CreateCarPayload>
  /** Updates a single `Car` using its globally unique id and a patch. */
  updateCar?: Maybe<UpdateCarPayload>
  /** Updates a single `Car` using a unique key and a patch. */
  updateCarById?: Maybe<UpdateCarPayload>
  /** Deletes a single `Car` using its globally unique id. */
  deleteCar?: Maybe<DeleteCarPayload>
  /** Deletes a single `Car` using a unique key. */
  deleteCarById?: Maybe<DeleteCarPayload>
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCarArgs = {
  input: CreateCarInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCarArgs = {
  input: UpdateCarInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCarByIdArgs = {
  input: UpdateCarByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCarArgs = {
  input: DeleteCarInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCarByIdArgs = {
  input: DeleteCarByIdInput
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query'
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>
  /** Reads and enables pagination through a set of `Car`. */
  allCars?: Maybe<CarsConnection>
  carById?: Maybe<Car>
  /** Reads a single `Car` using its globally unique `ID`. */
  car?: Maybe<Car>
}

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryAllCarsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CarsOrderBy>>
  condition?: Maybe<CarCondition>
}

/** The root query type which gives access points into the data universe. */
export type QueryCarByIdArgs = {
  id: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryCarArgs = {
  nodeId: Scalars['ID']
}

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type Subscription = {
  __typename?: 'Subscription'
  time?: Maybe<TimePayload>
}

export type TimePayload = {
  __typename?: 'TimePayload'
  currentTimestamp?: Maybe<Scalars['String']>
  query?: Maybe<Query>
}

/** All input for the `updateCarById` mutation. */
export type UpdateCarByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** An object where the defined keys will be set on the `Car` being updated. */
  carPatch: CarPatch
  id: Scalars['Int']
}

/** All input for the `updateCar` mutation. */
export type UpdateCarInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `Car` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `Car` being updated. */
  carPatch: CarPatch
}

/** The output of our update `Car` mutation. */
export type UpdateCarPayload = {
  __typename?: 'UpdateCarPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Car` that was updated by this mutation. */
  car?: Maybe<Car>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Car`. May be used by Relay 1. */
  carEdge?: Maybe<CarsEdge>
}

/** The output of our update `Car` mutation. */
export type UpdateCarPayloadCarEdgeArgs = {
  orderBy?: Maybe<Array<CarsOrderBy>>
}
