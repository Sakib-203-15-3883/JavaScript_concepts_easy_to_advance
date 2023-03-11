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





// example 1: call a function that pass undefinite numbers as an argument and perform addition for all numbers .
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
