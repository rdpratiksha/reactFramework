import { css } from "styled-components";

const theme = {
  COLOR: {
    USER_PRIMARY: "#215eff",
    LIGHT_GREY: "rgba(216, 216, 216, 0.56)",
  },
  COLOR_PALLETE: {
    SEPARATOR: "#e4e3e3"
  },
  SIZE: {
    MAIN: "14px",
    SECONDARY: "14px"
  },
  FONT: {
    REG: "'Maven Pro', sans-serif",
    LATO: "'Lato', sans-serif",
    HEEBO: "'Heebo', sans-serif"
  },
  WRAPPER: {
    WIDTH: "95%",
    MAX_WIDTH: "1250px",
    COLOR: "#f4f7fc",
    STEPPER_COLOR: "#636363"
  },
  SNIPPETS: {
    FONT_STYLE: css`
      font-family: "Maven Pro", sans-serif;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
    `,
    SHARED_BUTTON_CSS: css`
      width: calc(50% - 3px);
      height: 40px;
      border-radius: 4px;
      border: none;
      outline: none;
      cursor: pointer;
      font-family: ${props => props.theme.FONT.REG};
      font-size: 14px;
      font-weight: bold;
      transition: all 0.3s ease-in-out;
    `,
    SHARED_INPUT_STYLE: css`
      display: block;
      box-sizing: border-box;
      width: 100%;
      margin-top: 3px;
      padding: 10px 8px;
      color: #636363;
      font-family: "Lato", sans-serif;
      font-size: 12px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
      text-transform: capitalize;
      border-radius: 4px;
      border: solid 1px rgba(151, 151, 151, 0.4);
      background: #d6d6d62e;
      outline: none;
    `,
    SHARED_BUTTON_STYLE: css`
      width: 113px;
      height: 40px;
      border: none;
      border-radius: 4px;
      outline: none;
      transition: all 0.5s ease 0s;
      font-weight: bold;
      font-size: 14px;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      cursor: pointer;
      font-family: ${props => props.theme.FONT.REG};
      color: #fff;
      vertical-align: top;
    `,
    HELPER_TEXT: css`
      font-family: ${props => props.theme.FONT.LATO};
      font-size: 12px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: ${props => props.theme.COLOR_PALLETE.SEPARATOR};
      opacity: 0.67;
      margin-bottom: 15px;
    `
  }
};

export default function configureTheme() {
  return theme;
}
