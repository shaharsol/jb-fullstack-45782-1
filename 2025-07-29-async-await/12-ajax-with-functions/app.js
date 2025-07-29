"use strict";

(async () => {

    const getData = url => fetch(url).then(response => response.json())

    // getData (input)
    const fetchUsers = async () => {
        const { users } = await getData('https://dummyjson.com/users')
        return users
    }

    // generateHTML (process input)
    const generateUsersHTML = (users) => {
        const html = users
            .map(({ firstName, lastName }) => `<li>${firstName} ${lastName}</li>`)
            // .reduce((cumulative, current) => `${cumulative}${current}`, '')
            .join('')

        return html
    }

    // renderHTML (generate output)
    const renderUsersHTML = html => {
        document.getElementById('users-list').innerHTML = html
    }


    // main...
    const users = await fetchUsers()
    const html = generateUsersHTML(users)
    renderUsersHTML(html)


})()
