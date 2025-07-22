const displayTime = () => {
    const now = (new Date()).toLocaleTimeString()
    document.getElementById('clock').innerHTML = now
}
displayTime()
// setInterval invokes a given function (1st argument) once in X milliseconds (2nd param)
setInterval(displayTime, 1 * 1000)



