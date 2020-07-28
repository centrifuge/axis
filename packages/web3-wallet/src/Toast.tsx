import * as React from 'react'
import { withTheme, ThemeProps as StyledThemeProps } from 'styled-components'

import { Transaction } from './types'
import { ToastCard, Icon, Content, Action, Title, Description } from './styles'
import { Spinner } from './Spinner'

import checkIcon from './img/Check-circle.svg'
import alertIcon from './img/Alert-circle.svg'
import failedIcon from './img/Failed-circle.svg'
import externalLinkIcon from './img/External-link.svg'

const statusConfig = {
  succeeded: { title: 'Transaction successful', color: '#7ED321', background: '#fff', icon: checkIcon },
  failed: { title: 'Transaction failed', color: '#F44E72', background: '#fff', icon: failedIcon },
  unconfirmed: { title: 'Waiting for confirmation', color: '#FCBA59', background: '#FFF5DA', icon: alertIcon },
  pending: { title: 'Transaction pending', color: '#999', background: '#fff', icon: 'spinner' },
}

interface ThemeProps {
  global: any
}

interface Props extends Transaction, StyledThemeProps<ThemeProps> {}

const ToastWrapperInner: React.FC<Props> = (props: Props) => {
  const config = statusConfig[props.status]

  return (
    <ToastCard backgroundColor={config.background}>
      <Icon color={config.color}>
        {config.icon === 'spinner' && <Spinner color={config.color} />}
        {config.icon !== 'spinner' && <img src={config.icon} alt={config.title} />}
      </Icon>
      <Content>
        <Title color={config.color}>{config.title}</Title>
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
