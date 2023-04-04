import Head from 'next/head'
import {
  VisualizationSetValueAtTime,
  VisualizationLinearRampToValueAtTime,
  VisualizationExponentialRampToValueAtTime,
  VisualizationSetTargetAtTime,
  VisualizationSetValueCurveAtTime,
  VisualizationCancelAndHoldAtTime,
  VisualizationCancelScheduledValues,
} from '@/components/visualizations'

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
        <header className='py-4'>
          <h1 className='font-bold text-3xl md:text-4xl text-center'>AudioParam Visualization</h1>
        </header>
        <main className='mx-auto flex flex-col items-center xl:grid grid-cols-2 justify-center'>
          <VisualizationSetValueAtTime/>
          <VisualizationLinearRampToValueAtTime/>
          <VisualizationExponentialRampToValueAtTime/>
          <VisualizationSetTargetAtTime/>
          <VisualizationSetValueCurveAtTime/>
          <VisualizationCancelAndHoldAtTime/>
          <VisualizationCancelScheduledValues/>
        </main>
      </div>
    </>
  )
}

export default HomePage
