import React from 'react'
import { storiesOf } from '@storybook/react'

import { AxisTheme } from '../../../packages/theme'
import { Box, Button } from 'grommet/es6'
import { RatioBar } from '../../../packages/ratio-bar'

storiesOf('Components | Ratio Bar', module).add('TIN Ratio', () => {
  const Comp = props => {
    const minTinRatio = 10
    const maxTinRatio = 50
    const [tinRatio, setTinRatio] = React.useState(30)

    const randomize = () => {
      // Between 10 and 50
      const tinRatio = Math.floor(Math.random() * 40) + 10
      setTinRatio(tinRatio)
    }

    const segments = [
      {
        width: maxTinRatio,
        backgroundColor: '#0828BE',
        separator: {
          text: `Max: ${maxTinRatio}%`,
          color: '#000',
          position: 'bottom',
        },
      },
      {
        width: 100 - tinRatio - maxTinRatio,
        backgroundColor: '#0828BE',
        separator: {
          text: `Current: ${tinRatio}%`,
          color: '#0828BE',
          position: 'top',
        },
      },
      {
        width: tinRatio - minTinRatio,
        backgroundColor: '#D8D8D8',
        separator: {
          text: 'Min: 10%',
          color: '#000',
          position: 'bottom',
        },
      },
      {
        width: minTinRatio,
        backgroundColor: '#D8D8D8',
      },
    ]

    return (
      <AxisTheme>
        <Box gap={'medium'} pad={'medium'} width={'large'}>
          <Button onClick={randomize} alignSelf={'start'}>
            Randomize TIN ratio
          </Button>

          <Box gap={'medium'} pad={'medium'} width={'medium'}>
            <RatioBar labels={{ left: 'DROP', right: 'TIN' }} segments={segments} />
          </Box>
          <Box gap={'medium'} pad={'medium'} width={'large'}>
            <RatioBar labels={{ left: 'DROP', right: 'TIN' }} segments={segments} />
          </Box>
        </Box>
      </AxisTheme>
    )
  }

  return <Comp />
})
