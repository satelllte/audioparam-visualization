import { useRef } from "react"
import { CanvasDrawer } from './CanvasDrawer'
import { Visualization } from "./Visualization"

const duration = 2
const minValue = 55
const maxValue = 440

export const VisualizationValueCurveAtTime = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const onStart = () => {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current

    const audioCtx = new AudioContext()
    const osc = new OscillatorNode(audioCtx, { frequency: minValue })

    osc.connect(audioCtx.destination)

    const startTime = audioCtx.currentTime
    osc.frequency.setValueCurveAtTime([
      minValue,
      maxValue * 0.25,
      minValue,
      maxValue * 0.5,
      minValue,
      maxValue * 0.75,
      minValue,
      maxValue * 1.0,
    ], startTime, duration)

    osc.start(startTime)
    osc.stop(startTime + duration)

    const canvasDrawer = new CanvasDrawer(canvas)

    osc.onended = () => {
      canvasDrawer.stop()
    }

    canvasDrawer.start(() => {
      const x = Math.min(1, (audioCtx.currentTime - startTime) / duration)
      const y = Math.min(1, (osc.frequency.value - minValue) / maxValue)
      canvasDrawer.updateValues(x, y)
    })
  }

  return (
    <Visualization
      title="setValueCurveAtTime"
      onStart={onStart}
      canvasRef={canvasRef}
    />
  )
}
