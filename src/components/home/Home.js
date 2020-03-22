import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager"




const Home = (props) => {

  const [owner, setOwner] = useState({ name: "" });

  const getCurrentOwner = () => {
    return OwnerManager.getCurrentOwner().then(owner => {
      setOwner(owner)
    });
  };


  useEffect(() => {
    getCurrentOwner();
  }, []);

  return (
   <>
    {
      (props.hasOwner)
        ? <h1 className="welcome">Welcome, {owner.name}!</h1>     
        : null
    }
    </>
  );
};

export default Home;