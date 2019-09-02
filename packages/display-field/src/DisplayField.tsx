import React from "react";
import styled, {ThemeProps as StyledThemeProps, withTheme} from "styled-components";
import {defaultProps, extendDefaultTheme} from "grommet/default-props";
import {Anchor, AnchorProps, Box, BoxProps, Paragraph, Text, TextProps} from "grommet";

// Define type for theme props
interface ThemeProps {
  displayField: {
    labelBox?: BoxProps,
    labelText?: TextProps,
    anchor?: AnchorProps,
    extend?: (props) => string,
  }
}

interface Props extends StyledThemeProps<ThemeProps> {
  value: string,
  link?: string | AnchorProps,
  label?: string,
}


const DisplayFieldBox = styled(Box)`
  &  {
    padding: 2px 0px;
    // Force height on display field when value is empty
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    
    a, a: hover {
      text-decoration: none;
    }
    
     p:after {
      content: '';
      display: inline-block;
    }
    
  }
  
  ${props => props.theme.displayField && props.theme.displayField.extend}
`;


const LabelBox = styled(Box)`
 
`;


export const DisplayField: React.FunctionComponent<Props> = (
  {
    value,
    link,
    label,
    theme
  }
) => {


  const {displayField: {labelBox, labelText, anchor}} = theme;

  const WithLink = ({link, children}) => {
    return link ? <Anchor {...anchor} {...(typeof link === 'string' ? {href:link} : link)} >
      {children}
    </Anchor> : children;
  }

  const WithLabel = ({label, children}) => {
    return label ? <LabelBox {...labelBox}>
      <Text {...labelText} as="label" >{label}</Text>
      {children}
    </LabelBox> : children
  }


  return (
    <DisplayFieldBox>
      <WithLabel label={label}>
        <WithLink link={link}>
          <Paragraph margin={{vertical: 'small'}}>
            {value}
          </Paragraph>
        </WithLink>
      </WithLabel>
    </DisplayFieldBox>
  );
};


export const defaultThemeProps: ThemeProps = {
  displayField: {
    labelBox: {
      border: {
        side: 'bottom',
        color: 'light-4'
      },
    },
    anchor:{
      color: 'brand'
    }
  }
};

extendDefaultTheme(defaultThemeProps);

DisplayField.defaultProps = {
  ...defaultProps
};

export default withTheme(DisplayField)
