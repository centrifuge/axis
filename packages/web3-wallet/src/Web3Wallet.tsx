import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Drop, Button } from 'grommet'
import { FormDown } from 'grommet-icons'
import checkIcon from './img/Check.svg'
import copyIcon from './img/Copy.svg'
import linkIcon from './img/External-link.svg'
const { toDataUrl } = require('ethereum-blockies')
import { copyToClipboard } from '@centrifuge/axis-utils'

interface Transaction {
  description: string
  status: 'unconfirmed' | 'pending' | 'succeeded' | 'failed'
  txHash: string
  showIfClosed?: boolean
}

interface Props {
  address: string
  providerName: string
  networkName: string
  onDisconnect: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  transactions: Transaction[]
  getAddressLink: (address: string) => string
}

export const Web3Wallet: React.FunctionComponent<Props> = ({
  address,
  providerName,
  networkName,
  onDisconnect,
  transactions,
  getAddressLink,
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
        onClick={(e) => {
          if (!justClosed) {
            setOpen(true)
          }
        }}
      >
        <IdenticonSmall>
          <img src={toDataUrl(address)} width={24} height={24} />
        </IdenticonSmall>
        <StatusAddrSmall>
          <Status>Connected</Status>
          <Addr>{shorten(address, 4)}</Addr>
        </StatusAddrSmall>
        <Caret>
          <FormDown style={{ transform: open ? 'rotate(-180deg)' : '' }} />
        </Caret>
      </Container>
      {contRef.current && (
        <Drop
          plain
          responsive
          onClickOutside={(e) => {
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
              <Identicon>
                <img src={toDataUrl(address)} width={64} height={64} />
              </Identicon>
              <StatusAddrCopyLink>
                <StatusAddr>
                  <Status>
                    Connected to {providerName} - {networkName}
                  </Status>
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
            </Card>
          )}
          {transactions
            .filter((tx) => (open ? true : tx.showIfClosed))
            .map((tx) => (
              <Card>
                <div>{tx.status}</div>
                <div>{tx.description}</div>
              </Card>
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
  align-items: center;
  padding: 0 16px 0 16px;
`

const IdenticonSmall = styled.div`
  height: 24px;
  margin-right: 8px;
`

const StatusAddrSmall = styled.div``

const Status = styled.div`
  height: 14px;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #7ed321;
`

const Addr = styled.div`
  height: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
`

const Caret = styled.div`
  height: 24px;
  margin-left: 20px;
  svg {
    transition: 200ms;
    transform-style: preserve-3d;
  }
`

const Card = styled.div`
  width: 356px;
  margin-bottom: 4px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
