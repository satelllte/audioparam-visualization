import Link from "next/link"
import { useEffect, useRef } from "react"
import { Button } from "@/components/blocks/Button"
import { IconExternalLink } from "@/components/icons/IconExternalLink"
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
  description?: React.ReactNode
  code?: string
  scheduleAudioProcessing: AudioProcessingSchedulerFn
}

export const Visualization = ({
  title,
  description,
  code,
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

  const mdnUrl = `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/${title}`

  return (
    <section className="py-6 flex flex-col items-center gap-4 lg:flex-row lg:items-start">
      <div className="lg:flex-1 w-full max-w-[600px]">
        <h2 className="py-2 text-xl font-bold">{`${title}()`}</h2>
        {description && (
          <div>{description}</div>
        )}
        <div className="pb-4 pt-2">
          <Link
            className="text-cyan-400 inline-flex gap-1 items-center border-b border-b-transparent hover:border-b-cyan-400 motion-safe:transition-colors"
            href={mdnUrl}
            target="_blank"
          >
            MDN Docs <IconExternalLink/>
          </Link>
        </div>
        {code && (
          <div className="py-2">
            {/* <h3>Source code:</h3> */}
            <pre className="border border-stone-800 --rounded-md my-2 px-2 py-4 text-xs sm:text-sm --pt-1 --pb-4 overflow-x-auto">
              {code}
            </pre>
          </div>
        )}
      </div>
      <div className="lg:flex-1 w-full max-w-[600px]">
        <div className='mb-4 relative h-[250px] max-w-full'>
          <canvas
            className="absolute inset-0 p-1 w-full h-full border border-stone-800 --bg-[length:10px_10px] --bg-[radial-gradient(theme(colors.sky[900])_10%,_transparent_10%)]"
            ref={canvasRef}
            width={600}
            height={250}
          />
        </div>
        <Button onClick={onStart}>Play</Button>
      </div>
    </section>
  )
}
