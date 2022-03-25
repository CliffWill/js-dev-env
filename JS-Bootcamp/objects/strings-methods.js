let name = '  Cliff Williams'

//length property
console.log(name.length)

//convert to upper case
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

//includes method
let password = 'abc123password098'
console.log(password.includes('password'))

//trim (sanitizing data)
console.log(name.trim())

//Challenge Area

//isValidPassword
let isValidPassword = function (password) {
    return password.length >8 && !password.includes('password')
    }

//length is more than 8 - and doesnt contain password

console.log(isValidPassword('asshh'))