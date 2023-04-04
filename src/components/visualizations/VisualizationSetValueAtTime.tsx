import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"
import { Paragraph, Highlight } from './Paragraph'

const Description = () => {
  return (
    <Paragraph>
      Schedules an <Highlight>instant</Highlight> change to the AudioParam value at a precise time.
    </Paragraph>
  )
}

const code =
`param.setValueAtTime(maxValue, startTime + duration * 0.5)`

export const VisualizationSetValueAtTime = () => {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.setValueAtTime(maxValue, startTime + duration * 0.5)
  }

  return (
    <Visualization
      title="setValueAtTime"
      description={<Description/>}
      code={code}
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
