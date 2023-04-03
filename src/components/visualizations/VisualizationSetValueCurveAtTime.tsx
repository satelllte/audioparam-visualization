import { type AudioProcessingSchedulerFn, Visualization } from "./Visualization"

export const VisualizationSetValueCurveAtTime = () => {
  const scheduleAudioProcessing: AudioProcessingSchedulerFn = ({
    param,
    startTime,
    duration,
    minValue,
    maxValue,
  }) => {
    param.setValueCurveAtTime([
      minValue,
      maxValue * 0.25,
      minValue,
      maxValue * 0.5,
      minValue,
      maxValue * 0.75,
      minValue,
      maxValue * 1.0,
    ], startTime, duration)
  }

  return (
    <Visualization
      title="setValueCurveAtTime"
      scheduleAudioProcessing={scheduleAudioProcessing}
    />
  )
}
