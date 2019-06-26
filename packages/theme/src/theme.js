import { css } from "styled-components";
import { generate } from "grommet/themes";
import {Button, Select} from "grommet";
import { deepMerge } from "grommet/utils/object";
import { Close } from "grommet-icons";

/*
  REUSED VARIABLES
*/


export const baseSpacing = 24;
export const scale = 6;

const baseFontSize = baseSpacing * 0.75; // 18
const fontScale = baseSpacing / scale; // 4

const base = generate(baseSpacing, scale);

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
    ${props.textAlign &&
  props.textAlign === "justify" &&
  css`
        text-align: justify;
      `};

    ${props.hyphens &&
  css`
        hyphens: ${props.hyphens === true ? "auto" : "unset"};
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
      // @NOTE: redifining these colors breaks the normalizeColor function
      // black,
      // white,
      text: {
        dark: white,
        light: black
      },
      grey: "#BDBDBD",
      border: black,
      placeholder: "grey",
      alert: "#e6f5ff",
      ...gitcoinColors
    },
    hover: {
      color: {
        light: "brand",
        dark: "white"
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
      weight: fwMedium
    },
    control: {
      border: {
        // NOTE: two below properties are not passed to the theme
        side: "bottom",
        color: "black",
        // These work
        radius: "0px",
        width: "1px"
      }
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
    extend: props => css`
      font-family: ${ffStack};
    `
  },
  paragraph: textSizes,
  text: textSizes,
  anchor: {
    fontWeight: props => (props.bold ? fwDemibold : fwRegular),
    textDecoration: "underline",
    color: {
      dark: "white",
      light: "black"
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
  box: {
    extend: props => css`
      // 
      ${props.responsiveChildren && css`
        > * {
          flex: 1;
        }
      `}
       
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
        dark: "white",
        light: "black"
      }
    },
    color: {
      dark: "white",
      light: "black"
    },
    primary: {
      color: {
        dark: "white",
        light: "black"
      }
    },
    extend: props => css`
      font-weight: ${fwMedium};
      font-family: ${ffStack};
      text-align: center;
      font-size: 16px;
      line-height: 24px;

      &:hover {
        box-shadow: none;
        border-color: ${brandColor};

        ${!props.primary &&
    css`
            color: ${brandColor};
          `}
      }

      &:active {
        opacity: 0.9;
      }

      /* CUSTOMIZED PROP: primary
       * Changes the hover background color
       */
      ${props.primary &&
    css`
          &:hover {
            background-color: ${brandColor};
          }
        `}

      /* NEW PROP: textAlign
       * Sets default text-align to center, and enables changing of it per-button-level
       */
      ${
        !props.textAlign
            ? css`
              text-align: center;
            `
            : css`
              text-align: ${props.textAlign};
            `
        }

      /* NEW PROP: underline
       * Adds an underline to buttons, ideally used with 'plain' button type
       */
      ${props.underline &&
    css`
          text-decoration: underline;
        `}

      /* NEW PROP: white
       * Customizes the hover background & border colors 
       */
      ${props.white &&
    css`
          &:hover {
            background-color: ${white};
            border-color: ${white};
          }
        `}
    `
  },
  calendar: {
    // daySize must align with global.size
    small: {
      fontSize: `${baseFontSize - fontScale}px`,
      lineHeight: 1.375,
      daySize: `${(baseSpacing * 12) / 7}px`,
      slideDuration: '0.2s',
    },
  },
  dateInput:{

  },
  textArea: {
    extend: css``
  },
  textInput: {
    extend: props => css`
      /* NEW PROP: newsletter
       * Creates a custom styled textInput with a nice single bottom border
       */
      ${props.newsletter &&
    css`
          font-weight: ${fwMedium};
          font-family: ${ffStack};
          color: ${black};
          border: none;
          border-bottom: ${borderWidth}px solid
            ${props.newsletter && props.dark ? black : white};
          border-radius: 0;
          padding-bottom: calc(11px - 1px);
        `}
    `
  },
  formField: {
    label: {
      color: "black",
      weight: fwRegular,
      margin: {
        top: "none",
        vertical: "2px",
        horizontal: undefined
      }
    },
    margin: 0,
    extend: css`
      
      label {
        line-height: 1;
      }
      input {
        padding: 16px 0 15px 0;
        line-height: 1;
      }
      button {
        box-shadow: none;
      }
    `
  },
  table: {
    /* NOTE:
     *
     */
    extend: css``,
    header: {
      pad: {
        left: "none"
      },
      background: {},
      border: {
        side: "bottom",
        color: black
      }
    },
    body: {
      pad: {
        left: "none"
      },
      fill: "vertical",
      border: {
        side: "bottom",
        color: "grey"
      },
      extend: css``
    },
    footer: {
      border: {
        side: "none"
      },
      extend: css``
    }
  },
  layer: {
    overlay: {
      background: "rgba(0, 0, 0, 0.2)"
    },
    extend: css``
  },
  dataTable: {
    primary: {
      weight: fwRegular
    }
  },
  tab: {
    color: "black",
    margin: "none",
    pad: {
      horizontal: "medium"
    },
    border: {
      side: "bottom",
      size: "1px",
      color: {
        dark: "grey",
        light: "grey"
      },
      active: {
        color: {
          dark: "white",
          light: "brand"
        }
      },
      hover: {
        color: {
          dark: "white",
          light: "black"
        }
      }
    },
    active: { color: "text", background: undefined },
    hover: {
      color: {
        light: "black",
        dark: "brand"
      }
    }
  },

  tabs: {
    gap: "none",
    header: {
      extend: css`
        justify-content: flex-start;
      `
    },
    panel: {
      extend: css``
    },
    extend: css``
  },

  // Axis custom components
  modal: {
    icons: {
      close: Close
    }
  },

  section: {
    heading: {
      level: 3,
      gap: "medium"
    },
    border: {
      side: "bottom",
      size: "xsmall",
      color: "gray"
    }
  },
  select: {
    control: {
      extend: css`
        font-size: inherit;
      `
    }
  }
});
