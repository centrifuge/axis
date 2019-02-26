import { css } from "styled-components";
import { base } from "grommet/themes";
import { deepMerge } from "grommet/utils/object";

/*
  REUSED VARIABLES
*/

export const borderWidth = 1;

export const fwRegular = 400;
export const fwMedium = 500;
export const fwDemibold = 600;

export const ffStack = `AvenirNextLTW01, 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`;

export const breakpoints = {
  small: {
    value: 768,
    edgeSize: {
      xxlarge: "72px",
      xxxlarge: "120px"
    }
  },
  medium: {
    value: 1200
  },
  large: {}
};

const brandColor = "#2762FF";
const brand2Color = "#FCBA59";

const gitcoinColors = {
  open: "#7ED321",
  started: brand2Color,
  Feature: "#FFC2D2",
  Bug: "#FFB5AE",
  Improvement: "#9EFFF7",
  Security: "#95FF94",
  Documentation: "#94FFED",
  Design: "#FF85C9",
  "Code Review": "#FFCE9E",
  Other: "#C2DBFF"
};

const black = "#000";
const white = "#fff";

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

    ${props.hyphens &&
      css`
        hyphens: ${hyphens};
      `}
  `
};

/*
  THEME BOI
*/

export const axisThemeConfig = deepMerge(base, {
  global: {
    colors: {
      "accent-1": brand2Color,
      focus: brandColor,
      brand: brandColor,
      black: "#000",
      white: "#fff",
      text: {
        light: black,
        dark: white
      },
      placeholder: black,
      alert: "#e6f5ff",
      ...gitcoinColors
    },
    hover: {
      color: {
        light: brandColor,
        dark: white
      }
    },
    breakpoints: { ...breakpoints },
    deviceBreakpoints: {
      phone: "small",
      tablet: "large",
      computer: "large"
    },
    edgeSize: {
      xxlarge: "144px",
      xxxlarge: "192px"
    },
    input: {
      weight: 500
    },
    font: {
      family: ffStack,
      weight: fwRegular,
      size: "14px",
      height: 1.5
    }
  },
  icon: {
    extend: css`
      fill: ${black};
      stroke: ${black};
    `
  },
  heading: {
    weight: fwDemibold,
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
      font-family: ${ffStack};

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
          border-bottom: 1px solid ${black};

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
  anchor: {
    fontWeight: props => (props.bold ? fwDemibold : fwRegular),
    textDecoration: props => props.underline && "underline",
    color: {
      dark: white,
      light: black
    },
    hover: {
      extend: css`
        color: ${brandColor};
      `
    },
    extend: css`
      &:active {
        opacity: 0.9;
      }
    `
  },
  button: {
    padding: {
      horizontal: `${32 - borderWidth}px`,
      vertical: `${8 - borderWidth}px`
    },
    border: {
      radius: "40px",
      width: `${borderWidth}px`,
      color: {
        dark: white,
        light: black
      }
    },
    color: {
      dark: white,
      light: black
    },
    primary: {
      color: {
        dark: white,
        light: black
      }
    },
    extend: props => css`
      font-weight: ${fwMedium};
      font-family: ${ffStack};
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
          font-weight: ${fwDemibold};

          &:hover {
            text-decoration: underline;
          }
        `}

      /* Button Hover Styles */
      &:hover {
        box-shadow: none;
        border-color: ${brandColor};

        ${!props.primary &&
          css`
            color: ${brandColor};
          `}
      }

      /* White Button Styles */
      ${props.white &&
        css`
          &:hover {
            background-color: ${white};
            border-color: ${white};
          }

          &:active {
            opacity: 0.9;
          }
        `}

      /* Primary Button Styles */
      ${props.primary &&
        css`
          &:hover {
            background-color: ${brandColor};
          }

          &:active {
            opacity: 0.9;
          }
        `}
    `
  },
  textInput: {
    extend: props =>
      props.newsletter &&
      css`
        font-weight: ${fwMedium};
        font-family: ${ffStack};
        color: ${black};
        border: none;
        border-bottom: ${borderWidth}px solid
          ${props.newsletter && props.dark ? black : white};
        border-radius: 0;
        padding-bottom: calc(11px - 1px);
      `
  }
});
