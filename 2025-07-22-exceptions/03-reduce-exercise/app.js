const words = ['come', 'on', 'to', 'jamaica', 'man', 'we', 'can', 'have', 'a', 'lot', 'of', 'fun']

let result = '';
for (const word of words) {
    result += `${word} `
}
console.log(result)


const sentence = words
    .reduce((cumulative, word) => `${cumulative} ${word}`, '')
    .trim()

console.log(sentence)

console.log(words.join(' '))