// const remoteURL = "http://localhost:5002";

// export default {
//   get(id) {
//     return fetch(`${remoteURL}/vets/${id}`).then(result => result.json());
//   },
//   getAll() {
//     return fetch(`${remoteURL}/vets`).then(result => result.json())
//     .then(vets => vets.filter(vet => vet.userId == parseInt(sessionStorage.getItem("credentials"))));
//   },
//   delete(id) {
//     return fetch(`${remoteURL}/vets/${id}`, {
//       method: "DELETE"
//     }).then(result => result.json());
//   },
//   post(newVet) {
//     return fetch(`${remoteURL}/vets`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newVet)
//     }).then(data => data.json());
//   },
//   update(editedVet) {
//     return fetch(`${remoteURL}/vets/${editedVet.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(editedVet)
//     }).then(data => data.json());
//   }
// };

const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/vets/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/vets?userId=${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/vets/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newVet) {
        return fetch(`${remoteURL}/vets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newVet)
        }).then(data => data.json())
    },
    update(editedVet) {
        return fetch(`${remoteURL}/vets/${editedVet.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedVet)
        }).then(data => data.json());
      }
}