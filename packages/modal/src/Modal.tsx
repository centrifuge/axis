import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Box, BoxProps, Button, Heading, HeadingProps, Layer } from 'grommet'
import { withTheme, ThemeProps as StyledThemeProps } from 'styled-components'
import { Close, Icon } from 'grommet-icons'
import { defaultProps, extendDefaultTheme } from 'grommet/default-props'

const StyledTitleIcon = styled.div`
  display: inline-block;
  margin-right: 10px;
  position: relative;
  top: 4px;

  > * {
    height: 22px;
    width: 22px;
  }
`

const Title = styled.div`
  display: inline-block;
`

const CloseButton = styled(Button)`
  margin-right: -20px;
  margin-top: -60px;
`

interface ThemeProps {
  modal: {
    icons: {
      close: Icon
    }
  }
}

interface Props extends BoxProps, StyledThemeProps<ThemeProps> {
  headingProps?: HeadingProps
  title?: string
  opened?: boolean
  titleIcon?: React.ReactNode
  onClose?: () => {}
}

export const Modal: FunctionComponent<Props> = ({
  headingProps,
  onClose,
  opened,
  children,
  title,
  titleIcon,
  theme,
  ...rest
}) => {
  const CloseIcon = theme.modal.icons.close

  if (opened)
    return (
      <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
        <Box round="small" background={'white'} pad="large" {...rest}>
          <Box flex={false} direction="row" alignContent="center" justify={title ? 'between' : 'end'}>
            {title && (
              <Heading
                level={4}
                margin={{ top: 'none', bottom: 'small', left: 'none', right: 'medium' }}
                {...headingProps}
              >
                {titleIcon && <StyledTitleIcon>{titleIcon}</StyledTitleIcon>}
                <Title>{title}</Title>
              </Heading>
            )}
            {onClose && (
              <CloseButton
                plain
                label={
                  <CloseIcon style={{ width: '16px', height: '16px', marginRight: '-20px', marginLeft: '-20px' }} />
                }
                onClick={onClose}
              />
            )}
          </Box>

          {children}
        </Box>
      </Layer>
    )

  return null
}

const defaultThemeProps: ThemeProps = {
  modal: {
    icons: {
      close: Close,
    },
  },
}

extendDefaultTheme(defaultThemeProps)

Modal.defaultProps = {
  ...defaultProps,
}

export default withTheme(Modal)
