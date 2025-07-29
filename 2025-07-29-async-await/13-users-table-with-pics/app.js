"use strict";

(async () => {

    const getData = url => fetch(url).then(response => response.json())

    const fetchUsers = async () => {
        const { users } = await getData('https://dummyjson.com/users')
        return users
    }

    // generateHTML (process input)
    const generateUsersHTML = (users) => {
        const html = users
            .map(({ firstName, lastName, image }) => `<tr>
                <td>${firstName} ${lastName}</td>
                <td><img src="${image}"></td>
            </tr>`)
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
