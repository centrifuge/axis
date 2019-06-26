import React from "react";
import styled, {css, withTheme} from "styled-components";
import CurrencyInput from 'react-currency-input';
import {disabledStyle, inputStyle, placeholderStyle} from "grommet/utils";
import {defaultProps} from "grommet";

// TODO Fork react-currency-input and use pure grommet components
export const NumberInput = withTheme((props) => {
    // Props get passed to the html input and React will trow errors for unsuported input porps
    // Do must clean up custom props here
    const {
        focusIndicator,
        plain,
        ...rest
    } = props

    return (
        <StyledCurrencyContainer {...props}>
            <StyledCurrencyInput  {...rest}/>
        </StyledCurrencyContainer>

    );
});

const plainStyle = css`
  border: none;
`;

const StyledCurrencyInput = styled(CurrencyInput)`
  ${inputStyle} width: 100%; 
  
  ${props => props.size && sizeStyle(props)}
  
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
`

const StyledCurrencyContainer = styled.div`

  input {
    ${props => props.plain && plainStyle}
  }
`;


// Set default properties
StyledCurrencyInput.defaultProps = {};
Object.setPrototypeOf(StyledCurrencyInput.defaultProps, defaultProps);
