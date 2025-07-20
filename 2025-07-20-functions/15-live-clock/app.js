setInterval(() => {
    const now = (new Date()).toLocaleTimeString()
    document.getElementById('clock').innerHTML = now
}, 1 * 1000)


