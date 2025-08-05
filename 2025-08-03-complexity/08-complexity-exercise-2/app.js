"use strict";

(async () => {



    const getData = url => fetch(url).then(response => response.json())

    const fetchUsers = async () => {
        const { users } = await getData('https://dummyjson.com/users')
        return users
    }

    const users = await fetchUsers()

    console.log(

        Object.entries(
            users.reduce((cumulative, { address: { state } }) => {
                if (!cumulative[state]) cumulative[state] = 1
                return cumulative
            }, {})

        ).map(([state]) => state)
    )

})()

