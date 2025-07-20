let didRespond = false;

navigator.geolocation.getCurrentPosition(p => {
    didRespond = true
}, p => {
    didRespond = true
})

setTimeout(() => {
    console.log(didRespond ? 'responded' : 'did not repond')
}, 5 * 1000)