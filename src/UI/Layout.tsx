import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Flex, FlexProps, Link } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

import { DarkModeSwitch } from 'components'

import { Container } from './Container'
import { Ellipse } from './Ellipse'

export const Layout = ({ children, ...rest }: FlexProps) => {
  const router = useRouter()
  const showGoBack = router.route !== '/'

  return (
    <Box pos="relative">
      {showGoBack && (
        <Link
          sx={{
            pos: 'fixed',
            left: '1rem',
            top: '1rem',
            zIndex: 1000,
          }}
          href="/"
          onClick={(e) => {
            e.preventDefault()
            router.push('/')
          }}
          data-testid="back-btn"
        >
          <Flex alignItems="center">
            <ArrowBackIcon mr="0.5rem" />
            Go Back
          </Flex>
        </Link>
      )}

      <Ellipse
        pos="absolute"
        w="16rem"
        h="16rem"
        left="-5rem"
        top="-5rem"
        zIndex="10"
      />
      <Container pt="5rem" {...rest}>
        {children}
      </Container>
      <DarkModeSwitch />
    </Box>
  )
}
