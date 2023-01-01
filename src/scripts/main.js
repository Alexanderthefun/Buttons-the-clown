import { clowns } from "./clowns.js"
import { fetchClowns, fetchCompletions, fetchReservations } from "./dataAccess.js"


export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = clowns()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => {
        render()
    }
)