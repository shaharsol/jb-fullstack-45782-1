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

    const getAverageWeight = users => users.reduce((cumulative, { weight }) => cumulative + weight, 0) / users.length

    const generateStatsHtml = users => `
        <p>total: ${users.length}</p>
        <p>average weight: ${getAverageWeight(users)}</p>
    `

    // renderHTML (generate output)
    const renderHTML = (html, target) => document.getElementById(target).innerHTML = html

    const renderUsersHTML = html => renderHTML(html, 'users-list')
    const renderStatsHTML = html => renderHTML(html, 'stats')



    // main...
    const users = await fetchUsers()
    const usersHtml = generateUsersHTML(users)
    renderUsersHTML(usersHtml)

    const statsHTML = generateStatsHtml(users)
    renderStatsHTML(statsHTML)


})()
