import React, { useEffect, useState } from 'react'
import { Select, SelectProps } from 'grommet'

interface Props extends Omit<SelectProps, 'onSearch' | 'multiple'> {
    options: any[]
}

export const SearchSelect: React.FunctionComponent<Props> = ({ options, value, onChange, ...rest }) => {
    const [filteredOptions, setFilteredOptions] = useState(options)

    useEffect(() => {
        setFilteredOptions(options)
    }, [options])

    const onSelect = (selected) => {
        //reset options
        setFilteredOptions(options)
        onChange && onChange(selected.value)
    }

    const onFiltering = (text) => {
        const exp = new RegExp(text, 'i')
        setFilteredOptions(
            options.filter((o) => {
                return exp.test(getItemLabel(o))
            })
        )
    }

    const getItemLabel = (value) => {
        return getItemPropByKey(value, 'labelKey')
    }

    const getItemPropByKey = (value, key) => {
        const prop = rest[key]
        if (!prop) {
            return value
        } else {
            if (typeof prop === 'function') {
                return prop(value)
            } else {
                return value[prop]
            }
        }
    }

    return (
        <Select
            size={'medium'}
            value={value}
            placeholder="Select"
            searchPlaceholder="Search"
            options={filteredOptions}
            onChange={onSelect}
            onSearch={onFiltering}
            {...rest}
        />
    )
}

export default SearchSelect
