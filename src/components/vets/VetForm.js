import React, { useState } from "react";
import VetManager from "../../modules/VetManager";

const VetForm = props => {
  const [vet, setVet] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    hospitalAddres: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...vet };
    stateToChange[evt.target.id] = evt.target.value;
    setVet(stateToChange);
  };

  const constructNewVet = evt => {
    evt.preventDefault();
    if (vet.name === "" || vet.phoneNumber === "") {
      window.alert("Please input owner's name and phone number.");
    } else {
      setIsLoading(true);
      const newVet = {
        ...vet,
        userId: parseInt(sessionStorage.getItem("credentials"))
      };
      VetManager.post(newVet).then(() => props.history.push("/vets"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Vet name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phoneNumber"
              placeholder="Phone Number"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="email"
              placeholder="Email"
            />
            <label htmlFor="email">Email</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="hospitalAddress"
              placeholder="Hospital Address"
            />
            <label htmlFor="hospitalAddress"> Hospital Address </label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewVet}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default VetForm;
