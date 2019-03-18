import React from "react";
import { Box, Button, Heading, Layer } from "grommet";
import { Close } from "styled-icons/material/Close";

export const Modal = props => {
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
          justify={props.title ? "between" : "end"}
        >
          {props.title && (
            <Heading level={2} margin="none">
              {props.title}
            </Heading>
          )}
          {props.onClose && (
            <Button
              plain
              label={<Close height={24} />}
              onClick={props.onClose}
            />
          )}
        </Box>

        {props.children}
      </Box>
    </Layer>
  );
};
