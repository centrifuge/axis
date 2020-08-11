import * as React from 'react'
import styled from 'styled-components'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { FormField, TextInput } from 'grommet'
import { addThousandsSeparators, baseToDisplay, displayToBase } from './utils'
import { Decimal } from 'decimal.js-light'

import { tokens } from './tokens'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.div`
  display: flex;
`

const InputField = styled(FormField)`
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

const Token = styled.div`
  font-size: 14px;
  margin: 12px 0 0 1px;
  width: 80px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
`

const InnerToken = styled.div`
  padding: 4px 0 0 8px;
  border-left: 1px solid #eee;
  width: 100%;
  margin-top: auto;
  margin-bottom: 2px;
`

const TokenIcon = styled.img`
  display: inline;
  width: 18px;
  height: 18px;
  margin-right: 6px;
  position: relative;
  padding-bottom: 4px;
  top: 4px;
`

const Limit = styled.div`
  display: flex;
  padding-top: 4px;
`

const LimitText = styled.div`
  flex-grow: 1;
`
const LimitAction = styled.div`
  text-align: left;
  width: 80px;
  float: right;
  text-decoration: underline;
  font-weight: bold;
  padding-left: 8px;
  cursor: pointer;
`

interface Props {
  label?: string
  value: string
  onChange: (newValue: string) => void
  token: keyof typeof tokens
  maxValue?: string
}

export const TokenInput: React.FunctionComponent<Props> = (props: Props) => {
  const token = tokens[props.token]

  const [value, setValue] = React.useState('')
  const [maxValue, setMaxValue] = React.useState('')
  const [error, setError] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    if (props.value) {
      const valueToDecimal = new Decimal(baseToDisplay(props.value, token.decimals)).toFixed(token.precision)
      setValue(addThousandsSeparators(valueToDecimal.toString()))
    }
  }, [props.value])

  React.useEffect(() => {
    if (props.maxValue) {
      const valueToDecimal = new Decimal(baseToDisplay(props.maxValue, token.decimals)).toFixed(token.precision)
      setMaxValue(addThousandsSeparators(valueToDecimal.toString()))
    }
  }, [props.maxValue])

  const setMax = () => {
    if (props.maxValue) props.onChange(props.maxValue)
  }

  const onChange = (values: NumberFormatValues) => {
    const nonBaseUnit = values.value
    setValue(nonBaseUnit)

    const baseUnits = displayToBase(nonBaseUnit, token.decimals)
    props.onChange(baseUnits)

    if (props.maxValue && baseUnits > props.maxValue) {
      setError(' ')
    } else if (error) {
      setError(undefined)
    }
  }

  return (
    <Wrapper>
      <Input>
        <InputField label={props.label} error={error}>
          <NumberFormat
            thousandSeparator=","
            decimalScale={token.precision}
            fixedDecimalScale
            allowNegative={false}
            customInput={TextInput}
            value={value}
            onValueChange={onChange}
          />
        </InputField>
        <Token>
          <InnerToken>
            <TokenIcon src={token.img} alt={props.token as string} />
            {props.token}
          </InnerToken>
        </Token>
      </Input>

      {props.maxValue && (
        <Limit>
          <LimitText>Limit: {maxValue}</LimitText>
          <LimitAction onClick={setMax}>Set max</LimitAction>
        </Limit>
      )}
    </Wrapper>
  )
}

export default TokenInput
