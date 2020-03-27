import React, { useState, useEffect } from "react";
import VetManager from "../../modules/VetManager";

const VetDetail = props => {
  const [vet, setVet] = useState({ name: "", phoneNumber: "", email: "", hospitalAddress: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    VetManager.get(props.VetId).then(vet => {
      setVet({
        vet: vet.name,
        phoneNumber: vet.phoneNumber,
        email: vet.email,
        hospitalAddress: vet.hospitalAddress
      });
      setIsLoading(false);
    });
  }, [props.vetId]);

  const handleDelete = () => {
    setIsLoading(true);
    VetManager.delete(props.vetId).then(() =>
      props.history.push("/vets")
    );
  };
  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require("./mona1-cropped.jpg")} alt="My Cat" />
        </picture> */}
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{vet.name}</span>
        </h3>
        <p>Phone Number: {vet.phoneNumber}</p>
        <p>Email: {vet.email}</p>
        <p>Hospital Address: {vet.hospitalAddres}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete Vet
        </button>
      </div>
    </div>
  );

};

export default VetDetail;