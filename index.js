const chalk = require("chalk");
const readline = require("readline-sync");

console.clear();
console.log("hello there");

console.log("what's your name?");

const name = readline.question("> ");

console.clear()

const wantAdvice = readline.keyInYN([[`hi ${name}, would you like some advice?`]])

if (wantAdvice === false){
  console.log('ok have a nice day :)');
  process.exit()
} 

console.log('youre in luck !')