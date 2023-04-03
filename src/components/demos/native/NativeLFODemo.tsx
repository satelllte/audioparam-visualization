import { Button } from '@/components/blocks/Button'

/**

Possible RWA graph:

<audioContext>
  <series>
    <oscillatorNode/>
    <gainNode gain={1.0}>
      <oscillatorNode connectTo="gain" frequency={10}/>
    </gainNode>
    <audioDestinationNode/>
  </series>
</audioContext>

*/
export const NativeLFODemo = () => {
  const play = () => {
    const ctx = new AudioContext()
    const osc = new OscillatorNode(ctx, { frequency: 440 })
    const amp = new GainNode(ctx, { gain: 1.0 })
    const lfo = new OscillatorNode(ctx, { frequency: 10 })

    console.info('amp.gain', amp.gain)

    lfo.connect(amp.gain)

    osc.connect(amp)
    amp.connect(ctx.destination)

    lfo.start(ctx.currentTime)
    lfo.stop(ctx.currentTime + 0.5)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.5)
  }

  return (
    <Button onClick={play}>Native LFO Demo</Button>
  )
}
