import styled from 'styled-components'
import { FormField } from 'grommet'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.div`
  display: flex;
`

export const InputField = styled(FormField)`
  flex-grow: 1;

  > div {
    flex-grow: 1;

    > div {
      flex-direction: row;
    }
  }

  input {
    box-shadow: none;
  }

  /* Error box */
  > span {
    display: none;
  }
`

export const Token = styled.div`
  font-size: 14px;
  margin: 12px 0 0 1px;
  width: 80px;
  display: flex;
  flex-direction: column;
`

export const InnerToken = styled.div`
  padding-left: 8px;
  border-left: 1px solid #eee;
  width: 100%;
  margin-top: auto;
  margin-bottom: 2px;
  height: 30px;
`

export const TokenBorderBottom = styled.div`
  border-bottom: 1px solid #d8d8d8;
  margin-left: 2px;
  height: 1px;
`

export const TokenIcon = styled.img`
  display: inline;
  width: 18px;
  height: 18px;
  margin-right: 4px;
  position: relative;
  padding-bottom: 4px;
  top: 6px;
  object-fit: contain;
`

export const Limit = styled.div`
  display: flex;
  padding-top: 4px;
  font-size: 12px;
`

interface LimitTextProps {
  error?: boolean;
}

export const LimitText = styled.div<LimitTextProps>`
  flex-grow: 1;
  color: ${props => props.error ? 'red' : '#000'};
`
export const LimitAction = styled.div`
  text-align: left;
  width: 80px;
  float: right;
  text-decoration: underline;
  font-weight: bold;
  padding-left: 8px;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`
