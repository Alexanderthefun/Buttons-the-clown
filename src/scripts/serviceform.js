import { sendReservation } from "./dataAccess.js"


export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label><br>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label><br>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address</label><br>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendeeCount">Attendee Count</label><br>
            <input type="number" name="attendeeCount" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Party Date</label><br>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="jobHours">Number of Hours</label><br>
            <input type="number" name="jobHours" class="input" />
        </div>

        <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const partyAddress = document.querySelector("input[name='partyAddress']").value
        const attendeeCount = document.querySelector("input[name='attendeeCount']").value
        const partyDate = document.querySelector("input[name='partyDate']").value
        const jobHours = document.querySelector("input[name='jobHours']").value

        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            partyAddress: partyAddress,
            attendeeCount: attendeeCount,
            partyDate: partyDate,
            jobHours: jobHours
        }
        sendReservation(dataToSendToAPI)
    }
})