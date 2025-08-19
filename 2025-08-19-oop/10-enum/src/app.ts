enum Countries {
    Israel = 'Israel',
    USA = 'USA',
    Portugal = 'Portugal'
}

interface Person {
    name: string,
    age: number,
    eyeColor: string,
    country: Countries
}

const ido: Person = {
    name: 'ido',
    age: 22.234,
    eyeColor: 'black',
    country: Countries.Israel
}

const dean: Person = {
    name: 'dean',
    age: 23,
    eyeColor: 'brown',
    country: Countries.Portugal
}

console.log(dean)

// document.getElementById('countries').innerHTML = 

console.log(Object.keys(Countries))



