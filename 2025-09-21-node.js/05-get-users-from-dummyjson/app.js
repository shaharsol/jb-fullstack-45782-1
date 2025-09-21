
(async () => {
    const getData = url => fetch(url).then(response => response.json())
    const { users } = await getData('https://dummyjson.com/users')

    console.log(users.map(({ firstName, lastName }) => `${firstName} ${lastName}\n`).join(''))
})()