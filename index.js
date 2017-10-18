/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

const newID = oldID + 1000000000;

const ageIsValid = Number.isInteger(currentAge);

const randomNumber = Math.floor(Math.random() * 10) + 10;
// contains a random number greater than or equal to 0 and less than 20

const randomInteger = Math.round(randomNumber);
// contains the value of 'randomNumber' rounded down to the nearest integer

const randomUserID = randomInteger + 1000000000;
// const randomUserID = Math.floor(Math.random() * (1000000020 - 1000000001 + 1)) + 1000000001;
// contains a random integer between 1000000001 and 1000000020
