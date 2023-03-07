//JavaScript Closures
//A Counter Dilemma problem will be created 
// A JavaScript inner function(nested function) can solve this.
//All functions have access to the global scope.




//JavaScript Closures
//Remember self-invoking functions? What does this function do?


function temporary() {
    
    let counter = 0;

    return function plus(){
        
        counter += 1;
    }
    
  }

const add = temporary();// now add is a function 

console.dir(add);
add();//1
console.dir(add);
add();//2
console.dir(add);
add();//3

  

//In JavaScript, a closure is a function that has access to variables in its outer lexical environment, even after that outer function has returned. Closures are created when a function is defined inside another function, and the inner function references variables from the outer function. The inner function "closes over" those variables and maintains a reference to them, even after the outer function has finished executing.

//Closures are useful because they allow functions to "remember" values from their outer scope, which can be used to create private variables, implement data hiding, and create functions that behave differently based on the values of their outer variables. Closures are commonly used in JavaScript for tasks such as event handling, as well as in libraries and frameworks for creating private methods and data.