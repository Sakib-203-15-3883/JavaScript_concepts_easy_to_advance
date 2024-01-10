//Array forEach() method-
//return value : undefined
const numbers = [2, 3, 4, 5, 10];
//example 1: Add 2(value) with each array element using addByTwo function.
//here , in example 1 , we need to invoke the function (addByTwo) for each array element . we can,t do same thing again and again .
function addByTwo(number) {
  console.log(number + 2);
}

addByTwo(numbers[0]); //4
addByTwo(numbers[1]); //5
addByTwo(numbers[2]); //6
addByTwo(numbers[3]); //7

//example 2: multiply 2 with each array element using multiplyByTwo function  . here  use for loop for reduce code repeatation
for (let i = 0; i < numbers.length; i++) {
  function multiplyByTwo(number) {
    console.log(number * 2); //
  }
  multiplyByTwo(numbers[i]); //4  6  8  10  20
}
//The forEach() method calls a function for each element in an array.

//example 3: Need to divided  each array element by 2 using dividedByTwo function  . You need to  use forEach() method . Hint: forEach() method calla  function  which known as callback function. it,s not work with empty array

function dividedByTwo(number) {
  console.log(number / 2);
}
numbers.forEach(dividedByTwo); // forEach method pass  function  for each array element .

//example 4:   write  an array called users  and inside array create 4 objects with the property of (firstName and age). now  print firstName and age from each object without using forEach method.

//how to access object property value which are inside an array
// console. log(users[0].firstName);
// console. log(users[0].age);

const users = [
  { firstName: "sakib", age: 23 },
  { firstName: "mukit", age: 22 },
  { firstName: "rakib", age: 20 },
  { firstName: "talha", age: 25 },
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].firstName);
  console.log(users[i].age);
}

//example 5:  create an array called users1  and inside array we have 4 objects with the property of (firstName and age). Then print firstName and age from each object  using forEach method.
//here , forEach method pass the each array(users1) element value to function parameter(user).
//here , user parameter from printInformation function  receive the value of each array element one by one  which are an object . After that, using . notation we print the property value each time  which is inside an array(users1)

//The function will be executed for every single element of the array. It must take at least one parameter which represents the elements of an array:

const users1 = [
  { firstName: "sakib", age: 23 },
  { firstName: "mukit", age: 22 },
  { firstName: "rakib", age: 20 },
  { firstName: "talha", age: 25 },
];

function printInformation(user) {
  console.log(user.firstName, user.age);
}
users1.forEach(printInformation);

// Example of Data Manipulation :  Suppose you have an array of objects that represent students, each containing a name, age, and grade property. You can use the forEach() method to iterate over the array.  use variables to keep track of the total age and grade, as well as the total number of students.
let totalAge = 0;
let totalGrade = 0;
let count = 0;
const students = [
  { name: "sakib", age: 25, grade: 90 }, //0
  { name: "mukit", age: 22, grade: 80 }, //1
  { name: "talha", age: 23, grade: 70 }, //2
];

function information1(student) {
  totalAge += student.age;
  totalGrade += student.grade;
  count++;
}

students.forEach(information1);

const avgAge = totalAge / count;
const avgGrade = totalGrade / count;
console.log(`avgAge=${avgAge} and avgGrade=${avgGrade}`);

//Array map() method
//Return Value: An array(The results of a function for each array element.)
//The Array.map() method allows you to iterate over an array and modify its elements using a callback function.
//map() creates a new array from calling a function for every array element.
//map() calls a function once for each element in an array.
//map() does not execute the function for empty elements.
//map() does not change the original array.
const numberss = [2, 4, 6, 8, 10];

//example 1: Add 2(value) with each array element using map() method . map() method will stored performed value(performed by function) in a new array.
const add = function (number) {
  return number + 2;
};
const newNumber = numberss.map(add);
console.log(newNumber);

//example 5:we have an array called person  and inside array we have 3 object with the property of (firstName and age). now we need to print firstName and age  from each object  using map() method. map() method store all the full name and age in a new array
const persons = [
  { firstName: "sakib", age: 21 },
  { firstName: "mukit", age: 22 },
  { firstName: "talha", age: 25 },
];
function printInformationForPerson(person) {
  return `${person.firstName}, ${person.age}`;
}
const information = persons.map(printInformationForPerson);
console.log(information);

