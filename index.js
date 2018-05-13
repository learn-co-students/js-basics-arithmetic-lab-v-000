const newID = 1000000000 + oldID;
//
let ageIsValid;

if (Number.isInteger(currentAge)) {
  ageIsValid = true;
} else {
  ageIsValid = false;
}

let randomNumber = (Math.floor(Math.random() * 20)) + 1;

let randomInteger = Math.round(randomNumber);

let randomUserID = 1000000000 + randomInteger;
