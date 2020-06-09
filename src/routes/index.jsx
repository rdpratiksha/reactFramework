import React from "react";
import { Router } from "react-router-dom";
import history from "./history";
import routes from "./routes";
import Header from "../components/header";
import Footer from "../components/footer";

const isVisible = history.location.pathname!=="/signIn" && history.location.pathname!=="/signUp"

const Routes = () => (
  <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
    {isVisible && <Header /> }
      {routes}
    {isVisible && <Footer /> }
  </Router>
);

export default Routes;
