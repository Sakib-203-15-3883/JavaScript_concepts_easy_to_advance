//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
// receiving array as argument
//The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter, a function can be called with any number of arguments, no matter how it was defined. Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.
//When … is at the end of the function parameter, it is the rest parameter. It stores n number of parameters as an array.
//rest parameter gives an array in return and we can make use of the array methods that the javascript provides us.
//The rest parameter is not counted towards the function's length property.

// Without rest parameter
function fun(a, b){
    return a + b;
}
console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3, 4, 5)); // 3    

//demonstrating the addition of numbers using the rest parameter. 
function fun1(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun1(1,2)); //3
console.log(fun1(1,2,3)); //6
console.log(fun1(1,2,3,4,5)); //15  


// A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition., as its job is to collect all the remaining arguments into an array. So having a function definition like the code below doesn’t make any sense and will throw an error.
//function wrong1(...one, ...wrong) {}
//function wrong2(...wrong, arg2, arg3) {}

// function fun2(a,...b,c){
//     //code
//     return;
// }





// example 1: call a function that pass indefinite numbers as an argument and perform addition for all numbers .
const addAll = (...numbers) =>{
let total=0;

    for(let number of numbers){
        total = total+number;
    }
    return total;
}
const ans = addAll(1,2,3,4,5,6,7,8,9);
console. log(ans);


// example 2 :
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }

  myFun("one", "two", "three", "four", "five", "six");//"one"  "two" ["three", "four", "five", "six"]  
  

//Example  3: if u pass only 1 argument in example 1 then what will be the output?
myFun("one");// one , undefined , [](which is an empty array )


// example 4 : a rest parameter is used to collect all parameters after the first parameter into an array. Each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned:

function multiply(multiplier,...args){
    return args.map((element)=>{
     return element*multiplier;
    })
}
const array = multiply(2,5,10,15,20);
console. log(array);




// example 4 : a rest parameter is used to collect all parameters after the first parameter into an array. Each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned:

function multiply(multiplier,...args){
    return args.map((element)=>{
     return element*multiplier;
    })
}
const array11 = multiply(2,5,10,15,20);
console. log(array11);










//In JavaScript, the rest parameter is denoted by three dots (...) followed by a parameter name, and it allows a function to accept an indefinite number of arguments as an array. This feature is often used in array methods to handle a varying number of arguments.

//For example, let's say you have an array of numbers and you want to find the sum of those numbers. You can use the reduce method along with the rest parameter to achieve this as follows:

const numbers10 = [1, 2, 3, 4, 5];
const sum = numbers10.reduce((acc, val) => acc + val, 0);
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


