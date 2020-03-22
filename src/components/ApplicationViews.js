import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Register from "./register/Register.js";
import Home from "./home/Home";
import CatDetail from "./cats/CatDetail.js";
import CatEditForm from "./cats/CatEditForm.js";
import CatForm from "./cats/CatForm.js";
import CatList from "./cats/CatList.js";
import VetDetail from "./vets/VetDetail";
import VetEditForm from "./vets/VetEditForm.js";
import VetForm from "./vets/VetForm.js";
import VetList from "./vets/VetList.js";

const isAuthenticated = () => sessionStorage.getItem("") !== null;

const ApplicationViews = props => {
  const hasOwner = props.hasOwner;
  const setOwner = props.setOwner;

  return (
    <React.Fragment>
      <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />
      <Route
        path="/login"
        render={props => {
          return <Login setOwner={setOwner} {...props} />;
        }}
      />
      <Route
        exact
        path="/Home"
        render={props => {
          return <Home hasOwner={hasOwner} {...props} />;
        }}
      />
      <Route
        exact
        path="/cats"
        render={props => {
          if (hasOwner) {
            return <CatList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/cats/:catId(\d+)"
        render={props => {
          return (
            <CatDetail catId={parseInt(props.match.params.catId)} {...props} />
          );
        }}
      />
      <Route
        path="/cats/new"
        render={props => {
         if (hasOwner) {
            return <CatForm {...props} />;
          } else {
            return <Redirect to="login" />;
          }
        }}
      />
      <Route
        path="/cats/:catId(\d+)/edit"
        render={props => {
          return <CatEditForm {...props} />;
        }}
      />

      <Route
        exact
        path="/vets"
        render={props => {
          return <VetList {...props} />;
        }}
      />
      <Route
        exact
        path="/vets/:vetId(\d+)"
        render={props => {
          return (
            <VetDetail vetId={parseInt(props.match.params.vetId)} {...props} />
          );
        }}
      />
      <Route
        path="/vets/new"
        render={props => {
          return <VetForm {...props} />;
        }}
      />
      <Route
        path="/vets/:vetId(\d+)/edit"
        render={props => {
          return <VetEditForm {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
