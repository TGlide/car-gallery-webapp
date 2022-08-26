import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import NextNProgress from 'components/NextNProgress'

import theme from '../theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <NextNProgress />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
