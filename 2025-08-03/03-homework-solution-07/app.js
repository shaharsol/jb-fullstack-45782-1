"use strict";

(async () => {

    const getData = url => fetch(url).then(response => response.json())

    // long version:
    // const fetchUsers = async () => {
    //     const users = await getData('https://jsonplaceholder.typicode.com/users')
    //     return users
    // }

    // short version
    const fetchCity = city => getData(`http://api.weatherapi.com/v1/current.json?key=ddd16239b18548dba88152355253107&q=${city}`)

    // generateHTML (process input)

    const generateCityHTML = ({ current: { condition: { text }, wind_kph } }) => `
        <p><strong>weather:</strong>${text}</p>
        <p><strong>wind:</strong>${wind_kph}</p>
    `

    // renderHTML (generate output)
    const renderHTML = (html, target) => document.getElementById(target).innerHTML = html

    const renderCityHTML = html => renderHTML(html, 'city-details')



    // main...

    document.getElementById('city-select').addEventListener('change', async () => {
        const city = await fetchCity(document.getElementById('city-select').value)
        const html = generateCityHTML(city)
        renderCityHTML(html)
    })


})()

