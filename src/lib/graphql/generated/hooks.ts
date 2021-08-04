import { useQuery, UseQueryOptions } from 'react-query'

import { fetcher } from 'lib/graphql/api'

import * as Types from './operations'

export const GetAllCarsDocument = `
    query GetAllCars {
  allCars {
    totalCount
    nodes {
      id
      name
      images
      year
    }
  }
}
    `
export const useGetAllCarsQuery = <
  TData = Types.GetAllCarsQuery,
  TError = GraphqlApiError
>(
  variables?: Types.GetAllCarsQueryVariables,
  options?: UseQueryOptions<Types.GetAllCarsQuery, TError, TData>
) =>
  useQuery<Types.GetAllCarsQuery, TError, TData>(
    ['GetAllCars', variables],
    fetcher<Types.GetAllCarsQuery, Types.GetAllCarsQueryVariables>(
      GetAllCarsDocument,
      variables
    ),
    options
  )
useGetAllCarsQuery.getKey = (variables?: Types.GetAllCarsQueryVariables) => [
  'GetAllCars',
  variables,
]

export const GetCarDocument = `
    query GetCar($id: Int!) {
  carById(id: $id) {
    id
    images
    name
    year
  }
}
    `
export const useGetCarQuery = <
  TData = Types.GetCarQuery,
  TError = GraphqlApiError
>(
  variables: Types.GetCarQueryVariables,
  options?: UseQueryOptions<Types.GetCarQuery, TError, TData>
) =>
  useQuery<Types.GetCarQuery, TError, TData>(
    ['GetCar', variables],
    fetcher<Types.GetCarQuery, Types.GetCarQueryVariables>(
      GetCarDocument,
      variables
    ),
    options
  )
useGetCarQuery.getKey = (variables: Types.GetCarQueryVariables) => [
  'GetCar',
  variables,
]
