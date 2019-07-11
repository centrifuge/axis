import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { AxisTheme } from "./AxisTheme";

import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Button,
  Calendar,
  Chart,
  CheckBox,
  Clock,
  DataTable,
  FormField,
  Grid,
  Heading,
  Menu,
  Meter,
  Paragraph,
  RadioButton,
  RangeInput,
  RangeSelector,
  Select,
  Stack,
  Tab,
  Tabs,
  Text,
  TextArea,
  TextInput,
  Video
} from "grommet";

class Components extends Component {
  state = {
    baseSize: 24,
    checkBox: true,
    radioButton: true,
    rangeSelector: [1, 2],
    themeName: "grommet"
  };

  render() {
    const {
      baseSize,
      checkBox,
      radioButton,
      rangeSelector,
      tabIndex,
      themeName
    } = this.state;

    const content = [
      <Box key="type" align="start">
        <Heading margin={{ top: "none" }}>Heading</Heading>
        <Paragraph>Paragraph</Paragraph>
        <Text>Text</Text>
        <Anchor href="">Anchor</Anchor>
        <Menu
          label="Menu"
          items={[
            {
              label: "One",
              onClick: () => {}
            },
            { label: "Two" }
          ]}
        />
        <Button label="Button" onClick={() => {}} />
      </Box>,
      <Box key="input" gap="small">
        <Select
          placeholder="Select"
          options={["One", "Two"]}
          onChange={() => {}}
        />
        <CheckBox
          name="check"
          checked={checkBox}
          label="CheckBox"
          onChange={event => this.setState({ checkBox: event.target.checked })}
        />
        <CheckBox
          name="toggle"
          toggle
          checked={checkBox}
          label="CheckBox toggle"
          onChange={event => this.setState({ checkBox: event.target.checked })}
        />
        <RadioButton
          name="radio"
          checked={radioButton}
          label="RadioButton"
          onChange={event =>
            this.setState({ radioButton: event.target.checked })
          }
        />
        <TextInput placeholder="TextInput" />
        <TextArea placeholder="TextArea" />
        <RangeInput value={24} onChange={() => {}} />
        <Stack>
          <Box direction="row" justify="between">
            {[0, 1, 2, 3].map(value => (
              <Box key={value} pad="small">
                <Text style={{ fontFamily: "monospace" }}>{value}</Text>
              </Box>
            ))}
          </Box>
          <RangeSelector
            direction="horizontal"
            invert={false}
            min={0}
            max={3}
            size="full"
            round="small"
            values={rangeSelector}
            onChange={values => this.setState({ rangeSelector: values })}
          />
        </Stack>
        <FormField label="FormField">
          <TextInput placeholder="TextInput" />
        </FormField>
      </Box>,
      <Box key="time" gap="medium">
        <Calendar size="small" />
        <Clock type="digital" />
        <Clock />
      </Box>,
      <Box key="measure" gap="medium">
        <Chart
          type="bar"
          round
          size="small"
          values={[
            { value: [10, 20] },
            { value: [20, 30] },
            { value: [30, 15] }
          ]}
        />
        <Meter
          type="bar"
          round
          size="small"
          background="light-3"
          values={[{ value: 30 }]}
        />
      </Box>,

      <Box key="dataTable" alignSelf="start">
        <DataTable
          columns={[
            { property: "name", header: "Name" },
            { property: "color", header: "Color" }
          ]}
          data={[
            { name: "Alan", color: "blue" },
            { name: "Chris", color: "purple" },
            { name: "Eric", color: "orange" }
          ]}
          sortable
        />
      </Box>,
      <Box key="accordion">
        <Accordion>
          <AccordionPanel label="Accordion Panel 1">
            <Box pad="small">
              <Text>Accordion panel 1 content</Text>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Accordion Panel 2">
            <Box pad="small">
              <Text>Accordion panel 2 content</Text>
            </Box>
          </AccordionPanel>
        </Accordion>
      </Box>,
      <Box key="tabs">
        <Tabs
          activeIndex={tabIndex}
          onActive={index => this.setState({ tabIndex: index })}
        >
          <Tab title="Tab 1">
            <Box pad="small">
              <Text>Tab 1 content</Text>
            </Box>
          </Tab>
          <Tab title="Tab 2">
            <Box pad="small">
              <Text>Tab 2 content</Text>
            </Box>
          </Tab>
        </Tabs>
      </Box>,
      <Box key="video" alignSelf="start">
        <Video>
          <source
            src="http://techslides.com/demos/sample-videos/small.webm"
            type="video/webm"
          />
          <source
            src="http://techslides.com/demos/sample-videos/small.ogv"
            type="video/ogg"
          />
          <source
            src="http://techslides.com/demos/sample-videos/small.mp4"
            type="video/mp4"
          />
          <source
            src="http://techslides.com/demos/sample-videos/small.3gp"
            type="video/3gp"
          />
        </Video>
      </Box>
    ];

    return (
      <React.Fragment>
        <AxisTheme>
          <Box pad="medium" overflow="auto">
            {Grid.available ? (
              <Grid columns="small" gap="medium">
                {content}
              </Grid>
            ) : (
              <Box direction="row" wrap align="start" gap="large">
                {content}
              </Box>
            )}
          </Box>
        </AxisTheme>
      </React.Fragment>
    );
  }
}

storiesOf("Axis Theme | Grommet Components", module).add("Dark mode", () => (
  <Components />
));
