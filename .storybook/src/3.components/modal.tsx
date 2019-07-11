import React, {Component} from "react";
import {storiesOf} from "@storybook/react";

import {AxisTheme} from "../../../packages/theme";
import {Box, Button, Paragraph} from "grommet";
import {Modal} from "../../../packages/modal/src/";

storiesOf("Components | Modal", module)
    .add("default", () => {
        class ModalContainer extends Component {
            state = {opened: false};

            render() {
                return (
                    <AxisTheme>
                        <Box fill align="center" justify="center">
                            <Button
                                label={"Open Modal"}
                                onClick={() => {
                                    this.setState({opened: true});
                                }}
                            />

                            <Modal
                                opened={this.state.opened}
                                title={"My First Modal Title"}
                                onClose={() => {
                                    this.setState({opened: false});
                                }}
                            >
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                    pellentesque, arcu vitae maximus pharetra, diam nulla
                                    porttitor orci, gravida aliquam neque nulla et quam. Integer
                                    aliquam finibus purus vel vestibulum. Interdum et malesuada
                                    fames ac ante ipsum primis in faucibus. Aliquam commodo,
                                    sapien ac sodales cursus, metus tortor mollis mi, nec posuere
                                    elit tortor sed urna. Praesent id urna eget massa auctor
                                    ornare et sed turpis. Ut sagittis ligula enim, vitae blandit
                                    libero tincidunt ac. Aenean erat nisl, porttitor at dolor id,
                                    laoreet iaculis dolor. Cras tristique convallis lectus ac
                                    posuere. Mauris eget diam eu velit tristique blandit.
                                </Paragraph>
                            </Modal>

                        </Box>
                    </AxisTheme>
                );
            }
        }

        return <ModalContainer/>;
    })
    .add("setting width to xlarge", () => {
        class ModalContainer extends Component {
            state = {opened: false};

            render() {
                return (
                    <AxisTheme>
                        <Box fill align="center" justify="center">
                            <Button
                                label={"Open Modal"}
                                onClick={() => {
                                    this.setState({opened: true});
                                }}
                            />

                            <Modal
                                opened={this.state.opened}
                                width={'xlarge'}
                                title={"My First Modal Title"}
                                onClose={() => {
                                    this.setState({opened: false});
                                }}
                            >
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                    pellentesque, arcu vitae maximus pharetra, diam nulla
                                    porttitor orci, gravida aliquam neque nulla et quam. Integer
                                    aliquam finibus purus vel vestibulum. Interdum et malesuada
                                    fames ac ante ipsum primis in faucibus. Aliquam commodo,
                                    sapien ac sodales cursus, metus tortor mollis mi, nec posuere
                                    elit tortor sed urna. Praesent id urna eget massa auctor
                                    ornare et sed turpis. Ut sagittis ligula enim, vitae blandit
                                    libero tincidunt ac. Aenean erat nisl, porttitor at dolor id,
                                    laoreet iaculis dolor. Cras tristique convallis lectus ac
                                    posuere. Mauris eget diam eu velit tristique blandit.
                                </Paragraph>
                            </Modal>

                        </Box>
                    </AxisTheme>
                );
            }
        }

        return <ModalContainer/>;
    })
    .add("Custom Heading", () => {
        class ModalContainer extends Component {
            state = {opened: false};

            render() {
                return (
                    <AxisTheme>
                        <Box fill align="center" justify="center">
                            <Button
                                label={"Open Modal"}
                                onClick={() => {
                                    this.setState({opened: true});
                                }}
                            />

                            <Modal
                                opened={this.state.opened}
                                title={"My First Modal Title"}
                                headingProps={{level: 3,color:"status-error"}}
                                onClose={() => {
                                    this.setState({opened: false});
                                }}
                            >
                                <Paragraph>
                                    Lorem ipsum
                                </Paragraph>
                            </Modal>

                        </Box>
                    </AxisTheme>
                );
            }
        }

        return <ModalContainer/>;
    })
