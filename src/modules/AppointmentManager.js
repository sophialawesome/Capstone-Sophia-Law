const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/appointments/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/appointments?userId=${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/appointments/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  post(newAppointment) {
    return fetch(`${remoteURL}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAppointment)
    }).then(data => data.json());
  },
  update(editedAppointment) {
    return fetch(`${remoteURL}/appointments/${editedAppointment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAppointment)
    }).then(data => data.json());
  }
};