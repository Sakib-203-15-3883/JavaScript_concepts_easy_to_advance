//JavaScript For Loop
//JavaScript supports different kinds of loops:
//for - loops through a block of code a number of times
let i;
//Expression 1 is executed (one time) before the execution of the code block.
//Expression 2 defines the condition for executing the code block.
//Expression 3 is executed (every time) after the code block has been executed.
for (i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("current value of i ", i); //11
//example
const cars = ["BMW", "Volvo", "Saab", "Ford"];
for (i = 0, len1 = cars.length, text1 = ""; i < len1; i++) {
  text1 += cars[i];
  console.log(cars[i]);
}

//JavaScript While Loop
//The while loop loops through a block of code as long as a specified condition is true.
//while loop is much the same as a for loop, with statement 1 and statement 3 omitted.
const cars1 = ["BMW", "Volvo", "Saab", "Ford"];
let a = 0,
  len2 = cars.length,
  text2 = "";
while (a < len2) {
  console.log(cars[a]);
  a++;
}

//The Do While Loop
//This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
//The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
const cars2 = ["BMW", "Volvo", "Saab", "Ford"];
let b = 10,
  len3 = cars2.length,
  text3 = "";
do {
  console.log(cars2[b]);
  b++;
} while (b < len3);

//JavaScript For In
//The JavaScript for in statement loops through the properties
//(index) of an Object:
const numbers = [45, 4, 9, 16, 25];
for (let number in numbers) {
  console.log(number); // print the index of numbers array
  console.log(numbers[number]); //print the (element/value)
  //  of      numbers array
}

//JavaScript For Of loops
//The JavaScript for of statement loops through the values of an iterable object.
const numbers1 = [45, 4, 9, 16, 25];
for (let number of numbers) {
  console.log(number); // print the value of numbers array
}

// re read done
