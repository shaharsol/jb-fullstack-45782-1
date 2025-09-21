const axios = require('axios');

(async () => {
    const getData = url => axios(url)
    const { users } = (await getData('https://dummyjson.com/users')).data

    console.log(users.map(({ firstName, lastName }) => `${firstName} ${lastName}\n`).join(''))
})()