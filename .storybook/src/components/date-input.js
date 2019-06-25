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
                    <Box>
                        <DateInput
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


            return (
                <AxisTheme>
                    <Box align="center" pad="large">
                        <FormField label="Due Date">
                            <DateInput  placeholder={'Select Date'}/>
                        </FormField>

                        <FormField label="Due Date">
                            <TextInput/>
                        </FormField>
                    </Box>
                </AxisTheme>
            );
        }

        return <Comp/>;
    });
