import React from "react";
import { Box, Button, Heading, Layer } from "grommet";
import { withTheme } from "styled-components";

export const Modal = withTheme(props => {
  const Close = props.theme.modal.icons.close;
  const {headingProps} = props;
  if (props.opened)
      return (
            <Layer
              position="center"
              modal
              onClickOutside={props.onClose}
              onEsc={props.onClose}
            >
              <Box
                round="small"
                background="white"
                elevation="medium"
                fill="vertical"
                width={props.size}
                pad="medium"
              >
                <Box
                  flex={false}
                  direction="row"
                  alignContent="center"
                  justify={props.title ? "between" : "end"}
                >
                  {props.title && (
                    <Heading level={2} margin={{top:'none',bottom:'none',left:"none",right:'medium'}} {...headingProps}>
                      {props.title}
                    </Heading>
                  )}
                  {props.onClose && (
                    <Button plain label={<Close />} onClick={props.onClose} />
                  )}
                </Box>

                {props.children}
              </Box>
            </Layer>

      );

  return null;
});
