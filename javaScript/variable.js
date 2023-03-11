"use strict" 
//The general rules for constructing names for variables (unique identifiers) are:
//Names can contain letters, digits, underscores, and dollar signs.
//Names must begin with a letter.
//Names can also begin with $ and _ (but we will not use it in this tutorial).
//Names are case sensitive (y and Y are different variables).
//Reserved words (like JavaScript keywords) cannot be used as names.
// Using var keyword.  If you want your code to run in older browsers, you must use var.
// here var is a keyword which indicate variable & 
//firstName is a variable name &
// "sakib" is a string type data or information  which store in variable 
var firstName="sakib";// the equal sign (=) is an "assignment" operator, not an "equal to" operator.The "equal to" operator is written like == in JavaScript.
// use of a variable
// variable name case sensetive
console. log(firstName);
// change variable
firstName="mukit";
console. log(firstName);
// You can use the variable before it is declared:
carName = "Volvo";
var carName;









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








// const keyword
//Variables defined with const cannot be Redeclared.
//Variables defined with const cannot be Reassigned.
const PI = 3.141592653589793;
//PI = 3.14;      // This will give an error
//PI = PI + 10;   // This will also give an error
//JavaScript const variables must be assigned a value when they /are declared:
const PI2 = 3.14159265359;//Correct
//const PI;
//PI = 3.14159265359;//Incorrect

//Variables defined with const have Block Scope.
//The two variables price1 and price2 are declared with the const keyword.
//These are constant values and cannot be changed.
//The variable total is declared with the let keyword.
//This is a value that can be changed.

const price1 = 5;
const price2 = 10;
let total = price1 + price2;
console. log(total);

//You can change the elements of a constant array:
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];//array

// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");
//But you can NOT reassign the array:

//const cars = ["Saab", "Volvo", "BMW"];
//cars = ["Toyota", "Volvo", "Audi"];    // ERROR

