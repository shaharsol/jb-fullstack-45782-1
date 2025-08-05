"use strict";

(async () => {

    // this
    // a special var in javascript, it's value depends on the 
    // current context, i.e. where do i refer to the word this
    // this: the answer to the question: who do i belong to?
    // I in this case, is the code that runs


    function showThis() {
        console.log(this); // button

        showThisArrow();
        (() => {
            console.log(this)
        })()
    }

    function changeColor() {
        this.style.backgroundColor = 'red'
    }

    const showThisArrow = () => console.log(this)

    // showThis() // window
    // console.log(this)


    document.getElementById('my-button').addEventListener('click', showThis.bind(document.getElementById('my-third-button')))
    document.getElementById('my-second-button').addEventListener('click', showThisArrow)
    // document.getElementById('my-third-button').addEventListener('click', showThisArrow.bind(document.getElementById('my-third-button')))
    document.getElementById('my-fourth-button').addEventListener('click', changeColor)
    document.getElementById('my-fifth-button').addEventListener('click', changeColor)

})()
