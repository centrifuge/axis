import { generate } from "grommet";
import { deepMerge } from "grommet/utils/object";
import { createGlobalStyle, ThemeProvider } from "styled-components/macro";

const brandColor = "#FF9F00";
const accentColors = ["#43C17B", "#46C2B9", "#D3DB5E", "#CC48CE"];

const statusColors = {
  critical: "#D82242",
  error: "#D82242",
  warning: "#B8B043",
  ok: "#0E8800",
  unknown: "#0E8800",
  disabled: "#0E8800"
};

const darkColors = [
  "#212121",
  "#303030",
  "#3C3C3C",
  "#454545",
  "#666666",
  "#777777"
];

const lightColors = [
  "#F1F3F4",
  "#DDDDDD",
  "#C8C8C8",
  "#B8B8B8",
  "#A8A8A8",
  "#979797"
];

const baseTheme = generate();

const colorArray = (array, prefix) => {
  let colors = {};
  array.forEach((color, index) => {
    colors[`${prefix}-${index + 1}`] = color;
  });
  return colors;
};

const colorMap = (map, prefix) => {
  let colors = {};
  Object.keys(map).forEach(key => {
    colors[`${prefix}-${key}`] = map[key];
  });
  return colors;
};

export const axisTheme = deepMerge(baseTheme, {
  global: {
    colors: {
      background: darkColors[0],
      active: brandColor,
      black: "#000000",
      border: darkColors[2],
      control: brandColor,
      focus: darkColors[2],
      placeholder: lightColors[2],
      text: lightColors[0],
      secondaryText: lightColors[3],
      white: "#FFFFFF",
      brand: brandColor,
      ...colorArray(darkColors, "dark"),
      ...colorArray(lightColors, "light"),
      ...colorArray(accentColors, "accent"),
      ...colorMap(statusColors, "status")
    },
    elevation: {
      light: {
        xsmall: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        small: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        medium: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        large: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        xlarge: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
      }
    },
    font: {
      family: "'Roboto', Arial, sans-serif",
      size: "14px"
    },
    focus: {},
    input: {
      weight: 500
    },

    scrollWidth: "8px"
  },
  anchor: {
    color: "brand"
  },

  heading: {
    level: {
      1: {
        large: { size: "50px", height: "56px", maxWidth: "1200px" },
        medium: { size: "34px", height: "40px", maxWidth: "816px" },
        small: { size: "26px", height: "32px", maxWidth: "624px" }
      },
      2: {
        large: { size: "34px", height: "40px", maxWidth: "816px" },
        medium: { size: "26px", height: "32px", maxWidth: "624px" },
        small: { size: "26px", height: "32px", maxWidth: "624px" }
      },
      3: {
        large: { size: "26px", height: "32px", maxWidth: "624px" },
        medium: { size: "22px", height: "28px", maxWidth: "528px" },
        small: { size: "22px", height: "28px", maxWidth: "528px" }
      },
      4: {
        large: { size: "18px", height: "24px", maxWidth: "432px" },
        medium: { size: "18px", height: "24px", maxWidth: "432px" },
        small: { size: "18px", height: "24px", maxWidth: "432px" }
      }
    },
    extend: props => {
      let dynamicStyles = "";
      if (props.stretch) {
        dynamicStyles = `
          max-width: 100%;
        `;
      }

      return dynamicStyles;
    }
  },
  preloader: {
    color: lightColors[0],
    size: {
      small: "24px",
      medium: "48px",
      large: "64px"
    },
    thickness: {
      small: 1,
      medium: 2,
      large: 2
    }
  },

  text: {
    xlarge: { size: "22px", height: "28px", maxWidth: "528px" },
    large: { size: "18px", height: "24px", maxWidth: "432px" },
    medium: { size: "14px", height: "20px", maxWidth: "336px" },
    xxlarge: { size: "26px", height: "32px", maxWidth: "624px" },
    small: { size: "14px", height: "20px", maxWidth: "336px" },
    xsmall: { size: "12px", height: "18px", maxWidth: "288px" }
  },
  paragraph: {
    large: { size: "18px", height: "24px", maxWidth: "528px" },
    medium: { size: "14px", height: "20px", maxWidth: "432px" },
    small: { size: "12px", height: "18px", maxWidth: "436px" },
    xlarge: { size: "22px", height: "28px", maxWidth: "624px" }
  },
  button: {
    color: "light-3",
    border: {
      radius: "3px"
    },
    padding: {
      vertical: "4px",
      horizontal: "12px"
    },
    extend: props => {
      let dynamicStyles = "";
      if (props.secondary) {
        dynamicStyles = ` 
          color: ${props.theme.global.colors["brand"]};
          &:hover {
            background: ${props.theme.global.colors["brand"]};
            color:white;
          }
        `;
      } else if (props.primary) {
        dynamicStyles = `
          color: white;
        `;
      } else if (props.plain) {
        dynamicStyles = `
          padding: 0px;
        `;
      } else {
        dynamicStyles = ` 
          background: ${props.theme.global.colors["dark-4"]};
          border-color: ${props.theme.global.colors["dark-4"]};
          &:hover {
            border-color: ${props.theme.global.colors["dark-4"]};
          }
        `;
      }
      return `
        font-size: ${props.theme.text.small.size}; 
         svg {
          width:24px;
          height:24px;
          display:block
        }
        &:hover {
          
          box-shadow: none;
        }  
        ${dynamicStyles}
      `;
    }
  },
  textInput: {
    extend: props => {
      return `
      background: ${props.theme.global.colors["dark-4"]};
      `;
    }
  },
  textArea: {
    extend: props => {
      let dynamicStyles = "";
      if (props.fullHeight) {
        dynamicStyles = `
          height:100%;
          resize: none;
        `;
      }

      return `
        background: ${props.theme.global.colors["dark-4"]};
        ${dynamicStyles}
      `;
    }
  },
  layer: {
    background: "dark-2"
  },
  formField: {
    border: null,
    help: { color: "light-4" }
  }
});
