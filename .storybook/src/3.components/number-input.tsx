import React from 'react'
import { storiesOf } from '@storybook/react'
import { AxisTheme } from '../../../packages/theme'
import { NumberInput } from '@centrifuge/axis-number-input'
import { Box, FormField } from 'grommet'

storiesOf('Components | Number Input', module)
    .add('Default', () => {
        const Comp = (props) => {
            return (
                <AxisTheme>
                    <Box gap={'medium'} pad={'medium'}>
                        <NumberInput />
                        <NumberInput disabled={true} value={'2222'} />
                    </Box>
                </AxisTheme>
            )
        }

        return <Comp />
    })
    .add('Percent', () => {
        const Comp = (props) => {
            return (
                <AxisTheme>
                    <Box gap={'medium'} pad={'medium'}>
                        <NumberInput placeholder={'00.00'} suffix={'%'} />
                    </Box>
                </AxisTheme>
            )
        }

        return <Comp />
    })

    .add('Currency', () => {
        const Comp = (props) => {
            return (
                <AxisTheme>
                    <Box gap={'medium'} pad={'medium'}>
                        <NumberInput placeholder={'00.00'} prefix={'$'} />
                    </Box>
                </AxisTheme>
            )
        }

        return <Comp />
    })

    .add('Inside a form field', () => {
        const Comp = (props) => {
            return (
                <AxisTheme>
                    <Box gap={'medium'} pad={'medium'}>
                        <FormField label="Enter some number">
                            <NumberInput />
                        </FormField>
                    </Box>
                </AxisTheme>
            )
        }
        return <Comp />
    })
