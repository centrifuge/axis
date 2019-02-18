// Global Styles
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Grommet, ThemeContext } from "grommet";
import { axisThemeConfig } from "./theme";

const GlobalsStyles = createGlobalStyle`
  * {
    
    &::-webkit-scrollbar {
      width: 8px;
    }
     
    &::-webkit-scrollbar-thumb {
      background: ${axisThemeConfig.global.colors["light-6"]};
      border-radius: 20px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 20px;
    }
   
  }
  
   body,html {
    margin:0;
    height:100%;
    color: ${axisThemeConfig.global.colors["light-1"]};
    
  }
  a {
    color: ${axisThemeConfig.global.colors.brand};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
  }
  #app-root {
    height:100%;
  }
`;

export const AxisTheme = props => {
  return (
    <Grommet full={true} theme={props.theme || axisThemeConfig}>
      <GlobalsStyles />
      <ThemeContext.Consumer>
        {theme => {
          // Make theme available for all styled components
          return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
        }}
      </ThemeContext.Consumer>
    </Grommet>
  );
};
