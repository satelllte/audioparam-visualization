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
      <div className='p-4'>
        <header className='py-4'>
          <h1 className='font-bold text-3xl md:text-4xl text-center'>AudioParam Visualization</h1>
        </header>
        <main className='flex flex-col gap-8'>
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
