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
import AppointmentDetail from "./appointments/AppointmentDetail.js";
import AppointmentEditForm from "./appointments/AppointmentEditForm.js";
import AppointmentForm from "./appointments/AppointmentForm.js";
import AppointmentList from "./appointments/AppointmentList.js";

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
        exact
        path="/cats/:catId(\d+)"
        render={props => {
          if (hasOwner) {
            return (
              <CatDetail
                catId={parseInt(props.match.params.catId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/cats/:catId(\d+)/edit"
        render={props => {
          if (hasOwner) {
            return <CatEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route
        exact
        path="/vets"
        render={props => {
          if (hasOwner) {
            return <VetList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/vets/:vetId(\d+)"
        render={props => {
          if (hasOwner) {
            return (
              <VetDetail
                vetId={parseInt(props.match.params.vetId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/vets/new"
        render={props => {
          if (hasOwner) {
            return <VetForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/vets/:vetId(\d+)/edit"
        render={props => {
          if (hasOwner) {
            return <VetEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route
        exact
        path="/appointments"
        render={props => {
          if (hasOwner) {
            return <AppointmentList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/appointments/:appointmentId(\d+)"
        render={props => {
          if (hasOwner) {
            return (
              <AppointmentDetail
                vetId={parseInt(props.match.params.appointmentId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/appointments/new"
        render={props => {
          if(hasOwner)
          {
          return <AppointmentForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/appointments/:appointmentId(\d+)/edit"
        render={props => {
          if(hasOwner)
          {
          return <AppointmentEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
