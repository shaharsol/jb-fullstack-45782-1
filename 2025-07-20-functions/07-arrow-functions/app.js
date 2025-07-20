const somePower = (num, func) => {
    if (typeof func !== 'function') alert('big error, no function was passed as argument')
    console.log(`result of ${num} and ${func} is ${func(num)}`)
}

// somePower(4, 4)

somePower(4, (num) => {
    // for (let i = 0; i < 10; i++) {
    //     console.log(i)
    // }
    // const name = 'eytan';
    return num ** 2
})

somePower(4, (num, x, y) => { return num ** 3 })

// if i have only one argument, omit the ()
somePower(4, num => { return num ** 3 })

// if i have only one command in the {}, i can omit the {}
somePower(4, num => console.log(num ** 3))

// if the only command is return, omit the {} and the return
somePower(4, num => num ** 3)



const power2 = num => num ** 2

const multiply = (a, b) => a * b




somePower(4, console.log)

