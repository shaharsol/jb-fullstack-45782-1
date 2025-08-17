document.getElementById('myForm')?.addEventListener('submit', (event) => {

    event?.preventDefault()
    // const element = document.getElementById('myInput')
    // if typescript is dealing with data
    // that comes outside of typescript
    // i will have to commit to some assumptions
    // that i can't control in the code
    const element = document.getElementById('myInput') as HTMLInputElement
    const value = element.value
    console.log(`data is input currently is ${value}`)

    const value2 = (document.getElementById('myInput') as HTMLInputElement).value


})

