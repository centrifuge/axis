import React, { FunctionComponent, useState, CSSProperties } from 'react'
import { Anchor, Box, BoxProps, Button, Layer, Menu, Text } from 'grommet'
import { Close as CloseIcon, Icon, Menu as MenuIcon, User as UserIcon } from 'grommet-icons'
import styled, { ThemeProps as StyledThemeProps, withTheme } from 'styled-components'
import { defaultProps, extendDefaultTheme } from 'grommet/default-props'

// Define type for theme props
interface ThemeProps {
  navBar: {
    icons: {
      menu: Icon
      close: Icon
      user: Icon
      size?: 'small' | 'medium' | 'large' | 'xlarge' | string
    }
  }
}

const defaultThemeProps: ThemeProps = {
  navBar: {
    icons: {
      menu: MenuIcon,
      close: CloseIcon,
      user: UserIcon,
    },
  },
}

export interface MenuItem {
  label: string
  route: string
  secondary?: boolean
}

interface Props extends BoxProps, StyledThemeProps<ThemeProps> {
  logo?: React.ReactNode
  menuLabel?: string
  selectedRoute: string
  sectionGap?: string
  itemGap?: string
  mainMenuAlignment?: 'right' | 'left'
  sticky?: boolean
  menuItems: MenuItem[]
  overlayWidth?: string
  onRouteClick: (item: MenuItem) => void
  menuItemProps?: MenuItemProps
  hamburgerBreakpoint?: number
}

interface StyledNavBarProps {
  sticky: boolean | undefined
}

const StyledNavBar = styled(Box)<StyledNavBarProps>`
  ${props =>
    props.sticky &&
    `
    position: sticky;
    z-index: 1;
    top:0px;
  `}
`

interface BreakpointProps {
  breakpoint?: number
}

const MobileOnly = styled.div<BreakpointProps>`
  display: none;

  @media (max-width: ${props => (props.breakpoint ? `${props.breakpoint}px` : '768px')}) {
    display: block;
  }
`

const DesktopOnlyBox = styled(Box)<BreakpointProps>`
  display: flex;

  @media (max-width: ${props => (props.breakpoint ? `${props.breakpoint}px` : '768px')}) {
    display: none;
  }
`

interface MenuItemProps {
  style?: CSSProperties
}

const NavBar: FunctionComponent<Props> = props => {
  const {
    logo,
    selectedRoute,
    sectionGap,
    itemGap,
    menuItems,
    onRouteClick,
    sticky,
    width,
    pad,
    menuLabel,
    mainMenuAlignment,
    theme,
    children,
    overlayWidth,
    menuItemProps,
    hamburgerBreakpoint,
    ...rest
  } = props

  const [opened, setOpened] = useState(false)
  const openMenu = () => setOpened(true)
  const closeMenu = () => setOpened(false)

  //get the icons from the theme
  const {
    navBar: { icons },
  } = theme

  // Workaround for Menu typescript def bug
  const DynamicPropsMenu: any = Menu

  const getMainMenuItems = (props?: MenuItemProps) => {
    return menuItems
      .filter(item => !item.secondary)
      .map(item => {
        const anchorProps = {
          ...{ onClick: () => onRouteClick(item) },
          ...(selectedRoute === item.route ? { color: 'selected' } : {}),
        }

        return <Button plain key={item.label} label={item.label} {...anchorProps} {...props} />
      })
  }

  const getSecondaryMenuItems = () => {
    return menuItems
      .filter(item => item.secondary)
      .map(item => {
        const anchorProps = {
          ...{ onClick: () => onRouteClick(item) },
          ...(selectedRoute === item.route ? { className: 'selected' } : {}),
        }
        return <Anchor key={item.label} label={item.label} {...anchorProps} />
      })
  }

  return (
    <StyledNavBar {...rest} sticky={sticky} justify="center" align="center" fill="horizontal">
      <Box direction="row" fill="vertical" align="center" pad={pad} gap={'0px'} width={width}>
        {logo && <Box margin={{ right: sectionGap }}>{logo}</Box>}

        <Box flex={'grow'} direction="row" justify={'start'} gap={sectionGap}>
          <DesktopOnlyBox
            breakpoint={props.hamburgerBreakpoint}
            direction="row"
            gap={itemGap}
            style={{ marginRight: 'auto' }}
          >
            {getMainMenuItems(menuItemProps)}
          </DesktopOnlyBox>

          {children && (
            <DesktopOnlyBox
              breakpoint={props.hamburgerBreakpoint}
              flex={mainMenuAlignment === 'left' ? 'grow' : false}
              justify={'center'}
            >
              {children}
            </DesktopOnlyBox>
          )}

          {!menuLabel
            ? getSecondaryMenuItems().length > 0 && (
                <DesktopOnlyBox
                  breakpoint={props.hamburgerBreakpoint}
                  direction="row"
                  gap={itemGap}
                  align="center"
                  justify="end"
                >
                  {getSecondaryMenuItems()}
                </DesktopOnlyBox>
              )
            : getSecondaryMenuItems().length > 0 && (
                <DesktopOnlyBox breakpoint={props.hamburgerBreakpoint}>
                  <DynamicPropsMenu
                    plain
                    items={menuItems
                      .filter(item => item.secondary)
                      .map(item => {
                        return {
                          label: item.label,
                          onClick: () => onRouteClick(item),
                        }
                      })}
                  >
                    {({ drop, hover }) => {
                      return (
                        <Box
                          direction="row"
                          gap="small"
                          pad={'small'}
                          background={hover && drop ? 'light-2' : undefined}
                        >
                          <Text>{menuLabel}</Text>
                          <icons.user size={icons.size} />
                        </Box>
                      )
                    }}
                  </DynamicPropsMenu>
                </DesktopOnlyBox>
              )}
        </Box>

        <MobileOnly breakpoint={props.hamburgerBreakpoint}>
          <Box direction="row" align="center">
            <Anchor>
              <icons.menu size={icons.size} onClick={openMenu} style={{ verticalAlign: 'middle' }} />
            </Anchor>
          </Box>
        </MobileOnly>

        {opened && (
          <MobileOnly breakpoint={props.hamburgerBreakpoint}>
            <Layer
              position="right"
              full="vertical"
              responsive={false}
              animate={true}
              onClickOutside={closeMenu}
              onEsc={closeMenu}
            >
              <Box width={overlayWidth} pad={'medium'}>
                <Box fill={'horizontal'} align={'end'}>
                  <Anchor onClick={closeMenu}>
                    <icons.close size={icons.size} />
                  </Anchor>
                </Box>
                <Box gap={sectionGap}>
                  <Box gap={itemGap} pad={{ horizontal: 'xxxlarge' }}>
                    {getMainMenuItems(menuItemProps)}
                  </Box>

                  <Box gap={itemGap} align={'center'}>
                    {getSecondaryMenuItems()}
                  </Box>
                </Box>
              </Box>
            </Layer>
          </MobileOnly>
        )}
      </Box>
    </StyledNavBar>
  )
}

extendDefaultTheme(defaultThemeProps)

NavBar.defaultProps = {
  sectionGap: 'large',
  itemGap: 'medium',
  sticky: true,
  pad: { horizontal: 'medium' },
  width: '100%',
  background: 'white',
  mainMenuAlignment: 'left',
  height: '72px',
  border: { side: 'bottom', color: 'light-4' },
  hamburgerBreakpoint: 768,
  ...defaultProps,
}

export default withTheme(NavBar)
