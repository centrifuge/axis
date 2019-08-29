import React, {useState} from "react";
import {Box, BoxProps, Select, SelectProps, Text} from 'grommet';
import {Close, Icon} from "grommet-icons";
import {ThemeProps as StyledThemeProps, withTheme} from "styled-components";
import {defaultProps, extendDefaultTheme} from "grommet/default-props";

interface ThemeProps {
  multipleSelect: {
    size?: "small" | "medium" | "large" | "xlarge" | string;
    itemsContainer: BoxProps,
    item: BoxProps,
    icons: {
      close: Icon,
      size?: "small" | "medium" | "large" | "xlarge" | string;
    }

  }
}


interface Props extends Omit<SelectProps, "onSearch" | "multiple">, StyledThemeProps<ThemeProps> {
  options: any[];
  value: any[];
}

export const MultipleSelect: React.FunctionComponent<Props> = (
  {
    options,
    value,
    onChange,
    disabled,
    theme,
    ...rest
  }
) => {
  const [filteredOptions, setFilteredOptions] = useState(options);

  const {multipleSelect: {size,itemsContainer,item, icons}} =  theme;

  const CloseIcon = icons.close;


  const onSelect = selected => {
    //reset options
    setFilteredOptions(options);
    onChange && onChange(selected.value);
  };

  const onFiltering = text => {
    const exp = new RegExp(text, 'i');
    setFilteredOptions(
      options.filter(o => {
        return exp.test(getItemLabel(o));
      })
    );
  };

  const getItemValue = (value) => {
    return getItemPropByKey(value, 'valueKey');
  };

  const getItemLabel = (value) => {
    return getItemPropByKey(value, 'labelKey');
  };

  const getItemPropByKey = (value, key) => {
    const prop = rest[key];
    if (!prop) {
      return value;
    } else {
      if (typeof prop === 'function') {
        return prop(value);
      } else {
        return value[prop];
      }
    }
  };


  const renderSelectedItems = () => {
    if (!value || !value.length) return null;
    return (
      <Box
        {...itemsContainer}
      >
        {
          value.map(
            (val: any, index) => (
              <Box
                key={index}
                {...item}
              >
                <Text style={{lineHeight: 1}}>
                  {getItemLabel(val)}
                </Text>
                <Box onClick={
                  (ev) => {
                    ev.stopPropagation();
                    if (disabled) return;
                    onSelect(
                      {
                        value: value.filter((selected: any) => {
                            return getItemValue(selected) !== getItemValue(val);
                          },
                        ),
                      }
                    );

                  }}>
                  {!disabled && <CloseIcon size={icons.size}/>}
                </Box>
              </Box>
            ),
          )
        }

      </Box>
    );
  };

  return (
    <Select
      multiple={true}
      size={size}
      disabled={disabled}
      value={value}
      placeholder="Select"
      searchPlaceholder="Search"
      options={filteredOptions}
      valueLabel={renderSelectedItems()}
      onChange={onSelect}
      onSearch={onFiltering}
      {...rest}
    />
  );
};


export const defaultThemeProps: ThemeProps = {
  multipleSelect: {
    size: 'medium',
    itemsContainer: {
      wrap: true,
      direction: 'row',
      pad: {vertical: 'xsmall'}

    },
    icons: {
      close: Close,
      size:'small',
    },
    item: {
      margin: {vertical: '5px', 'right': 'xsmall'},
      pad: {vertical: 'xsmall', horizontal: 'xsmall'},
      background: 'light-4',
      direction: 'row',
      align: 'center',
      round: 'xsmall',
      gap: 'xsmall',
    }
  }
};

extendDefaultTheme(defaultThemeProps);
MultipleSelect.defaultProps = {
  ...defaultProps
};

export default withTheme(MultipleSelect)

