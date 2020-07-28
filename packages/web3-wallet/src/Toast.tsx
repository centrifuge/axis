import * as React from 'react'
import { withTheme, ThemeProps as StyledThemeProps } from 'styled-components'

import { Transaction } from './types'
import { ToastCard, Icon, Content, Action, Title, Description } from './styles'
import { Spinner } from './Spinner'

import checkIcon from './img/Check-circle.svg'
import alertIcon from './img/Alert-circle.svg'
import failedIcon from './img/Failed-circle.svg'
import externalLinkIcon from './img/External-link.svg'

interface ThemeProps {
  global: any
}

interface Props extends Transaction, StyledThemeProps<ThemeProps> {}

const ToastWrapperInner: React.FC<Props> = (props: Props) => {
  const getTitle = () => {
    if (props.status === 'succeeded') return 'Transaction successful'
    if (props.status === 'failed') return 'Transaction failed'
    if (props.status === 'unconfirmed') return 'Waiting for confirmation'
    if (props.status === 'pending') return 'Transaction pending'
  }

  const getColor = () => {
    if (props.status === 'succeeded') return '#7ED321'
    if (props.status === 'failed') return '#F44E72'
    if (props.status === 'unconfirmed') return '#FCBA59'
    if (props.status === 'pending') return '#999'
  }

  return (
    <ToastCard backgroundColor={props.status === 'unconfirmed' ? '#FFF5DA' : '#fff'}>
      <Icon color={getColor()}>
        {props.status === 'succeeded' && <img src={checkIcon} alt={getTitle()} />}
        {props.status === 'failed' && <img src={failedIcon} alt={getTitle()} />}
        {props.status === 'unconfirmed' && <img src={alertIcon} alt={getTitle()} />}
        {props.status === 'pending' && <Spinner color={getColor()} />}
      </Icon>
      <Content>
        <Title color={getColor()}>{getTitle()}</Title>
        <Description>{props.description}</Description>
      </Content>
      {props.externalLink && (
        <Action>
          <a href={props.externalLink} target="_blank">
            <img src={externalLinkIcon} alt="Open link" />
          </a>
        </Action>
      )}
    </ToastCard>
  )
}

export const ToastWrapper = withTheme(ToastWrapperInner)
