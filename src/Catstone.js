import React, { useState } from "react";
import NavBar from "./components/nav/NavBar";
import ApplicationViews from "./components/ApplicationViews";

const Catstone = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasOwner, setHasOwner] = useState(isAuthenticated());

  const setOwner = owner => {
    sessionStorage.setItem("credentials", JSON.stringify(owner));
    setHasOwner(isAuthenticated());
  };

  const clearOwner = () => {
    sessionStorage.clear();
    setHasOwner(isAuthenticated());
  }

  return (
    <>
      <NavBar hasOwner={hasOwner} clearOwner={clearOwner} />
      <ApplicationViews hasOwner={hasOwner} setOwner={setOwner} />
    </>
  );
};

export default Catstone;