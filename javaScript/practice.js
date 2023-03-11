// example 4 : a rest parameter is used to collect all parameters after the first parameter into an array. Each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned:

function multiply(multiplier,...args){
    return args.map((element)=>{
     return element*multiplier;
    })
}
const array = multiply(2,5,10,15,20);
console. log(array);









//In JavaScript, the rest parameter is denoted by three dots (...) followed by a parameter name, and it allows a function to accept an indefinite number of arguments as an array. This feature is often used in array methods to handle a varying number of arguments.

//For example, let's say you have an array of numbers and you want to find the sum of those numbers. You can use the reduce method along with the rest parameter to achieve this as follows:

const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 15


//Now, let's say you want to find the sum of an arbitrary number of arrays. You can use the rest parameter to pass those arrays as arguments to a function, and then use the reduce method to sum them up as follows:


function sumArrays(...arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr)).reduce((acc, val) => acc + val, 0);
  }
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5];
  const array3 = [6, 7, 8, 9];
  
  const sum1 = sumArrays(array1, array2, array3);
  console.log(sum1); // Output: 45


  //In the example above, the sumArrays function uses the rest parameter to accept an arbitrary number of arrays as arguments. The reduce method is then used twice, first to concatenate all the arrays into a single array, and second to sum up the values in that array.

  //Overall, the rest parameter is a powerful feature in JavaScript that allows for more flexible and dynamic function definitions, particularly in cases where the number of arguments can vary.
    


  const numbersOne = [1,2,3,4,5];
  const numbersTwo = [6,7,8,9,10];
  const [num1,num2,...numbers] = [...numbersOne,...numbersTwo];
  console. log(num1,num2,numbers); 









