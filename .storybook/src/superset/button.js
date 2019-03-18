import React from "react";
import { storiesOf } from "@storybook/react";
import { AxisTheme } from "../../../packages/theme/src/AxisTheme";
import { Button } from "grommet";

storiesOf("Axis Theme | Grommet Superset / Button", module).add(
  "Primary",
  () => (
    <AxisTheme>
      <Button primary label="Primary Button" />
    </AxisTheme>
  )
);
