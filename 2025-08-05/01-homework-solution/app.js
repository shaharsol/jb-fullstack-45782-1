"use strict";

(async () => {

    const getData = url => fetch(url).then(response => response.json())

    const { users } = await getData('https://dummyjson.com/users')

    const extractMonth = dateString => {
        const parts = dateString.split('-')
        return parts[1]
    }

    console.log(
        Object.entries(
            users.reduce((cumulative, { birthDate }) => {
                const current = { ...cumulative }
                const month = extractMonth(birthDate)

                if (current[month]) current[month]++
                else current[month] = 1

                return current
            }, {})

        ).map(([month, count]) => ({ month, count }))
            .sort((a, b) => b.count - a.count)

    )

    /*
    {
        "1": 26,
        "2": 3,
        "3": 1
    }
    */


    /*
    [
        {
            month: 5,
            count: 6
        },
        {
            month: 1,
            count: 8    
        }
    ]
    */

})()


/*

[ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
O(n * log2n)

log2n: 2 ^ ? = n


*/