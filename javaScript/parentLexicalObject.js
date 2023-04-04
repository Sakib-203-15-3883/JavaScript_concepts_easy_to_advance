//Here's a detailed explanation of how parent lexical objects work with several examples:
////Parent lexical objects are important in JavaScript because they allow functions to access variables and functions that are defined outside of their own scope, enabling powerful patterns like closures and higher-order functions. 


//1. Closures
//One of the most common use cases for parent lexical objects in JavaScript is closures. Closures allow you to access variables that are defined in an outer function from an inner function, even after the outer function has returned.

// A closure is a combination of a function and the lexical environment 

function sum() {
    const x = 10;
    const y = 20;

    function result() {
        console.log(x+y);
    }

    return result;
}

const sumOfTwoNumbers  = sum();
console.log(sumOfTwoNumbers );  //result() {
                                         //  console.log(x+y);
                                        //   }
sumOfTwoNumbers();//30



 
//Example : here, in this line:
// console.log(num1+num2+num3+num4); 
// num1 (variable)  is an example of scope (gloval scope ). here,  num2  variable is an example of closures. num3  variable is also an example of closures. and  num4 (variable)  is an example of scope (local/function  scope ).

const num1 = 20 ;

function outer(){
    const num2 = 30;

    function subinner(){
        const num3 =50;
        function inner(){
            const num4 = 50;
            console.log(num1+num2+num3+num4);
        }
        inner();
    }

    subinner();
}

outer();


// lexical parent object vs parent scope 
//lexical parent object and upper scope are not the same concept in JavaScript, although they are related.

let x = 10;
function outerFunction() {
  let y = 20;
  function innerFunction() {
    let z = 30;
    console.log(x); // Prints 10 (from the upper scope)
    console.log(y); // Prints 20 (from the lexical parent object)closures
    console.log(z); // Prints 30 (from the current scope)
  }
  innerFunction();
}
outerFunction();