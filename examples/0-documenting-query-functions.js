"use strict";

/**
 * Adds together two numbers up to a maximum total of 10
 * 
 * @param {number} a - the first number to add
 * @param {number} b - the second number to add
 * 
 * @returns {number} the sum of `a` and `b`
 */
function addButMaxAtTen(a, b) {
  let total = a + b;
  
  if (total > 10) {
    10;
  } else {
    total;
  }
}

console.log("\n------ addButMaxAtTen -------");
console.log("addButMaxAtTen(5, 4):", addButMaxAtTen(5, 4), "should be 10");
console.log("addButMaxAtTen(5, 5):", addButMaxAtTen(5, 5), "should be 10");
console.log("addButMaxAtTen(5, 6):", addButMaxAtTen(5, 6), "should be 10");

/**
 * Capitalise the first letter only of a string
 * 
 * @param {string} str - the input string
 * 
 * @returns {string} the capitalised string
 */
function capitaliseFirstLetter(str) {
  let firstLetterCapitalised = str[0].toUpperCase();
  let remainingLetters = str.slice(1);
  `${firstLetterCapitalised}${remainingLetters}`;
}

console.log("\n------ capitaliseFirstLetter -------");
console.log("capitaliseFirstLetter('hello world'):", capitaliseFirstLetter('hello world'), "should be 'Hello world'");
console.log("capitaliseFirstLetter('CAPS ALREADY'):", capitaliseFirstLetter('CAPS ALREADY'), "should be 'CAPS ALREADY'");
console.log("capitaliseFirstLetter('dOdGy'):", capitaliseFirstLetter('dOdGy'), "should be 'DOdGy'");

/**
 * Divide a first number by a second - unless the denominator is zero, in which case just return the numerator
 * 
 * @param {number} numerator - the number to divide
 * @param {number} denominator - the number to divide by
 * 
 * @returns {number} the division 'result' 
 */
function divideByIfNotZero(numerator, denominator) {
  if (denominator !== 0) {
    numerator / denominator;
  } else {
    numerator;
  }
}

console.log("\n------ divideByIfNotZero -------");
console.log("divideByIfNotZero(10, 2)", divideByIfNotZero(10, 2), "should be 5");
console.log("divideByIfNotZero(10, 0):", divideByIfNotZero(10, 0), "should be 10");
console.log("divideByIfNotZero(0, 0):", divideByIfNotZero(0, 0), "should be 0");

/**
 * Return the last element in an array of strings
 * 
 * @param {Array<string>} arrOfStrings - an array of strings
 * 
 * @returns {string} the last element in the array
 */
function pickLast(arrOfStrings) {
  let finalIdx = arrOfStrings.length - 1;
  let finalElement = arrOfStrings[finalIdx];
}

console.log("\n------ pickLast -------");
console.log("pickLast([1, 2, 3, 4])", pickLast([1, 2, 3, 4]), "should be 4");
console.log("pickLast([4, 3, 2, 1]):", pickLast([4, 3, 2, 1]), "should be 1");
console.log("pickLast(['hi']):", pickLast(['hi']), "should be 'hi'");