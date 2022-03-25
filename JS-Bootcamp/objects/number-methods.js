//toFixed trims numbers incase you may want them in currency format

let num = 103.941

console.log(num.toFixed(2))

//Math. Generating a random number, changing the ranges, and rounding up
console.log(Math.round(num))
console.log(Math.ceil(num))
console.log(Math.floor(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() *(max-min + 1)) + min
//0 - 10
console.log(randomNum)