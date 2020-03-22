import React, { useState, useEffect } from "react"
import VetManager from "../../modules/VetManager"


const VetEditForm = props => {
  const [vet, setVet] = useState({ name: "", phoneNumber: "", email: "", hospitalAddress: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...vet};
    stateToChange[evt.target.id] = evt.target.value;
    setVet(stateToChange);
  };

  const updateExistingOwner = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedVet = {
      id: props.match.params.vetId,
      name: vet.name,
      phoneNumber: vet.phoneNumber,
      email: vet.email,
      hospitalAddress: vet.hospitalAddress
    };

    VetManager.update(editedVet)
      .then(() => props.history.push("/vets"))
  }

  useEffect(() => {
    VetManager.get(props.match.params.vetId)
      .then(vet => {
        setVet(vet);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={vet.name}
            />
            <label htmlFor="name">Vet name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="phoneNumber"
              value={vet.phoneNumber}
            />
            <label htmlFor="phoneNumber">Phone Number</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="phoneNumber"
              value={vet.phoneNumber}
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="hospitalAddress"
              value={vet.hospitalAddress}
            />
            <label htmlFor="hospitalAddress">Hospital Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              //onClick={updateExistingVet}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default VetEditForm;