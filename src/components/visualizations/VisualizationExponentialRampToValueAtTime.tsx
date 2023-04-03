import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

export const VisualizationExponentialRampToValueAtTime = () => {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.exponentialRampToValueAtTime(maxValue, startTime + duration)
  }
  return (
    <Visualization
      title="exponentialRampToValueAtTime"
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
