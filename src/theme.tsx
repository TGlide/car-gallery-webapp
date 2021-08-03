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
    Link: {
      baseStyle: {
        fontFamily: 'Playfair Display',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '1.5rem',
        color: 'primary',
        position: 'relative',
        _hover: {
          cursor: 'pointer',
          textDecoration: 'none',
          _before: {
            width: '100%',
          },
        },
        _before: {
          content: '""',
          position: 'absolute',
          height: '2px',
          width: 0,
          left: 0,
          bottom: 0,
          backgroundColor: 'primary',
          transition: 'width 500ms cubic-bezier(0.2, 1, 0.2, 1)',
        },
      },
    },
    Text: {
      baseStyle: (props) => ({
        color: mode('text', 'background')(props),
      }),
      variants: {
        heading: {
          fontFamily: 'Playfair Display',
          fontStyle: 'italic',
          fontWeight: 'bold',
          fontSize: '6rem;',
        },
        headingSmall: {
          fontFamily: 'Playfair Display',
          fontStyle: 'normal',
          fontSize: '3rem;',
        },
        label: {
          fontFamily: 'Playfair Display',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '1.75rem',
        },
        button: {
          fontFamily: 'Playfair Display',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '1rem',
          color: 'primary',
        },
        paragraph: (props) => ({
          fontFamily: 'Lato',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '2rem',
          lineHeight: '2.375rem',
          color: mode('textSecondary', 'background')(props),
        }),
      },
    },
  },
  fonts,
  breakpoints,
})

export default theme
