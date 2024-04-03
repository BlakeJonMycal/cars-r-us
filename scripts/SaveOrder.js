import { placeOrder } from "./TransientState.js"


const handlePlacedOrder = (clickEvent) => {
    if (clickEvent.target.id === 'purchase') {
        placeOrder()
    }
}

export const NewOrderClick = () => {
    document.addEventListener("click", handlePlacedOrder)
    return "<article class='order'><button id='purchase'>Place Car Order</button></article>"
}