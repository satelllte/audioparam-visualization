import Link from 'next/link';
import {GitHubLogoIcon} from '@radix-ui/react-icons';
import {
  VisualizationSetValueAtTime,
  VisualizationLinearRampToValueAtTime,
  VisualizationExponentialRampToValueAtTime,
  VisualizationSetTargetAtTime,
  VisualizationSetValueCurveAtTime,
  VisualizationCancelAndHoldAtTime,
  VisualizationCancelScheduledValues,
} from '@/components/visualizations';

function HomePage() {
  return (
    <>
      <header className='border-b-2 border-b-borders py-12'>
        <div className='mx-auto flex max-w-3xl flex-col gap-4 px-4'>
          <h1 className='text-3xl font-semibold md:text-4xl'>
            <span className='underline'>AudioParam</span> Visualization
          </h1>
          <h2 className='flex text-lg md:text-xl'>
            Visualization of how Web Audio API&apos;s AudioParam value changes
            over time.
          </h2>
        </div>
      </header>
      <main className='mx-auto flex max-w-3xl flex-col gap-12 px-4 py-8'>
        <VisualizationSetValueAtTime />
        <VisualizationLinearRampToValueAtTime />
        <VisualizationExponentialRampToValueAtTime />
        <VisualizationSetTargetAtTime />
        <VisualizationSetValueCurveAtTime />
        <VisualizationCancelAndHoldAtTime />
        <VisualizationCancelScheduledValues />
      </main>
      <footer className='mt-2 py-8 text-sm text-white-dim'>
        <div className='mx-auto max-w-3xl px-4'>
          <div className='before:pr-1 before:content-["-"]'>
            {'Made by: '}
            <Link
              href='https://github.com/satelllte'
              target='_blank'
              className='border-b border-b-transparent font-semibold hover:border-b-white hover:text-white motion-safe:transition-colors'
            >
              @satelllte
            </Link>
          </div>
          <div className='before:pr-1 before:content-["-"]'>
            {'Source code: '}
            <Link
              href='https://github.com/satelllte/audioparam-visualization'
              target='_blank'
              className='inline-flex items-center gap-1 border-b border-b-transparent font-semibold hover:border-b-white hover:text-white motion-safe:transition-colors'
            >
              GitHub <GitHubLogoIcon />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
