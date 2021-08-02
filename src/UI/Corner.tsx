import { Box, BoxProps, useColorMode } from '@chakra-ui/react'

type CornerProps = {
  position?: 'upperLeft' | 'bottomRight'
  sizeInRem?: number
} & Omit<BoxProps, 'position'>

export const Corner = ({
  position,
  children,
  sizeInRem = 6,
  ...rest
}: CornerProps) => {
  const positionProps =
    position === 'bottomRight'
      ? {
          bottom: `-${(2 * sizeInRem) / 3}rem`,
          right: `-${(2 * sizeInRem) / 3}rem`,
        }
      : {
          left: `-${(2 * sizeInRem) / 3}rem`,
          top: `-${(2 * sizeInRem) / 3}rem`,
        }

  const { colorMode } = useColorMode()
  return (
    <Box
      w={`${sizeInRem}rem`}
      h={`${sizeInRem}rem`}
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
