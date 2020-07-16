import React, { useState } from 'react'
import { withTheme } from 'styled-components'
import { Box, Heading, CheckBox, Collapsible } from 'grommet'

export const Section = withTheme(props => {
  const { title, optional, collapsed, rest } = props
  const [opened, open] = useState(optional && !optional.collapsed)

  // Deconstruct theme props
  const { heading, border } = props.theme.section

  // Order is important. Props should override theme
  const containerProps = {
    border,
    ...rest,
  }
  return (
    <Box {...containerProps}>
      <Box direction="row" gap={heading.gap}>
        <Heading level={heading.level}>{title}</Heading>
        {optional && <CheckBox label={optional.text} checked={opened} onChange={ev => open(ev.target.checked)} />}
      </Box>
      <Collapsible open={opened}>{props.children}</Collapsible>
    </Box>
  )
})
