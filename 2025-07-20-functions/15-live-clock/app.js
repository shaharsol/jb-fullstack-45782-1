const displayTime = () => {
    const now = (new Date()).toLocaleTimeString()
    document.getElementById('clock').innerHTML = now
}
displayTime()
setInterval(displayTime, 1 * 1000)



