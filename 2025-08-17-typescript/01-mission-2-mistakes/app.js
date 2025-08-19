"use strict";

(() => {

    const grades = [88, 99, 65]

    let sum = 0;
    grades.forEach(grade => sum += grade)

    console.log(`avg is ${sum / grades.length}`)

    const displayCountries = countries => { }

    // standard DRY

    const processCountries = countries => { }

    document.getElementById('all-button').addEventListener('click', () => {
        const countries = fetch('all url')
        processCountries(countries)
    })
    document.getElementById('search-button').addEventListener('click', () => {
        const countries = fetch('search url')
        processCountries(countries)
    })



    // heavy DRY using this keyword

    const handleUX = function () {
        const countries = this.id === 'all-button' ? fetch('all countries') : fetch('search coutnires')
        // ...
        // ...
    }

    document.getElementById('all-button').addEventListener('click', handleUX)
    document.getElementById('search-button').addEventListener('click', handleUX)

})()
