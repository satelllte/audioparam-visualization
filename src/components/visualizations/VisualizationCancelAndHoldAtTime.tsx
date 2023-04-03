import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

export const VisualizationCancelAndHoldAtTime = () => {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.linearRampToValueAtTime(maxValue, startTime + duration)
    param.cancelAndHoldAtTime(startTime + duration / 2)
  }

  return (
    <Visualization
      title="cancelAndHoldAtTime"
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
