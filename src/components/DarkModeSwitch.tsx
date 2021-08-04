import { Switch, useColorMode } from '@chakra-ui/react'

import theme from 'theme'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      isChecked={isDark}
      onChange={toggleColorMode}
      sx={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        '> span': {
          backgroundColor: isDark
            ? `${theme.colors.primary} !important`
            : undefined,
        },
      }}
    />
  )
}
