import React from 'react'
import { storiesOf } from '@storybook/react'

import { AxisTheme } from '../../../packages/theme'
import { Box, Button } from 'grommet/es6'
import { RatioBar } from '../../../packages/ratio-bar'

storiesOf('Components | Ratio Bar', module).add('TIN Ratio', () => {
  const Comp = props => {
    const minTinRatio = 10
    const [tinRatio, setTinRatio] = React.useState(30)

    const randomize = () => {
      // Between 10 and 70
      const tinRatio = Math.floor(Math.random() * 60) + 10
      setTinRatio(tinRatio)
    }

    return (
      <AxisTheme>
        <Box gap={'medium'} pad={'medium'} width={'large'}>
          <Button onClick={randomize} alignSelf={'start'}>
            Randomize TIN ratio
          </Button>

          <Box gap={'medium'} pad={'medium'} width={'medium'}>
            <RatioBar
              labels={{ left: 'DROP', right: 'TIN' }}
              segments={[
                {
                  width: 100 - tinRatio,
                  backgroundColor: '#0828BE',
                  separatorText: `Current Ratio ${tinRatio}%`,
                  separatorColor: '#0828BE',
                  separatorPosition: 'top',
                },
                {
                  width: tinRatio - minTinRatio,
                  backgroundColor: '#D8D8D8',
                  separatorText: 'Minimum Ratio 10%',
                  separatorColor: '#000',
                  separatorPosition: 'bottom',
                },
                {
                  width: minTinRatio,
                  backgroundColor: '#D8D8D8',
                },
              ]}
            />
          </Box>
          <Box gap={'medium'} pad={'medium'} width={'large'}>
            <RatioBar
              labels={{ left: 'DROP', right: 'TIN' }}
              segments={[
                {
                  width: 100 - tinRatio,
                  backgroundColor: '#0828BE',
                  separatorText: `Current Ratio ${tinRatio}%`,
                  separatorColor: '#0828BE',
                  separatorPosition: 'top',
                },
                {
                  width: tinRatio - minTinRatio,
                  backgroundColor: '#D8D8D8',
                  separatorText: 'Minimum Ratio 10%',
                  separatorColor: '#000',
                  separatorPosition: 'bottom',
                },
                {
                  width: minTinRatio,
                  backgroundColor: '#D8D8D8',
                },
              ]}
            />
          </Box>
        </Box>
      </AxisTheme>
    )
  }

  return <Comp />
})
