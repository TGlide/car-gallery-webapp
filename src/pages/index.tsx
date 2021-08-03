import { LinkIcon, ViewIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, Link, Text } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

import { Corner, IconButton, Layout } from 'UI'
import { CarImage } from 'components'
import { useGetAllCarsQuery } from 'lib/graphql/generated/hooks'

const Index = () => {
  const { data, isLoading } = useGetAllCarsQuery()
  const router = useRouter()

  if (isLoading) {
    return null
  }

  return (
    <Layout pt="0">
      <Flex height="100vh" minHeight="41.25rem" alignItems="center">
        <Box>
          <Box
            pos="relative"
            ml="-0.5rem"
            mr="-5rem"
            zIndex="10"
            sx={{
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
          <Corner position="upperLeft" />
          <Corner position="bottomRight" />
          <Box
            w="30rem"
            h="35rem"
            background={`url(https://i.imgur.com/Sj16XCO.jpeg)`}
            backgroundSize="cover"
            backgroundPosition="center"
            borderRadius="0.5rem"
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
            >
              <IconButton
                text="View more images"
                mr="0.5rem"
                onClick={() => router.push(`car/${car.id}`)}
              >
                <ViewIcon color="primary" />
              </IconButton>
              <IconButton text="Copy link" mr="0.5rem">
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
