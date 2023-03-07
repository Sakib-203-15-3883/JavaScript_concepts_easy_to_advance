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