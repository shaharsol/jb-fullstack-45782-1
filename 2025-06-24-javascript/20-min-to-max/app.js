let min = +prompt('enter number')
let max = +prompt('enter number')

if (min > max) {
    let helper = min;
    min = max;
    max = helper;
}

for(let count = min; count <= max; count ++) {
    document.write(`${count}<br>`)
}

// for(; min <= max; min ++) {
//     document.write(`${min}<br>`)
// }
