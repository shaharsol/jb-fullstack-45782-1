import CoffeeShop from "./coffee-shop.js";
import Kitchen from "./kitchen.js";
import SushiShop from "./sushi-shop.js";

function getStand(type: string): SushiShop | CoffeeShop {
    const kitchen = new Kitchen()
    return kitchen
}


const stand = getStand('sushi')
