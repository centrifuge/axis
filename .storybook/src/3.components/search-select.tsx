import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { AxisTheme } from '../../../packages/theme'
import { SearchSelect } from '../../../packages/search-select'
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

storiesOf('Components | Search Select', module)
  .add('Default', () => {
    const Comp = props => {
      const [selected, setSelected] = useState(undefined)

      return (
        <AxisTheme>
          <Box gap={'medium'} pad={'medium'}>
            <SearchSelect options={list} value={selected} onChange={setSelected} />
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
  .add('inside a form field', () => {
    const Comp = props => {
      const [selected, setSelected] = useState(undefined)

      return (
        <AxisTheme>
          <Box gap={'medium'} pad={'medium'}>
            <FormField label="Some random list">
              <SearchSelect options={list} value={selected} onChange={setSelected} />
            </FormField>
          </Box>
        </AxisTheme>
      )
    }

    return <Comp />
  })
  .add('Object as options', () => {
    const Comp = props => {
      const [selected, setSelected] = useState(undefined)

      const renderLabel = value => {
        return (
          <Box pad={{ vertical: 'small' }}>
            {value ? (
              <span>{`${value.label} -> ${value.address}`}</span>
            ) : (
              <span style={{ color: 'gray' }}>Select</span>
            )}
          </Box>
        )
      }
      return (
        <AxisTheme>
          <Box gap={'medium'} pad={'medium'}>
            <FormField label="Registries">
              <SearchSelect
                labelKey={'label'}
                valueKey={'address'}
                options={registries}
                value={selected}
                onChange={setSelected}
              />
            </FormField>

            <FormField label="Registries with custom label">
              <SearchSelect
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
