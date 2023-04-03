import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

export const VisualizationCancelScheduledValues = () => {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.exponentialRampToValueAtTime(maxValue, startTime + duration * 0.25)
    param.exponentialRampToValueAtTime(maxValue * 0.5, startTime + duration * 0.5)
    param.exponentialRampToValueAtTime(maxValue, startTime + duration)
    param.cancelScheduledValues(startTime + duration * 0.51)
  }

  return (
    <Visualization
      title="cancelScheduledValues"
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
