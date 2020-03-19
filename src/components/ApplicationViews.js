import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home";
import CatDetail from "./cats/CatDetail.js";
import CatEditForm from "./cats/CatEditForm.js";
import CatForm from "./cats/CatForm.js";
import CatList from "./cats/CatList.js";

//const isAuthenticated = () => sessionStorage.getItem("") !== null;

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
      <Route
        exact
        path="/cats"
        render={props => {
         
            return <CatList {...props} />;
         
        }}
      />
      <Route
        exact
        path="/cats/:catId(\d+)"
        render={props => {
         return (
              <CatDetail
                catId={parseInt(props.match.params.catId)}
                {...props}
              />
            );
        
        }}
      />
      <Route
        path="/cats/new"
        render={props => {
          return <CatForm {...props} />;
        }}
      />
       <Route
        path="/cats/:catId(\d+)/edit"
        render={props => {
         
            return <CatEditForm {...props} />;
          
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
