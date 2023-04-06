import { Highlight, Paragraph } from "./Paragraph"
import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

const Description = () => {
  return (
    <Paragraph>
      <Highlight>Cancels</Highlight> all scheduled future changes to the AudioParam but <Highlight>holds</Highlight> its value at a given time until further changes are made using other methods.
    </Paragraph>
  )
}

const code =
`param.linearRampToValueAtTime(maxValue, startTime + duration)
param.cancelAndHoldAtTime(startTime + duration * 0.5)`

export const VisualizationCancelAndHoldAtTime = () => {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.linearRampToValueAtTime(maxValue, startTime + duration)
    param.cancelAndHoldAtTime(startTime + duration * 0.5)
  }

  return (
    <Visualization
      title="cancelAndHoldAtTime"
      description={<Description/>}
      code={code}
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
