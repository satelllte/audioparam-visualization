import { useEffect, useRef, useState } from "react"
import { FiberAudioContext } from "@/react-audio-fiber"
import { Oscillator } from "@/react-audio-fiber/extensions/Oscillator"
import { Button } from "@/components/blocks/Button"
import { ButtonToggle } from "@/components/blocks/ButtonToggle"

export const RAFDemo = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const audioContextRef = useRef<AudioContext>(null)
  const oscillatorNodeRef = useRef<OscillatorNode>(null)
  const gainNodeRef = useRef<GainNode>(null)
  const audioDestinationNodeRef = useRef<AudioDestinationNode>(null)

  const gainToggleState = useState(true)
  const [gainActive] = gainToggleState
  const destinationToggleState = useState(false)
  const [destinationActive] = destinationToggleState

  useEffect(() => {
    console.info('Demo | mount | audioContextRef.current: ', audioContextRef.current)
    console.info('Demo | mount | oscillatorNodeRef.current: ', oscillatorNodeRef.current)
    console.info('Demo | mount | gainNodeRef.current: ', gainNodeRef.current)
    console.info('Demo | mount | audioDestinationNodeRef.current: ', audioDestinationNodeRef.current)
  }, [])

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
      <ButtonToggle state={gainToggleState}>Toggle Gain</ButtonToggle>
      <ButtonToggle state={destinationToggleState}>Toggle Destination</ButtonToggle>

      <FiberAudioContext ref={audioContextRef}>
        <series>
          <Oscillator
            ref={oscillatorNodeRef}
            frequency={220}
            onEnded={() => setIsPlaying(false)}
          />
          {gainActive && <gainNode ref={gainNodeRef} gain={0.5}/>}
          {destinationActive && <audioDestinationNode ref={audioDestinationNodeRef}/>}
        </series>
      </FiberAudioContext>
    </>
  )
}
