import '@/styles/globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] })

const title = 'AudioParam Visualization'
const description = 'Visualization of how Web Audio API\'s AudioParam value changes over time'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
