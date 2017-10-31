/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const newID = 1000000000 + oldID;
/* this is converting an old method to a new method (changing its number) */
const ageIsValid = Number.isInteger(currentAge);
/* this is an example of require true to the number being a valid integer */
const randomNumber = Math.random() * 20;
/* this is a method to pick a random number from 0-20 */
const randomInteger = Math.floor(randomNumber);
/* this is a method to take the value of randomnumber and round it down to the nearest integer */

const randomUserID = randomInteger + 1000000001;
/* */
