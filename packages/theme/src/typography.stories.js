import React from "react";
import { storiesOf } from "@storybook/react";
import { AxisTheme } from "./AxisTheme";
import { Box, Heading, Paragraph } from "grommet";

const headingSizes = ["xlarge", "large", "medium", "small"];
const paragraghSizes = ["xxlarge", "xlarge", "large", "medium", "small"];

storiesOf("Axis Theme | Typography / Headings", module)
  .add("Default", () => {
    return (
      <AxisTheme>
        <div>
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>
        </div>
      </AxisTheme>
    );
  })
  .add("Sizes", () => {
    return (
      <AxisTheme>
        <Box direction={"columns"} gap={"large"}>
          {headingSizes.map(item => {
            return (
              <div key={item}>
                <Heading level={1} size={item}>
                  {item} H1
                </Heading>
                <Heading level={2} size={item}>
                  {item} H2
                </Heading>
                <Heading level={3} size={item}>
                  {item} H3
                </Heading>
                <Heading level={4} size={item}>
                  {item} H4
                </Heading>
                <Heading level={5} size={item}>
                  {item} H5
                </Heading>
                <Heading level={6} size={item}>
                  {item} H6
                </Heading>
              </div>
            );
          })}
        </Box>
      </AxisTheme>
    );
  });

storiesOf("Axis Theme | Typography / Paragraph", module)
  .add("Default", () => {
    return (
      <AxisTheme>
        <div>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            pellentesque, arcu vitae maximus pharetra, diam nulla porttitor
            orci, gravida aliquam neque nulla et quam. Integer aliquam finibus
            purus vel vestibulum. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Aliquam commodo, sapien ac sodales cursus, metus
            tortor mollis mi, nec posuere elit tortor sed urna. Praesent id urna
            eget massa auctor ornare et sed turpis. Ut sagittis ligula enim,
            vitae blandit libero tincidunt ac. Aenean erat nisl, porttitor at
            dolor id, laoreet iaculis dolor. Cras tristique convallis lectus ac
            posuere. Mauris eget diam eu velit tristique blandit.
          </Paragraph>
        </div>
      </AxisTheme>
    );
  })
  .add("Sizes", () => {
    return (
      <AxisTheme>
        <Box direction={"columns"} gap={"large"}>
          {headingSizes.map(item => {
            return (
              <div key={item}>
                <Paragraph size={item}>
                  {" "}
                  <b>{item}:</b> Proin pellentesque, arcu vitae maximus
                  pharetra, diam nulla porttitor orci, gravida aliquam neque
                  nulla et quam. Integer aliquam finibus purus vel vestibulum.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Aliquam commodo, sapien ac sodales cursus, metus tortor mollis
                  mi, nec posuere elit tortor sed urna. Praesent id urna eget
                  massa auctor ornare et sed turpis. Ut sagittis ligula enim,
                  vitae blandit libero tincidunt ac. Aenean erat nisl, porttitor
                  at dolor id, laoreet iaculis dolor. Cras tristique convallis
                  lectus ac posuere. Mauris eget diam eu velit tristique
                  blandit.
                </Paragraph>
              </div>
            );
          })}
        </Box>
      </AxisTheme>
    );
  });
