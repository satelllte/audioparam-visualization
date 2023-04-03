import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

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
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
