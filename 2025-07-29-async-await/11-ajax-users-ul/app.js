"use strict";

(async () => {

    const getData = url => fetch(url).then(response => response.json())

    // const getData = async url => {
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     return data
    // }

    // const response = await fetch('https://dummyjson.com/users')
    // const data = await response.json()

    const data = await getData('https://dummyjson.com/users')

    console.log(data)
})()
