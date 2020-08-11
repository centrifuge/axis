import styled from 'styled-components'

import { Segment } from './types'

export const Wrapper = styled.div`
    display: flex;
`

export const Label = styled.div`
    flex: 0 0 60px;
    font-size: 16px;
    font-weight: bold;
`

export const Bar = styled.div`
    flex-grow: 1;
    margin-right: 12px;
`

interface SegmentDivProps extends Segment {
    isFirst?: boolean
    isLast?: boolean
}

export const SegmentDiv = styled.div<SegmentDivProps>`
    display: inline-block;
    transition: width 200ms linear;
    height: 32px;
    width: ${props => props.separatorText ?  `calc(${props.width}% - 1px)` : `${props.width}%`};
    background: ${props => props.backgroundColor};
    border-top-left-radius: ${props => props.isFirst ? '8px' : 0};
    border-bottom-left-radius: ${props => props.isFirst ? '8px' : 0};
    border-top-right-radius: ${props => props.isLast ? '8px' : 0};
    border-bottom-right-radius: ${props => props.isLast ? '8px' : 0};
    margin-right: -1px;
`

interface SeparatorProps extends Segment {}

export const Separator = styled.div<SeparatorProps>`
    width: 1px;
    height: 40px;
    background-color: ${props => props.separatorColor || '#000'};
    display: inline-block;
`