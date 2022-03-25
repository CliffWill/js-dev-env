let restaurant = {
    name: 'Popeyes',
    guestCapacity: 75,
    guesrCount: 0,
    checkAvailabity: function (partySize) {
        console.log(this)
        return true
    }
}

let status = restaurant.checkAvailabity(4)

console.log(status)