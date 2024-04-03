export const Orders = async () => {
const response = await fetch ("http://localhost:8088/orders?_expand=paintColor&_expand=interior&_expand=technology&_expand=wheel")
const carPurchases = await response.json()

let salesHTML = ""
const salesDiv = carPurchases.map(
    (carPurchase) => {
        const customOrderPrice = carPurchase.paintColor.price + carPurchase.interior.price + carPurchase.technology.price + carPurchase.wheel.price
        return `<section><div>${carPurchase.paintColor.color} car with ${carPurchase.wheel.style}, ${carPurchase.interior.fabric} and the ${carPurchase.technology.package} for a total cost of $${customOrderPrice}</div></section>`

    }

)
salesHTML += salesDiv.join("")
return salesHTML


}