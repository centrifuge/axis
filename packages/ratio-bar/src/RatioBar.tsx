import * as React from 'react'

import { Wrapper, Bar, Label, SegmentDiv, Separator, InnerBar, Separators, SeparatorText } from './styles'
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
  const [augmentedSegments, setAugmentedSegments] = React.useState(props.segments)

  React.useEffect(() => {
    let widthSoFar = 0
    const augmentedSegments = props.segments.map((segment: Segment) => {
      widthSoFar += segment.width
      return { ...segment, widthSoFar }
    })

    setAugmentedSegments(augmentedSegments)
  })

  return (
    <Wrapper>
      {props.labels && props.labels.left && <Label>{props.labels.left}</Label>}
      <Bar>
        <Separators>
          {augmentedSegments.map((segment: Segment) => (
            <>
              {segment.separatorText && segment.separatorPosition !== 'bottom' && (
                <SeparatorText {...segment}>{segment.separatorText}</SeparatorText>
              )}
            </>
          ))}
        </Separators>
        <InnerBar>
          {augmentedSegments.map((segment: Segment, index: number) => (
            <>
              <SegmentDiv {...segment} isFirst={index === 0} isLast={index === props.segments.length - 1}></SegmentDiv>
              {segment.separatorText && <Separator {...segment}></Separator>}
            </>
          ))}
        </InnerBar>
        <Separators>
          {augmentedSegments.map((segment: Segment) => (
            <>
              {segment.separatorText && segment.separatorPosition === 'bottom' && (
                <SeparatorText {...segment}>{segment.separatorText}</SeparatorText>
              )}
            </>
          ))}
        </Separators>
      </Bar>
      {props.labels && props.labels.right && <Label>{props.labels.right}</Label>}
    </Wrapper>
  )
}

export default RatioBar
