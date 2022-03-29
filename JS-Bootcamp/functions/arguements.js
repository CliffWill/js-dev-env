//Multiple arguements
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguements
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `name: ${name} - score: ${score}`
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge Area Template Strings

// A 25% tip on $40 would be $10
let getTip = function ( total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(100)
console.log(tip)
