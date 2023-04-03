import { useEffect, useRef, useState } from 'react'
import {
  Series,
  _AudioContext,
  _AudioDestinationNode,
  _GainNode,
  _OscillatorNode,
} from '@/react-web-audio'
import { Button } from '@/components/blocks/Button'
import { ButtonToggle } from '@/components/blocks/ButtonToggle'

export const RWABasicSeriesDemo = () => {
  const gainToggleState = useState(true)
  const [gainActive] = gainToggleState
  const destinationToggleState = useState(true)
  const [destinationActive] = destinationToggleState

  const audioContextRef = useRef<AudioContext>(null)
  const oscillatorNodeRef = useRef<OscillatorNode>(null)

  useEffect(() => {
    console.info('[RWABasicSeriesDemo] mount | audioContextRef.current: ', audioContextRef.current)
    console.info('[RWABasicSeriesDemo] mount | oscillatorNodeRef.current: ', oscillatorNodeRef.current)
  }, [])

  const play = () => {
    if (!audioContextRef.current || !oscillatorNodeRef.current) {
      return
    }

    const ctx = audioContextRef.current
    const osc = oscillatorNodeRef.current

    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.5)
  }

  return (
    <>
      {/* TODO: fix the issue when in-between node getting disconnected & then connected */}

      <Button onClick={play}>Play</Button>
      <ButtonToggle state={gainToggleState}>Toggle Gain</ButtonToggle>
      <ButtonToggle state={destinationToggleState}>Toggle Destination</ButtonToggle>

      <_AudioContext ref={audioContextRef}>
        <Series>
          <_OscillatorNode ref={oscillatorNodeRef} frequency={220}/>
          {gainActive && <_GainNode gain={0.5}/>}
          {destinationActive && <_AudioDestinationNode/>}
        </Series>
      </_AudioContext>
    </>
  )
}