//example : you may have an array of objects that stores firstName and lastName values of your friends . now , you need to store full name of ur friends and store that information in a new array .

const informations1 = [
  { firstName: "sakibul", lastName: "islam" },
  { firstName: "mukit", lastName: "mosfiq" },
  { firstName: "jahidul", lastName: "islam" },
];

console.log(
  informations1.map((information) => {
    return information.firstName + " " + information.lastName;
  })
);

//Array filter() method
//Return Value: An array (Containing the elements that pass the test.If no elements pass the test it returns an empty array.)
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not change the original array.
// it,s perform on array element and return a specific set of value based on condition .

//map() is used to transform each element in an array, while filter() is used to select a subset of the elements that satisfy a condition. Both methods create a new array without modifying the original array.

const numbersForFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function odd(number) {
  if (number % 2 !== 0) {
    return number;
  }
}
const listOfEvenNumber = numbersForFilter.filter((number) => {
  if (number % 2 === 0) {
    return number;
  }
});

const listOfOddNumber = numbersForFilter.filter(odd);
console.log(listOfEvenNumber);
console.log(listOfOddNumber);

// Example:   create an array called teem. in your teem you have 6 team members . some of works as fontend developer ,some of backend and some of work as ui and some work on database . find how many tem member work on fontEnd .

const team = [
  { name: "sakib", position: "fontend" },
  { name: "mukit", position: "ui" },
  { name: "talha", position: "fontend" },
  { name: "rakib", position: "backend" },
  { name: "jahidul", position: "ui" },
  { name: "tasin ", position: "fontend" },
];

const fontendDeveloper = team.filter((member) => {
  if (member.position === "fontend") {
    return member.position;
  }
});

console.log(fontendDeveloper);

//Array reduce() method
//The reduce() method returns a single value: the function's accumulated result.
//The reduce() method does not change the original array.
// doing sum of all array element to understand reduce() method

const numbersForReduceMethod = [1, 2, 3, 6, 8, 9];
const sumOfAllArrayElement = numbersForReduceMethod.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  }
);
console.log(sumOfAllArrayElement);

// example 15 : E-commerce related  , suppose a user select 3 different product . now you need to calculate the sum of those 3 product price using reduce() method.

const userCard = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];
const totalAmount = userCard.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);
console.log(totalAmount);

//sort() method
// it,s change the existing array
// it,s return a new sorted array
//JavaScript sorts numbers alphabetically.Solution: The Compare Function.
//If the result is negative, a is sorted before b.
//If the result is positive, b is sorted before a.
//If the result is 0, nothing changes.
// we need to clone the array . we can do it using slice()

const numbersForSort = [10, 5, 40, 30, 25];
const sortDone = numbersForSort.slice(0).sort((a, b) => a - b); // for decending b-a
console.log(numbersForSort);
console.log(sortDone);

const test = [1, 2, 3, 4, 5];
const clone = test.slice(0);
console.log(clone);

// example16: e-commerce:  a users want to search the product price high to low and low to high . solve the problem

const usersForSortExplain = [
  { productId: 1, productName: "mobile", price: 25000 },
  { productId: 2, productName: "tv", price: 1200 },
  { productId: 3, productName: "ac", price: 10000 },
  { productId: 4, productName: "bike", price: 8000 },
];

const lowToHigh = usersForSortExplain
  .slice(0)
  .sort((a, b) => a.price - b.price);
console.log(lowToHigh); // for highToLow (b.price-a.price)

// find() method
//The find() method returns the value of the first element that passes a test.
//The find() method does not change the original array.
const animal = ["cat", "dog", "lion"];
console.log(
  animal.find((string) => {
    return string.length === 3;
  })
);

//example:
const usersForFindExplain = [
  { productId: 1, productName: "mobile", price: 25000 },
  { productId: 2, productName: "tv", price: 1200 },
  { productId: 3, productName: "ac", price: 10000 },
  { productId: 4, productName: "bike", price: 8000 },
];

const userInformation = usersForFindExplain.find((product) => {
  return product.productId === 3;
});

