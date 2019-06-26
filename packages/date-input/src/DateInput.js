import React, {useState} from "react";
import {Box, Calendar, DropButton, TextInput} from "grommet";
import {controlBorderStyle} from "grommet/utils";
import styled, {withTheme} from "styled-components";
import {Close} from "grommet-icons";

const DateTimeTextInput = styled(TextInput)`
  cursor: pointer;
`;


const StyledDateInputDropButton = styled(DropButton)`
  font-size: inherit;
  ${DateTimeTextInput} {
    ${props => props.disabled && 'cursor:default'}
  }
  
  ${props => !props.plain && controlBorderStyle};
  ${props =>
    props.theme.dateInput &&
    props.theme.dateInput.control &&
    props.theme.dateInput.control.extend};
`;




const StyledCalendar = styled(Calendar)`
  // Handle multiple sizes
  ${props =>
    props.theme.dateInput &&
    props.theme.dateInput.calendar &&
    props.theme.dateInput.calendar.extend};
`

const DropContent = props => {
    const {date, locale, onClose, size} = props;

    const selectDate = date => {
        onClose(date);
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
    );
};


export const DateInput = withTheme((props) => {

    const defaultProps = {locale: 'en-US', size: 'small'}

    const [open, setOpen] = useState();
    const {value, onChange, locale, plain, placeholder, size, disabled} = {...props, ...defaultProps};

    // if plain is set it is inside a form field most likely and has no border
    let padding = {}
    if (!plain) {
        padding = {right: size}
    }

    const selectDate = (date) => {
        if (onChange) onChange(date);
        setOpen(false);
    };

    return (
        <StyledDateInputDropButton
            disabled={disabled}
            plain={plain}
            open={open}
            size={size}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            dropAlign={{top: 'bottom', left: 'left'}}
            dropContent={
                <DropContent date={value} onClose={selectDate}/>
            }
        >
            <Box direction={'row'} align={'center'} pad={padding}>
                <DateTimeTextInput
                    tabIndex="-1"
                    plain
                    readOnly
                    placeholder={placeholder}
                    value={
                        value ? `${new Date(value).toLocaleDateString(locale)}` : ""
                    }
                />
                <Box gap={size} direction={'row'}>

                    {
                        value && !disabled && <Close
                            size={size}
                            onClick={(ev) => {
                                ev.stopPropagation();
                                selectDate(undefined);
                            }}/>
                    }

                </Box>


            </Box>

        </StyledDateInputDropButton>
    );
});
