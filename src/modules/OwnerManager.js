
const remoteURL = "http://localhost:5002";

export default {
    getOwner(email) {
        return fetch(`${remoteURL}/owners?email=${email}`).then(result => result.json());
    },
    getCurrentOwner() {
        return fetch(`${remoteURL}/owners/${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json());
    },
    getAllOwners() {
        return fetch(`${remoteURL}/owners`).then(result => result.json());
      },
    postOwner(newOwner) {
        return fetch(`${remoteURL}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOwner)
        }).then(data => data.json());
    }
}