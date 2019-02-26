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
  global: {
    colors: {
      "accent-1": "#FCBA59",
      focus: "#2762FF",
      brand: "#2762FF",
      black: "#000",
      white: "#fff",
      text: props => ({
        light: props.theme.global.colors.black,
        dark: props.theme.global.colors.white
      }),
      alert: "#e6f5ff",
      // Contribute Gitcoin Colors
      open: "#7ED321",
      started: "#FCBA59",
      Feature: "#FFC2D2",
      Bug: "#FFB5AE",
      Improvement: "#9EFFF7",
      Security: "#95FF94",
      Documentation: "#94FFED",
      Design: "#FF85C9",
      "Code Review": "#FFCE9E",
      Other: "#C2DBFF",
      placeholder: props => props.theme.global.colors.black
    },
    hover: {
      color: props => ({
        light: props.theme.global.colors.brand,
        dark: props.theme.global.colors.white
      })
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
    extend: props => css`
      fill: ${props.theme.global.colors.black};
      stroke: ${props.theme.global.colors.black};
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
          border-bottom: 1px solid ${props.theme.global.colors.black};

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
    color: props => ({
      dark: props.theme.global.colors.white,
      light: props.theme.global.colors.black
    }),
    hover: {
      extend: props => css`
        color: ${props.theme.global.colors.brand};
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
      color: props => ({
        dark: props.theme.global.colors.white,
        light: props.theme.global.colors.black
      })
    },
    color: props => ({
      dark: props.theme.global.colors.white,
      light: props.theme.global.colors.black
    }),
    primary: {
      color: props => ({
        dark: props.theme.global.colors.white,
        light: props.theme.global.colors.black
      })
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
        border-color: ${props.theme.global.colors.brand};

        ${!props.primary &&
          css`
            color: ${props.theme.global.colors.brand};
          `}
      }

      /* White Button Styles */
      ${props.white &&
        css`
          &:hover {
            background-color: ${props.theme.global.colors.white};
            border-color: ${props.theme.global.colors.white};
          }

          &:active {
            opacity: 0.9;
          }
        `}

      /* Primary Button Styles */
      ${props.primary &&
        css`
          &:hover {
            background-color: ${props.theme.global.colors.brand};
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
        color: ${props.theme.global.colors.black};
        border: none;
        border-bottom: ${borderWidth}px solid
          ${props.newsletter && props.dark
            ? props.theme.global.colors.black
            : props.theme.global.colors.white};
        border-radius: 0;
        padding-bottom: calc(11px - 1px);
      `
  }
});
