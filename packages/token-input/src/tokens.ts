import daiIcon from './img/dai.svg'
import dropIcon from './img/drop.svg'
import tinIcon from './img/tin.svg'
import wcusdIcon from './img/wcusd.svg'

export interface TokenSpec {
  symbol: string
  img: string
  decimals: number
  precision: number
}

export const tokens: { [key: string]: TokenSpec } = {
  DAI: {
    symbol: 'DAI',
    img: daiIcon,
    decimals: 18,
    precision: 18,
  },
  KDAI: {
    symbol: 'KDAI',
    img: daiIcon,
    decimals: 18,
    precision: 18,
  },
  DROP: {
    symbol: 'DROP',
    img: dropIcon,
    decimals: 18,
    precision: 18,
  },
  TIN: {
    symbol: 'TIN',
    img: tinIcon,
    decimals: 18,
    precision: 18,
  },
  wCUSD: {
    symbol: 'wCUSD',
    img: wcusdIcon,
    decimals: 18,
    precision: 18,
  },
}
