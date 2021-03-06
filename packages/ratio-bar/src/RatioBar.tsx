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
  }, [props.segments])

  return (
    <Wrapper>
      {props.labels && props.labels.left && <Label>{props.labels.left}</Label>}
      <Bar>
        <Separators>
          {augmentedSegments.map((segment: Segment, index: number) => (
            <React.Fragment key={`separator-top-${index}`}>
              {segment.separator && segment.separator.text && segment.separator.position !== 'bottom' && (
                <SeparatorText {...segment} style={{ top: -20 }}>
                  {segment.separator.text}
                </SeparatorText>
              )}
            </React.Fragment>
          ))}
        </Separators>
        <InnerBar>
          {augmentedSegments.map((segment: Segment, index: number) => (
            <React.Fragment key={`bar-segment-${index}`}>
              <SegmentDiv {...segment} isFirst={index === 0} isLast={index === props.segments.length - 1}></SegmentDiv>
              {segment.separator && segment.separator.text && <Separator {...segment}></Separator>}
            </React.Fragment>
          ))}
        </InnerBar>
        <Separators>
          {augmentedSegments.map((segment: Segment, index: number) => (
            <React.Fragment key={`separator-bottom-${index}`}>
              {segment.separator && segment.separator.text && segment.separator.position === 'bottom' && (
                <SeparatorText {...segment}>{segment.separator.text}</SeparatorText>
              )}
            </React.Fragment>
          ))}
        </Separators>
      </Bar>
      {props.labels && props.labels.right && <Label>{props.labels.right}</Label>}
    </Wrapper>
  )
}

export default RatioBar
