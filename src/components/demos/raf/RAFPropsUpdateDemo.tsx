import { useId, useRef, useState } from "react"
import { FiberAudioContext } from "@/react-audio-fiber"
import { Oscillator } from "@/react-audio-fiber/extensions/Oscillator"
import { Button } from "@/components/blocks/Button"

/**
 * TODO: implement `prepareUpdate` & `commitUpdate` methods in the reconciler to make this demo work.
 */
export const RAFPropsUpdateDemo = () => {
  const audioContextRef = useRef<AudioContext>(null)
  const oscillatorNodeRef = useRef<OscillatorNode>(null)
  const gainId = useId()
  const [gain, setGain] = useState(0.5)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const play = async() => {
    if (
      !audioContextRef.current ||
      !oscillatorNodeRef.current
    ) {
      return
    }

    const audioContext = audioContextRef.current
    const oscillatorNode = oscillatorNodeRef.current

    await audioContext.resume()

    setIsPlaying(true)

    oscillatorNode.start(audioContext.currentTime)
    oscillatorNode.stop(audioContext.currentTime + 0.5)
  }

  return (
    <>
      <Button onClick={play} disabled={isPlaying}>Play</Button>
      <label htmlFor={gainId}>Gain</label>
      <input
        id={gainId}
        className='text-black'
        type='number'
        min={0}
        max={1}
        step={0.1}
        value={gain}
        onChange={(e) => setGain(Number(e.target.value))}
      />

      <FiberAudioContext ref={audioContextRef}>
        <series>
          <Oscillator
            ref={oscillatorNodeRef}
            frequency={220}
            onEnded={() => setIsPlaying(false)}
          />
          <gainNode gain={gain}/>
          <audioDestinationNode/>
        </series>
      </FiberAudioContext>
    </>
  )
}
