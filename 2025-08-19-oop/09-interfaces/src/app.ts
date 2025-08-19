import Arcaffe from "./arcaffe.js";
import Aroma from "./aroma.js";
import CoffeeShop from "./coffee-shop.js";
import Kitchen from "./kitchen.js";

function getCoffeeStand(): CoffeeShop {
    const kitchen = new Arcaffe()
    return kitchen
}

const coffeeShop = getCoffeeStand() /* as Arcaffe */
coffeeShop.mukramPotato()

// coffeeShop.mukramPotato()

const arcaffe = new Arcaffe()
arcaffe.mukramPotato()
