import { Highlight, HighlightVariable, Paragraph } from "./Paragraph"
import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

function Description() {
  return (
    <Paragraph>
      <Highlight>Cancels</Highlight> all scheduled future changes to the <HighlightVariable>AudioParam</HighlightVariable>.
    </Paragraph>
  )
}

const code =
`param.linearRampToValueAtTime(maxValue, startTime + duration * 0.25)
param.linearRampToValueAtTime(minValue, startTime + duration * 0.5)
param.linearRampToValueAtTime(maxValue, startTime + duration * 0.75)
param.cancelScheduledValues(startTime + duration * 0.75)`

export function VisualizationCancelScheduledValues() {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.linearRampToValueAtTime(maxValue, startTime + duration * 0.25)
    param.linearRampToValueAtTime(minValue, startTime + duration * 0.5)
    param.linearRampToValueAtTime(maxValue, startTime + duration * 0.75)
    param.cancelScheduledValues(startTime + duration * 0.75)
  }

  return (
    <Visualization
      title="cancelScheduledValues"
      description={<Description/>}
      code={code}
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
