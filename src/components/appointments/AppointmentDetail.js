import React, { useState, useEffect } from "react";
import AppointmentManager from "../../modules/AppointmentManager";


const AppointmentDetail = props => {
  const [appointment, setAppointment] = useState({ reason: "", date: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AppointmentManager.get(props.appointmentId).then(appointment => {
      setAppointment({
        reason: appointment.reason,
        date: appointment.date
      });
      setIsLoading(false);
    });
  }, [props.appointmentId]);

  const handleDelete = () => {
    setIsLoading(true);
    AppointmentManager.delete(props.appointmentId).then(() =>
      props.history.push("/appointments")
    );
  };
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Reason: <span style={{ color: "darkslategrey" }}>{appointment.reason}</span>
        </h3>
        <p>Date: {appointment.date}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete Appointment
        </button>
      </div>
    </div>
  );

};

export default AppointmentDetail;