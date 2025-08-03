const num1 = +prompt('enter a number')
// O(n)
for (let i = 0; i < num; i++) {
    console.log(i)
}

// O(n^2)
for (let i = 0; i < num1; i++) {
    for (let z = 0; z < num1; z++) {
        console.log(i)
    }
}

// O(n^3)
for (let i = 0; i < num1; i++) {
    for (let z = 0; z < num1; z++) {
        for (let x = 0; x < num1; x++) {
            console.log(i)
            { }
        }
    }
