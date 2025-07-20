const showUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        console.log('inside success callback')
        console.log(position)
    }, error => {
        console.log('inside error callback')
        console.log(error)
    })
    // const location = navigator.geolocation.getCurrentPosition((p) => { console.log(p) })
    // console.log(location)
    console.log('immediately after invoking getCurrentPosition')

}

showUserLocation()