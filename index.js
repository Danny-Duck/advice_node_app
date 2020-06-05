const chalk = require("chalk");
const readline = require("readline-sync");
const fetch = require("node-fetch");

const colors = ["red", "blue", "green", "magenta"];
const errMessage = "sorry grandfather doesn't want to give advice right now";
console.clear();
console.log("hello there");

console.log("what's your name?");

const name = readline.question("> ");

console.clear();

const wantAdvice = readline.keyInYN([[`hi ${name}, would you like some grandfather advice?`]]);

if (wantAdvice === false) {
  console.log("ok have a nice day :)");
  process.exit();
}

const getAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error(errMessage);
    }
    const data = await response.json();
    const result = data.slip.advice;
    colorPick(result.replace(/\./, "!"));
  } catch (err) {
    console.log(errMessage);
  }
};

const colorPick = (result) => {
  console.log("whats your favorite color?");
  const index = readline.keyInSelect(colors, "Choose the color number");
  console.clear();
  console.log(`grandfather says "${chalk[colors[index]](result)}"`);
};

getAdvice();