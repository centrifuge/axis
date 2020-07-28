import Web3Wallet from './Web3Wallet'

// Exporting imported interface isn't possible by default, since Typescript doesn't know whether it's a type or a value,
// so the workaround is to explicitly export it as a type.
import * as Types from './types'
export type Transaction = Types.Transaction

export { Web3Wallet }
