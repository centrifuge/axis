import { css } from "styled-components";
import { base } from "grommet/themes";
import { deepMerge } from "grommet/utils/object";

const borderWidth = 1;

export const axisThemeConfig = deepMerge(base, {
  button: {
    padding: {
      horizontal: `${32 - borderWidth}px`,
      vertical: `${8 - borderWidth}px`
    },
    border: {
      radius: "40px",
      width: `${borderWidth}px`,
      color: {
        dark: "#fff",
        light: "#000"
      }
    },
    color: {
      dark: "#fff",
      light: "#000"
    },
    primary: {
      color: {
        dark: "#fff",
        light: "#000"
      }
    },
    extend: props => css`
      font-weight: var(--fw-medium);
      font-family: var(--f-stack);
      text-align: center;
      font-size: 16px;
      line-height: 24px;

      ${
        !props.textAlign
          ? css`
              text-align: center;
            `
          : css`
              text-align: ${props.textAlign};
            `
      }

      /* Add underline for Plain type button */
      ${props.plain &&
        !props.link &&
        css`
          text-decoration: underline;
        `}

      ${props.link &&
        css`
          font-weight: var(--fw-demibold);

          &:hover {
            text-decoration: underline;
          }
        `}

      /* Button Hover Styles */
      &:hover {
        box-shadow: none;
        border-color: #2762FF;

        ${!props.primary &&
          css`
            color: #2762ff;
          `}
      }

      /* White Button Styles */
      ${props.white &&
        css`
          &:hover {
            background-color: #fff;
            border-color: #fff;
          }

          &:active {
            opacity: 0.9;
          }
        `}

      /* Primary Button Styles */
      ${props.primary &&
        css`
          &:hover {
            background-color: #2762ff;
          }

          &:active {
            opacity: 0.9;
          }
        `}
    `
  }
});
