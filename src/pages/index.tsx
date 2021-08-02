import { Box, Flex, Link, Text } from '@chakra-ui/react'

import { Corner, Ellipse } from 'UI'
import { Container, DarkModeSwitch } from 'components'
import { useGetAllCarsQuery } from 'lib/graphql/generated/hooks'

const Index = () => {
  const { isLoading } = useGetAllCarsQuery()

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
            <Link display="inline-block" mt="1.5rem">
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
            />
          </Box>
        </Flex>
      </Container>
      <DarkModeSwitch />
    </Box>
  )
}

export default Index
