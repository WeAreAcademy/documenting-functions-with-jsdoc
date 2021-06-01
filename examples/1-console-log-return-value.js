"use strict"

console.log("Defining my functions...");

function greetString(name) {
  return `Hello, ${name}, from greetString!`;
}

function greetStringPrint(name) {
  console.log(`Hello, ${name}, from greetStringPrint!`);
}

function greetStringVoid(name) {
  `Hello, ${name}, from greetStringVoid!`;
}

console.log("Now defining my variables...");

let greetStringVal = greetString("Richard");
let greetStringPrintVal = greetStringPrint("Richard");
let greetStringVoidVal = greetStringVoid("Richard");

console.log("Now printing my variables...");

console.log("greetStringPrintVal:", greetStringPrintVal);
console.log("greetStringVal:", greetStringVal);
console.log("greetStringVoidVal:", greetStringVoidVal);