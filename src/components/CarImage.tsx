import { Box, Flex, FlexProps, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { Corner } from 'UI'

type CarImageProps = {
  image?: string
  label?: string
  description?: string
  children?: ReactNode
} & FlexProps

export const CarImage = ({
  image,
  label,
  description,
  children,
  ...rest
}: CarImageProps) => {
  if (!image) {
    return null
  }

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      sx={{
        '.buttons': {
          pointerEvents: 'none',
        },
        _hover: {
          '.buttons': {
            opacity: 1,
            transform: 'translateY(0%)',
            pointerEvents: 'auto',
          },
        },
      }}
      {...rest}
    >
      <Box pos="relative">
        <Corner sizeInRem={3} position="upperLeft" />
        <Corner sizeInRem={3} position="bottomRight" />
        <Box
          w="20rem"
          h="12rem"
          background={`url(${image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="0.5rem"
        />
        <Flex
          className="buttons"
          sx={{
            justifyContent: 'center',
            pos: 'absolute',
            bottom: '1rem',
            w: '100%',
            opacity: { base: '1', lg: '0' },
            transform: { base: 'none', lg: 'translateY(100%)' },
            transition: 'opacity 0.5s ease, transform 0.25s ease',
          }}
        >
          {children}
        </Flex>
      </Box>
      {label && (
        <Text textAlign="center" variant="label" mt="0.5rem">
          {label}
        </Text>
      )}
      {description && (
        <Text
          textAlign="center"
          fontStyle="italic"
          variant="label"
          mt="-0.5rem"
        >
          {description}
        </Text>
      )}
    </Flex>
  )
}
