import CoffeeShop from "./coffee-shop.js";
import Kitchen from "./kitchen.js";
import SushiShop from "./sushi-shop.js";

function getCoffeeStand(): CoffeeShop {
    const kitchen = new Kitchen()
    return kitchen
}

const coffeeShop = getCoffeeStand()

coffeeShop.


