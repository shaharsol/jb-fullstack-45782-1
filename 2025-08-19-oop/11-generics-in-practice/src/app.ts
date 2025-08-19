

(async () => {


    interface User {
        id: number,
        name: string,
        username: string,
        email: string,
        address: {
            street: string
        }
        wife: {
            name: string
        }
    }

    const users = await fetch('https://jsonplaceholder.typicode.com/users').then<User[]>(response => response.json())

    const user = users[0]
    console.log(user)
    console.log(user.wife.name) // runtime error!!!
})()

