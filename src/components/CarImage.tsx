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
      sx={{
        flexDir: 'column',
        justifyContent: 'center',
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
          sx={{
            w: '20rem',
            h: '12rem',
            background: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '0.5rem',
          }}
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
        <Text sx={{ textAlign: 'center', mt: '0.5rem' }} variant="label">
          {label}
        </Text>
      )}
      {description && (
        <Text
          variant="label"
          sx={{
            textAlign: 'center',
            fontStyle: 'italic',
            mt: '-0.5rem',
          }}
        >
          {description}
        </Text>
      )}
    </Flex>
  )
}
