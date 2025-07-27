"use strict";

(() => {

    const user = {
        id: 123,
        name: 'Israel Israeli'
    }

    /////////////////////////////////////

    const showUser = () => {
        console.log('function started')
        console.log(user)
        console.log('function finished')
    }

    document.getElementById('show-user').addEventListener('click', () => {
        console.log('event started')
        showUser()
        console.log('event finished')
    })

    //////////////////////////////////
    const getUser = () => {
        console.log('function started')
        console.log('function finished')
        return user
    }

    document.getElementById('get-user').addEventListener('click', () => {
        console.log('event started')
        const user = getUser()
        console.log(user)
        console.log('event finished')

    })


})()