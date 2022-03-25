let temp = 99

//Logical and Operator - True if both sides are true. False otherwise
//Logical or Operator - True if one side is true. False otherwise

if(temp >= 60 && temp <=90)
{console.log('it is nice outside')} 

else if(temp >= 0 || temp <= 120)
{console.log('Do not go outside')}

else
{console.log('Do what you want')}

//Challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = true

// Are both vegan? Only offer vegan dishes
// At least one vegan? Make sure to offer some vegan options
// Else. Offer anything on the menue.

if(isGuestOneVegan && isGuestTwoVegan)
{console.log('Only offer vegan dishes')}

else if(isGuestOneVegan || isGuestTwoVegan)
{console.log('Offer some vegan dishes')}

else
{console.log('Offer anything on the menue')}