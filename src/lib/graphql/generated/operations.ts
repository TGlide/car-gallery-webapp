import * as Types from './schemas'

export type GetAllCarsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetAllCarsQuery = { __typename?: 'Query' } & {
  allCars?: Types.Maybe<
    { __typename?: 'CarsConnection' } & Pick<
      Types.CarsConnection,
      'totalCount'
    > & {
        nodes: Array<
          { __typename?: 'Car' } & Pick<
            Types.Car,
            'id' | 'name' | 'images' | 'year'
          >
        >
      }
  >
}

export type GetCarQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']
}>

export type GetCarQuery = { __typename?: 'Query' } & {
  carById?: Types.Maybe<
    { __typename?: 'Car' } & Pick<Types.Car, 'id' | 'images' | 'name' | 'year'>
  >
}
