import React from "react";
import {css, withTheme} from "styled-components";
import NumberFormat, {NumberFormatValues} from 'react-number-format';
import {TextInput} from "grommet";
import {sizeStyle} from "grommet-styles";

export const NumberInput = withTheme((props) => {
  // Props get passed to the html input and React will trow errors for unsuported input porps
  // Do must clean up custom props here
  const {
    value, precision, prefix, suffix, onChange,
    placeholder,
    ...rest
  } = props


  const getPlaceholder = () => {
    if(!placeholder) return ''
    return `${prefix || ''}${placeholder}${suffix || ''}`
  }

  return (
    <NumberFormat
      focusIndicator={false}
      placeholder={getPlaceholder()}
      thousandSeparator="," decimalScale={precision}
      allowNegative={false} prefix={prefix} suffix={suffix} customInput={TextInput}
      isNumericString value={value} onValueChange={onChange} {...rest}
    />

  );
});



