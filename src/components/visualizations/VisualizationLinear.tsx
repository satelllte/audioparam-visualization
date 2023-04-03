import { useRef } from "react"
import { Button } from "@/components/blocks/Button"

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
    const canvasCtx = canvas.getContext('2d')

    if (!canvasCtx) {
      return
    }

    canvasCtx.clearRect(0, 0, canvas.width, canvas.height)

    const audioCtx = new AudioContext()
    const osc = new OscillatorNode(audioCtx, { frequency: minValue })

    osc.connect(audioCtx.destination)

    const startTime = audioCtx.currentTime
    osc.frequency.linearRampToValueAtTime(maxValue, startTime + duration)

    osc.start(startTime)
    osc.stop(startTime + duration)

    let shouldDraw = true

    osc.onended = () => {
      shouldDraw = false
    }

    const draw = () => {
      if (!shouldDraw) {
        return
      }

      const progressX = Math.min(1, (audioCtx.currentTime - startTime) / duration)
      const progressY = 1 - Math.min(1, (osc.frequency.value - minValue) / maxValue)

      const r = 3
      const x = progressX * canvas.width
      const y = progressY * canvas.height
      
      canvasCtx.fillStyle = "#ffffff"
      canvasCtx.beginPath()
      canvasCtx.arc(x, y, r, 0, Math.PI * 2, true);
      canvasCtx.closePath()
      canvasCtx.fill()

      requestAnimationFrame(draw) 
    }

    draw()
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
