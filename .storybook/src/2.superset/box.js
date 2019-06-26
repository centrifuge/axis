import React from "react";
import { storiesOf } from "@storybook/react";
import { AxisTheme } from "../../../packages/theme/src/";
import {Box, Heading} from "grommet";

storiesOf("Superset | Box", module).add("responsiveChildren", () => (
  <AxisTheme>
      <>
          <Heading level="4"> responsiveChildren = false </Heading>
          <Box width="xlarge" border="small" direction="rows"  pad="medium">
              <Box background="accent-1" pad="medium"></Box>
              <Box background="accent-2"pad="medium"></Box>
              <Box background="accent-3" pad="medium"></Box>
              <Box background="accent-4" pad="medium"></Box>
          </Box>
          <Heading level="4">responsiveChildren = true</Heading>
          <Box width="xlarge" border="small" direction="rows" responsiveChildren  pad="medium">
              <Box background="accent-1" pad="medium"></Box>
              <Box background="accent-2"pad="medium"></Box>
              <Box background="accent-3" pad="medium"></Box>
              <Box background="accent-4" pad="medium"></Box>
          </Box>


      </>
  </AxisTheme>
));
