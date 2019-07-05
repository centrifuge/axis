import React from "react";
import { storiesOf } from "@storybook/react";
import { AxisTheme } from "../../../packages/theme/src/";
import { Box, Heading, Paragraph } from "grommet";

const headingSizes = ["xlarge", "large", "medium", "small"];

const paragraphSizes = ["xxlarge", "xlarge", "large", "medium", "small"];

const Headings = () => (
  <AxisTheme>
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

storiesOf("Theme | Typography /", module).add("Documentation", () => (
  <>
    <Paragraph>Headings Components</Paragraph>
    <Headings />
    <Paragraph>Paragraph Components</Paragraph>
  </>
));

storiesOf("Theme | Typography / Headings", module)
  .add("Default", Headings)
  .add("Sizes", () => (
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
  ));

storiesOf("Theme | Typography / Paragraph", module)
  .add("Default", () => (
    <AxisTheme>
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
    <AxisTheme>
      <Box direction={"columns"} gap={"large"}>
        {paragraphSizes.map(item => (
          <Paragraph key={item} size={item}>
            <strong>{item}:</strong> Proin pellentesque, arcu vitae maximus
            pharetra, diam nulla porttitor orci, gravida aliquam neque nulla et
            quam. Integer aliquam finibus purus vel vestibulum. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam commodo,
            sapien ac sodales cursus, metus tortor mollis mi, nec posuere elit
            tortor sed urna. Praesent id urna eget massa auctor ornare et sed
            turpis. Ut sagittis ligula enim, vitae blandit libero tincidunt ac.
            Aenean erat nisl, porttitor at dolor id, laoreet iaculis dolor. Cras
            tristique convallis lectus ac posuere. Mauris eget diam eu velit
            tristique blandit.
          </Paragraph>
        ))}
      </Box>
    </AxisTheme>
  ));
