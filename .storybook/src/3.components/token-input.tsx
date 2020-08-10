import React from 'react'
import { storiesOf } from '@storybook/react'
import { AxisTheme } from '../../../packages/theme'
import { TokenInput } from '@centrifuge/axis-token-input'
import { Box } from 'grommet'

storiesOf('Components | Token Input', module).add('Default', () => {
  const Comp = props => {
    return (
      <AxisTheme>
        <Box gap={'medium'} pad={'medium'} width={'medium'}>
          <TokenInput
            token="DAI"
            value="1000"
            maxValue="10000"
            onChange={(newValue: string) => console.log(newValue)}
          />
        </Box>
      </AxisTheme>
    )
  }

  return <Comp />
})
