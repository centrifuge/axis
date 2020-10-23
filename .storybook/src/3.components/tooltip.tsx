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
                <TableCell scope="row">
                  <Tooltip title="When the last epoch closed">Current Price</Tooltip>
                </TableCell>
                <TableCell style={{ textAlign: 'end' }}>1.232</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <Tooltip
                    title="Net Asset Value"
                    description="The NAV (Net asset value) reflects the present value of the outstanding portfolio of financings. It is basically the sum of present values of the risk-adjusted expected repayments of all outstanding financings"
                    link={{ text: 'Learn more', url: 'https://centrifuge.hackmd.io/OMYT-Gh6Tm-D91CynWX0fA?view#NAV' }}
                  >
                    Asset Value
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
