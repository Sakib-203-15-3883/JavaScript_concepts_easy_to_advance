//In JavaScript we have the following conditional statements:

//Use if to specify a block of code to be executed, if a specified condition is true
//Use else to specify a block of code to be executed, if the same condition is false
//Use else if to specify a new condition to test, if the first condition is false
//Use switch to specify many alternative blocks of code to be executed

//if
let hour = 50;
if (hour < 18) {
  greeting = "Good day";
  console.log(greeting);
}

//if-else
if (hour < 18) {
  greeting = "Good day";
  console.log(greeting);
} else {
  greeting = "Good evening";
  console.log(greeting);
}

//if-else if
let time = 25;
if (time < 10) {
  greeting = "Good morning";
  console.log(greeting);
} else if (time < 20) {
  greeting = "Good day";
  console.log(greeting);
} else {
  greeting = "Good evening";
  console.log(greeting);
}

//switch
//Use switch to specify many alternative blocks of code to be executed
let date = 2;

switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    console.log("invalid");
    break;
}

console.log(day);

//Common Code Blocks
//If multiple cases matches a case value, the first case is selected.

// re read done
