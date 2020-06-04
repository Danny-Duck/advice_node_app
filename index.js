const chalk = require("chalk");
const readline = require("readline-sync");
const fetch = require("node-fetch");

const p = (string) => {
  console.log(string);
};

console.clear();
p("hello there");

p("what's your name?");

const name = readline.question("> ");

console.clear();

const wantAdvice = readline.keyInYN([[`hi ${name}, would you like some advice?`]]);

if (wantAdvice === false) {
  console.log("ok have a nice day :)");
  process.exit();
}

p("youre in luck !");

const advice = new Promise((resolve, reject) => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => p(data.slip.advice))
    .catch((err) => p("sorry grandfather doesn't want to give advice right now"));
});

p("whats your favorite color?");
// color logic


// if promise works, print advice in favorite color
// if not, say sorry pal grandfather says no
