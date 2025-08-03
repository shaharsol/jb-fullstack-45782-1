"use strict";

(async () => {

    const numbers = [1, 9, 17, 25, 33, 49, 51, 66, 72, 82, 95] // sorted array

    /*
    [1, 9, 17, 25, 33, 49, 51, 66, 72, 82, 95]
    [1, 9, 17, 25, 33, 49], [51, 66, 72, 82, 95]
    [51, 66, 72], [82, 95]
    [82],[95]
    */
    // O(log2n) // in what power of 2 do I have to use, to get to n?


    // const numbers2 = [9, 17, 25, 33, 49, 51, 66, 72, 82, 95, 1] // unsorted array

    // const numbers = [1, 9, 17, 25, 33, 49, 51, 66, 72, 82, 95] // sorted array
    const searchSortedArray = (array, search) => {
        let startIndex = 0
        let finishIndex = array.length // O(1)

        do {
            let currentIndex = Math.floor((startIndex + finishIndex) / 2)
            if (array[currentIndex] === search) return currentIndex

            if (array[currentIndex] > search) finishIndex = currentIndex - 1
            else startIndex = currentIndex + 1

        } while (finishIndex >= startIndex)

        return -1

    }

    const num = +prompt('enter a number')

    // let the user know if the number in is the array?
    const itemIndex = searchSortedArray(numbers, num)

    // do it in the smallest O possible
    console.log(`item offset is ${itemIndex}`)
    // console.log(`${num} is ${itemIndex !== -1 ? 'included' : 'not included'} in array`)


})()

