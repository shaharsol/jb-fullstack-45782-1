let input = +prompt('please enter a number')
let sum = 0;
let count = 0;

while (input != 0) {
    sum += input
    // count += 1
    count++
    input = +prompt('please enter a number')
}

alert(`${count === 0 ? 'can not calculate average without numbers' : sum/count}`)