import { ViewIcon, LinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, Link, Text } from '@chakra-ui/react'

import { Corner, Ellipse, IconButton } from 'UI'
import { Container, DarkModeSwitch } from 'components'
import { useGetAllCarsQuery } from 'lib/graphql/generated/hooks'

const Index = () => {
  const { data, isLoading } = useGetAllCarsQuery()

  if (isLoading) {
    return null
  }

  return (
    <Box pos="relative">
      <Ellipse pos="absolute" w="16rem" h="16rem" left="-5rem" top="-5rem" />
      <Container>
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
              <Text
                variant="heading"
                zIndex="1000"
                color="primary"
                opacity="0.5"
              >
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
            data.allCars.totalCount
          )}, 1fr)`}
          gridGap="2rem"
          id="gallery"
        >
          {data.allCars.nodes.map((car) => {
            return (
              <Flex flexDir="column" justifyContent="center" key={car.id}>
                <Box pos="relative">
                  <Corner sizeInRem={3} position="upperLeft" />
                  <Corner sizeInRem={3} position="bottomRight" />
                  <Box
                    w="20rem"
                    h="12rem"
                    background={`url(${car.images[0]})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    borderRadius="0.5rem"
                  />
                  <Flex justify="center" pos="absolute" bottom="1rem" w="100%">
                    <IconButton text="View more images" mr="0.5rem">
                      <ViewIcon color="primary" />
                    </IconButton>
                    <IconButton text="Copy link" mr="0.5rem">
                      <LinkIcon color="primary" />
                    </IconButton>
                  </Flex>
                </Box>
                <Text textAlign="center" variant="subHeading" mt="0.5rem">
                  {car.name}
                </Text>
                <Text
                  textAlign="center"
                  fontStyle="italic"
                  variant="subHeading"
                  mt="-0.5rem"
                >
                  {car.year}
                </Text>
              </Flex>
            )
          })}
        </Grid>
      </Container>
      <DarkModeSwitch />
    </Box>
  )
}

export default Index
