const chalk = require("chalk");
const readline = require("readline-sync");
const fetch = require("node-fetch");

const colors = ['red', 'blue', 'green', 'magenta']

// const p = (string) => {
//   console.log(string);
// };

console.clear();
console.log("hello there");

console.log("what's your name?");

const name = readline.question("> ");

console.clear();

const wantAdvice = readline.keyInYN([[`hi ${name}, would you like some advice?`]]);

if (wantAdvice === false) {
  console.log("ok have a nice day :)");
  process.exit();
}

console.log("youre in luck !");

  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {

     const result = data.slip.advice
     console.log("whats your favorite color?");
     const index = readline.keyInSelect(colors, 'Choose the color number');  
     console.log(chalk[colors[index]](result))
     })

    .catch((err) => console.log("sorry grandfather doesn't want to give advice right now"));


// if promise works, print advice in favorite color
// if not, say sorry pal grandfather says no
