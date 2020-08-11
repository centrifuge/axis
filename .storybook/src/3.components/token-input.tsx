import React from 'react'
import { storiesOf } from '@storybook/react'
import { AxisTheme } from '../../../packages/theme'
import { TokenInput } from '@centrifuge/axis-token-input'
import { Box } from 'grommet'

storiesOf('Components | Token Input', module).add('Default', () => {
  const Comp = props => {
    const [daiValue, setDaiValue] = React.useState('234000000000000000')
    const [dropValue, setDropValue] = React.useState('600')
    const [tinValue, setTinValue] = React.useState('100')

    return (
      <AxisTheme>
        <Box gap={'medium'} pad={'medium'} width={'medium'}>
          <TokenInput
            label="Form label"
            token="DAI"
            value={daiValue}
            maxValue="1230000000000000000"
            onChange={(newValue: string) => setDaiValue(newValue)}
          />

          <TokenInput
            token="DROP"
            value={dropValue}
            maxValue="5000000000000000000"
            onChange={(newValue: string) => setDropValue(newValue)}
          />

          <TokenInput token="TIN" value={tinValue} onChange={(newValue: string) => setTinValue(newValue)} />
        </Box>
      </AxisTheme>
    )
  }

  return <Comp />
})
