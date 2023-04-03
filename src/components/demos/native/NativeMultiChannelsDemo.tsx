import { Button } from '@/components/blocks/Button'

/**

<audioContext>
  <fSerial>
    <audioBufferSourceNode buffer={audioBuffer}/>

    // output/input index(es) can be arrays when it's needed to define which channel should connect to the next node(s) in the sequence
    // [[ outputIndex[0] = 0 ]] means that the first node of `fParallel` will be connected with the output of the first channel of ChannelSplitterNode
    // [[ outputIndex[1] = 1 ]] means that the second node of `fParallel` will be connected with the output of the second channel of ChannelSplitterNode
    // [[ inputIndex[0] = 0 ]] means that the first node of `fParallel` will be connected to the index of the first channel of it
    // [[ inputIndex[1] = 0 ]] means that the first node of `fParallel` will be connected to the index of the first channel of it
    // when [[ inputIndex = [0,0] ]] it's the same as [[ inputIndex = 0 ]], which is the default value, so it can be skipped in this case
    <channelSplitterNode
      numberOfOutputs={2}
      outputIndex={[0,1]}
      inputIndex={[0,0]} // not necessary
    />

    <fParallel>
      <gainNode gain={0.5} outputIndex={0} inputIndex={0}/>
      <gainNode gain={1} outputIndex={0} inputIndex={1}/>
    </fParallel>
    <channelMergerNode numberOfInputs={2}/>
    <audioDestinationNode/>
  </fSerial>
</audioContext>

*/
export const NativeMultiChannelsDemo = () => {
  const play = async() => {
    const res = await fetch('/audio/beat-029-amode.mp3')
    const arrayBuffer = await res.arrayBuffer()

    const ctx = new AudioContext()
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer)
    const bufferSource = new AudioBufferSourceNode(ctx, { buffer: audioBuffer })
    const splitter = new ChannelSplitterNode(ctx, { numberOfOutputs: audioBuffer.numberOfChannels })
    const merger = new ChannelMergerNode(ctx, { numberOfInputs: audioBuffer.numberOfChannels })
    const gainL = new GainNode(ctx, { gain: 0.5 })
    const gainR = new GainNode(ctx, { gain: 1 })

    console.info('[NativeMultiChannelsDemo] ctx: ', ctx)
    console.info('[NativeMultiChannelsDemo] audioBuffer: ', audioBuffer)
    console.info('[NativeMultiChannelsDemo] bufferSource: ', bufferSource)
    console.info('[NativeMultiChannelsDemo] splitter: ', splitter)
    console.info('[NativeMultiChannelsDemo] merger: ', merger)

    bufferSource.connect(splitter)
    splitter.connect(gainL, 0)
    splitter.connect(gainR, 1)
    gainL.connect(merger, 0, 0)
    gainR.connect(merger, 0, 1)
    merger.connect(ctx.destination)

    const duration = 50
    bufferSource.start(ctx.currentTime)
    bufferSource.stop(ctx.currentTime + duration)
  }

  return (
    <Button onClick={play}>Native Multi-Channels Demo</Button>
  )
}
