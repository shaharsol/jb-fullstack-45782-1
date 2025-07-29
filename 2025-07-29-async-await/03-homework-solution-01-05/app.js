"use strict";

(() => {
    document.getElementById('random-button').addEventListener('click', () => {
        document.body.style.backgroundColor = "Green";
        document.body.style.backgroundColor = "Yellow";
        document.body.style.backgroundColor = "Blue";
        document.body.style.backgroundColor = "Red";
        setTimeout(() => {
            alert("Done");
        }, 1)
        setTimeout(() => {
            alert("Done2");
        }, 0)

    })
})()

