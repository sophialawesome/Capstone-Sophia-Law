import React, { useState, useEffect } from "react";
import AppointmentCard from "./AppointmentCard.js";
import AppointmentManager from "../../modules/AppointmentManager";

const AppointmentList = props => {

  const [appointments, setAppointments] = useState([]);

  const getAppointments = () => {

    return AppointmentManager.getAll().then(appointmentsFromAPI => {
      setAppointments(appointmentsFromAPI);
    });
  };



  const deleteAppointment = id => {
   AppointmentManager.delete(id).then(() =>
      AppointmentManager.getAll().then(setAppointments)
    );
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => props.history.push("/appointments/new")}
        >
          Add Appointment
        </button>
      </section>
      <div className="container-cards">
        {appointments.map(appointment => (
          <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          deleteAppointment={deleteAppointment}
          {...props}
          />
  
        ))}
    
      </div>
      
    </>
  );
};

export default AppointmentList;