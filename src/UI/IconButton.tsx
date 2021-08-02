import { Flex, FlexProps, Text } from '@chakra-ui/react'

type IconButtonProps = {
  children: JSX.Element
  text: string | JSX.Element
} & FlexProps

export const IconButton = ({ children, text, ...rest }: IconButtonProps) => {
  return (
    <Flex
      bgColor="white"
      alignItems="center"
      w="auto"
      maxW="2rem"
      h="2rem"
      borderRadius="999px"
      overflow="hidden"
      opacity="0.75"
      sx={{
        transition: 'opacity 0.5s ease, max-width 0.5s ease',
        _hover: {
          cursor: 'pointer',
          maxWidth: '15rem',
          opacity: 1,
        },
      }}
      {...rest}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        w="2rem"
        h="2rem"
        flexShrink={0}
      >
        {children}
      </Flex>
      {typeof text === 'string' ? (
        <Text variant="button" whiteSpace="nowrap" mr="0.5rem">
          {text}
        </Text>
      ) : (
        text
      )}
    </Flex>
  )
}
