import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Drop, Button, Box } from 'grommet'
import { FormDown } from 'grommet-icons'
import checkIcon from './img/Check.svg'
import copyIcon from './img/Copy.svg'
import linkIcon from './img/External-link.svg'
const { toDataUrl } = require('ethereum-blockies')
import { copyToClipboard } from '@centrifuge/axis-utils'

import { ToastWrapper } from './Toast'
import { Transaction } from './types'
import { AnimatedBar } from './AnimatedBar'

const InnerWallet = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: -7px;
`

interface Props {
  address: string
  providerName: string
  networkName: string
  onDisconnect: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  transactions: Transaction[]
  getAddressLink: (address: string) => string
  kycStatus: 'none' | 'created' | 'pending' | 'verified'
  extension?: React.ReactNode
}

export const Web3Wallet: React.FunctionComponent<Props> = ({
  address,
  providerName,
  networkName,
  onDisconnect,
  transactions,
  getAddressLink,
  kycStatus,
  extension,
  ...rest
}) => {
  const [open, setOpen] = useState(false)
  const [justClosed, setJustClosed] = useState(false)
  const [copied, setCopied] = useState(false)
  const contRef = useRef<HTMLDivElement>()
  const [, setShowDrop] = useState(false)
  useEffect(() => setShowDrop(true))

  return (
    <>
      <Container
        {...rest}
        ref={contRef}
        plain
        onClick={e => {
          if (!justClosed) {
            setOpen(true)
          }
        }}
      >
        <InnerWallet>
          <IdenticonSmall>
            <img src={toDataUrl(address)} width={24} height={24} />
            {/* TODO: these icons should be updated still */}
            {kycStatus === 'verified' && <Overlay>✓</Overlay>}
          </IdenticonSmall>
          <StatusAddrSmall>
            <Addr>{shorten(address, 4)}</Addr>
            <Status>{kycStatus === 'verified' ? 'Verified' : 'Connected'}</Status>
          </StatusAddrSmall>
          <Caret>
            <FormDown style={{ transform: open ? 'rotate(-180deg)' : '' }} />
          </Caret>
        </InnerWallet>

        <AnimatedBar active={transactions.filter(tx => tx.status === 'pending').length > 0} />
      </Container>
      {contRef.current && (
        <Drop
          plain
          responsive
          onClickOutside={e => {
            if (open) {
              setJustClosed(true)
              setOpen(false)
              setTimeout(() => setJustClosed(false), 0)
            }
          }}
          onEsc={() => setOpen(false)}
          style={{ padding: 6, marginTop: 20 }}
          target={contRef.current}
          align={{ right: 'right', top: 'bottom' }}
        >
          {open && (
            <Card>
              <Box style={{ padding: '16px', alignItems: 'center' }}>
                <Identicon>
                  <img src={toDataUrl(address)} width={64} height={64} />
                </Identicon>
                <StatusAddrCopyLink>
                  <StatusAddr>
                    <Subtitle>
                      Connected to {providerName} - {networkName}
                    </Subtitle>
                    <Addr title={address}>{shorten(address, 8)}</Addr>
                  </StatusAddr>
                  <Copy
                    plain
                    onClick={() =>
                      copyToClipboard(address)
                        .then(() => {
                          setCopied(true)
                          setTimeout(() => setCopied(false), 2000)
                        })
                        .catch(() => console.log('copy api not supported'))
                    }
                  >
                    {copied ? <img src={checkIcon} /> : <img src={copyIcon} />}
                  </Copy>
                  <Link plain href={getAddressLink(address)} target="_blank">
                    <img src={linkIcon} />
                  </Link>
                </StatusAddrCopyLink>

                <Button label="Disconnect" margin={{ top: '14px' }} onClick={onDisconnect} />
              </Box>
              {extension}
            </Card>
          )}
          {transactions
            .filter(tx => (open ? true : tx.showIfClosed))
            .map((tx: Transaction, index: number) => (
              <ToastWrapper key={index} {...tx} />
            ))}
        </Drop>
      )}
    </>
  )
}

export default Web3Wallet

const shorten = (addr: string, visibleChars: number) =>
  addr.substr(0, visibleChars) + '...' + addr.substr(addr.length - visibleChars)

const Container = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px 0 16px;
`

const IdenticonSmall = styled.div`
  margin-top: 2px;
  height: 24px;
  margin-right: 2px;
  width: 36px;
  text-align: left;

  img {
    border-radius: 4px;
  }
`

const Overlay = styled.div`
  display: inline;
  position: relative;
  left: -6px;
  background: white;
  font-size: 10px;
  border-radius: 8px;
  top: 2px;
  padding: 0px 0 0 2px;
`

const StatusAddrSmall = styled.div`
  text-align: left;
  width: 100px;
`

const Status = styled.div`
  height: 14px;
  font-size: 10px;
  line-height: 14px;
  color: #7ed321;
  font-weight: bold;
`

const Subtitle = styled.div`
  height: 14px;
  font-size: 10px;
  line-height: 14px;
  color: #999;
`

const Addr = styled.div`
  height: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`

const Caret = styled.div`
  height: 24px;
  margin-left: 8px;
  svg {
    transition: 200ms;
    transform-style: preserve-3d;
  }
`

const Card = styled.div`
  width: 356px;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`

const Identicon = styled.div`
  height: 64px;
  margin-bottom: 16px;
`

const StatusAddr = styled.div``

const StatusAddrCopyLink = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const KYCSection = styled(StatusAddrCopyLink)`
  margin-top: 12px;
`

const Copy = styled(Button)`
  margin-top: 1px;
  margin-left: auto;
  height: 24px;
`

const Link = styled(Button)`
  margin-top: 1px;
  margin-left: 8px;
  height: 24px;
`

const ExternalLink = styled(Link)`
  margin-left: auto;
`
