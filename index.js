/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

newID = oldID + 1000000000

let ageIsValid = Number.isInteger(currentAge);

let randomNumber = Math.random();

let randomInteger = Math.floor(randomNumber);

// this did not work, but the code below is much better anyway
// let randomUserID = Math.floor(Math.random()*1000000020) + 1
const randomUserID = randomInteger + 1000000001;
