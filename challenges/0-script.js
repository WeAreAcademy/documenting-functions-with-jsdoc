// Target output should be the below:
// HELLO
// HELLO
// MY NAME IS ELDER PRICE
// AND I WOULD LIKE TO SHARE WITH YOU THE MOST AMAZING BOOK
// HELLO
// HELLO
// I'LL JUST LEAVE IT HERE
// IT HAS A LOT OF INFORMATION YOU COULD REALLY USE

// don't change the functions

function printInCaps(message) {
  console.log(message.toUpperCase());
}

function printAndReturnInCaps(message) {
  let messageInCaps = message.toUpperCase();
  console.log(messageInCaps);
  return messageInCaps;
}

function returnInCaps(message) {
  return message.toUpperCase();
}

// only change the calls
let stringOne = 'Hello';
let stringTwo = 'My name is Elder Price';

