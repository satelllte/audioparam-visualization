import { useRef } from "react"
import { Button } from "@/components/blocks/Button"
import { CanvasDrawer } from './CanvasDrawer'

const duration = 2
const minValue = 55
const maxValue = 440

export const VisualizationAtTime = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const start = () => {
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
      const time = Math.min(1, (audioCtx.currentTime - startTime) / duration)
      const value = 1 - Math.min(1, (osc.frequency.value - minValue) / maxValue)
      canvasDrawer.updateValues(time, value)
    })
  }

  return (
    <div>
      <h2>setValueAtTime</h2>
      <Button onClick={start}>Start</Button>
      <div className='py-2'>
        <canvas ref={canvasRef} width={500} height={250}/>
      </div>
    </div>
  )
}
