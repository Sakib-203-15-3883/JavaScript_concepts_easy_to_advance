// everything  in js happens inside execution context . it,s like a big box . it has 2 component . 1. memory component. it contains variables and functions as key:value pair . memory component known as variable environment  2. code component (here by default , code is executed 1 commend at a time . that,s means synchronous way . it,s known as thread of execution  )

// javaScript is a synchronous single threaded programming language . single threaded means it,s executed 1 commend  at a time . synchronous means in a specific order . so, synchronous single threaded means it,s executed 1 commend  at a time  in  sequentially.

//In JavaScript, memory is allocated for all variables and functions during the creation of the execution context, which occurs before the code is actually executed. This process is known as "variable and function hoisting". During the creation of the execution context in JavaScript, memory is allocated for all declared variables, and an initial value of undefined is assigned to them.

// function expretion and arrow function are not hoisted . they  behave like variables During the creation of the execution context. so , that stage it,s store undefined .they must be defined before they are used.

//During the creation of the execution context in JavaScript, memory is allocated for all declared functions, and an initial value of the function itself is assigned to them. This is known as "function hoisting".Function hoisting means that you can call a function before it is declared in your code, because the function is already allocated memory during the creation of the execution context.

//  when we invoke function then new execution context created and allocate memory for variables and function which are available inside that function .  After completed execution of function the memory for  variables and function will be deleted .

//  call stack : call stack maintains the order of execution of execution context .

//In JavaScript, the call stack is a data structure that is used to manage the execution context of a running program. It is a Last-In-First-Out (LIFO) data structure, which means that the last item added to the stack is the first one to be removed.the last element of the call stack in JavaScript is typically the global execution context, which remains at the bottom of the call stack throughout the execution of the program. after executed all execution context the call stack will be empty .

//When a function is called in JavaScript, a new execution context is created for that function, and it is added to the top of the call stack. The JavaScript engine then starts executing the statements in the function's body, one by one, until it reaches the end of the function or encounters a return statement.

//example1:
function myFunction() {
  console.log("Before: ", myVar); // undefined
  var myVar = "Hello, world!";
  console.log("After: ", myVar); //Hello, world!
}

myFunction();

//example2:
try {
  myFunction2(); //Uncaught TypeError: myFunction2 is not a function
  var myVar = "Hello, world!";

  var myFunction2 = function () {
    console.log(myVar);
  };
} catch (e) {
  // handle the TypeError
  console.log("Caught TypeError:", e.message);
}

//example3:
function outerFunction() {
  var outerVar = "Hello, ";

  function innerFunction() {
    var innerVar = "world!";
    console.log(outerVar + innerVar);
  }

  return innerFunction;
}

var myFunction3 = outerFunction();
myFunction3(); // hello world

//Example4:

function myFunction4() {
  setTimeout(function () {
    console.log("Async function completed.");
  }, 1000);
}

myFunction4();
console.log("Async function called.");
//output:
//Async function called.
//Async function completed.

//example5
var myVar = "Hello, world!";

function myFunction5() {
  console.log(myVar); // undefined
  var myVar = "Goodbye, world!";
  console.log(myVar); //Goodbye, world!
}

myFunction5();

// Hoisting in JavaScript with let and const – and How it Differs from var
//the TDZ exists from the start of the block scope until the variable is declared and initialized, but it's important to note that both declaration and initialization are necessary before the variable can be used without encountering a ReferenceError.

//1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialization.

//2. Temporal Dead Zone exists until variable is declared and assigned a value.
//3. window.variable OR this.variable will not give value of variable defined using let or const.
//4. We cannot redeclare the same variable with let/const(even with using var the second time).
//5. const variable declaration and initialization must be done on the same line.
//6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
//7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.8. Initializing variables at the top is good idea, helps shrinks TDZ to zero.

// declaring and  Initializing variables at the top is good idea for avoiding temporal dead zone for let and const keyword .TDZ refers to the time between the creation of a variable and its initialization with a value, during which time the variable is in an "uninitialized" state and cannot be accessed or assigned a value without throwing a ReferenceError.

//let and const variables are hoisted, only they are hoisted without a default initialization. This makes them inaccessible (as such variables are in a temporal dead zone).
// console.log(number);
// ReferenceError: Cannot access 'number' before initialization
let number = 10;
console.log(number);

//Running this code produces this error: ReferenceError: number2 is not defined
// console.log(number2);
let number1 = 10;

//////////                   practice          // /  // / // / / //

// const resultForIsNotHoisted10 = isNotHoisted10();
// console.log(resultForIsNotHoisted10);

// const isNotHoisted10 = () => {
//   return 1000;
// };

// we can call function [not function expression or arrow function ] before it,s define . because memory allocated for variables and functions during the creation of execution context before the code is running . so, initial value for variables is undefined and initial value for function is function it self . that,s why we can call function before it,s was initialize . arrow function and function expression behave like variables . so , initial value for them is undefined . so we can't call that function before it is initialize .

const sum = func();
console.log(sum);

function func() {
  return 370;
}

// let and const are hoisted but without default initialization
// console.log(num15);
// let num15;

console.log(num16);
var num16;

// re-read done
