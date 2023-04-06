import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"
import { Paragraph, Highlight, HighlightVariable } from './Paragraph'

const Description = () => {
  return (
    <Paragraph>
      Schedules a gradual <Highlight>linear</Highlight> change in the value of the <HighlightVariable>AudioParam</HighlightVariable>.
    </Paragraph>
  )
}

const code =
`param.linearRampToValueAtTime(maxValue, startTime + duration)`

export const VisualizationLinearRampToValueAtTime = () => {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.linearRampToValueAtTime(maxValue, startTime + duration)
  }

  return (
    <Visualization
      title="linearRampToValueAtTime"
      description={<Description/>}
      code={code}
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
