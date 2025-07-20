function power2(num) {
    return num ** 2
}

function power3(num) {
    return num ** 3
}


console.log(power2(3))
console.log(power3(3))

function somePower(num, func) {
    if (typeof func !== 'function') alert('big error, no function was passed as argument')
    console.log(`result of ${num} and ${func} is ${func(num)}`)
}

// somePower(4, 4)

somePower(4, power2)

somePower(4, power3)

somePower(4, console.log)