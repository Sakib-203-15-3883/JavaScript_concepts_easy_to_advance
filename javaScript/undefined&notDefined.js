// Undefined:

// In JavaScript, undefined is a special value that represents the absence of a value or an uninitialized variable.
// If you declare a variable but do not assign a value to it, or if you try to access the value of an object property that does not exist, the result is undefined.

let x;
console.log(x);

let x1 = undefined;
console.log(x1);

const object = {
  name: "sakib",
  age: 24,
};

console.log(object.id);

// Not Defined:

// The term "not defined" is often used when referring to a variable or identifier that has not been declared or is not within the scope.
// If you try to access a variable or function that has not been declared, you will get a reference error, and the JavaScript engine will say that the variable is "not defined."

const object1 = {
  name: "sakib",
  age: 24,
};

console.log(object2.id);
