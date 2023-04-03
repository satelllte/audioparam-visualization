import { Button } from '@/components/blocks/Button'

/**

Possible RWA graph (v1):

<audioContext>
  <series>
    <oscillatorNode frequency={220}>
      <gainNode connectTo="frequency" gain={110}>
        <oscillatorNode frequency={2}/>
      </gainNode>
    </oscillatorNode>
    <audioDestinationNode/>
  </series>
</audioContext>

-----

Possible RWA graph (v2):

<audioContext>
  <series>
    <oscillatorNode frequency={220}>
      <series connectTo="frequency">
        <oscillatorNode frequency={2}/>
        <gainNode gain={110}/>
      </series>
    </oscillatorNode>
    <audioDestinationNode/>
  </series>
</audioContext>

*/
export const NativeOscLFODemo = () => {
  const play = () => {
    const duration = 2

    const ctx = new AudioContext()
    const osc = new OscillatorNode(ctx, { frequency: 220 })
    const lfo = new OscillatorNode(ctx, { frequency: 2 })
    const lfoGain = new GainNode(ctx, { gain: 110 })

    lfo.connect(lfoGain)
    lfoGain.connect(osc.frequency)
    osc.connect(ctx.destination)

    lfo.start(ctx.currentTime)
    lfo.stop(ctx.currentTime + duration)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + duration)
  }

  return (
    <Button onClick={play}>Native Oscillator LFO Demo</Button>
  )
}
