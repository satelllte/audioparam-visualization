import { useEffect, useRef, useState } from "react"
import { FiberAudioContext } from "@/react-audio-fiber"
import { Oscillator } from "@/react-audio-fiber/extensions/Oscillator"
import { Button } from "@/components/blocks/Button"
import { ButtonToggle } from "@/components/blocks/ButtonToggle"

export const RAFNestedSeriesDemo = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const audioContextRef = useRef<AudioContext>(null)
  const oscillatorNodeRef = useRef<OscillatorNode>(null)
  const gainNodeRef = useRef<GainNode>(null)
  const audioDestinationNodeRef = useRef<AudioDestinationNode>(null)

  const gainToggleState = useState(true)
  const [gainActive] = gainToggleState
  const destinationToggleState = useState(true)
  const [destinationActive] =destinationToggleState
  const nestedSeriesToggleState = useState(true)
  const [nestedSeriesActive] = nestedSeriesToggleState
  const gainIn1ToggleState = useState(true)
  const [gainIn1Active] = gainIn1ToggleState
  const gainIn2ToggleState = useState(true)
  const [gainIn2Active] = gainIn2ToggleState
  const gainIn3ToggleState = useState(true)
  const [gainIn3Active] = gainIn3ToggleState

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
      <ButtonToggle state={nestedSeriesToggleState}>Toggle Nested Series</ButtonToggle>
      <div className={`pl-8 flex flex-col gap-2 ${nestedSeriesActive ? '' : 'opacity-50'}`}>
        <ButtonToggle state={gainIn1ToggleState}>Toggle Gain in 1</ButtonToggle>
        <ButtonToggle state={gainIn2ToggleState}>Toggle Gain in 2</ButtonToggle>
        <ButtonToggle state={gainIn3ToggleState}>Toggle Gain in 3</ButtonToggle>
      </div>
      <ButtonToggle state={gainToggleState}>Toggle Gain</ButtonToggle>
      <ButtonToggle state={destinationToggleState}>Toggle Destination</ButtonToggle>

      <FiberAudioContext ref={audioContextRef}>
        <series>
          <Oscillator
            ref={oscillatorNodeRef}
            frequency={220}
            onEnded={() => setIsPlaying(false)}
          />
          {nestedSeriesActive && (
            <series>
              {gainIn1Active && <gainNode gain={0.42}/>}
              {gainIn2Active && <gainNode gain={0.62}/>}
              {gainIn3Active && <gainNode gain={0.72}/>}
            </series>
          )}
          {gainActive && <gainNode ref={gainNodeRef} gain={0.5}/>}
          {destinationActive && <audioDestinationNode ref={audioDestinationNodeRef}/>}
        </series>
      </FiberAudioContext>
    </>
  )
}
