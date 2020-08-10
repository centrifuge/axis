interface TokenSpec {
    symbol: string,
    img: any,
    decimals: number,
    precision: number
}

export const tokens: { [key: string]: TokenSpec } = {
  'DAI': {
    'symbol': 'DAI',
    'img': 'test',
    'decimals': 16,
    'precision': 2
  }
}