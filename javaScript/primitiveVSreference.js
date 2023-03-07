//primitive 
// here 2 different variables contains 2 different address

let num1=10;
let num2=num1;
console. log(num1);//10
console. log(num2);//10


num1++;
console. log(num1);//11
console. log(num2);//10

// reference(array)
//here 2 different variables contains 2 same address. that,s why if i change value for 1 array then i will uodated for another assigning array.

const array1=["sakib","mukit","talha"]
const array2=array1;
console. log(array1);//['sakib', 'mukit', 'talha']
console. log(array2);//['sakib', 'mukit', 'talha']

array1.push("rakib");

console. log(array1);//['sakib', 'mukit', 'talha', 'rakib']
console. log(array2);//['sakib', 'mukit', 'talha', 'rakib']


