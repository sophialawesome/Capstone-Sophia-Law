import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home";


const isAuthenticated = () => sessionStorage.getItem("") !== null;

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} />;
        }}
      />

    </React.Fragment>
  );
};

export default ApplicationViews;