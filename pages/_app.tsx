import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/Components/Layout/Layout'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#3b3c3e' />
        <link rel="shortcut icon" href="/Images/Logo.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
