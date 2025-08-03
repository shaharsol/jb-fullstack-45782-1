"use strict";

(async () => {

    const getData = url => fetch(url).then(response => response.json())

    // long version:
    // const fetchUsers = async () => {
    //     const users = await getData('https://jsonplaceholder.typicode.com/users')
    //     return users
    // }

    // short version
    const fetchUsers = () => getData('https://jsonplaceholder.typicode.com/users')
    const fetchUser = id => getData(`https://jsonplaceholder.typicode.com/users/${id}`)

    // generateHTML (process input)
    const generateUsersHTML = users => {
        const html = users
            .map(({ id, name }) => `<option value="${id}">
                    ${name}
                </option>
            `)
            .join('')

        return html
    }

    const generateUserHTML = ({ name, email, phone, address: { city } }) => `
        <p><strong>name:</strong>${name}</p>
        <p><strong>email:</strong>${email}</p>
        <p><strong>phone:</strong>${phone}</p>
        <p><strong>city:</strong>${city}</p>
    `

    // renderHTML (generate output)
    const renderUsersHTML = html => document.getElementById('users-select').innerHTML = html
    const renderUserHTML = html => document.getElementById('user-details').innerHTML = html



    // main...

    document.getElementById('users-select').addEventListener('change', async () => {
        const user = await fetchUser(document.getElementById('users-select').value)
        const html = generateUserHTML(user)
        renderUserHTML(html)
    })

    const users = await fetchUsers()
    const html = generateUsersHTML(users)
    renderUsersHTML(html)


})()

