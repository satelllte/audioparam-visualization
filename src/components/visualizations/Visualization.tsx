import Link from 'next/link';
import {useEffect, useRef} from 'react';
import {ExternalLinkIcon, PlayIcon} from '@radix-ui/react-icons';
import {CanvasDrawer} from './CanvasDrawer';

const duration = 1;
const minValue = 110;
const maxValue = 440;

export type AudioProcessingSchedulerOptions = {
  param: AudioParam;
  startTime: number;
  duration: number;
  minValue: number;
  maxValue: number;
};

export type AudioProcessingSchedulerFn = (
  options: AudioProcessingSchedulerOptions,
) => void;

type Props = {
  title: string;
  description: React.ReactNode;
  code: string;
  scheduleAudioProcessing: AudioProcessingSchedulerFn;
};

export function Visualization({
  title,
  description,
  code,
  scheduleAudioProcessing,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const pixelRatio = Math.min(window.devicePixelRatio, 2);

    canvas.width *= pixelRatio;
    canvas.height *= pixelRatio;

    return () => {
      // Prevent 4x canvas size in React strict mode
      canvas.width /= pixelRatio;
      canvas.height /= pixelRatio;
    };
  });

  const onStart = () => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;

    const audioCtx = new AudioContext();
    const osc = new OscillatorNode(audioCtx, {frequency: minValue});

    osc.connect(audioCtx.destination);

    const startTime = audioCtx.currentTime;

    scheduleAudioProcessing({
      param: osc.frequency,
      startTime,
      duration,
      minValue,
      maxValue,
    });

    osc.start(startTime);
    osc.stop(startTime + duration + 0.025); // Give a bit of time to let the graphs draw up to max

    const canvasDrawer = new CanvasDrawer(canvas);

    osc.onended = () => {
      canvasDrawer.stop();
    };

    canvasDrawer.start(() => {
      const x = Math.min(1, (audioCtx.currentTime - startTime) / duration);
      const y = Math.min(
        1,
        (osc.frequency.value - minValue) / (maxValue - minValue),
      );
      canvasDrawer.updateValues(x, y);
    });
  };

  const mdnUrl = `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/${title}`;

  return (
    <section>
      <h2 className='py-2 text-xl font-semibold md:text-2xl'>{`${title}()`}</h2>
      <Link
        className='mb-4 inline-flex items-center gap-1 border-b border-b-transparent text-accent hover:border-b-accent motion-safe:transition-colors'
        href={mdnUrl}
        target='_blank'
      >
        MDN Docs <ExternalLinkIcon />
      </Link>
      <div>{description}</div>
      <pre className='my-4 overflow-x-auto rounded-md bg-borders px-2 py-4 text-xs sm:text-sm'>
        {code}
      </pre>
      <div className='relative mb-4 h-[250px] max-w-full'>
        <canvas
          ref={canvasRef}
          className='absolute inset-0 h-full w-full rounded-md border-2 border-borders p-1'
          width={768}
          height={250}
        />
        <button
          type='button'
          className='absolute left-2 top-2 cursor-default hover:text-accent active:text-accent/75'
          onClick={onStart}
        >
          <PlayIcon width={30} height={30} />
        </button>
      </div>
    </section>
  );
}
