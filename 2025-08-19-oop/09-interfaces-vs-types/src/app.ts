type Person = {
    name: string,
    age: number,
    eyeColor: string
}

interface APerson {
    name: string,
    age: number,
    eyeColor: string
}

const a = {
    name: "",
    age: 0,
    eyeColor: ""
}

const b = a as Person

class Human implements Person {
    name: string
    age: number
    eyeColor: string

}

