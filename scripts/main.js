import { InteriorOptions } from "./InteriorOptions.js"
import { Orders } from "./Orders.js"
import { PaintOptions } from "./PaintOptions.js"
import { NewOrderClick } from "./SaveOrder.js"
import { TechOptions } from "./TechnologyOptions.js"
import { WheelOptions } from "./WheelOptions.js"






const container = document.querySelector("#container")

const render = async() => {
    const paintOptionsHTML = await PaintOptions()
    const interiorOptionsHTML = await InteriorOptions()
    const wheelOptionsHTML = await WheelOptions()
    const techOptionsHTML = await TechOptions()
    const buttonHTML = NewOrderClick()
    const ordersHTML = await Orders()
    container.innerHTML = `
    <h2>Paint Color Options</h2>
    <section class="paint">${paintOptionsHTML}</section>
    <h2>Fabric Interior Options</h2>
    <section class="interior">${interiorOptionsHTML}</section>
    <h2>Wheel Options</h2>
    <section class="wheel">${wheelOptionsHTML}</section>
    <h2>Technology Options</h2>
    <section class="wheel">${techOptionsHTML}</section>
    <article class="button">${buttonHTML}</article>
    <h2>Orders</h2>
    <section class="order">${ordersHTML}</section>
    
    `
}
const handleNewOrderPlaced = () => {
    render()
}
document.addEventListener("newOrderPlaced", handleNewOrderPlaced)
render()