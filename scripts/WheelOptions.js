import { setWheelId } from "./TransientState.js"
const handleWheelChange = (changeEvent) => {
    if (changeEvent.target.id === 'wheels') {
        const covertedToInteger = parseInt(changeEvent.target.value)
        setWheelId(covertedToInteger)
    }
}

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()
    
    document.addEventListener("change", handleWheelChange)

    let choicesHTML ="<div><select id='wheels'><option value ='0'>Select Wheels</option>"
    for (const wheel of wheels) {
            choicesHTML += `<option value ='${wheel.id}'>${wheel.style}</option>`
        }
    choicesHTML += "</select></div>"
    return choicesHTML
    }