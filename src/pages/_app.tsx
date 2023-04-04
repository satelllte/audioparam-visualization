import '@/styles/globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>AudioParam Visualization</title>
        <meta name="description" content="AudioParam Visualization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
