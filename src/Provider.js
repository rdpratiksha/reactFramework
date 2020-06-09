import React, { Fragment } from "react";
import { Provider } from "react-redux";
import Routes from "./routes";
import configureStore from "./store";
import CustomThemeProvider from "./utils/themeProvider";

function AllProvider() {
  return (
    <Provider store={configureStore()}>
      <CustomThemeProvider>
        <Fragment>
          <Routes />
        </Fragment>
      </CustomThemeProvider>
    </Provider>
  );
}

export default AllProvider;
