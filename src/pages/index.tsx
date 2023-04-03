import Head from 'next/head'
import { VisualizationLinear } from '@/components/visualizations/VisualizationLinear'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>AudioParam Visualization</title>
        <meta name="description" content="AudioParam Visualization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='p-4'>
        <h1 className='text-2xl text-center'>AudioParam Visualization</h1>
        <VisualizationLinear/>
      </div>
    </>
  )
}

export default HomePage
