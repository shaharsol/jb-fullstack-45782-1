const code = prompt('enter some JavaScript code')

try {
    eval(code)
}
catch (err) {
    console.log(`your JS code is wrong, here is why: ${err.message}`)
}
