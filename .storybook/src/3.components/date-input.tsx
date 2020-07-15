import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { AxisTheme } from '../../../packages/theme'
import { DateInput } from '../../../packages/date-input/src'
import { Box, FormField } from 'grommet/es6'

storiesOf('Components | Date Input', module)
    .add('Default', () => {
        const Comp = (props) => {
            const [date, setDate] = useState(undefined)

            return (
                <AxisTheme>
                    <Box gap={'medium'} pad={'medium'}>
                        <DateInput value={date} onChange={setDate} placeholder={'Select Date '} />

                        <DateInput disabled value={date} onChange={setDate} placeholder={'Select Date'} />
                    </Box>
                </AxisTheme>
            )
        }

        return <Comp />
    })
    .add('width drop props', () => {
        const Comp = (props) => {
            const [date, setDate] = useState(undefined)

            return (
                <AxisTheme>
                    <Box gap={'medium'} pad={'medium'}>
                        <DateInput
                            value={date}
                            onChange={setDate}
                            placeholder={'Select Date'}
                            dropProps={{
                                stretch: false,
                                align: { top: 'top', right: 'right' },
                            }}
                        />
                    </Box>
                </AxisTheme>
            )
        }

        return <Comp />
    })
    .add('inside a form field', () => {
        const Comp = (props) => {
            const [date, setDate] = useState(undefined)

            return (
                <AxisTheme>
                    <Box align="center" pad="medium">
                        <Box width={'300px'} gap={'medium'}>
                            <FormField label="Due Date">
                                <DateInput value={date} placeholder={'Select Date'} onChange={setDate} />
                            </FormField>

                            <FormField label="Disabled Due Date">
                                <DateInput disabled value={date} placeholder={'Select Date'} onChange={setDate} />
                            </FormField>
                        </Box>
                    </Box>
                </AxisTheme>
            )
        }

        return <Comp />
    })
