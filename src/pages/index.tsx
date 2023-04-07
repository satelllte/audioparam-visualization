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
      <header className='py-12 border-b-2 border-b-borders'>
        <div className='px-4 flex flex-col gap-4 max-w-3xl mx-auto'>
          <h1 className='font-semibold text-3xl md:text-4xl'><span className='underline'>AudioParam</span> Visualization</h1>
          <h2 className='flex text-lg md:text-xl'>
            {'Visualization of how Web Audio API\'s AudioParam value changes over time.'}
          </h2>
        </div>
      </header>
      <main className='px-4 max-w-3xl mx-auto flex flex-col gap-8'>
        <VisualizationSetValueAtTime/>
        <VisualizationLinearRampToValueAtTime/>
        <VisualizationExponentialRampToValueAtTime/>
        <VisualizationSetTargetAtTime/>
        <VisualizationSetValueCurveAtTime/>
        <VisualizationCancelAndHoldAtTime/>
        <VisualizationCancelScheduledValues/>
      </main>
    </>
  )
}

export default HomePage
