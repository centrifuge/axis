import React from 'react'
import { MarginType } from 'grommet/utils'
import { ThemeProps as StyledThemeProps, withTheme } from 'styled-components'
import { defaultProps, extendDefaultTheme } from 'grommet/default-props'

// Define type for theme props
interface ThemeProps {
    sampleComponent: {
        margin: MarginType
    }
}

interface Props extends StyledThemeProps<ThemeProps> {
    value: string
}

const defaultThemeProps: ThemeProps = {
    sampleComponent: {
        margin: 'small',
    },
}

export const SampleComponent: React.FunctionComponent<Props> = ({ value, theme }) => {
    //${theme.sampleComponent.margin} this will fail if
    // it a theme is used and the style props are missing

    return (
        <div>
            <p>{`${value}`}</p>
        </div>
    )
}

// Extend the base theme with component default props and the base theme as a default props
// This makes sure the component just works out of the box without a ThemeProvider
// If a provider is used the theme prop will be overriden which means that
// the component will throw a `can not find prop of undefined` errors when the theme doesn't have the
// component theme props
extendDefaultTheme(defaultThemeProps)

SampleComponent.defaultProps = {
    ...defaultProps,
}

export default withTheme(SampleComponent)
