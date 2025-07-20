const michaelFunc = message => {
    console.log(message)
    alert(message)
    const x = 1 + 1
    console.log(x)
}


const showUserLocation = () => {
    const result = navigator.geolocation.getCurrentPosition(
        // position => console.log(position),
        console.log,
        // michaelFunc,
        console.error
    )
    console.log(result) // result will always be undefined
    console.log('immediately after invoking getCurrentPosition')

}

showUserLocation()


