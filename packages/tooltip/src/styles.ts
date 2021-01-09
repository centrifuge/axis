import styled from 'styled-components'

export const Wrapper = styled.span<{ cursor?: string }>`
  width: fit-content;
  cursor: ${props => (props.cursor ? props.cursor : 'help')};
`
