/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
// function newID(id=oldID) {
//   return id + 1000000000;
// }
// 
// function ageIsValid(age=currentAge) {
//   return age.isInteger();
// }
// 
// function randomNumber(max=20) {
//   return Math.random() * max;
// }
// 
// function randomInteger(max=20) {
//   return Math.floor(randomNumber(max));
// }
// 
// function randomUserID(base=randomInteger) {
//   return newID(base);
// }

const offset = 1000000000

const newID = oldID + offset;

const ageIsValid = Number.isInteger(currentAge);

const randomNumber = Math.random() * 20;

const randomInteger = Math.floor(randomNumber);

const randomUserID = randomInteger + 1000000000;

