"use strict"

function greetString(name) {
  return `Hello, ${name}!`;
}

function greetStringVoid(name) {
  `Hello, ${name}!`;
}

function greetStringPrint(name) {
  console.log(`Hello, ${name}!`);
}

let myName = "Richard";

let greetStringVal = greetString(myName);
let greetStringVoidVal = greetStringVoid(myName);
let greetStringPrintVal = greetStringPrint(myName);

console.log("greetStringVal:", greetStringVal);
console.log("greetStringVoidVal:", greetStringVoidVal);
console.log("greetStringPrintVal:", greetStringPrintVal);