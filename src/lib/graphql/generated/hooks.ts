import { useQuery, UseQueryOptions } from 'react-query'

import * as Types from './operations'

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(process.env.NEXT_PUBLIC_DATABASE_URL as string, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}

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
