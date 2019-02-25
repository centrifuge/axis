import { css } from "styled-components";
import { base } from "grommet/themes";
import { deepMerge } from "grommet/utils/object";

const borderWidth = 1;

/*
  HEADINGS
*/

const isHeader = props => (props.level <= 2 || !props.level ? true : false);

const isSubheader = props => (props.level >= 3 ? true : false);

const generateHeadingSizes = specs => ({
  small: specs,
  medium: specs,
  large: specs,
  xlarge: specs,
  xxlarge: specs
});

const headerSpecMedium = {
  size: "20px",
  height: "32px",
  maxWidth: ""
};

const subheaderSpecMedium = {
  size: "16px",
  height: "24px",
  maxWidth: ""
};

const headerSizes = generateHeadingSizes(headerSpecMedium);

const subheaderSizes = generateHeadingSizes(subheaderSpecMedium);

/*
  TEXT & PARAGRAPHS
*/

const textSpecMedium = {
  size: "14px",
  height: "24px",
  maxWidth: ""
};

const textSpecLarge = {
  size: "16px",
  height: "32px",
  maxWidth: ""
};

const textSpecs = {
  small: textSpecMedium,
  medium: textSpecMedium,
  large: textSpecLarge,
  xlarge: textSpecLarge,
  xxlarge: textSpecLarge
};

const textSizes = {
  ...textSpecs,
  extend: props => css`
    ${!props.textAlign &&
      css`
        text-align: justify;
      `};

    ${!props.noHyphen &&
      css`
        hyphens: auto;
      `}
  `
};

/*
  THEME BOI
*/

export const axisThemeConfig = deepMerge(base, {
  heading: {
    weight: "var(--fw-demibold)",
    responsiveBreakpoint: null,
    level: {
      1: headerSizes,
      2: headerSizes,
      3: subheaderSizes,
      4: subheaderSizes,
      5: subheaderSizes,
      6: subheaderSizes
    },
    extend: props => css`
      margin-top: 0;
      font-family: var(--f-stack);

      /* Header */
      ${isHeader(props) &&
        css`
          ${!props.margin &&
            css`
              margin-bottom: 64px;
            `}
        `}

      /* Subheader */
      ${isSubheader(props) &&
        css`
          ${!props.margin &&
            css`
              margin-bottom: 40px;
            `}
        `}

        /* Lined Styles */
        ${props.lined &&
          css`
          border-bottom: 1px solid black;

          /* Lined Header */
          ${isHeader(props) &&
            css`
              padding-bottom: 32px;
            `}

          /* Lined Subheader */
          ${isSubheader(props) &&
            css`
              padding-bottom: 24px;
            `}
        `}
    `
  },
  paragraph: textSizes,
  text: textSizes,
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
