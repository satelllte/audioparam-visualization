import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Header } from '@/components/blocks/Header'
import { Head } from '@/components/blocks/Head'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Head/>
      <Header/>
      <div className='py-6 px-4 mx-auto max-w-3xl flex flex-col justify-center gap-3'>
        <Component {...pageProps} />
      </div>
    </>
  )
}
