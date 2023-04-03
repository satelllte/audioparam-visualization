import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

export const VisualizationSetTargetAtTime = () => {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    const timeConstant = 0.5
    param.setTargetAtTime(maxValue, startTime, timeConstant)
  }

  return (
    <Visualization
      title="setTargetAtTime"
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
