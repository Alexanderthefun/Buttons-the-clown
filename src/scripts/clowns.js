import { Reservations } from "./reservations.js"
import { ServiceForm } from "./serviceform.js"


export const clowns = () => {
    return `
    <h1>Mike & Leslie the Clowns</h1>
    <section class="serviceForm">
        ${ServiceForm()}
    </section>

    <section class="partyReservations">
        <h2>Party Reservations</h2>
        ${Reservations()}
    </section>
    
    `
}