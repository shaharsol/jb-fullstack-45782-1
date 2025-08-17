"use strict";
var _a;
(_a = document.getElementById('myForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    // const element = document.getElementById('myInput')
    // if typescript is dealing with data
    // that comes outside of typescript
    // i will have to commit to some assumptions
    // that i can't control in the code
    const element = document.getElementById('myInput');
    const value = element.value;
    console.log(`data is input currently is ${value}`);
});
