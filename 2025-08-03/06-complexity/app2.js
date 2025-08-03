// O(1)
const users = await fetch('....').then(response => response.json())

// O(n) 
users
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`)

// O(n) + O(n) = O(n)
users
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`) // O(n)
    .reduce((cumulative, current) => cumulative + current) // O(n)

// O(1) + O(n) = O(n)


// O(n^2)
users.reduce((cumulative, { eyeColor }) => {
    const currentEyeColor = cumulative.find(({ color }) => color === eyeColor)
    if (!currentEyeColor) cumulative.push({
        color: eyeColor,
        count: 1
    })
    else currentEyeColor.count += 1
    return cumulative
}, [])