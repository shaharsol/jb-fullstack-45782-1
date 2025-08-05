"use strict";

(() => {

    const myFunc = () => {
        console.log('hello')
        myFunc()
    }

    // myFunc()



    /*
    what can we do with recursion?
    1. the function signature is identical to a non-recursive implementation
    2. exit condition, otherwise this will be an endless loop
    3. do a single portion from the general process of the function
    4. invoke the recursion with the rest of the work
    */

    const printStars = num => {
        if (num <= 0) return;
        console.log('*')
        printStars(num - 1)
    }

    printStars(10)

    const printNto1 = n => {
        if (n <= 0) return;
        console.log(n)
        printNto1(n - 1)
    }

    printNto1(10)

    const printEvenNto1 = n => { // prints only even numbers
        if (n <= 0) return;
        if (n % 2 === 0) console.log(n)
        printEvenNto1(n - 1)
    }

    printEvenNto1(21)

    /*
    factorial
    5! = 5 * 4 * 3 * 2 * 1
    */

    const getFactorial = (n) => {
        if (n <= 1) return 1;
        return n * getFactorial(n - 1)
    }

    console.log(`factorial of 10 is ${getFactorial(10)}`)

    /*
    getFactorial(3)
    3 * getFactorial(2)
    3 * 2 * getFactorial(1)
    3 * 2 * 1
    */

    /*
    fibonacci
    1 1 2 3 5 8 13 21 34 
    */

    const getFibonacci = n => {
        if (n <= 2) return 1
        return getFibonacci(n - 1) + getFibonacci(n - 2)
    }

    const fibIndex = +prompt('enter fibonnaci index')
    console.log(`fibonnai in index ${fibIndex} is ${getFibonacci(fibIndex)}`)

    /*
    getFibonacci(4)
    getFibonacci(3) + getFibonacci(2)
    getFibonacci(2) + getFibonacci(1) + 1
    1 + 1 + 1 = 3
    */

    const user = {
        "id": 1,
        "firstName": "Emily",
        "lastName": "Johnson",
        "maidenName": "Smith",
        "age": 28,
        "gender": "female",
        "email": "emily.johnson@x.dummyjson.com",
        "phone": "+81 965-431-3024",
        "username": "emilys",
        "password": "emilyspass",
        "birthDate": "1996-5-30",
        "image": "https://dummyjson.com/icon/emilys/128",
        "bloodGroup": "O-",
        "height": 193.24,
        "weight": 63.16,
        "eyeColor": "Green",
        "hair": {
            "color": "Brown",
            "type": "Curly"
        },
        "ip": "42.48.100.32",
        "address": {
            "address": "626 Main Street",
            "city": "Phoenix",
            "state": "Mississippi",
            "stateCode": "MS",
            "postalCode": "29112",
            "coordinates": {
                "lat": -77.16213,
                "lng": -92.084824
            },
            "country": "United States"
        },
        "macAddress": "47:fa:41:18:ec:eb",
        "university": "University of Wisconsin--Madison",
        "bank": {
            "cardExpire": "03/26",
            "cardNumber": "9289760655481815",
            "cardType": "Elo",
            "currency": "CNY",
            "iban": "YPUXISOBI7TTHPK2BR3HAIXL"
        },
        "company": {
            "department": "Engineering",
            "name": "Dooley, Kozey and Cronin",
            "title": "Sales Manager",
            "address": {
                "address": "263 Tenth Street",
                "city": "San Francisco",
                "state": "Wisconsin",
                "stateCode": "WI",
                "postalCode": "37657",
                "coordinates": {
                    "lat": 71.814525,
                    "lng": -161.150263
                },
                "country": "United States"
            }
        },
        "ein": "977-175",
        "ssn": "900-590-289",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
            "network": "Ethereum (ERC20)"
        },
        "role": "admin"
    }

    // flatten the user object
    const animal = {
        name: 'betty',
        colors: {
            eyes: 'brown',
            fur: 'grey'
        }
    }

    const flattenAnmal = {
        name: 'betty',
        eyes: 'brown',
        fur: 'grey'
    }


    const flattenObject = obj => {
        let ret = {}
        for (const prop in obj) {
            if (typeof obj[prop] !== 'object') ret[prop] = obj[prop]
            else ret = { ...ret, ...flattenObject(obj[prop]) }
        }
        return ret
    }

    /*
    {
        name: 'betty',
        colors: {
            eyes: 'brown',
            fur: 'grey'
        }
    }

    flattenObject(betty):
    ret {
        name: 'betty'
    }
    ret {
        name: 'betty',
        ...flattenObject({
            eyes: 'brown',
            fur: 'grey'
        })
    }


    ret {
        name: 'betty',
        eyes: 'brown',
        fur: 'grey'
    }


    */


    const flattenUser = flattenObject(user)
    console.log(user)
    console.log(flattenUser)
})()