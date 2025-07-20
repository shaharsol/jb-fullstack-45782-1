function somePower(num, func) {
    if (typeof func !== 'function') alert('big error, no function was passed as argument')
    console.log(`result of ${num} and ${func} is ${func(num)}`)
}

// somePower(4, 4)

somePower(4, function (num) {
    // for (let i = 0; i < 10; i++) {
    //     console.log(i)
    // }
    // const name = 'eytan';
    return num ** 2
})

somePower(4, function (num) { return num ** 3 })

somePower(4, console.log)

