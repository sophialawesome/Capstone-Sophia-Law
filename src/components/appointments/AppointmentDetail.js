import React, { useState, useEffect } from "react";
import AppointmentManager from "../../modules/AppointmentManager";
//import {firstLetterCase} from '../../modules/helpers'

const AppoinrmentDetail = props => {
  const [appointment, setAppointment] = useState({ reason: "", date: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Appointmentanager.get(props.AppointmentId).then(appointment => {
      setCat({
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
        {/* <picture>
          <img src={require("./mona1-cropped.jpg")} alt="My Cat" />
        </picture> */}
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