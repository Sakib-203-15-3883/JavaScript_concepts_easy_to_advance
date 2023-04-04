// difference between function (statement/declaration are same things) and function expression or arrow function is hoisting . 
// An anonymous function is a function that does not have a name.  . we can not declare anonymous function . it,s gives syntax error .if we store anonymous function in a variable then it,s known as function expression .  we use it only as a values(One common use case for anonymous functions is as callback functions, which are functions that are passed as arguments to other functions.) .
// named function expression 
const fun = function func() {
  console.log("hello");
};
fun();//hello
//func();//referrence error: func() is not defined 

//explain first class function in js 

// Ans: In JavaScript, functions are considered to be first-class citizens. just because of 1 .  we can use  Functions as values.  2. we can use Functions as arguments 3. we can use  Functions as return values



//Function is an object in js.it can be assigned to variables, passed as arguments to other functions, and even returned as values from functions.
//If you have a function stored in a variable, you can call it by using the variable name followed by parentheses.
//You can also call functions using the apply() or call() methods. These allow you to specify the value of this inside the function.
//Function expressions and arrow functions are not hoisted, so they must be defined before they are used.

// create a function that takes an array and target value(number). output  will be the index of target if target pressent in an array.
// JavaScript functions can be called before they are declared:


function findIndexOfArratElement(array, targetValue) {

  for (let i = 0; i < array.length; i++) {

    if (array[i] === targetValue) {
      return i;
    }

  }
  return -1;
}


let answer = findIndexOfArratElement([3, 4, 6, 7, 9], 9);
console.log(answer);


//Function Declarations

function multiplyTwoNumbers(number1, number2) {
  return number1 * number2;
}

console.log(multiplyTwoNumbers(5, 10));

//Function Expressions

const addTwoNumbers = function (number1, number2) {
  return number1 + number2;
}

console.log(addTwoNumbers(6, 10));

//Functions Can Be Used as Values
//JavaScript functions can be used in expressions:function 

function myFunction(a, b) {
  return a * b;
}
let x = myFunction(4, 3) * 2;
console.log(x);


//Arrow Functions
//Arrow functions do not have their own this. They are not well suited for defining object methods.
//Arrow functions are not hoisted. They must be defined before they are used.
//Using const is safer than using var, because a function expression is always constant value.
//You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:


const dividedTwoNumber = (num1, num2) => {
  return num1 / num2;
};

let ans = dividedTwoNumber(50, 5);
console.log(ans);


//Default Parameter Values
//If y is not passed or undefined, then y = 10.
function myFunction(x, y = 10) {
  return x + y;
}
console.log(myFunction(5));

//The code inside a JavaScript function will execute when "something" invokes it.



//In function declarations and function expression, this refers to the global window object by default. If the function is called with a different context, this will refer to that context.


////Example : For function declaration  
function myFunction() {
  console.log(this); // logs the global window object
}

myFunction(); // calling the function with no context

const obj = {
  myMethod: myFunction
}

obj.myMethod(); // calling the function with the context of the obj object

//Example : For function expression 
const myFunction1 = function () {
  console.log(this); // logs the global window object
}

myFunction1(); // calling the function with no context

const obj1 = {
  myMethod: myFunction1
}

obj1.myMethod(); // calling the function with the context of the obj object

//Arrow functions do not have their own this context. Instead, they inherit this from the enclosing lexical scope, which is the scope where the arrow function is defined.
//In this example, this refers to the global window object, not to the obj object.
//When an arrow function is defined, it captures the value of this from its surrounding lexical scope.
const obj2 = {
  myMethod: () => {
    console.log(this); // logs the global window object
  }
}
obj2.myMethod(); // calling the arrow function with no context