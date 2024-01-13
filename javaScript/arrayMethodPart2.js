///////////////                  splice method                          ////////////////

//splice method modifies the original array and returns the removed elements as a new array.
//syntax : Array.splice(start, removeCount, newItem, newItem, newItem, ...)

const listOfSports = [
  "cricket",
  "football",
  "basketball",
  "handball",
  "hockey",
];

// now i want to remove specific  array element with splice method

listOfSports.splice(2, 1);
console.log(listOfSports);

// i want to store removed elements into a new array with splice method
const removedElements = listOfSports.splice(2, 1);
console.log(removedElements);

// now i want to remove specific element with new value , i mean i want to modify a value with splice method

const courseList = ["cse111", "cse211", "cse311", "cse411"];
courseList.splice(1, 1, "modifySubject ");
console.log(courseList);

///////////////                  filter method                          ////////////////

// In JavaScript, the filter() method is an iterative method that calls a callback function once for each element in an array. If the callback function returns true, it includes that element in the return array. The filter() method is also called a copying method because it returns a shallow copy of an array that contains the same elements as the ones from the original array.

//filter method receive a callback function , check for every array element with specific conditions. if that conditions will true then  that element store into new array .

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = (numbers) => {
  return numbers.filter((element) => {
    return element % 2 === 0;
  });
};

const resultForEvenNumbers = evenNumbers(numbers);
console.log(resultForEvenNumbers);
console.log(numbers);

///////////////         include method           ////////////////

// the includes() method is a built-in method for arrays and strings that allows you to check whether a particular element or substring is present in the array or string, respectively. It returns a boolean value indicating whether the specified value is found.

// return type : boolean value

const fruits = ["fruit1", "fruit2 ", "fruit3 ", "fruit4 "];

const result = fruits.includes("fruit1");
console.log(result);
// //If the array is empty, JavaScript directly returns true without any calls to the predicate.

const includeArray1 = "";
const includeArray2 = ["sakib", "rakib"];
//empty string is considered to be present in every string
const includeArrayResult = includeArray2[1].includes(includeArray1);
console.log(includeArrayResult);

///////             every && some method          /////////////

// In JavaScript, every and some help you test if something is true for every element or some elements of an array.

//for every method , The loop continues until the function returns a falsy value. And in that case every returns false – otherwise it returns true.

// for some method , The loop continues until the function returns a truthy value. And in that case some returns true – otherwise it returns false.

//If the array is empty, JavaScript directly returns true without any calls to the predicate.

const tShirts = [
  { size: "S", color: "black", logo: "freeCodeCamp" },
  { size: "S", color: "white", logo: "freeCodeCamp" },
  { size: "S", color: "teal", logo: "freeCodeCamp" },
  { size: "M", color: "black", logo: "freeCodeCamp" },
  { size: "M", color: "white", logo: "freeCodeCamp" },
  { size: "M", color: "teal", logo: "freeCodeCamp" },
  { size: "L", color: "black", logo: "freeCodeCamp3" },
  { size: "L", color: "white", logo: "freeCodeCamp2" },
  { size: "L", color: "teal", logo: "freeCodeCamp1" },
];

const result1 = tShirts.every((element) => {
  return element.logo === "freeCodeCamp";
});

console.log(result1);

const result2 = tShirts.some((element) => {
  return element.logo === "freeCodeCamp";
});

console.log(result2);

///////         forEach method  && map method            /////////////

// It provides a simple and concise way to execute a provided function once for each element in the array. The purpose of forEach is to perform an action or operation on each element without the need for explicit loop constructs.

// For Breaking out of the loop concepts[continue or break] , we need traditional for loop .

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//this method takes a callback function and this callback function will execute for each array element at once . it,s not return anything . so , returning value is undefined

const result10 = data.forEach((element) => {
  console.log(element + 10);
});

console.log(result10); // undefined

const evenOrOdd = (element) => {
  if (element % 2 === 0) {
    console.log(" even numbers :  ");
    console.log(element);
  } else {
    console.log("odd numbers :  ");
    console.log(element);
  }
};

data.forEach(evenOrOdd);

///////////////         map method        //////////////////////

// same as forEach method , but it returns value for each array element based on function logic and resulting value will store in a array . it,s also not change the original  array .

const evenNumbers10 = data.map((element) => {
  if (element % 2 === 0) {
    return element; // Return the element if it's even
  }
  // Return undefined for elements that are not even
});

const oddNumbers = data.map((element) => {
  if (element % 2 !== 0) {
    return element; // Return the element if it's odd
  }
  // Return undefined for elements that are not odd
});

console.log(evenNumbers10); // [undefined, 2, undefined, 4, undefined, 6, undefined, 8, undefined, 10]
console.log(oddNumbers); // [1, undefined, 3, undefined, 5, undefined, 7, undefined, 9, undefined]

const filteredEvenNumbers = evenNumbers10.filter(
  (element) => element !== undefined
);
const filteredOddNumbers = oddNumbers.filter(
  (element) => element !== undefined
);

console.log(filteredEvenNumbers); // [2, 4, 6, 8, 10]
console.log(filteredOddNumbers); // [1, 3, 5, 7, 9]
