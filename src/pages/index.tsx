import { Box, Text } from '@chakra-ui/react'

import { Ellipse } from 'UI'
import { Container, DarkModeSwitch } from 'components'

const Index = () => (
  <Box pos="relative">
    <Ellipse pos="absolute" w="16rem" h="16rem" left="-5rem" top="-5rem" />
    <Container height="100vh">
      <Text variant="heading">Vintage Cars</Text>
      <DarkModeSwitch />
    </Container>
  </Box>
)

export default Index
