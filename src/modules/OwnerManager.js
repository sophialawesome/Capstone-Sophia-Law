
const remoteURL = "http://localhost:5002";

export default {
    getOwner(email) {
        return fetch(`${remoteURL}/users?email=${email}`).then(result => result.json());
    },
    getCurrentOwner() {
        return fetch(`${remoteURL}/users/${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json());
    },
    getAllOwners() {
        return fetch(`${remoteURL}/users`).then(result => result.json());
      },
    postOwner(newOwner) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOwner)
        }).then(data => data.json());
    }
}