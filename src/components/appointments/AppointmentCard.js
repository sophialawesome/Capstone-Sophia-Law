import { Link } from "react-router-dom";
import React from "react";

const AppointmentCard = props => {
    return (
        <div className="card-content">
            <h3>
                Appointment Reason: <span className="card-appointment">{props.appointment.reason}</span>
            </h3>
            <p>Date: {props.appointment.date} </p>
           
          
          <button
          type="button"
          onClick={() => props.deleteAppointment(props.appointment.id)}
        >
          Delete Appointment
        </button>
        <Link to={`/appointments/${props.appointment.id}`}>
          <button>Details</button>
        </Link>
      <button
        type="button"
        onClick={() => props.history.push(`/appointments/${props.appointment.id}/edit`)}
      >
        Edit
      </button>
    </div>
  );
};

export default AppointmentCard;
     
        

