// My age.
let myAge= 23;

 //years 
let earlyYears= 2;
earlyYears = earlyYears * 10.5;
laterYears = myAge - 2;

//calculate the number of dog years accounted for by my later years
laterYears *= 4;

//Result
const myAgeInDogYears = earlyYears + laterYears;

let myName = 'Autume BReeze'.toLowerCase();
console.log ('My name is '+ myName +'. I am '+ myAgeInDogYears +' years old in dog years.');

/*
or to write it like ES6 : 
-------------------------
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
*/