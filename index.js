const Display = require("./src/display.js");
const chalk = require("chalk");
const readline = require("readline-sync");
const fetch = require("node-fetch");

const colors = ["red", "blue", "green", "magenta"];
const errMessage = "sorry grandfather doesn't want to give advice right now";
console.clear();
console.log("hello there");

// console.log("what's your name?");

// const name = readline.question("> ");

// console.clear();

// const wantAdvice = readline.keyInYN([[`hi ${name}, would you like some grandfather advice?`]]);

// if (wantAdvice === false) {

// }
let running = true;
const getAdvice = async () => {
  while (running) {
    const user = Display.option();
    const choice = Display.menu();

    switch (choice) {
      case "1":
        try {
          const response = await fetch("https://api.adviceslip.com/advice");
          if (!response.ok) {
            throw new Error(errMessage);
          }
          const data = await response.json();
          const result = data.slip.advice;
          colorPick(result.replace(/\./, "!"));
          break;
        } catch (err) {
          console.log(errMessage);
          running = false;
        }

      case "2":
        running = false;
        console.log("ok have a nice day :)");
        process.exit();
    }
    break;
  }
};

const colorPick = (result) => {
  console.log("whats your favorite color?");
  const index = readline.keyInSelect(colors, "Choose the color number");
  console.clear();
  console.log(`grandfather says "${chalk[colors[index]](result)}"`);
};

getAdvice();
