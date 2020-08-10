import * as React from 'react'
import styled from 'styled-components'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { TextInput } from 'grommet'

import { tokens } from './tokens'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.div`
  display: flex;
`

const Token = styled.div``

const Limit = styled.div`
  display: flex;
`

const LimitText = styled.div`
  flex-grow: 1;
`
const LimitAction = styled.div`
  text-align: right;
`

interface Props {
  value: string
  onChange: (newValue: string) => void
  token: keyof typeof tokens
  maxValue?: string
}

export const TokenInput: React.FunctionComponent<Props> = (props: Props) => {
  const token = tokens[props.token]

  return (
    <Wrapper>
      <Input>
        <NumberFormat
          thousandSeparator=","
          decimalScale={token.precision}
          fixedDecimalScale
          allowNegative={false}
          customInput={TextInput}
          value={props.value}
          onValueChange={(values: NumberFormatValues) => props.onChange(values.value)}
        />
        <Token>{token.symbol}</Token>
      </Input>

      {props.maxValue && (
        <Limit>
          <LimitText>Limit: {props.maxValue}</LimitText>
          <LimitAction>Set max</LimitAction>
        </Limit>
      )}
    </Wrapper>
  )
}

export default TokenInput
