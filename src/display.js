const readlineSync = require('readline-sync');
class Display {
  static option(username){
    console.log("what's your name?");
    username = readlineSync.question("> ");
    return readlineSync.keyIn(`hi ${username}, would you like some advice?`)
  }
  static menu(){
    console.log('1.Yes');
    console.log('2.No');
    return readlineSync.question('> ');
  }
}

module.exports = Display;