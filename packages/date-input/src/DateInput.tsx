import React, { useState } from 'react'
import { Box, Calendar, DropButton, DropProps, TextInput } from 'grommet'
import { FormClose, Icon } from 'grommet-icons'
import { controlBorderStyle } from 'grommet/utils/styles'
import { defaultProps, extendDefaultTheme } from 'grommet/default-props'
import styled, { ThemeProps as StyledThemeProps, withTheme } from 'styled-components'
import { MarginType } from 'grommet/utils'

const DateTimeTextInput = styled(TextInput)`
    cursor: pointer;
`

const StyledDateInputDropButton = styled(DropButton)`
    font-size: inherit;
    ${DateTimeTextInput} {
        ${(props) => props.disabled && 'cursor:default'}
    }

    ${(props) => !props.plain && controlBorderStyle};
    ${(props) => props.theme.dateInput && props.theme.dateInput.control && props.theme.dateInput.control.extend};
`

const StyledCalendar = styled(Calendar)`
    // Handle multiple sizes
    ${(props) => props.theme.dateInput && props.theme.dateInput.calendar && props.theme.dateInput.calendar.extend};
`

const DropContent = (props) => {
    const { date, locale, onClose, size } = props

    const selectDate = (date) => {
        onClose(date)
    }
    return (
        <Box align="start" pad={'medium'} justify="center">
            <StyledCalendar
                locale={locale}
                daysOfWeek
                size={'small'}
                date={date}
                onSelect={selectDate}
                showAdjacentDays={false}
            />
        </Box>
    )
}

interface ThemeProps {
    dateInput: {
        icons: {
            close: Icon
            margin: MarginType
        }
    }
}

interface Props extends StyledThemeProps<ThemeProps> {
    disabled?: boolean
    value: string
    locale?: string
    plain?: boolean
    placeholder?: string
    dropProps?: DropProps
    // it is passed to all children that have a gap or size prop
    size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | string
    onChange: (date: string | undefined) => {}
}

export const DateInput: React.FunctionComponent<Props> = ({
    value,
    onChange,
    locale = 'en-US',
    plain,
    placeholder,
    size = 'small',
    disabled,
    dropProps,
    theme,
}) => {
    const [open, setOpen] = useState()

    // if plain is set it is inside a form field most likely and has no border
    let padding = {}
    if (!plain) {
        padding = { right: size }
    }

    const selectDate = (date) => {
        if (onChange) onChange(date)
        setOpen(false)
    }

    const Icon = theme.dateInput.icons.close

    return (
        <StyledDateInputDropButton
            theme={theme}
            disabled={disabled}
            plain={plain}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            dropAlign={{ top: 'top', left: 'left' }}
            dropProps={dropProps || { stretch: false }}
            dropContent={<DropContent date={value} onClose={selectDate} />}
        >
            <Box direction={'row'} align={'center'} pad={padding}>
                <DateTimeTextInput
                    tabIndex={-1}
                    plain
                    readOnly
                    placeholder={placeholder}
                    value={value ? `${new Date(value).toLocaleDateString(locale)}` : ''}
                />
                <Box gap={size} direction={'row'} margin={theme.dateInput.icons.margin}>
                    {value && !disabled && (
                        <Icon
                            onClick={(ev) => {
                                ev.stopPropagation()
                                selectDate(undefined)
                            }}
                        />
                    )}
                </Box>
            </Box>
        </StyledDateInputDropButton>
    )
}

const defaultThemeProps: ThemeProps = {
    dateInput: {
        icons: {
            close: FormClose,
            margin: { horizontal: 'small' },
        },
    },
}

extendDefaultTheme(defaultThemeProps)
DateInput.defaultProps = {
    ...defaultProps,
}

export default withTheme(DateInput)
