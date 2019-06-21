import React from "react";
import {storiesOf} from "@storybook/react";

import {AxisTheme} from "../../../packages/theme/src/";
import {NumberInput} from "@centrifuge/axis-number-input/src/NumberInput";
import {FormField} from "grommet";

storiesOf("3.Components | Number Input", module)
    .add("Default", () => {
        const Comp = (props) => {


            return (
                <AxisTheme>
                    <NumberInput/>
                </AxisTheme>
            );
        }

        return <Comp/>;
    })
    .add("Percent", () => {
        const Comp = (props) => {


            return (
                <AxisTheme>
                    <NumberInput suffix={'%'}/>
                </AxisTheme>
            );
        }

        return <Comp/>;
    })

    .add("Currency", () => {
        const Comp = (props) => {


            return (
                <AxisTheme>
                    <NumberInput prefix={'$'}/>
                </AxisTheme>
            );
        }

        return <Comp/>;
    })

    .add("Inside a form field", () => {

        const Comp = (props) => {


            return (
                <AxisTheme>
                    <FormField label="Enter some number">
                        <NumberInput/>
                    </FormField>

                </AxisTheme>
            );
        }
        return <Comp/>;
    });
