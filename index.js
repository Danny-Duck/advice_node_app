const Display = require("./src/display.js");
const readline = require("readline-sync");
const fetch = require("node-fetch");

const colors = ["red", "blue", "green", "magenta"];
const errMessage = "sorry grandfather doesn't want to give advice right now";
console.clear();
console.log("hello there");

let running = true;
const getAdvice = async () => {
  const user = Display.option();
  while (running) {
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
          Display.colorPick(result.replace(/\./, "!"), colors);
          running = false;
          break;
        } catch (err) {
          console.log(errMessage);
          running = false;
        }

      case "2":
        running = false;
        console.log("ok have a nice day :)");
        process.exit();

      default:
        console.log("oops expected 1 or 2");
    }
  }
};


getAdvice();
