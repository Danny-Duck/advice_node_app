const readlineSync = require('readline-sync');
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
}

module.exports = Display;