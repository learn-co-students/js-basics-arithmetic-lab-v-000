/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

/* Modulus is strange. When you have 3%9 the answer is 3, because the answer is whatever you have to multiply the numerator by to equal the denominator. I at first though that the answer should be 0, because when you divide 3 by 9, you don't have a remainder. I guess that's just the wrong way to think about it. 2%4 is 2, not 0, because you need to multiply 2 x 2 to get 4. */

/*
If the ++ operator comes before the variable (e.g., ++counter), the variable's value is incremented first and then returned:

let counter = 0;
//=> undefined

++counter;
//=> 1

counter;
//=> 1
In both cases, counter contains the value 1 after incrementing. The difference is in ***whether we want the operation to return the original or incremented value.***
*/

const newID = oldID + 1000000000;
const ageIsValid = Number.isInteger(currentAge);
const randomNumber = Math.random() * 20 + 1;
const randomInteger = Math.floor(randomNumber);
const randomUserID = randomInteger + 1000000000;
