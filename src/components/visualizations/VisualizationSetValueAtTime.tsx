import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

export const VisualizationSetValueAtTime = () => {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.setValueAtTime(maxValue, startTime + duration * 0.5)
  }

  return (
    <Visualization
      title="setValueAtTime"
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
