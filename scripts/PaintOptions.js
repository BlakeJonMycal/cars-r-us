import { setPaintColorId } from "./TransientState.js"

const changePaintOption = (changeEvent) => {
    if (changeEvent.target.id === 'color') {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setPaintColorId(convertedToInteger)
    }
}






export const PaintOptions = async () => {
const response = await fetch("http://localhost:8088/paintColors")
const paintColorType = await response.json()

document.addEventListener("change", changePaintOption)

let choicesHTML ="<div><select id='color'><option value ='0'>Select Paint Color</option>"
for (const paintColor of paintColorType) {
        choicesHTML += `<option value ='${paintColor.id}'>${paintColor.color}</option>`
    }
choicesHTML += "</select></div>"
return choicesHTML
}