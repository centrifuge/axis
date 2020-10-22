import * as React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

const StyledTooltip = styled(ReactTooltip)`
  padding: 4px 8px !important;
  font-size: 12px !important;
  background: #000 !important;
  opacity: 0.8 !important;
`

import { Wrapper } from './styles'

interface Props {
  text: string
  children: React.ReactNode
}

export const Tooltip: React.FunctionComponent<Props> = (props: Props) => {
  const tooltipRef = React.useRef(null)

  return (
    <>
      <Wrapper data-tip={props.text} ref={tooltipRef}>
        {props.children}
      </Wrapper>

      <StyledTooltip effect="solid" multiline={true} place="top" />
    </>
  )
}

export default Tooltip
