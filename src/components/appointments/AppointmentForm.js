import React, { useState } from 'react';
import AppointmentManager from '../../modules/AppointmentManager';


const AppointmentForm = props => {
  const [appointment, setAppointment] = useState({ reason: "", date: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...appointment};
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const constructNewAppointment = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.phoneNumber === "") {
      window.alert("Please input owner's name and phone number.");
    } else {
      setIsLoading(true);
     OwnerManager.post(owner)
        .then(() => props.history.push("/owners"));
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
              placeholder="Owner name"
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
      
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm;