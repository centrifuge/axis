import React from "react";
import styled, {css, withTheme} from "styled-components";
import CurrencyInput from 'react-currency-input';
import {disabledStyle, inputStyle, placeholderStyle} from "grommet/es6/utils";

// TODO Fork react-currency-input
export const NumberInput = withTheme((props) => {
    // Props get passed to the html input and React will trow errors for unsuported input porps
    // Do must clean up custom props here
    const {
        focusIndicator,
        plain,
        theme,
        ...rest
    } = props

    return (
        <StyledCurrencyInput {...props}>
            <CurrencyInput  {...rest}/>
        </StyledCurrencyInput>

    );
});

const plainStyle = css`
  border: none;
`;

const StyledCurrencyInput = styled.div`
  input {
    background: red;
    ${inputStyle} width: 100%; 
  
  ${props => props.size && sizeStyle(props)}
  ${props => props.plain && plainStyle}
  ${placeholderStyle}
  &::-moz-focus-inner {
    border: none;
    outline: none;
  }
  ${props => props.focus && !props.plain && focusStyle};
  ${props =>
    props.disabled &&
    disabledStyle(
        props.theme.textInput.disabled && props.theme.textInput.disabled.opacity,
    )}
  ${props => props.theme.textInput && props.theme.textInput.extend};
  }
  
`;
