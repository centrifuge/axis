import React from "react";
import { Box, Button, Heading, Layer } from "grommet";
import { withTheme } from "styled-components";

export const Modal = withTheme(props => {
  const Close = props.theme.modal.icons.close;
  const {
      headingProps,
      onClose,
      opened,
      children,
      title,
      ...rest
  } = props;

  if (opened)
      return (
            <Layer
              position="center"
              modal
              onClickOutside={onClose}
              onEsc={onClose}
            >
              <Box
                round="small"
                background="white"
                pad="medium"
                {...rest}
              >
                <Box
                  flex={false}
                  direction="row"
                  alignContent="center"
                  justify={title ? "between" : "end"}
                >
                  {title && (
                    <Heading level={2} margin={{top:'none',bottom:'none',left:"none",right:'medium'}} {...headingProps}>
                      {title}
                    </Heading>
                  )}
                  {onClose && (
                    <Button plain label={<Close />} onClick={onClose} />
                  )}
                </Box>

                {children}
              </Box>
            </Layer>

      );

  return null;
});
