import Head from 'next/head'
import {
  VisualizationAtTime,
  VisualizationTargetAtTime,
  VisualizationValueCurveAtTime,
  VisualizationLinear,
  VisualizationExp,
  VisualizationCancelHold,
  VisualizationCancelScheduled,
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
        <h1 className='text-2xl text-center'>AudioParam Visualization</h1>
        <VisualizationAtTime/>
        <VisualizationTargetAtTime/>
        <VisualizationValueCurveAtTime/>
        <VisualizationLinear/>
        <VisualizationExp/>
        <VisualizationCancelHold/>
        <VisualizationCancelScheduled/>
      </div>
    </>
  )
}

export default HomePage
