import React from "react";
import { storiesOf } from "@storybook/react";
import { AxisTheme } from "../../../packages/theme/src/AxisTheme";
import { Box, Heading, Paragraph } from "grommet";

const Headings = () => (
  <AxisTheme full={false}>
    <>
      <Heading level={1} lined>
        Heading 1
      </Heading>
      <Heading level={2} lined>
        Heading 2
      </Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </>
  </AxisTheme>
);

storiesOf("Axis Theme | Typography /", module).add("Documentation", () => (
  <>
    <Paragraph>Headings Components</Paragraph>
    <Headings />
    <Paragraph>Paragraph Components</Paragraph>
  </>
));

storiesOf("Axis Theme | Typography / Headings", module).add(
  "Default",
  Headings
);

storiesOf("Axis Theme | Typography / Paragraph", module)
  .add("Default", () => (
    <AxisTheme full={false}>
      <>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pellentesque, arcu vitae maximus pharetra, diam nulla porttitor orci,
          gravida aliquam neque nulla et quam. Integer aliquam finibus purus vel
          vestibulum. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Aliquam commodo, sapien ac sodales cursus, metus tortor
          mollis mi, nec posuere elit tortor sed urna. Praesent id urna eget
          massa auctor ornare et sed turpis. Ut sagittis ligula enim, vitae
          blandit libero tincidunt ac. Aenean erat nisl, porttitor at dolor id,
          laoreet iaculis dolor. Cras tristique convallis lectus ac posuere.
          Mauris eget diam eu velit tristique blandit.
        </Paragraph>
      </>
    </AxisTheme>
  ))
  .add("Sizes", () => (
    <AxisTheme full={false}>
      <Box direction={"columns"} gap={"large"}>
        {["medium", "large"].map(item => (
          <Paragraph key={item} size={item}>
            <b>{item}:</b> Proin pellentesque, arcu vitae maximus pharetra, diam
            nulla porttitor orci, gravida aliquam neque nulla et quam. Integer
            aliquam finibus purus vel vestibulum. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Aliquam commodo, sapien ac sodales
            cursus, metus tortor mollis mi, nec posuere elit tortor sed urna.
            Praesent id urna eget massa auctor ornare et sed turpis. Ut sagittis
            ligula enim, vitae blandit libero tincidunt ac. Aenean erat nisl,
            porttitor at dolor id, laoreet iaculis dolor. Cras tristique
            convallis lectus ac posuere. Mauris eget diam eu velit tristique
            blandit.
          </Paragraph>
        ))}
      </Box>
    </AxisTheme>
  ));
