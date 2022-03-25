// Function - input(arguement), code, output(return value)
// Always remeber to call return value when using functions

let greetUser = function() {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result 
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

//Challenge Area

//Convert Fahrenheit to celsius
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit -32) *(5/9) 
    return celsius
}
//Call a couple times (32 -> 0) (68 -> 20)

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

//Print the converted values

console.log(tempOne)
console.log(tempTwo)
