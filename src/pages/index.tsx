import { H2 } from '@/components/blocks/H2'
import { H3 } from '@/components/blocks/H3'
import { Page } from '@/components/blocks/Page'
import { NativeDelayDemo } from '@/components/demos/native/NativeDelayDemo'
import { NativeLFODemo } from '@/components/demos/native/NativeLFODemo'
import { NativeOscLFODemo } from '@/components/demos/native/NativeOscLFODemo'
import { NativeMultiChannelsDemo } from '@/components/demos/native/NativeMultiChannelsDemo'
import { RWABasicSeriesDemo } from '@/components/demos/rwa/RWABasicSeriesDemo'

const HomePage = () => {
  return (
    <Page title='Home'>
      <H2>React Web Audio</H2>
      <H3>RWA: Basic series demo</H3>
      <RWABasicSeriesDemo/>
      <H2>Native</H2>
      <H3>Native: Delay Demo</H3>
      <NativeDelayDemo/>
      <H3>Native: LFO Demo</H3>
      <NativeLFODemo/>
      <H3>Native: Multi-Channels Demo</H3>
      <NativeMultiChannelsDemo/>
      <H3>Native: Osc LFO Demo</H3>
      <NativeOscLFODemo/>
    </Page>
  )
}

export default HomePage
