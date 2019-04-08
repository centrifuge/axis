import React, { Component } from "react";
import { storiesOf } from "@storybook/react";

import { AxisTheme } from "../../../packages/theme/src/";
import { Box, Button, Paragraph } from "grommet";
import { Section } from "../../../packages/section/src/";

storiesOf("3.Components | Section", module).add("default", () => {
  class ModalContainer extends Component {
    state = { opened: false };

    render() {
      return (
        <AxisTheme>
          <Section
            title="Testing Section title"
            optional={{ text: "toggle section" }}
          >
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pellentesque, arcu vitae maximus pharetra, diam nulla porttitor
              orci, gravida aliquam neque nulla et quam. Integer aliquam finibus
              purus vel vestibulum. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Aliquam commodo, sapien ac sodales cursus,
              metus tortor mollis mi, nec posuere elit tortor sed urna. Praesent
              id urna eget massa auctor ornare et sed turpis. Ut sagittis ligula
              enim, vitae blandit libero tincidunt ac. Aenean erat nisl,
              porttitor at dolor id, laoreet iaculis dolor. Cras tristique
              convallis lectus ac posuere. Mauris eget diam eu velit tristique
              blandit.
            </Paragraph>
          </Section>
        </AxisTheme>
      );
    }
  }

  return <ModalContainer />;
});
