// We may have an array or object that we are working with, but we only need some of the items contained in these.Destructuring makes it easy to extract only what is needed.

//To destructure an array in JavaScript, we use the square brackets [] to store the variable name which will be assigned to the name of the array storing the element

const vehicles = ["mustang", "f-150", "expedition"];
const [car, truck, suv] = vehicles;
console.log(car); //mustang

//when function returns an array
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}
const [add, subtract, multiply, divide] = calculate(4, 7);

//with destructuring, we could swap the values of positionOne and positionTwo really easily, without having to use a temporary variable:
const items = ["food", "fruits"];

let [positionOne, positionTwo] = items;

[positionOne, positionTwo] = [positionTwo, positionOne];

console.log(positionOne, positionTwo);

console.log(items); // ['food', 'fruits']
[items[0], items[1]] = [items[1], items[0]];
console.log(items); //  ['fruits', 'food']

//Destructuring Objects
//objects allow just the use of the name of the stored data.
//When destructuring objects, we use curly braces with the exact name of what we have in the object
//before to ES6, when you want to assign properties of the person object to variables, you typically do it like this:

// let firstName = person.firstName;
// let lastName = person.lastName;

//ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables:

// let { firstName: fname, lastName: lname } = person;

//In this example, the firstName and lastName properties are assigned to the fName and lName variables respectively.

//Unwanted elements of the array can also be thrown away via an extra comma:
// second element is not needed
let [firstName1, , title1] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
// alert(title1); // Consul

const freeCodeCamp = {
  frontend: "React",
  backend: "Node",
  database: "MongoDB",
};

const { frontend, backend } = freeCodeCamp;
console.log(frontend, backend); // React, Node

//now see how to assign a variable name to the object we want to unpack.
//Assigning a variable name will always help us keep our code clean,
const { frontend: courseOne, backend: courseTwo } = freeCodeCamp;
console.log(courseOne, courseTwo); //  // React, Node

//////////////////      practice after one year         /////////////////////

const arrayOfObjects = [
  { id: 1, price: 1000, product: "tv" },
  { id: 2, price: 4000, product: "tv" },
  { id: 3, price: 3000, product: "tv" },
  { id: 4, price: 2000, product: "tv" },
];

const [firstProduct, , thirdProduct, fourthProduct] = arrayOfObjects;

const { id, price, product } = fourthProduct;
console.log(price);

// it,s hard to know after object destructuring  if we don,t provide meaning full  variable name for object property. given we refactor it
const {
  id: idOfFirstProduct,
  price: priceOfFirstProduct,
  product: firstProductName,
} = firstProduct;

console.log(priceOfFirstProduct);
