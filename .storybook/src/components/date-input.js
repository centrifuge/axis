import React,{useState} from "react";
import {storiesOf} from "@storybook/react";

import {AxisTheme} from "../../../packages/theme/src/";
import {DateInput} from "../../../packages/date-input/src";
import {Box, FormField} from "grommet/es6";
import {Select, TextInput} from "grommet";


storiesOf("3.Components | Date Input", module)
    .add("Default", () => {
        const Comp = (props) => {
            const [date,setDate] = useState(undefined);

            return (
                <AxisTheme>
                    <Box gap={'medium'}>
                        <DateInput
                            value={date}
                            onChange={setDate}
                            placeholder={'Select Date'}
                        />


                        <DateInput
                            disabled
                            value={date}
                            onChange={setDate}
                            placeholder={'Select Date'}
                        />


                    </Box>

                </AxisTheme>
            );
        }

        return <Comp/>;
    })
    .add("inside a form field", () => {
        const Comp = (props) => {
            const [date,setDate] = useState(undefined);

            return (
                <AxisTheme>
                    <Box align="center" pad="large">
                        <Box width={'300px'} gap={'medium'}>
                            <FormField label="Due Date">
                                <DateInput
                                    value={date}
                                    placeholder={'Select Date'}
                                    onChange={setDate}
                                />
                            </FormField>

                            <FormField label="Disabled Due Date">
                                <DateInput
                                    disabled
                                    value={date}
                                    placeholder={'Select Date'}
                                    onChange={setDate}
                                />
                            </FormField>

                        </Box>

                    </Box>
                </AxisTheme>
            );
        }

        return <Comp/>;
    });
