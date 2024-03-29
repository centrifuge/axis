import * as React from 'react'
import ReactTooltip, { TooltipProps } from 'react-tooltip'
import styled from 'styled-components'

const StyledTooltip = styled(ReactTooltip)`
  padding: 6px 8px !important;
  font-size: 12px !important;
  background: #000 !important;
  opacity: 0.9 !important;
  max-width: 240px;
  text-align: left !important;

  em {
    font-weight: bold;
    font-style: normal;
  }

  p {
    font-weight: normal;
    margin: 0;
  }

  a {
    margin-left: 6px;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;

    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`

import { Wrapper } from './styles'

interface TooltipLink {
  text: string
  url: string
}

interface Props extends TooltipProps {
  title: string
  description?: string
  link?: TooltipLink
  children: React.ReactNode
  cursor?: string
}

export const Tooltip: React.FunctionComponent<Props> = (props: Props) => {
  const id = useId('tooltip')
  return (
    <>
      <Wrapper
        data-tip={
          props.description
            ? props.link
              ? `<em>${props.title}</em><p>${props.description} <a href="${props.link.url}" target="_blank">${props.link.text} 	&rarr;</a></p>`
              : `<em>${props.title}</em><p>${props.description}</p>`
            : `${props.title}`
        }
        data-html={true}
        data-for={id}
        data-place={props.place || 'bottom'}
        cursor={props.cursor || 'help'}
      >
        {props.children}
      </Wrapper>

      <StyledTooltip
        id={id}
        effect="solid"
        multiline={true}
        arrowColor="transparent"
        delayShow={props.delayShow || 500}
        delayHide={props.delayHide || 500}
        clickable={true}
      />
    </>
  )
}

let serverHandoffComplete = false
let i = 0
const genId = () => ++i

function useId(prefix = '') {
  const initialId = serverHandoffComplete ? genId() : null

  const [id, setId] = React.useState(initialId)

  React.useEffect(() => {
    serverHandoffComplete = true

    if (id === null) {
      setId(genId())
    }
  }, [])

  return id != null ? prefix.concat(id) : undefined
}

export default Tooltip
