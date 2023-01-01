import { deleteReservation, getClowns, getCompletions, getReservations, saveCompletion, sortByDate } from "./dataAccess.js"

//formats HTML to display a list of preious reservations, option to choose which clown performed,
// and a delete button next to each of them.
export const resToHTML = (reservation) => {
    const completions = getCompletions()
    const clowns = getClowns()
    let html = ""
    html += `<li>${reservation.childName}'s Party`
    html += `<select class="clowns" id="clowns">
    <option value="">Choose Party's Clown</option>
    ${clowns.map(
        clown => {
            return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
        }
    ).join("")
        }
            </select>
                <button class="reservation__delete"
                id="reservation--${reservation.id}">
                Delete
                </button></li>`

    completions.map(completion => {
        if (completion.reservationId === reservation.id) {
            html = `<li>${reservation.childName}'s Party<button class="reservation__delete"
            id="reservation--${reservation.id}">
            Delete
            </button></li>`
        }
    })
    return html
}

//Takes the list from the func above and applies it to an unordered list, sorting them by date.
export const Reservations = () => {
    const reservations = getReservations()
    sortByDate(reservations)
    let html = `
        <ul>
            ${reservations.map(resToHTML).join("")
        }
        </ul>
        `

    return html    
}

const mainContainer = document.querySelector("#container")
//makes the delete button functional when clicked. 
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [, reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

//I think this saves a completion?
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id ==="clowns") {
            const [reservationId, clownId] = event.target.value.split("--")
            const completion = {
                reservationId: parseInt(reservationId),
                clownId: parseInt(clownId),
                date: Date.now()
            }
            saveCompletion(completion)
        }
    }
)