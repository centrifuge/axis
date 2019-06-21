import React from "react";
import {css, withTheme} from "styled-components";
import CurrencyInput from 'react-currency-input';
import styled from "styled-components";
import {disabledStyle, inputStyle, placeholderStyle} from "grommet/es6/utils";


export const NumberInput = withTheme((props) => {
    return (
        <StyledCurrencyInput {...props}></StyledCurrencyInput>
    );
});


const plainStyle = css`
  border: none;
`;

const StyledCurrencyInput = styled(CurrencyInput)`
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
`;
