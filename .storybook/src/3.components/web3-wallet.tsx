import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { AxisTheme } from '../../../packages/theme'
import { Box, Button } from 'grommet/es6'
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
  {
    description: 'Borrow 1,000.00 DAI',
    status: 'succeeded',
    externalLink: getAddressLink('0x5eA3c06ad387aF16F77fC2f1eD7fC2C7aF3B75c1'),
    showIfClosed: true,
  },
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

  .add('Within header and with extension (RAD Rewards)', () => {
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
                    extension={
                      <Box pad="medium" background="#FCBA59" style={{ borderRadius: '0 0 8px 8px' }}>
                        My extension
                      </Box>
                    }
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
      const [showAnimatedBar, setShowAnimatedBar] = useState(true)

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
                    transactions={transactions.map((tx: any) => {
                      if (!showAnimatedBar && tx.status === 'pending') return { ...tx, status: 'unconfirmed' }
                      return tx
                    })}
                    getAddressLink={getAddressLink}
                    style={{ marginLeft: 'auto' }}
                  />
                </Box>
              </Box>
            </Box>

            <Button onClick={() => setShowAnimatedBar(!showAnimatedBar)}>Toggle animated bar</Button>
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })

  .add('Within header and with failed transaction', () => {
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
                    transactions={[
                      {
                        description: 'Borrow 1,000.00 DAI',
                        status: 'failed',
                        showIfClosed: true,
                        failedReason: 'Insufficient funds in account.',
                      },
                      {
                        description: 'Borrow 1,000.00 DAI',
                        status: 'failed',
                        showIfClosed: true,
                        failedReason:
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus turpis, gravida nec justo in, commodo commodo ligula. Proin consequat, ex a aliquam aliquet, sem magna accumsan enim, sed placerat velit massa et sapien. Nunc ultricies, erat vel gravida pulvinar, lorem nulla placerat purus, id sollicitudin orci est ut sem.',
                      },
                    ]}
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
  .add('With multiple KYC stati', () => {
    const Comp = props => {
      return (
        <AxisTheme>
          <Box>
            <Box gap={'medium'} pad={'medium'}>
              <Web3Wallet
                address="0x5eA3c06ad387aF16F77fC2f1eD7fC2C7aF3B75c1"
                providerName="MetaMask"
                networkName="Mainnet"
                onDisconnect={() => console.log('disconnect clicked')}
                transactions={[]}
                kycStatus="none"
                getAddressLink={getAddressLink}
              />
            </Box>

            <Box gap={'medium'} pad={'medium'}>
              <Web3Wallet
                address="0x5eA3c06ad387aF16F77fC2f1eD7fC2C7aF3B75c1"
                providerName="MetaMask"
                networkName="Mainnet"
                onDisconnect={() => console.log('disconnect clicked')}
                transactions={[]}
                kycStatus="pending"
                getAddressLink={getAddressLink}
              />
            </Box>

            <Box gap={'medium'} pad={'medium'}>
              <Web3Wallet
                address="0x5eA3c06ad387aF16F77fC2f1eD7fC2C7aF3B75c1"
                providerName="MetaMask"
                networkName="Mainnet"
                onDisconnect={() => console.log('disconnect clicked')}
                transactions={[]}
                kycStatus="verified"
                getAddressLink={getAddressLink}
              />
            </Box>
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
