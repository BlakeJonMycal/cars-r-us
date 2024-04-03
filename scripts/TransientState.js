const transientState = {
    "wheelId": 0,
    "interiorId": 0,
    "paintColorId": 0,
    "technologyId": 0
}

export const setWheelId = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}
export const setInteriorId = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}
export const setPaintColorId = (chosenPaint) => {
    transientState.paintColorId = chosenPaint
    console.log(transientState)
}
export const setTechnologyId = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    console.log(transientState)
}
export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch ("http://localhost:8088/orders", postOptions)
    
    const customEvent = new CustomEvent ("newOrderPlaced")
    document.dispatchEvent(customEvent)
}