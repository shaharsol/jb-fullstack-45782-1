const passwordGenerator = require('./password-generator')

for (let i = 6; i < 10; i++) {
    console.log(passwordGenerator(i))
}