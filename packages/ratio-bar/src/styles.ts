import styled from 'styled-components'

import { Segment } from './types'

export const Wrapper = styled.div`
  display: flex;
`

export const Label = styled.div`
  flex: 0 0 60px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
`

export const Bar = styled.div`
  flex-grow: 1;
  margin-right: 12px;
`

export const InnerBar = styled.div``

interface SegmentDivProps extends Segment {
  isFirst?: boolean
  isLast?: boolean
}

export const SegmentDiv = styled.div<SegmentDivProps>`
  display: inline-block;
  transition: width 200ms linear;
  height: 32px;
  width: ${props => (props.separator && props.separator.text ? `calc(${props.width}% - 1px)` : `${props.width}%`)};
  background: ${props => props.backgroundColor};
  border-top-left-radius: ${props => (props.isFirst ? '8px' : 0)};
  border-bottom-left-radius: ${props => (props.isFirst ? '8px' : 0)};
  border-top-right-radius: ${props => (props.isLast ? '8px' : 0)};
  border-bottom-right-radius: ${props => (props.isLast ? '8px' : 0)};
  margin-right: -1px;
`

export const Separator = styled.div<Segment>`
  width: 1px;
  height: 40px;
  background-color: ${props => (props.separator && props.separator.color) || '#000'};
  display: inline-block;
  position: relative;
  top: ${props => ((props.separator && props.separator.position) === 'bottom' ? '8px' : '0')};
`

export const Separators = styled.div``

// margin-left is [center of the separator] - [half number of characters in text * average character width]
export const SeparatorText = styled.div<Segment>`
  display: inline;
  color: ${props => (props.separator && props.separator.color) || '#000'};
  transition: margin-left 200ms linear;
  margin-left: ${props =>
    props.widthSoFar ? `calc(${props.widthSoFar}% - ${((props.separator && props.separator.text) || []).length / 2}ch)` : '0'};
  overflow: hidden;
  white-space: nowrap;
`
