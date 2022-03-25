//Passing objects into a function
//Getting objects returned from function

let mybook = {
    title: '1984',
    author: 'George Orwell',
    pagecount: 326
}

let otherBook = {
    title: 'A peoples History',
    author: 'Howard Zim',
    pagecount: 723
}

let getSummary = function (book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary:`${book.title} is ${book.pagecount} pages long`
    }
   
}

let bookSummary = getSummary(mybook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challenge Area
//Create function - take fahrenheit in - return object with all three

let convFahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celsius: (fahrenheit - 32) * (5/9)
    }
}

let temps = convFahrenheit(74)
console.log(temps)

