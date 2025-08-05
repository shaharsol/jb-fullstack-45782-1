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
            users.reduce((cumulative, { eyeColor }) => {
                if (cumulative[eyeColor]) cumulative[eyeColor] += 1
                else cumulative[eyeColor] = 1
                return cumulative
            }, {})
        ).map(([color, count]) => ({ color, count }))


    )

    /*
    [
        {
            color: 'black',
            count: 20
        },
        {
            color: 'brown',
            count: 12
        }
    ]

    const obj = {
        black: 20
        brown: 12
    }

    obj.black += 1
    const color = 'black'
    obj[color] += 1

    */
})()

