import React, { useState } from "react";
import AppointmentManager from "../../modules/AppointmentManager";

const AppointmentForm = props => {
  const [appointment, setAppointment] = useState({ reason: "", date: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...appointment };
    stateToChange[evt.target.id] = evt.target.value;
    setAppointment(stateToChange);
  };

  const constructNewAppointment = evt => {
    evt.preventDefault();
    if (appointment.reason === "" || appointment.date === "") {
      window.alert("Please input appointment reason and date.");
    } else {
      setIsLoading(true);
      const newAppointment = {
        ...appointment,
        userId: parseInt(sessionStorage.getItem("credentials"))
      };
      AppointmentManager.post(newAppointment).then(() =>
        props.history.push("/appointments")
      );
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
              id="reason"
              placeholder="Appointment Reason"
            />
            <label htmlFor="reason">Appointment Reason</label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="date"
            />
            <label htmlFor="date">Appointment Date</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAppointment}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AppointmentForm;
