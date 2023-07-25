import { Highlight, HighlightVariable, Paragraph } from "./Paragraph"
import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

function Description() {
  return (
    <Paragraph>
      Schedules the start of a gradual change to the <HighlightVariable>AudioParam</HighlightVariable> value.
      Useful for decay or release portions of ADSR envelopes.
      The change starts at the time specified in <HighlightVariable>startTime</HighlightVariable> and <Highlight>exponentially</Highlight> moves towards the value given by the <HighlightVariable>target</HighlightVariable> parameter.
    </Paragraph>
  )
}

const code =
`param.setTargetAtTime(maxValue, startTime, 0.15)`

export function VisualizationSetTargetAtTime() {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    const timeConstant = 0.15
    param.setTargetAtTime(maxValue, startTime, timeConstant)
  }

  return (
    <Visualization
      title="setTargetAtTime"
      description={<Description/>}
      code={code}
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
