import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "", phoneNumber: "", email: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    OwnerManager.get(props.OwnerId).then(owner => {
      setOwner({
        name: owner.name,
        phoneNumber: owner.phoneNumber,
        email: owner.email
      });
      setIsLoading(false);
    });
  }, [props.ownerId]);

  const handleDelete = () => {
    setIsLoading(true);
    OwnerManager.delete(props.ownerId).then(() =>
      props.history.push("/owners")
    );
  };
  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require("./mona1-cropped.jpg")} alt="My Cat" />
        </picture> */}
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{owner.name}</span>
        </h3>
        <p>Phone Number: {owner.phoneNumber}</p>
        <p>Email: {owner.email}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete Owner
        </button>
      </div>
    </div>
  );

};

export default OwnerDetail;