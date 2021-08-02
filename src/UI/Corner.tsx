import { Box, BoxProps, useColorMode } from '@chakra-ui/react'

type CornerProps = {
  position?: 'upperLeft' | 'bottomRight'
} & Omit<BoxProps, 'position'>

export const Corner = ({ position, children, ...rest }: CornerProps) => {
  const positionProps =
    position === 'bottomRight'
      ? { bottom: '-4rem', right: '-4rem' }
      : { left: '-4rem', top: '-4rem' }

  const { colorMode } = useColorMode()
  return (
    <Box
      w="6rem"
      h="6rem"
      bgColor={colorMode === 'dark' ? 'gray.900' : 'background'}
      position="absolute"
      boxShadow="0.5rem 0rem 5px -5px rgba(0, 0, 0, 0.25)"
      transform={
        position === 'bottomRight' ? 'rotate(-135deg)' : 'rotate(45deg)'
      }
      {...positionProps}
      {...rest}
    >
      {children}
    </Box>
  )
}
