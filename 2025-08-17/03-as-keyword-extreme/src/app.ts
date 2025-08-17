function testAs() {
    console.log('test as')

    type Human = {
        firstName: string,
        familyName: string,
        birthdate: Date
    }

    type Animal = {
        breed: string,
        eat: Function
    }

    const yossi: Human = {
        firstName: 'yossi',
        familyName: 'gold',
        birthdate: new Date()
    }

    const alex: Animal = {
        breed: 'snake',
        eat: () => console.log('im eating')
    }

    // whever i cant cast types in TS
    // i can cast to unknown and then to the desired type
    // bare in mind: all responibility is on you!
    // do it only on rare occasions:
    const ido: Human = alex as unknown as Human

    console.log(ido.firstName)

}

testAs()