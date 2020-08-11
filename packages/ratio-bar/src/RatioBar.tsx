import * as React from 'react'

import { Wrapper, Bar, Label, SegmentDiv, Separator } from './styles'
import { Segment } from './types'

interface Labels {
  left?: string
  right?: string
}

interface Props {
  segments: Segment[]
  labels?: Labels
}

export const RatioBar: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Wrapper>
      {props.labels && props.labels.left && <Label>{props.labels.left}</Label>}
      <Bar>
        {props.segments.map((segment: Segment, index: number) => (
          <>
            <SegmentDiv {...segment} isFirst={index === 0} isLast={index === props.segments.length - 1}></SegmentDiv>
            {segment.separatorText && <Separator {...segment}></Separator>}
          </>
        ))}
      </Bar>
      {props.labels && props.labels.right && <Label>{props.labels.right}</Label>}
    </Wrapper>
  )
}

export default RatioBar
