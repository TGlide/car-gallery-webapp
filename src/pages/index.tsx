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
    <Layout>
      <Flex height="100vh" alignItems="center">
        <Box>
          <Box pos="relative" ml="-0.5rem" mr="-5rem" zIndex="10">
            <Text
              variant="heading"
              zIndex="5"
              pos="absolute"
              w="100%"
              left="0.25rem"
              top="-0.25rem"
            >
              Vintage Cars
            </Text>
            <Text variant="heading" zIndex="1000" color="primary" opacity="0.5">
              Vintage Cars
            </Text>
          </Box>
          <Text variant="paragraph" maxW="30rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
            fermentum vitae, adipiscing ante pellentesque volutpat, amet.
          </Text>
          <Link href="#gallery" display="inline-block" mt="1.5rem">
            View gallery
          </Link>
        </Box>
        <Box pos="relative">
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
        gridTemplateColumns={`repeat(${Math.min(
          3,
          data?.allCars?.totalCount || 0
        )}, 1fr)`}
        gridGap="2rem"
        id="gallery"
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
