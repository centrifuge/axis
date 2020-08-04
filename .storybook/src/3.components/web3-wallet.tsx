import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { AxisTheme } from '../../../packages/theme'
import { Box } from 'grommet/es6'
import { Web3Wallet } from '../../../packages/web3-wallet'

export const getAddressLink = (address: string) => {
  return `https://kovan.etherscan.io/address/${address}`
}

const transactions = [
  {
    description: 'Approve DROP',
    status: 'unconfirmed',
    showIfClosed: true,
  },
  { description: 'Supply 5,000.00 DAI', status: 'pending' },
  { description: 'Borrow 1,000.00 DAI', status: 'succeeded' },
  {
    description: 'Borrow 1,000.00 DAI',
    status: 'failed',
    externalLink: getAddressLink('0x5eA3c06ad387aF16F77fC2f1eD7fC2C7aF3B75c1'),
  },
]

storiesOf('Components | Web3 Wallet', module)
  .add('Default', () => {
    const Comp = props => {
      const [selected, setSelected] = useState(undefined)

      return (
        <AxisTheme>
          <Box gap={'medium'} pad={'medium'}>
            <Web3Wallet
              address="0x5eA3c06ad387aF16F77fC2f1eD7fC2C7aF3B75c1"
              providerName="MetaMask"
              networkName="Mainnet"
              onDisconnect={() => console.log('disconnect clicked')}
              transactions={[]}
              getAddressLink={getAddressLink}
            />
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
  .add('Within header', () => {
    const Comp = props => {
      return (
        <AxisTheme>
          <Box>
            <Box
              style={{
                position: 'sticky',
                top: 0,
                height: '56px',
                zIndex: 2,
                boxShadow: '0 0 4px 0px #00000075',
              }}
              background="white"
              justify="center"
              align="center"
              direction="row"
              fill="horizontal"
              pad={{ horizontal: 'small' }}
            >
              <Box direction="row" width="xlarge" align="center">
                <Box align="center" direction="row" basis="full">
                  <Web3Wallet
                    address="0x5eA3c06ad387aF16F77fC2f1eD7fC2C7aF3B75c1"
                    providerName="MetaMask"
                    networkName="Mainnet"
                    onDisconnect={() => console.log('disconnect clicked')}
                    transactions={[]}
                    getAddressLink={getAddressLink}
                    style={{ marginLeft: 'auto' }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
  .add('Within header and with transactions', () => {
    const Comp = props => {
      return (
        <AxisTheme>
          <Box>
            <Box
              style={{
                position: 'sticky',
                top: 0,
                height: '56px',
                zIndex: 2,
                boxShadow: '0 0 4px 0px #00000075',
              }}
              background="white"
              justify="center"
              align="center"
              direction="row"
              fill="horizontal"
              pad={{ horizontal: 'small' }}
            >
              <Box direction="row" width="xlarge" align="center">
                <Box align="center" direction="row" basis="full">
                  <Web3Wallet
                    address="0x5eA3c06ad387aF16F77fC2f1eD7fC2C7aF3B75c1"
                    providerName="MetaMask"
                    networkName="Mainnet"
                    onDisconnect={() => console.log('disconnect clicked')}
                    transactions={transactions}
                    getAddressLink={getAddressLink}
                    style={{ marginLeft: 'auto' }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
