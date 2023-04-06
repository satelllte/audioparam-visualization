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
      <div className='px-4'>
        <header className='py-12 md:py-20 flex flex-col max-w-3xl mx-auto gap-4'>
          <h1 className='font-bold text-3xl md:text-4xl'>AudioParam Visualization</h1>
          <h2 className='flex text-xl'>
            {'Visualization of how Web Audio API\'s AudioParam value changes over time.'}
          </h2>
        </header>
        <main className='max-w-3xl mx-auto flex flex-col gap-8'>
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