console.log(userInformation);

// every() method .  it,s like AND operation
// check every element of an array with condition .if every array element satisfy the condition then return true otherwise return false

const numbersForEveryMethod = [2, 4, 6, 9, 10];

const ans = numbersForEveryMethod.every((number) => {
  return number % 2 === 0;
});

console.log(ans);

//example: check  price of every product is < 15000 or not?
const usersForEveryExplain = [
  { productId: 1, productName: "mobile", price: 25000 },
  { productId: 2, productName: "tv", price: 1200 },
  { productId: 3, productName: "ac", price: 10000 },
  { productId: 4, productName: "bike", price: 8000 },
];
const rangeOfPrice = usersForEveryExplain.every((product) => {
  return product.price < 15000;
});
console.log(rangeOfPrice);

//some() method . it,s like OR operation
// check every element of an array with condition .if one array element satisfy the condition then return true otherwise return false
const numbersForSomeMethod = [2, 4, 6, 9, 10];

const ans1 = numbersForSomeMethod.some((number) => {
  return number > 6;
});
console.log(ans1);

//example: check  price of any product is < 15000 or not?
const usersForSomeExplain = [
  { productId: 1, productName: "mobile", price: 25000 },
  { productId: 2, productName: "tv", price: 1200 },
  { productId: 3, productName: "ac", price: 10000 },
  { productId: 4, productName: "bike", price: 8000 },
];

const rangeOfPrice1 = usersForSomeExplain.some((product) => {
  return product.price < 15000;
});
console.log(rangeOfPrice1);

// fill() method
//it,s change orginal array
// value  ,  start(index)  ,  end(index)

const myArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray5.fill(0, 4, 8);
console.log(myArray5);

//splice method()
// start,  delete,  insert
////it,s change orginal array

const array1 = ["item1", "item2", "item3 ", "item4"];
//delete
array1.splice(1, 1);
console.log(array1);

//insert
array1.splice(1, 0, "inserted item");
console.log(array1);

// delete and insert together

array1.splice(1, 2, "inserted item1", "inserted item2");
console.log(array1);

//JavaScript Array Methods

//toString()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

let string = fruits.toString();
console.log(string);
//The join() method also joins all array elements into a string.

//Popping and Pushing

//The pop() method removes the last element from an array:

//The pop() method returns the value that was "popped out":
fruits.pop();
console.log(fruits);

//To add one or more items to the end of an array we can use push().
//The push() method add  last element from an array:
//The push() method returns the new array length:
fruits.push("Banana2");
console.log(fruits);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
fruits.shift();
console.log(fruits);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.unshift("Lemon");
console.log(fruits);

//Merging (Concatenating) Arrays
//The concat() method does not change the existing arrays. It always returns a new array.

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
//Example (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);
console.log(myChildren1);

//Example (Merging an Array with Values)

const arr10 = ["Emil", "Tobias", "Linus"];
const myChildren10 = arr10.concat("Peter");
console.log(myChildren10);

//JavaScript Array splice()
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//Using splice() to Remove Elements
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
//The first parameter (0) defines the position where new elements should be added (spliced in).

//The second parameter (1) defines how many elements should be removed.
fruits.splice(0, 1);
console.log(fruits);

//How to Copy and Clone an Array in JS
//You can copy and clone an array to a new array using the slice() method. Note that the slice() method doesn't change the original array. Instead, it creates a new shallow copy of the original array.
//JavaScript Array slice()
//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.

const citrus = fruits.slice(3);
console.log(citrus);
const citrus1 = fruits.slice(1, 3); //(n-1)
console.log(citrus1);

//Sorting an Array

//The sort() method sorts an array alphabetically:
fruits.sort();
console.log(fruits);
//The reverse() method reverses the elements in an array.
//You can use it to sort an array in descending order:
fruits.sort();
fruits.reverse();
console.log(fruits);

//Numeric Sort
//By default, the sort() function sorts values as strings.

//JavaScript const variables must be assigned a value when they are declared:
//Using const without initializing the array is a syntax error:

//Const Block Scope
//An array declared with const has Block Scope.

//An array declared in a block is not the same as an array declared outside the block:
