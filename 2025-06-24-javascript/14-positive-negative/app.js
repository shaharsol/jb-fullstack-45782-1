let input = +prompt('please enter a number')

while (input != 0) {
    alert(`${input} is ${input > 0 ? 'positive': 'negative'}`)
    input = +prompt('please enter a number')
}