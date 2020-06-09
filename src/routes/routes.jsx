import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import App from "../rootLayouts/app/App";
import SignIn from "../rootLayouts/signIn";
import SignUp from "../rootLayouts/signUp";
import Error from "../rootLayouts/error";
import Home from "../pages/components/home"
import About from "../pages/components/about"

// check auth session and redirect if not authenticated
const checkAuthSession = (Component) => {
  let checkIfUserLoggedIn = true;
    // localStorage.getItem("isLoggedIn") && localStorage.getItem("token");
  return checkIfUserLoggedIn ? Component : <Redirect to="/signIn" />;
};

const routes = (
  <Switch>
    <Route
      path="/"
      exact
      render={props =>
        checkAuthSession(<App {...props} />)
      }
    />

    <Route
      path="/signIn"
      exact
      render={props =>
        checkAuthSession(<SignIn {...props} />)
      }
    />

    <Route
      path="/signUp"
      exact
      render={props =>
        checkAuthSession(<SignUp {...props} />)
      }
    />

    <Route
      path="/home"
      exact
      render={props =>
        checkAuthSession(<Home {...props} />)
      }
    />

    <Route
      path="/about"
      exact
      render={props =>
        checkAuthSession(<About {...props} />)
      }
    />

    <Route
      render={props =>
        checkAuthSession(<Error {...props} />)
      }
    />
  </Switch>
);

export default routes;
