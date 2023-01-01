


const applicationState = {
    reservations: [],
    clowns: [],
    completions: []
}

const API = "http://localhost:8088"
//fetch & add reservations from API to applicationState
export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (partyReservations) => {    
                applicationState.reservations = partyReservations
            }
        )
}

export const getReservations = () => {
    return [...applicationState.reservations]
}

export const sendReservation = (partyRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(partyRequest)
    }
    const mainContainer = document.querySelector("#container")
    return fetch(`${API}/reservations`,fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteReservation = (id) => {
    const mainContainer = document.querySelector("#container")
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}

export const getClowns = () => {
    return [...applicationState.clowns]
}

export const saveCompletion = (clownCompletion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clownCompletion)
    }
    const mainContainer = document.querySelector("#container")
    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completions = data
            }
        )
}

export const getCompletions = () => {
    return [...applicationState.completions]
}

export const sortByDate = (arr) => {
    const sorter = (a,b) => {
        return new Date(a.partyDate).getTime() - new Date(b.partyDate).getTime();
    }
    arr.sort(sorter);
}
