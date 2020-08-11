import * as React from 'react'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { TextInput } from 'grommet'
import { addThousandsSeparators, baseToDisplay, displayToBase } from './utils'
import { Decimal } from 'decimal.js-light'

import { tokens } from './tokens'
import {
  Wrapper,
  Input,
  InputField,
  Token,
  InnerToken,
  TokenBorderBottom,
  TokenIcon,
  Limit,
  LimitText,
  LimitAction,
} from './styles'

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
          <TokenBorderBottom>&nbsp;</TokenBorderBottom>
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
