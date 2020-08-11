export interface Separator {
  text: string
  color?: string
  position?: 'top' | 'bottom'
}

export interface Segment {
  width: number
  backgroundColor?: string
  separator?: Separator
  widthSoFar?: number
}
