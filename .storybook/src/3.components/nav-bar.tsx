import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { AxisTheme } from '../../../packages/theme'
import { Box, FormField, TextInput, Paragraph, Anchor } from 'grommet'
import { NavBar } from '../../../packages/nav-bar/src'
import { MenuItem } from '../../../packages/nav-bar/src/NavBar'
import { Npm } from 'grommet-icons'

storiesOf('Components | Nav Bar', module)
  .add('Default', () => {
    const Comp = props => {
      const [selectedRoute, setSelectedRoute] = useState('route/to/home')
      const menuItems: MenuItem[] = [
        {
          label: 'Home',
          route: 'route/to/home',
        },
        {
          label: 'About',
          route: 'route/to/about',
        },
        {
          label: 'Settings',
          route: 'route/to/settings',
        },
      ]

      return (
        <AxisTheme>
          <Box>
            <NavBar
              selectedRoute={selectedRoute}
              menuItems={menuItems}
              onRouteClick={item => {
                setSelectedRoute(item.route)
              }}
            />
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })

  .add('with custom width and height', () => {
    const Comp = props => {
      const [selectedRoute, setSelectedRoute] = useState('route/to/home')
      const menuItems: MenuItem[] = [
        {
          label: 'Home',
          route: 'route/to/home',
        },
        {
          label: 'About',
          route: 'route/to/about',
        },
        {
          label: 'Settings',
          route: 'route/to/settings',
        },
      ]

      return (
        <AxisTheme>
          <Box>
            <NavBar
              width={'80%'}
              height={'160px'}
              selectedRoute={selectedRoute}
              menuItems={menuItems}
              onRouteClick={item => {
                setSelectedRoute(item.route)
              }}
              menuItemProps={{ style: { fontSize: 14 } }}
            />
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
  .add('With Logo and Secondary Menu', () => {
    const Comp = props => {
      const [selectedRoute, setSelectedRoute] = useState('route/to/home')
      const menuItems: MenuItem[] = [
        {
          label: 'Home',
          route: 'route/to/home',
        },
        {
          label: 'About',
          route: 'route/to/about',
        },
        {
          label: 'Settings',
          route: 'route/to/settings',
          secondary: true,
        },
        {
          label: 'Logout',
          route: 'route/to/logout',
          secondary: true,
        },
      ]

      return (
        <AxisTheme>
          <Box>
            <NavBar
              logo={<Npm size={'large'} color="plain" />}
              selectedRoute={selectedRoute}
              menuItems={menuItems}
              onRouteClick={item => {
                setSelectedRoute(item.route)
              }}
            />
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })

  .add('With secondary menu in Dropdown', () => {
    const Comp = props => {
      const [selectedRoute, setSelectedRoute] = useState('route/to/home')
      const menuItems: MenuItem[] = [
        {
          label: 'Home',
          route: 'route/to/home',
        },
        {
          label: 'About',
          route: 'route/to/about',
        },
        {
          label: 'Settings',
          route: 'route/to/settings',
          secondary: true,
        },
        {
          label: 'Logout',
          route: 'route/to/logout',
          secondary: true,
        },
      ]

      return (
        <AxisTheme>
          <Box>
            <NavBar
              logo={<Npm size={'large'} color="plain" />}
              menuLabel={'John Doe'}
              selectedRoute={selectedRoute}
              menuItems={menuItems}
              onRouteClick={item => {
                if (item.secondary) {
                  alert('Secondary clicked: ' + item.route)
                } else {
                  setSelectedRoute(item.route)
                }
              }}
            />
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })

  .add('Main Menu aliged to the right', () => {
    const Comp = props => {
      const [selectedRoute, setSelectedRoute] = useState('route/to/home')
      const menuItems: MenuItem[] = [
        {
          label: 'Home',
          route: 'route/to/home',
        },
        {
          label: 'About',
          route: 'route/to/about',
        },
        {
          label: 'Settings',
          route: 'route/to/settings',
          secondary: true,
        },
        {
          label: 'Logout',
          route: 'route/to/logout',
          secondary: true,
        },
      ]

      return (
        <AxisTheme>
          <Box>
            <NavBar
              logo={<Npm size={'large'} color="plain" />}
              menuLabel={'John Doe'}
              selectedRoute={selectedRoute}
              menuItems={menuItems}
              mainMenuAlignment={'right'}
              onRouteClick={item => {
                if (item.secondary) {
                  alert('Secondary clicked: ' + item.route)
                } else {
                  setSelectedRoute(item.route)
                }
              }}
            />
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })

  .add('With custom section between menus', () => {
    const Comp = props => {
      const [selectedRoute, setSelectedRoute] = useState('route/to/home')
      const menuItems: MenuItem[] = [
        {
          label: 'Home',
          route: 'route/to/home',
        },
        {
          label: 'About',
          route: 'route/to/about',
        },
        {
          label: 'Settings',
          route: 'route/to/settings',
          secondary: true,
        },
        {
          label: 'Logout',
          route: 'route/to/logout',
          secondary: true,
        },
      ]

      return (
        <AxisTheme>
          <Box>
            <NavBar
              logo={<Npm size={'large'} color="plain" />}
              menuLabel={'John Doe'}
              selectedRoute={selectedRoute}
              menuItems={menuItems}
              onRouteClick={item => {
                if (item.secondary) {
                  alert('Secondary clicked: ' + item.route)
                } else {
                  setSelectedRoute(item.route)
                }
              }}
            >
              <Box direction="row" gap={'medium'} align={'center'} justify="end">
                <Box width={'200px'}>
                  <TextInput placeholder={'Search'} />
                </Box>

                <Anchor>Some custom link 1</Anchor>
                <Anchor>Some custom link 2</Anchor>
              </Box>
            </NavBar>

            <NavBar
              logo={<Npm size={'large'} color="plain" />}
              menuLabel={'John Doe'}
              selectedRoute={selectedRoute}
              menuItems={menuItems}
              onRouteClick={item => {
                if (item.secondary) {
                  alert('Secondary clicked: ' + item.route)
                } else {
                  setSelectedRoute(item.route)
                }
              }}
            >
              <Box>
                <FormField>
                  <TextInput placeholder={'Search'} />
                </FormField>
              </Box>
            </NavBar>
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
  .add('Sticky', () => {
    const Comp = props => {
      const [selectedRoute, setSelectedRoute] = useState('route/to/home')
      const menuItems: MenuItem[] = [
        {
          label: 'Home',
          route: 'route/to/home',
        },
        {
          label: 'About',
          route: 'route/to/about',
        },
        {
          label: 'Settings',
          route: 'route/to/settings',
          secondary: true,
        },
        {
          label: 'Logout',
          route: 'route/to/logout',
          secondary: true,
        },
      ]

      return (
        <AxisTheme>
          <Box>
            <NavBar
              sticky={true}
              logo={<Npm size={'large'} color="plain" />}
              menuLabel={'John Doe'}
              selectedRoute={selectedRoute}
              menuItems={menuItems}
              onRouteClick={item => {
                if (item.secondary) {
                  alert('Secondary clicked: ' + item.route)
                } else {
                  setSelectedRoute(item.route)
                }
              }}
            >
              <Box>
                <FormField>
                  <TextInput placeholder={'Search'} />
                </FormField>
              </Box>
            </NavBar>

            <Box pad={'medium'}>
              {Array.from(Array(100).keys()).map(item => {
                return <Paragraph key={item}>{item}</Paragraph>
              })}
            </Box>
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })

  .add('with hamburger breakpoint', () => {
    const Comp = props => {
      const [selectedRoute, setSelectedRoute] = useState('route/to/home')
      const menuItems: MenuItem[] = [
        {
          label: 'Home',
          route: 'route/to/home',
        },
        {
          label: 'About',
          route: 'route/to/about',
        },
        {
          label: 'Settings',
          route: 'route/to/settings',
        },
      ]

      return (
        <AxisTheme>
          <Box>
            <NavBar
              selectedRoute={selectedRoute}
              menuItems={menuItems}
              onRouteClick={item => {
                setSelectedRoute(item.route)
              }}
              hamburgerBreakpoint={800}
            />
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
