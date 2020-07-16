// Global Styles
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Grommet, ThemeContext } from 'grommet'

import { axisThemeConfig, ffStack, fwDemibold } from './theme'

// @ts-ignore
import AvenirNextLTW01 from '../fonts/721263/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2'
// @ts-ignore
import AvenirNextLTW01_500 from '../fonts/721275/627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2'
// @ts-ignore
import AvenirNextLTW01_600 from '../fonts/721269/aad99a1f-7917-4dd6-bbb5-b07cedbff64f.woff2'

const GlobalsStyles = createGlobalStyle`
  // Global Reset 
  // modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize 
  html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
  
  // Fonts
  @font-face {
    font-family: "AvenirNextLTW01";
    font-display: swap;
    font-style: normal;
    src: url(${AvenirNextLTW01}) format("woff2");
  }
  @font-face {
    font-family: "AvenirNextLTW01";
    font-display: swap;
    font-weight: 500;
    src: url(${AvenirNextLTW01_500}) format("woff2");
  }
  @font-face {
    font-family: "AvenirNextLTW01";
    font-display: swap;
    font-weight: 600;
    src: url(${AvenirNextLTW01_600}) format("woff2");
  }
  
  // HTML Element Overrides
  b, strong {
    font-weight: ${fwDemibold};
    font-family: ${ffStack};
  }
`

export const AxisTheme = ({ theme, children, ...rest }) => {
  return (
    <Grommet theme={theme || axisThemeConfig} {...rest}>
      <GlobalsStyles />
      <ThemeContext.Consumer>
        {(theme) => <ThemeProvider theme={theme}>{children}</ThemeProvider>}
      </ThemeContext.Consumer>
    </Grommet>
  )
}
