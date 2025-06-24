let input = +prompt('please enter a number')
let sum = 0;

while (input != 0) {
    sum += input
    input = +prompt('please enter a number')
}

alert(`sum is ${sum}`)