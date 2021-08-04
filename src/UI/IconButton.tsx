import {
  Flex,
  FlexProps,
  Tooltip,
  TooltipProps,
  useColorMode,
} from '@chakra-ui/react'

type IconButtonProps = {
  children: JSX.Element
  text?: string
  textPlacement?: TooltipProps['placement']
} & FlexProps

export const IconButton = ({
  children,
  text,
  textPlacement = 'top',
  sx,
  ...rest
}: IconButtonProps) => {
  const { colorMode } = useColorMode()

  return (
    <Tooltip label={text} placement={textPlacement}>
      <Flex
        as="button"
        sx={{
          bgColor: colorMode === 'dark' ? 'gray.900' : 'white',
          alignItems: 'center',
          justifyContent: 'center',
          w: '2rem',
          h: '2rem',
          borderRadius: '999px',
          opacity: '0.75',
          transition: 'opacity 0.25s ease',
          _hover: {
            cursor: 'pointer',
            opacity: 1,
          },
          ...sx,
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Tooltip>
  )
}
