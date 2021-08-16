var readLineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

var userName = readLineSync.question("Hey! Whats your name?:\t ")
var ddmmyyyy=readLineSync.question("Hello! "+userName+" please state your birthdate in "+ chalk.black.bgRed("dd-mm-yyyy")+ " format: ");
log("_____________")
if(!isNaN(ddmmyyyy.split("-").join(""))){

var year =ddmmyyyy.split("-").join("").substr(4,7);

  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        log(chalk.black.bgGreen("Your birthyear was " +year+ " that is a leap year. Now you can share this with friends on social media."));
    } else {
        log(chalk.white.bgGrey("Your birthyear was " +year+ " that is not a leap year."));
    }

}else{
  log('Enter the valid date in formate dd-mm-yyyy')
}
