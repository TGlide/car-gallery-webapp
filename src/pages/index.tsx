import { LinkIcon, ViewIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, Link, Text } from '@chakra-ui/react'
import copy from 'copy-to-clipboard'
import { GetServerSidePropsResult } from 'next'
import { useRouter } from 'next/dist/client/router'

import { Corner, IconButton, Layout } from 'UI'
import { CarImage } from 'components'
import { fetcher } from 'lib/graphql/api'
import {
  GetAllCarsDocument,
  useGetAllCarsQuery,
} from 'lib/graphql/generated/hooks'
import {
  GetAllCarsQuery,
  GetAllCarsQueryVariables,
} from 'lib/graphql/generated/operations'

type IndexProps = {
  initialData: GetAllCarsQuery
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<IndexProps>
> {
  const initialData = await fetcher<GetAllCarsQuery, GetAllCarsQueryVariables>(
    GetAllCarsDocument
  )()

  return {
    props: { initialData },
  }
}

const Index = ({ initialData }: IndexProps) => {
  const { data } = useGetAllCarsQuery({}, { initialData })
  const router = useRouter()

  return (
    <Layout sx={{ pt: '0' }}>
      <Flex
        sx={{
          height: '100vh',
          minHeight: '41.25rem',
          alignItems: 'center',
        }}
      >
        <Box>
          <Box
            sx={{
              pos: 'relative',
              ml: '-0.5rem',
              mr: '-5rem',
              zIndex: '10',
              textAlign: { base: 'center', lg: 'left' },
              maxW: '100%',
            }}
          >
            <Text
              variant="heading"
              sx={{
                zIndex: '5',
                pos: 'absolute',
                w: '100%',
                left: '0.25rem',
                top: '-0.25rem',
                whiteSpace: 'nowrap',
              }}
            >
              Vintage Cars
            </Text>
            <Text
              variant="heading"
              sx={{
                zIndex: '1000',
                color: 'primary',
                opacity: '0.5',
                whiteSpace: 'nowrap',
              }}
            >
              Vintage Cars
            </Text>
          </Box>
          <Text
            variant="paragraph"
            sx={{
              textAlign: { base: 'center', lg: 'left' },
              maxW: '30rem',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
            fermentum vitae, adipiscing ante pellentesque volutpat, amet.
          </Text>
          <Flex
            sx={{
              justifyContent: { base: 'center', lg: 'flex-start' },
            }}
          >
            <Link
              href="#gallery"
              sx={{
                display: 'inline-block',
                mt: '1.5rem',
              }}
              data-testid="view-gallery"
            >
              View gallery
            </Link>
          </Flex>
        </Box>
        <Box
          sx={{
            pos: 'relative',
            display: { base: 'none', lg: 'block' },
          }}
        >
          <Corner sx={{ position: 'upperLeft' }} />
          <Corner sx={{ position: 'bottomRight' }} />
          <Box
            sx={{
              w: '30rem',
              h: '35rem',
              background: `url(https://i.imgur.com/Sj16XCO.jpeg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '0.5rem',
            }}
          />
        </Box>
      </Flex>

      <Grid
        id="gallery"
        sx={{
          gridTemplateColumns: {
            base: '1fr',
            md: `repeat(${Math.min(2, data?.allCars?.totalCount || 0)}, 1fr)`,
            lg: `repeat(${Math.min(3, data?.allCars?.totalCount || 0)}, 1fr)`,
          },
          gridGap: '2rem',
        }}
      >
        {data?.allCars?.nodes.map((car) => {
          return (
            <CarImage
              image={car.images[0] || undefined}
              label={car.name}
              description={car?.year?.toString()}
              key={car.id}
              data-testid={`car-${car.id}-image`}
            >
              <IconButton
                text="View more images"
                onClick={() => router.push(`car/${car.id}`)}
                sx={{
                  mr: '0.5rem',
                }}
              >
                <ViewIcon color="primary" />
              </IconButton>
              <IconButton
                text="Copy link"
                onClick={() => {
                  copy(`${window.location.href}car/${car.id}`)
                }}
                sx={{
                  mr: '0.5rem',
                }}
              >
                <LinkIcon color="primary" />
              </IconButton>
            </CarImage>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default Index
