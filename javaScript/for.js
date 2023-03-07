//JavaScript For Loop
//Different Kinds of Loops
//JavaScript supports different kinds of loops:

//for - loops through a block of code a number of times
//for/in - loops through the properties(index) of an object
//for/of - loops through the values of an iterable object
//while - loops through a block of code while a specified condition is true
//do/while - also loops through a block of code while a specified condition is true
let i;


//Expression 1 is executed (one time) before the execution of the code block.

//Expression 2 defines the condition for executing the code block.

//Expression 3 is executed (every time) after the code block has been executed.
for( i=1; i<=10;i++ ){
    console. log(i);
}
console. log("current value of i ",i);

//example
const cars = ["BMW", "Volvo", "Saab", "Ford"];

for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] ;
  console. log(cars[i]);
}

