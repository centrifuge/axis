import React from 'react'
import { storiesOf } from '@storybook/react'
import { AxisTheme } from '../../../packages/theme'
import { TokenInput } from '@centrifuge/axis-token-input'
import { Box, Text } from 'grommet'

storiesOf('Components | Token Input', module)
  .add('Default', () => {
    const Comp = props => {
      const [daiValue, setDaiValue] = React.useState('234000000000000000')
      const [dropValue, setDropValue] = React.useState('600')
      const [tinValue, setTinValue] = React.useState('100')

      return (
        <AxisTheme>
          <Box gap={'medium'} pad={'medium'} width={'medium'}>
            <Text>DAI value outside TokenInput component: {daiValue}</Text>
            <br />

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
  .add('with a custom token', () => {
    const Comp = props => {
      const [value, setValue] = React.useState('234000000000000000')

      return (
        <AxisTheme>
          <Box gap={'medium'} pad={'medium'} width={'medium'}>
            <TokenInput
              label="Form label"
              token={{
                symbol: 'ETH',
                img:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/628px-Ethereum_logo_2014.svg.png',
                precision: 18,
                decimals: 18,
              }}
              value={value}
              maxValue="1230000000000000000"
              onChange={(newValue: string) => setValue(newValue)}
            />
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
  .add('with error messages', () => {
    const Comp = props => {
      const [daiValue, setDaiValue] = React.useState('234000000000000000')
      const [dropValue, setDropValue] = React.useState('600')
      const [tinValue, setTinValue] = React.useState('100')

      return (
        <AxisTheme>
          <Box gap={'medium'} pad={'medium'} width={'medium'}>
            <Text>DAI value outside TokenInput component: {daiValue}</Text>
            <br />

            <TokenInput
              label="Form label"
              token="DAI"
              value={daiValue}
              maxValue="1230000000000000000"
              onChange={(newValue: string) => setDaiValue(newValue)}
              error="Minimum Investment: 10.000 DAI"
            />

            <TokenInput
              token="DROP"
              value={dropValue}
              maxValue="5000000000000000000"
              onChange={(newValue: string) => setDropValue(newValue)}
              error="Minimum Investment: 10.000 DAI"
            />

            <TokenInput
              token="TIN"
              value={tinValue}
              onChange={(newValue: string) => setTinValue(newValue)}
              error="Minimum Investment: 10.000 DAI"
            />
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
