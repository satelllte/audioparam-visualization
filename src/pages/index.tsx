import Link from 'next/link'
import { IconGitHub } from '@/components/icons/IconGitHub'
import {
  VisualizationSetValueAtTime,
  VisualizationLinearRampToValueAtTime,
  VisualizationExponentialRampToValueAtTime,
  VisualizationSetTargetAtTime,
  VisualizationSetValueCurveAtTime,
  VisualizationCancelAndHoldAtTime,
  VisualizationCancelScheduledValues,
} from '@/components/visualizations'

function HomePage() {
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
      <main className='px-4 py-8 max-w-3xl mx-auto flex flex-col gap-12'>
        <VisualizationSetValueAtTime/>
        <VisualizationLinearRampToValueAtTime/>
        <VisualizationExponentialRampToValueAtTime/>
        <VisualizationSetTargetAtTime/>
        <VisualizationSetValueCurveAtTime/>
        <VisualizationCancelAndHoldAtTime/>
        <VisualizationCancelScheduledValues/>
      </main>
      <footer className='mt-2 py-8 text-sm text-white-dim'>
        <div className='px-4 max-w-3xl mx-auto'>
          <div className='before:content-["-"] before:pr-1'>
            {'Made by: '}<Link
              href='https://github.com/satelllte'
              target='_blank'
              className='font-semibold border-b border-b-transparent hover:text-white hover:border-b-white motion-safe:transition-colors'
            >@satelllte</Link>
          </div>
          <div className='before:content-["-"] before:pr-1'>
            {'Source code: '}<Link
              href='https://github.com/satelllte/audioparam-visualization'
              target='_blank'
              className='font-semibold inline-flex gap-1 items-center border-b border-b-transparent hover:text-white hover:border-b-white motion-safe:transition-colors'
            >GitHub <IconGitHub/>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomePage
