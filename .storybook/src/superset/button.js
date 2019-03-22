import React from "react";
import { storiesOf } from "@storybook/react";
import { AxisTheme } from "../../../packages/theme/src/";
import { Button } from "grommet";

storiesOf("2.Superset | Button", module).add("Primary", () => (
  <AxisTheme>
    <Button primary label="Primary Button" />
  </AxisTheme>
));
