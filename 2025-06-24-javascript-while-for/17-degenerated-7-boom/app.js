let input = +prompt('please enter a number')
let count = 1;

while (count <= input) {
    document.write(count % 7 == 0 ? 'Boom' : count)
    document.write('<br>')
    count++
}

