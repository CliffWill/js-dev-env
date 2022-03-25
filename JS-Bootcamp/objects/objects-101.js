let mybook = {
    title: '1984',
    author: 'George Orwell',
    pagecount: 326
}

console.log(`${mybook.title} by ${mybook.author}`)

mybook.title = 'Animal Farm'

console.log(`${mybook.title} by ${mybook.author}`)

//Challenge Area

//Create object with: Name, Age, Location. Remeber objects need ": not ="

// Cliff is 28 and lives in La
//Increase age by one and then print new message

let me = {
    name: 'Cliff',
    age: 28,
    location: 'Monroe'
}

console.log(`${me.name} is ${me.age} old and lives in ${me.location}`)
me.age = me.age + 1
console.log(`${me.name} is ${me.age} old and lives in ${me.location}`)