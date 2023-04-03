import { useEffect, useRef, useState } from "react"
import { FiberAudioContext } from "@/react-audio-fiber"
import { Button } from "@/components/blocks/Button"
import { ButtonToggle } from "@/components/blocks/ButtonToggle"

export const RAFLfoDemo = () => {
  const ctxRef = useRef<AudioContext>(null)
  const oscRef = useRef<OscillatorNode>(null)
  const lfoRef = useRef<OscillatorNode>(null)

  const [oscKey, setOscKey] = useState(0)

  const lfoToggleState = useState(true)
  const [lfoActive] = lfoToggleState

  useEffect(() => {
    console.info('Demo | mount | ctxRef.current: ', ctxRef.current)
    console.info('Demo | mount | oscRef.current: ', oscRef.current)
    console.info('Demo | mount | lfoRef.current: ', lfoRef.current)
  }, [])

  const play = async() => {
    if (
      !ctxRef.current ||
      !oscRef.current
    ) {
      return
    }

    const ctx = ctxRef.current
    const osc = oscRef.current

    await ctx.resume()

    const duration = 2

    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + duration)

    if (!lfoRef.current) {
      return
    }

    const lfo = lfoRef.current

    lfo.start(ctx.currentTime)
    lfo.stop(ctx.currentTime + duration)
  }

  return (
    <>
      <Button onClick={() => setOscKey(x => x + 1)}>Rerender Oscillator</Button>
      <Button onClick={play}>Play</Button>
      <ButtonToggle state={lfoToggleState}>Toggle LFO Nodes</ButtonToggle>

      <FiberAudioContext ref={ctxRef}>
        <series>
          <oscillatorNode key={oscKey} ref={oscRef} frequency={220}>
            {lfoActive && (
              <gainNode connectTo="frequency" gain={110}>
                <oscillatorNode ref={lfoRef} frequency={2}/>
              </gainNode>
            )}
          </oscillatorNode>
          <audioDestinationNode/>
        </series>
      </FiberAudioContext>
    </>
  )
}
