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

///////////////                  include method                          ////////////////

// the includes() method is a built-in method for arrays and strings that allows you to check whether a particular element or substring is present in the array or string, respectively. It returns a boolean value indicating whether the specified value is found.

const fruits = ["fruit1", "fruit2 ", "fruit3 ", "fruit4 "];

const result = fruits.includes("fruit1");
console.log(result);

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

// //If the array is empty, JavaScript directly returns true without any calls to the predicate.

const includeArray1 = "";
const includeArray2 = ["sakib", "rakib"];
//empty string is considered to be present in every string
const includeArrayResult = includeArray2[1].includes(includeArray1);
console.log(includeArrayResult);
