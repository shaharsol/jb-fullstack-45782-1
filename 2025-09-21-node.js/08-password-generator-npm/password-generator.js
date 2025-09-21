const generatePassword = (length) => {
    const possibleCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    let password = '';

    for (let i = 0; i < length; i++) {
        password += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
    }

    return password

}

module.exports = generatePassword