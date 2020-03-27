const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/cats/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/cats?userId=${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/cats/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newCat) {
        return fetch(`${remoteURL}/cats`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCat)
        }).then(data => data.json())
    },
    update(editedCat) {
        return fetch(`${remoteURL}/cats/${editedCat.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedCat)
        }).then(data => data.json());
      }
}