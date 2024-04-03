import { setInteriorId } from "./TransientState.js"

const handleInteriorChange = (changeEvent) => {
    if (changeEvent.target.id === 'interior') {
        const covertedToInteger = parseInt(changeEvent.target.value)
        setInteriorId(covertedToInteger)
    }
}



export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()
    
document.addEventListener("change", handleInteriorChange)

    let choicesHTML ="<div><select id='interior'><option value ='0'>Select Interior</option>"
    for (const interior of interiors) {
            choicesHTML += `<option value ='${interior.id}'>${interior.fabric}</option>`
        }
    choicesHTML += "</select></div>"
    return choicesHTML
    }