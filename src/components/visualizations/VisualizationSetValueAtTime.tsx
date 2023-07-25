import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"
import { Paragraph, Highlight, HighlightVariable } from './Paragraph'

function Description() {
  return (
    <Paragraph>
      Schedules an <Highlight>instant</Highlight> change to the <HighlightVariable>AudioParam</HighlightVariable> value at a precise time.
    </Paragraph>
  )
}

const code =
`param.setValueAtTime(maxValue, startTime + duration * 0.5)`

export function VisualizationSetValueAtTime() {
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
