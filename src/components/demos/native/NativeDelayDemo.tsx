import { Button } from '@/components/blocks/Button'

/**

Possible RWA graph:

<audioContext>
  <series>
    <oscillatorNode/>
    <feedback withDry>
      <gainNode gain={0.5} />
      <delayNode delayTime={0.3} />
    </feedback>
    <audioDestinationNode/>
  </series>
</audioContext>

*/
export const NativeDelayDemo = () => {
  const play = () => {
    const ctx = new AudioContext()
    const oscillator = new OscillatorNode(ctx, { frequency: 440 })
    const delay = new DelayNode(ctx, { delayTime: 0.3 })
    const gain = new GainNode(ctx, { gain: 0.5 })

    oscillator.connect(delay)

    // feedback
    gain.connect(delay)
    delay.connect(gain)

    delay.connect(ctx.destination)
    oscillator.connect(ctx.destination) // [withDry=true]

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.25)
  }

  return (
    <Button onClick={play}>Native Delay Demo</Button>
  )
}
