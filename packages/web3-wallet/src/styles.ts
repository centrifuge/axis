import styled from 'styled-components'

interface ToastCardProps {
  backgroundColor?: string
}

export const ToastCard = styled.div<ToastCardProps>`
  width: 356px;
  margin-bottom: 8px;
  padding: 12px 16px 6px 16px;
  height: 60px;
  background: ${props => props.backgroundColor || '#fff'};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
`

interface IconProps {
  color?: string
}

export const Icon = styled.div<IconProps>`
  text-align: center;
  padding: 8px 12px 8px 4px;

  svg {
    fill: ${(props: IconProps) => props.color || '#000'};
    stroke: ${(props: IconProps) => props.color || '#000'};
  }
`

export const Content = styled.div`
  flex: 1;
  flex-grow: 1;
`

interface TitleProps {
  color?: string
}

export const Title = styled.div<TitleProps>`
  color: ${(props: TitleProps) => props.color || '#000'};
  font-size: 11px;
`

export const Description = styled.div`
  font-size: 15px;
  font-weight: bold;
`

export const Action = styled.div`
  padding-top: 4px;
`
