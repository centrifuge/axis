import React from "react";
import {storiesOf} from "@storybook/react";

import {AxisTheme} from "../../../packages/theme";
import {DisplayField} from "../../../packages/display-field/src";
import {Box} from "grommet";


storiesOf("Components | Display Field", module)
  .add("Default", () => {
    const Comp = (props) => {

      return (
        <AxisTheme>
          <Box gap={'medium'} width={'200px'} pad={'medium'}>
            <DisplayField value="Some Value that is to long and it does not fit"/>
          </Box>

        </AxisTheme>
      );
    }

    return <Comp/>;
  })
  .add("Default", () => {
    const Comp = (props) => {

      return (
        <AxisTheme>
          <Box gap={'medium'}  pad={'medium'}>
            <Box width={'200px'}>
              <DisplayField value="Some text in a fixed container that is to long and it does not fit"/>
            </Box>

            <DisplayField value="Some random stuff that that is long and unbound "/>
          </Box>



        </AxisTheme>
      );
    }

    return <Comp/>;
  })
  .add("With Link", () => {
    const Comp = (props) => {

      return (
        <AxisTheme>
          <Box gap={'medium'} pad={'medium'}>
            <DisplayField
              link={{
                href: 'http://google.com',
                target: '_blank'
              }}
              value="Link as Anchor props where you define the target"/>


            <DisplayField
              link="http://google.com"
              value="Link as string"/>
          </Box>

        </AxisTheme>
      );
    }

    return <Comp/>;
  })
  .add("With Label", () => {
    const Comp = (props) => {

      return (
        <AxisTheme>
          <Box gap={'medium'} width={'200px'} pad={'medium'}>
            <DisplayField
              label={'Some label'}
              value="Some Value that is to long and it does not fit"/>
          </Box>

        </AxisTheme>
      );
    }

    return <Comp/>;
  })
  .add("With Link and Label", () => {
    const Comp = (props) => {

      return (
        <AxisTheme>
          <Box gap={'medium'} width={'200px'} pad={'medium'}>
            <DisplayField
              link={{
                href: 'http://google.com',
                target: '_blank'
              }}
              label={'Some label'}
              value="Some Value that is to long and it does not fit"/>
          </Box>

        </AxisTheme>
      );
    }

    return <Comp/>;
  });
