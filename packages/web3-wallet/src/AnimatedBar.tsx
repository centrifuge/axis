import * as React from 'react'
import styled from 'styled-components'

interface Props {}

// Based on https://stackoverflow.com/a/34773398/625231
const Wrapper = styled.div`
  position: absolute;
  width: 170px;
  bottom: 0;
  height: 3px;
  overflow-x: hidden;
  background: #fff;
`

const Line = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.1);
  height: 3px;
`

const Increase = styled(Line)`
  animation: increase 2s infinite;

  @keyframes increase {
    from {
      left: -5%;
      width: 5%;
    }
    to {
      left: 130%;
      width: 100%;
    }
  }
`

const Decrease = styled(Line)`
  animation: decrease 2s 0.5s infinite;

  @keyframes decrease {
    from {
      left: -80%;
      width: 80%;
    }
    to {
      left: 110%;
      width: 10%;
    }
  }
`

export const AnimatedBar: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <Increase />
      <Decrease />
    </Wrapper>
  )
}
