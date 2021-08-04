import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

import theme from 'theme'

export const Ellipse = ({ w = 32, h = 32, ...props }: BoxProps) => {
  return (
    <Box
      sx={{
        w: w,
        h: h,
        border: `1px ${theme.colors.primary} solid`,
        borderRadius: 9999,
      }}
      {...props}
    />
  )
}
