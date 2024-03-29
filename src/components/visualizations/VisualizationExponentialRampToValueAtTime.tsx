'use client';
import {type AudioProcessingSchedulerFn, Visualization} from './Visualization';
import {Paragraph, Highlight, HighlightVariable} from './Paragraph';

function Description() {
  return (
    <Paragraph>
      Schedules a gradual <Highlight>exponential</Highlight> change in the value
      of the <HighlightVariable>AudioParam</HighlightVariable>.
    </Paragraph>
  );
}

const code = `param.exponentialRampToValueAtTime(maxValue, startTime + duration)`;

export function VisualizationExponentialRampToValueAtTime() {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.exponentialRampToValueAtTime(maxValue, startTime + duration);
  };

  return (
    <Visualization
      title='exponentialRampToValueAtTime'
      description={<Description />}
      code={code}
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  );
}
