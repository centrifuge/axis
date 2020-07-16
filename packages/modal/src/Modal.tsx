import React, { FunctionComponent } from 'react'
import { Box, BoxProps, Button, Heading, HeadingProps, Layer } from 'grommet'
import { withTheme, ThemeProps as StyledThemeProps } from 'styled-components'
import { Close, Icon } from 'grommet-icons'
import { defaultProps, extendDefaultTheme } from 'grommet/default-props'

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
  onClose?: () => {}
}

export const Modal: FunctionComponent<Props> = ({ headingProps, onClose, opened, children, title, theme, ...rest }) => {
  const CloseIcon = theme.modal.icons.close

  if (opened)
    return (
      <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
        <Box round="small" background={'white'} pad="medium" {...rest}>
          <Box flex={false} direction="row" alignContent="center" justify={title ? 'between' : 'end'}>
            {title && (
              <Heading
                level={2}
                margin={{ top: 'none', bottom: 'none', left: 'none', right: 'medium' }}
                {...headingProps}
              >
                {title}
              </Heading>
            )}
            {onClose && <Button plain label={<CloseIcon />} onClick={onClose} />}
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
