import * as React from 'react'

import { tokens } from './tokens'

interface Props {
  value: string
  onChange: (newValue: string) => void
  token: keyof typeof tokens
  maxValue?: string
}

export const TokenInput: React.FunctionComponent<Props> = (props: Props) => {
  return <>Token input</>
}

export default TokenInput
