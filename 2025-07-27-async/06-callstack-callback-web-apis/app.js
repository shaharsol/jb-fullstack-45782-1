"use strict";

(() => {

    const a = () => {
        setTimeout(() => {
            alert('a')
        }, 3000)
    }

    a();

    for (let i = 0; i < 100000; i++) {
        console.log(i)
    }

})()