import React from "react";
import { ThemeProvider } from "styled-components";
import configureTheme from "../theme";

const CustomThemeProvider = props => {
  let theme = configureTheme();
  
  return (
    <>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </>
  );
};

export default CustomThemeProvider;
