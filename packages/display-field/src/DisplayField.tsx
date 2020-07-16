import React from 'react'
import styled, { ThemeProps as StyledThemeProps, withTheme } from 'styled-components'
import { defaultProps, extendDefaultTheme } from 'grommet/default-props'
import { Anchor, AnchorProps, Box, BoxProps, Text, TextProps } from 'grommet'
import { MarginType, PolymorphicType } from 'grommet/utils'
import { copyToClipboard } from '@centrifuge/axis-utils'
import { Copy, Icon } from 'grommet-icons'

// Define type for theme props
interface ThemeProps {
  displayField: {
    labelBox?: BoxProps
    labelText?: TextProps
    anchor?: AnchorProps
    extend?: (props) => string
    icons: {
      copy: Icon
      margin?: MarginType
      size?: 'small' | 'medium' | 'large' | 'xlarge' | string
    }
  }
}

interface Props extends StyledThemeProps<ThemeProps> {
  value: string
  as?: PolymorphicType
  link?: string | AnchorProps
  copy?: boolean
  valueToCopy?: string
  label?: string
}

const DisplayFieldBox = styled(Box)`
  & {
    padding: 2px 0px;
    // Force height on display field when value is empty
    .display_field_text {
      overflow: hidden;
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .display_field_text:after {
      content: '';
      display: inline-block;
    }
    a,
    a:hover {
      text-decoration: none;
    }
    a.display_field_anchor {
      overflow: hidden;
    }
    a.icon_anchor {
      svg {
        vertical-align: middle;
      }
    }
  }
  ${props => props.theme.displayField && props.theme.displayField.extend}
`

const LabelBox = styled(Box)``

export const DisplayField: React.FunctionComponent<Props> = ({
  value,
  valueToCopy,
  link,
  label,
  as = 'p',
  copy,
  theme,
}) => {
  const {
    displayField: { labelBox, labelText, anchor, icons },
  } = theme

  const WithLink = ({ link, children }) => {
    return link ? (
      <Anchor className={'display_field_anchor'} {...anchor} {...(typeof link === 'string' ? { href: link } : link)}>
        {children}
      </Anchor>
    ) : (
      children
    )
  }

  const WithLabel = ({ label, children }) => {
    return label ? (
      <LabelBox {...labelBox}>
        <Text {...labelText} as="label">
          {label}
        </Text>
        {children}
      </LabelBox>
    ) : (
      children
    )
  }

  const WithCopyIcon = ({ children }) => {
    return copy ? (
      <Box direction={'row'} align={'center'} gap={'xsmall'}>
        {children}
        <Anchor
          className={'icon_anchor'}
          onClick={() => {
            copyToClipboard(valueToCopy || value)
          }}
          title={'Copy to clipboard'}
        >
          <icons.copy size={icons.size} />
        </Anchor>
      </Box>
    ) : (
      children
    )
  }

  return (
    <DisplayFieldBox>
      <WithLabel label={label}>
        <WithCopyIcon>
          <WithLink link={link}>
            <Text as={as} className={'display_field_text'}>
              {value}
            </Text>
          </WithLink>
        </WithCopyIcon>
      </WithLabel>
    </DisplayFieldBox>
  )
}

export const defaultThemeProps: ThemeProps = {
  displayField: {
    labelBox: {
      border: {
        side: 'bottom',
        color: 'light-4',
      },
    },
    anchor: {
      color: 'brand',
    },
    icons: {
      copy: Copy,
      size: 'small',
    },
  },
}

extendDefaultTheme(defaultThemeProps)

DisplayField.defaultProps = {
  ...defaultProps,
}

export default withTheme(DisplayField)
