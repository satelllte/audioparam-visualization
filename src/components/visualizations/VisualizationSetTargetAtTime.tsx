import { Highlight, Paragraph } from "./Paragraph"
import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

const Description = () => {
  return (
    <Paragraph>
      Schedules the start of a <Highlight>gradual</Highlight> change to the AudioParam value.
      Useful for decay or release portions of ADSR envelopes.
    </Paragraph>
  )
}

const code =
`param.setTargetAtTime(maxValue, startTime, 0.15)`

export const VisualizationSetTargetAtTime = () => {
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
