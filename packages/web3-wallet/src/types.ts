export interface Transaction {
  description: string
  status: 'unconfirmed' | 'pending' | 'succeeded' | 'failed'
  txHash: string
  externalLink?: string
  showIfClosed?: boolean
}
