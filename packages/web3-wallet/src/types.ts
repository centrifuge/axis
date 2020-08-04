export interface Transaction {
  description: string
  status: 'unconfirmed' | 'pending' | 'succeeded' | 'failed'
  externalLink?: string
  showIfClosed?: boolean
}
