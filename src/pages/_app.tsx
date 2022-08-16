import { UserContextProvider } from '@/ui/contexts/UserContext'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'themes/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bingo Ronney</title>
        <link rel="shortcut icon" href="/img/icon.png" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Um bingo" />
      </Head>
      <UserContextProvider>
        <GlobalStyles />

        <Component {...pageProps} />
      </UserContextProvider>
    </>
  )
}

export default App
