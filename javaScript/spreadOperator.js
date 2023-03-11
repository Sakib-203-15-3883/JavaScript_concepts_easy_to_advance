//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing iterable object( array or object or map or set )into another array or object.
//The spread operator can actually be used with any iterable object in JavaScript, not just arrays. Iterable objects include arrays, strings, sets, maps, and other data structures that can be iterated over with a loop or the forEach() method.
// Spread operator can be used in many cases, like when we want to expand, copy, concat, with math object.
//the spread operator can only be used to expand an existing array or multiple arrays.
const numbersOne = [1,2,3,4,5];
const numbersTwo = [6,7,8,9,10];
const combinedNumbers = [...numbersOne,...numbersTwo];
console. log(combinedNumbers);    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [num1,num2,...numbers5] = [...numbersOne,...numbersTwo];// here ,...numbers5 is a rest operator and (...numbersOne,...numbersTwo ) is a spread operator
console. log(num1,num2,numbers5); 


//Assign the first and second items from numbers to variables and put the rest in an array
const array = [5,6,8,2,4,5];
const[var1,var2,...arrr] = array;
console. log(var1,var2,arrr);//5 6 (4) [8, 2, 4, 5]

const [firstName1,lastName1,company1] = ["mukit", "al hasan", "softIt"];
console. log(firstName1);





//We can use the spread operator with objects too:
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};
console. log(myUpdatedVehicle);
//Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.

//Example : Important 
function myBio(firstName, lastName, company) { 
    return `${firstName} ${lastName} ${company}`;
  }
// Use spread to expand an array’s items into individual arguments:
  const information = myBio(...["sakib", "al hasan", "softIt"]);
  console. log(information);









//concat() can be used to concatenate multiple arrays together, whereas the spread operator can only be used to expand an existing array or multiple arrays.
//example : 1 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]
const arr4 = [...arr1, ...arr2];
console.log(arr4); // [1, 2, 3, 4, 5, 6]
// Changing the second element of arr1// no affect 
arr1[1] = 99;
console.log(arr3); // [1, 2, 3, 4, 5, 6]
console.log(arr4); // [1, 2, 3, 4, 5, 6]
