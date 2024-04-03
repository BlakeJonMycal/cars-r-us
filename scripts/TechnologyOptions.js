import { setTechnologyId } from "./TransientState.js"

const handleTechChange = (changeEvent) => {
    if (changeEvent.target.id === 'technology') {
        const covertedToInteger = parseInt(changeEvent.target.value)
        setTechnologyId(covertedToInteger)
    }
}




export const TechOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technology = await response.json()
    
document.addEventListener("change", handleTechChange)

    let choicesHTML ="<div><select id='technology'><option value ='0'>Select Technology Options</option>"
    for (const tech of technology) {
            choicesHTML += `<option value ='${tech.id}'>${tech.package}</option>`
        }
    choicesHTML += "</select></div>"
    return choicesHTML
    }