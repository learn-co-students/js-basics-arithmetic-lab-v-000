/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/
const newID = oldID + 1000000000;
// Write your code below this line!
const ageIsValid = Number.isInteger(currentAge);
//const oldID = Math.floor(Math.random() * 100) + 1;
const randomNumber = Math.random();
//const ages = [26.4, 21, 49.5, 83, 99, 53.3, 74, 94.9, 40, 56.2];
const randomInteger = Math.floor(randomNumber);
//const currentAge = ages[Math.floor(Math.random() * ages.length)];
const randomUserID = Math.floor(Math.random() * (1000000020 - 1000000001) + 1000000001);
//const currentAgeIsInteger = Number.isInteger(currentAge);

//const spyOnNumberIsInteger = sinon.stub(Number, 'isInteger').returns(currentAgeIsInteger);

//const randNum = Math.random();

//const spyOnMathRandom = sinon.stub(Math, 'random').returns(randNum);
