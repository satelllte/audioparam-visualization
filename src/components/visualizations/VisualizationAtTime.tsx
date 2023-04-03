import { useRef } from "react"
import { CanvasDrawer } from './CanvasDrawer'
import { Visualization } from "./Visualization"

const duration = 2
const minValue = 55
const maxValue = 440

export const VisualizationAtTime = () => {
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
    osc.frequency.setValueAtTime(maxValue, startTime + duration / 2)

    osc.start(startTime)
    osc.stop(startTime + duration)

    const canvasDrawer = new CanvasDrawer(canvas)

    osc.onended = () => {
      canvasDrawer.stop()
    }

    canvasDrawer.start(() => {
      const x = Math.min(1, (audioCtx.currentTime - startTime) / duration)
      const y = Math.min(1, (osc.frequency.value - minValue) / (maxValue - minValue))
      canvasDrawer.updateValues(x, y)
    })
  }

  return (
    <Visualization
      title="setValueAtTime"
      onStart={onStart}
      canvasRef={canvasRef}
    />
  )
}
