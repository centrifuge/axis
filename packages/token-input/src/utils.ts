import BN from 'bn.js'

// regex from https://stackoverflow.com/a/2901298/6694848
export function addThousandsSeparators(x: string | BN) {
  const parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

// Copied from Tinlake.js
export const baseToDisplay = (base: string | BN, decimals: number): string => {
  let baseStr = typeof base === 'string' ? base : base.toString()
  const neg = baseStr.includes('-')

  baseStr = baseStr.replace(/-/g, '')

  const a = baseStr.slice(0, -decimals) || '0'
  const b = baseStr.slice(-decimals).padStart(decimals, '0')

  const res = `${a}.${b}`

  return neg ? `-${res}` : res
}

// Copied from Tinlake.js
export const displayToBase = (display: string, decimals: number): string => {
  const neg = display.includes('-')

  const str = display.replace(/-/g, '')

  const a = str.split('.')[0]
  const b = (str.split('.')[1] || '').padEnd(decimals, '0').substr(0, decimals)
  const res = `${a}${b}`

  return neg ? `-${res}` : res
}
