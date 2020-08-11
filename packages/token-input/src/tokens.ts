import daiIcon from './img/dai.svg'
import dropIcon from './img/drop.svg'
import tinIcon from './img/tin.svg'

interface TokenSpec {
    img: string,
    decimals: number,
    precision: number
}

export const tokens: { [key: string]: TokenSpec } = {
  'DAI': {
    'img': daiIcon,
    'decimals': 18,
    'precision': 18
  },
  'DROP': {
    'img': dropIcon,
    'decimals': 18,
    'precision': 18
  },
  'TIN': {
    'img': tinIcon,
    'decimals': 18,
    'precision': 18
  }
}