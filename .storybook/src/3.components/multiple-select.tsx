import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { AxisTheme } from '../../../packages/theme'
import { MultipleSelect } from '../../../packages/multiple-select'
import { Box, FormField } from 'grommet/es6'

const list = ['Invoices', 'Real Estate', 'Employees']

const registries = [
  {
    label: 'Invoices',
    address: '0x44444',
  },
  {
    label: 'Real Estate',
    address: '0x11111',
  },
  {
    label: 'Employees',
    address: '0x2222222',
  },
]

storiesOf('Components | Multiple Select', module)
  .add('Default', () => {
    const Comp = (props) => {
      const [selected, setSelected] = useState(undefined)

      return (
        <AxisTheme>
          <Box gap={'medium'} pad={'medium'}>
            <MultipleSelect options={list} value={selected} onChange={setSelected} />
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
  .add('inside a form field', () => {
    const Comp = (props) => {
      const [selected, setSelected] = useState(undefined)

      return (
        <AxisTheme>
          <Box gap={'medium'} pad={'medium'}>
            <FormField label="Some random list">
              <MultipleSelect options={list} value={selected} onChange={setSelected} />
            </FormField>
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
  .add('Object as options', () => {
    const Comp = (props) => {
      const [selected, setSelected] = useState([registries[1], registries[0]])

      const renderLabel = (value) => {
        if (!value || !value.length) return null
        return value.map((val) => {
          return (
            <Box background="light-4" margin={{ right: '5px' }} pad={'small'}>
              <span>{`${val.label} -> ${val.address}`}</span>
            </Box>
          )
        })
      }
      return (
        <AxisTheme>
          <Box gap={'medium'} pad={'medium'}>
            <FormField label="Registries">
              <MultipleSelect
                labelKey={'label'}
                valueKey={'address'}
                options={registries}
                value={selected}
                onChange={setSelected}
              />
            </FormField>

            <FormField label="Registries with custom display">
              <MultipleSelect
                labelKey={'label'}
                valueKey={'address'}
                options={registries}
                valueLabel={renderLabel(selected)}
                value={selected}
                onChange={setSelected}
              />
            </FormField>
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
