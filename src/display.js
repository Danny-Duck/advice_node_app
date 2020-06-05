const readlineSync = require('readline-sync');
const chalk = require("chalk");
class Display {
  static option(username){
    console.log("what's your name?");
    username = readlineSync.question("> ");
    console.log(`hi ${username}, would you like some advice?`);
  }
  static menu(){
    console.log('1. Yes');
    console.log('2. No');
    const answer = readlineSync.question('> ');
    return answer
  }
  static colorPick (result, colors) {
    console.log("whats your favorite color?");
    const index = readlineSync.keyInSelect(colors, "choose the color number");
    console.log(`grandfather says "${chalk[colors[index]](result)}"`);
  };
}

module.exports = Display;