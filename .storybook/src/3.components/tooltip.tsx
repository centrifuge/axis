import React from 'react'
import { storiesOf } from '@storybook/react'

import { AxisTheme } from '../../../packages/theme'
import { Box, Table, TableBody, TableRow, TableCell } from 'grommet/es6'
import { Tooltip } from '../../../packages/tooltip'

storiesOf('Components | Tooltip', module).add('Tooltip', () => {
  const Comp = props => {
    return (
      <AxisTheme>
        <Box gap={'large'} pad={'large'} width={'large'}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell scope="row">Current Price</TableCell>
                <TableCell style={{ textAlign: 'end' }}> 1.232 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <Tooltip text="Net Asset Value">
                    <span>NAV</span>
                  </Tooltip>
                </TableCell>
                <TableCell style={{ textAlign: 'end' }}>1321,523.00 DAI</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </AxisTheme>
    )
  }

  return <Comp />
})
