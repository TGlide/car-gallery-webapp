import { Switch, useColorMode } from '@chakra-ui/react'

import theme from 'theme'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      isChecked={isDark}
      onChange={toggleColorMode}
      sx={{
        '> span': {
          backgroundColor: isDark
            ? `${theme.colors.primary} !important`
            : undefined,
        },
      }}
    />
  )
}
