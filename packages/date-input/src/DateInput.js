import React, {Component, useState} from "react";
import {Box, Calendar, DropButton, TextInput} from "grommet";
import {controlBorderStyle} from "grommet/utils";
import styled, {withTheme} from "styled-components";
import { Close } from "grommet-icons";

const StyledDateInputDropButton = styled(DropButton)`
  font-size: inherit;
  ${props => !props.plain && controlBorderStyle};
  ${props =>
    props.theme.dateInput &&
    props.theme.dateInput.control &&
    props.theme.dateInput.control.extend};
`;


const DateTimeTextInput = styled(TextInput)`
  cursor: pointer;
`;

const DropContent = props => {
    const {date, onClose} = props;
    const close = (date) => onClose(date);

    const selectDate = date => {
        onClose(date);
    }
    return (
        <Box align="center">
            <Calendar
                locale={'en-US'}
                daysOfWeek
                date={date}
                onSelect={selectDate}
                showAdjacentDays={false}
            />
        </Box>
    );
};


export const DateInput = withTheme(props => {
    const [open, setOpen] = useState();
    const { value , onChange, locale , plain, placeholder} = props;



    const onClose  = (date) => {
        if(onChange) onChange(date);
        setTimeout(() => setOpen(false), 1);
    };

    return (
        <StyledDateInputDropButton
            plain={plain}
            open={open}
            width={"100%"}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            dropAlign={{top: 'bottom', left: 'left'}}
            dropContent={
                <DropContent date={value} onClose={onClose}/>
            }
        >
            <Box direction={'row'} align={'center'}>
                <DateTimeTextInput
                    tabIndex="-1"
                    plain
                    readOnly
                    placeholder={placeholder}
                    value={value
                        ? `${new Date(value).toLocaleDateString(locale)}`
                        : ""}
                />

                <Close
                    size={'small'}
                       onClick={(ev) => {
                           ev.preventDefault();
                           ev.stopPropagation();
                           onClose(undefined)
                       }}/>
            </Box>

        </StyledDateInputDropButton>
    );
});
