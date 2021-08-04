import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Container = ({ sx, ...props }: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'background', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        bg: bgColor[colorMode],
        color: color[colorMode],
        minHeight: '100vh',
        height: '100%',
        overflow: 'hidden',
        pb: '2rem',
        ...sx,
      }}
      {...props}
    />
  )
}
