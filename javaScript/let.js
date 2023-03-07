////Using let
//In this example, x, y, and z, are variables, declared with the let keyword

let x = 5;//Strings are written inside double or single quotes. Numbers are written without quotes.If you put a number in quotes, it will be treated as a text string.
let y = 6;
let z = x + y;
console. log(z);


//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.Variables defined with let cannot be redeclared.With var you can:

let a = "5" + 2 + 3;
console. log(a);


//Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

//ES6 introduced two important new JavaScript keywords: let and const.

//These two keywords provide Block Scope in JavaScript.

//Variables declared inside a { } block cannot be accessed from outside the block:
{
    let x = 2;
  }
  // x can NOT be used here
  //Variables declared with the var keyword can NOT have block scope.Redeclaring a variable using the let keyword can solve this problem.

//Redeclaring a variable inside a block will not redeclare the variable outside the block:

//Redeclaring a variable with let, in another block, IS allowed:
let s = 2;   // Allowed

{
let r = 3;
console. log(r);// Allowed
}

{
let r = 4; 
console. log(r);   // Allowed
}

//Using a let variable before it is declared will result in a ReferenceError:

//carName = "Saab";
//let carName = "Volvo";

