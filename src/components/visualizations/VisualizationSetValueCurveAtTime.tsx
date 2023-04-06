import { Highlight, Paragraph } from "./Paragraph"
import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

const Description = () => {
  return (
    <Paragraph>
      Schedules the {'parameter\'s'} value to change following a <Highlight>curve</Highlight> defined by a list of values.
    </Paragraph>
  )
}

const code =
`param.setValueCurveAtTime([
  minValue,
  maxValue * 0.25,
  minValue,
  maxValue * 0.5,
  minValue,
  maxValue * 0.75,
  minValue,
  maxValue * 1.0,
], startTime, duration)`

export const VisualizationSetValueCurveAtTime = () => {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.setValueCurveAtTime([
      minValue,
      maxValue * 0.25,
      minValue,
      maxValue * 0.5,
      minValue,
      maxValue * 0.75,
      minValue,
      maxValue * 1.0,
    ], startTime, duration)
  }

  return (
    <Visualization
      title="setValueCurveAtTime"
      description={<Description/>}
      code={code}
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
