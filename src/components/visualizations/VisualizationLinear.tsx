import { useRef } from "react"
import { Button } from "@/components/blocks/Button"
import { CanvasDrawer } from "./CanvasDrawer"

const duration = 2
const minValue = 55
const maxValue = 440

export const VisualizationLinear = () => {
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
    osc.frequency.linearRampToValueAtTime(maxValue, startTime + duration)

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
    <div>
      <h2>linearRampToValueAtTime</h2>
      <Button onClick={start}>Start</Button>
      <div className='py-2'>
        <canvas ref={canvasRef} width={500} height={250}/>
      </div>
    </div>
  )
}
