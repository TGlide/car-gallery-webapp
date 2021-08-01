import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints, mode } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    text: '#222F3E',
    textSecondary: '#3A434E',
    primary: '#C8451B',
    background: '#E5E5E5',
  },
  components: {
    Text: {
      baseStyle: (props) => ({
        color: mode('text', 'white')(props),
      }),
      variants: {
        heading: {
          fontFamily: 'Playfair Display',
          fontStyle: 'italic',
          fontWeight: 'bold',
          fontSize: '6rem;',
        },
        subHeading: {
          fontFamily: 'Playfair Display',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '1.75rem',
        },
        paragraph: {
          fontFamily: 'Lato',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '2rem',
          lineHeight: '2.375rem',
        },
      },
    },
  },
  fonts,
  breakpoints,
})

export default theme
