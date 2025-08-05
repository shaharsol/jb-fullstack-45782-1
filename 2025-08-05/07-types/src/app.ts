// primitives

const age: number = 23

const message: string = 'hello world'

const isActive: boolean = true

// arrays

const ages: number[] = [23, 42, 66]

const messages: string[] = ['hello', 'world']

const someFlags: boolean[] = [true, false, true]

const mixedArray: unknown[] = [1, 'hello', true] // unknown is a little better than any

// objects
const myObj: object = {}

type User = {
    name: string,
    age: number,
    birthdate: Date
}

const aUser: User = {
    name: 'uval',
    age: 22,
    birthdate: new Date(),
}

const bUser: User = {
    name: 'shlomo',
    age: 25,
    birthdate: new Date(),
}

const users: User[] = []
users.push(aUser)
users.push(bUser)
// users.push({})

// specials
type NumberOrString = number | string
const someVar: NumberOrString = 'cxvxcv'
const someVar2: NumberOrString = 88
// const someVar3: NumberOrString = true

type Dog = {
    name: string,
    breed: string
}

type Cat = {
    name: string,
    numberOfSoulsLeft: number
    eyeColor?: string
}

const mitzi: Cat = {
    name: 'mitzi',
    numberOfSoulsLeft: 3
}

type Animal = Cat | Dog
const animal: Animal = {
    name: 'mitzi',
    numberOfSoulsLeft: 5,
    breed: ''
}

type Predator = {
    name: string,
    eat: Function,
}

const lion: Predator = {
    name: 'Leo',
    eat: () => { }
}
