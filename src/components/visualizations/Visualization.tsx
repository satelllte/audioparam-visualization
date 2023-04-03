import { useEffect, useRef } from "react"
import { Button } from "@/components/blocks/Button"
import { CanvasDrawer } from "./CanvasDrawer"

const duration = 1
const minValue = 110
const maxValue = 440

export type AudioProcessingSchedulerOptions = {
  param: AudioParam
  startTime: number
  duration: number
  minValue: number
  maxValue: number
}

export type AudioProcessingSchedulerFn = (options: AudioProcessingSchedulerOptions) => void

interface Props {
  title: string
  scheduleAudioProcessing: AudioProcessingSchedulerFn
}

export const Visualization = ({
  title,
  scheduleAudioProcessing,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current
    const pixelRatio = Math.min(window.devicePixelRatio, 2)

    canvas.width *= pixelRatio
    canvas.height *= pixelRatio

    return () => { // prevent 4x canvas size in React strict mode
      canvas.width /= pixelRatio
      canvas.height /= pixelRatio
    }
  })

  const onStart = () => {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current

    const audioCtx = new AudioContext()
    const osc = new OscillatorNode(audioCtx, { frequency: minValue })

    osc.connect(audioCtx.destination)

    const startTime = audioCtx.currentTime

    scheduleAudioProcessing({
      param: osc.frequency,
      startTime,
      duration,
      minValue,
      maxValue,
    })

    osc.start(startTime)
    osc.stop(startTime + duration + 0.025) // give a bit of time to let the graphs draw up to max

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
    <div className="py-6 max-w-xl">
      <h2>{title}</h2>
      <div className='my-4 relative w-[500px] h-[250px] max-w-full'>
        <canvas
          className="absolute inset-0 p-1 w-full h-full border border-stone-900 --bg-[length:10px_10px] --bg-[radial-gradient(theme(colors.sky[900])_10%,_transparent_10%)]"
          ref={canvasRef}
          width={500}
          height={250}
        />
      </div>
      <Button onClick={onStart}>Start</Button>
    </div>
  )
}
