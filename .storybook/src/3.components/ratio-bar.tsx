import React from 'react'
import { storiesOf } from '@storybook/react'

import { AxisTheme } from '../../../packages/theme'
import { Box } from 'grommet/es6'
import { RatioBar } from '../../../packages/ratio-bar'

storiesOf('Components | Ratio Bar', module).add('Default', () => {
  const Comp = props => {
    return (
      <AxisTheme>
        <Box gap={'medium'} pad={'medium'}>
          <RatioBar />
        </Box>
      </AxisTheme>
    )
  }

  return <Comp />
})
