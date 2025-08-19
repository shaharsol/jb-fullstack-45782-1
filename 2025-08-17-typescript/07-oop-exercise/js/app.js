import Phone from './phone.js';
const iphone = new Phone('iPhone', 6.9, 4000, 5);
const samsung = new Phone('samsung s7', 6.8, 3800, 5);
console.log(`iphone screen size is ${iphone.size}`);
console.log(`samsung price is ${samsung.price}`);
iphone.takePic();
samsung.turnOn();
