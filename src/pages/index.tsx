import Head from 'next/head'
import {
  VisualizationSetValueAtTime,
  VisualizationSetTargetAtTime,
  VisualizationSetValueCurveAtTime,
  VisualizationLinearRampToValueAtTime,
  VisualizationExponentialRampToValueAtTime,
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
          <h1 className='text-2xl text-center'>AudioParam Visualization</h1>
        </header>
        <VisualizationSetValueAtTime/>
        <VisualizationSetTargetAtTime/>
        <VisualizationSetValueCurveAtTime/>
        <VisualizationLinearRampToValueAtTime/>
        <VisualizationExponentialRampToValueAtTime/>
        <VisualizationCancelAndHoldAtTime/>
        <VisualizationCancelScheduledValues/>
      </div>
    </>
  )
}

export default HomePage
