/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/
let newID = oldID + 1000000000
// Write your code below this line!
const ageIsValid = Number.isInteger(currentAge)
let randomNumber = Math.round(Math.random() * 20)
let randomInteger = Math.floor(randomNumber)
let randomUserID = (10**9) + randomInteger
