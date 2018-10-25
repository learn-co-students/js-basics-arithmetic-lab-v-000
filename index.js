/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

//newID
//converts IDs from the old style to the new style ‣

let newID = oldID + 1000000000;

//ageIsValid
//contains 'true' when the value in 'currentAge' is a valid integer ‣
//invokes 'Number.isInteger()' ‣

let ageIsValid =Number.isInteger(currentAge);

//randomNumber
//contains a random number greater than or equal to 0 and less than 20 ‣
//invokes 'Math.random()' ‣

let randomNumber = (Math.random() * 20);

//randomInteger
//contains the value of 'randomNumber' rounded down to the nearest integer ‣

let randomInteger = Math.floor(randomNumber);

//randomUserID
//contains a random integer between 1000000001 and 1000000020

let randomUserID = randomInteger + 1000000001;