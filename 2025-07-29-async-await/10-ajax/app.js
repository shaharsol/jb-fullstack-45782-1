"use strict";

(async () => {

    const getData = url => fetch(url).then(response => response.json())

    // getData (input)
    const { users } = await getData('https://dummyjson.com/users')

    // generateHTML (process input)
    const html = users
        .map(({ firstName, lastName }) => `<li>${firstName} ${lastName}</li>`)
        // .reduce((cumulative, current) => `${cumulative}${current}`, '')
        .join('')

    // renderHTML (generate output)
    document.getElementById('users-list').innerHTML = html

})()
