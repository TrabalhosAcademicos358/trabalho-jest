const sum = require("./operations/sum");
const subtract = require("./operations/subtract");
const multiply = require("./operations/multiply");
const divide = require("./operations/divide");
const getPrimeFactors = require("./getPrimeFactors");

console.log("The sum of 1 and 10 is " + sum(1, 10));
console.log("The subtraction of 10 by 5 is " + subtract(10, 5));
console.log("The multiplication of 3 by 2 is " + multiply(3, 2));
console.log("The division of 5 by 5 is " + divide(5, 5));

let primeFactors = '';
getPrimeFactors(100).forEach(n => primeFactors += n + ' ');
console.log("The prime factors of 100 are " + primeFactors);