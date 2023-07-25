'use client';
import {Highlight, Paragraph} from './Paragraph';
import {type AudioProcessingSchedulerFn, Visualization} from './Visualization';

function Description() {
  return (
    <Paragraph>
      Schedules the parameter&apos;s value to change following a{' '}
      <Highlight>curve</Highlight> defined by a list of values. The curve is a{' '}
      <Highlight>linear interpolation</Highlight> between the sequence of values
      defined in an array.
    </Paragraph>
  );
}

const code = `param.setValueCurveAtTime([
  minValue,
  minValue + (maxValue - minValue) * 0.5,
  minValue,
  maxValue,
  minValue,
], startTime, duration)`;

export function VisualizationSetValueCurveAtTime() {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.setValueCurveAtTime(
      [
        minValue,
        minValue + (maxValue - minValue) * 0.5,
        minValue,
        maxValue,
        minValue,
      ],
      startTime,
      duration,
    );
  };

  return (
    <Visualization
      title='setValueCurveAtTime'
      description={<Description />}
      code={code}
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  );
}
