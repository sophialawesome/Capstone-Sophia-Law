import React, { useState, useEffect } from "react"
import AppointmentManager from "../../modules/AppointmentManager"


const AppointmentEditForm = props => {
  const [appointment, setAppointment] = useState({reason: "", date: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...appointment};
    stateToChange[evt.target.id] = evt.target.value;
    setAppointment(stateToChange);
  };

  const updateExistingAppointment = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedAppointment = {
      id: props.match.params.appointmentId,
      reason: appointment.reason,
      date: appointment.date
    };

    AppointmentManager.update(editedAppointment)
      .then(() => props.history.push("/appointments"))
  }

  useEffect(() => {
    AppointmentManager.get(props.match.params.appointmentId)
      .then(appointment => {
        setAppointment(appointment);
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
              id="reason"
              value={appointment.reason}
            />
            <label htmlFor="reason">Appointment Reason</label>

            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="date"
              value={appointment.date}
            />
            <label htmlFor="date">Appointment Date</label>

          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAppointment}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AppointmentEditForm;