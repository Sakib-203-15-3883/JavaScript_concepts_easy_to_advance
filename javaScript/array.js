//JavaScript Arrays

//An array is a special variable, which can hold more than one value:
const cars = ["Saab", "Volvo", "BMW"];//It is a common practice to declare arrays with the const keyword.

//Accessing Array Elements
//You access an array element by referring to the index number:

let car = cars[0];//Array indexes start with 0.
console. log(car);

//Changing an Array Element

cars[0] = "Opel";
console. log(cars);

//Arrays are special kinds of objects.

//Because of this, you can have variables of different types in the same Array.

//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

cars.length ;  // Returns the number of elements//The length property is always one more than the highest array index.
cars.sort();   // Sorts the array

//Accessing the Last Array Element

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
console. log(fruit);

//Adding Array Elements
fruits.push("Lemon");
console. log(fruits);//add element in the last place of array


//The Difference Between Arrays and Objects
//In JavaScript, arrays use numbered indexes.  

//In JavaScript, objects use named indexes.