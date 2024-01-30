//JavaScript has 8 Datatypes
//1. String
//2. Number
//3. Bigint
//4. Boolean
//5. Undefined
//6. Null
//7. Symbol
//8. Object

//The Object Datatype
//The object data type can contain:

//1. An object
//2. An array
//3. A date

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
//In this example, we create a new Date object and store it in the date variable. We then use various Date object methods to get the year, month, and day values of the date.
const date = new Date("2022-03-25");
console.log(date.getFullYear()); // Output: 2022
console.log(date.getMonth()); // Output: 2 (March is 0-indexed, so 2 represents March)
console.log(date.getDate()); //25

//When adding a number and a string, JavaScript will treat the number as a string.
let x2 = 16 + "Volvo";
console.log(x2); //16Volvo

//JavaScript evaluates expressions from left to right. Different sequences can produce different results:

let x3 = 16 + 4 + "Volvo";
console.log(x3); //20Volvo

let x4 = "Volvo" + 16 + 4;
console.log(x4); //Volvo164

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

let x5; // Now x is undefined
x5 = 5; // Now x is a Number
x5 = "John"; // Now x is a String

console.log(x5); //John

//Numbers can be written with, or without decimals:

// With decimals:
let x6 = 34.05;
console.log(x6); //34.05

// Without decimals:
let x7 = 34;
console.log(x7); //34

//All JavaScript numbers are stored in a a 64-bit floating-point format.

//You can use the JavaScript typeof operator to find the type of a JavaScript variable.
// re-read done 1
