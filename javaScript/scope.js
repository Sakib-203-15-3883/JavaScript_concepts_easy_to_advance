//Scope determines the accessibility (visibility) of variables.
//JavaScript has 3 types of scope:1.Block scope 2.Function scope 3. Global scope
//Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
//ES6 introduced two important new JavaScript keywords: let and const.
//These two keywords provide Block Scope in JavaScript.
//Variables declared inside a { } block cannot be accessed from outside the block:

//Local variables have Function Scope:
//They can only be accessed from within the function.
// code here can NOT use carName
function myFunction() {
    let x = "hello";
  console. log(x);
    // code here CAN use carName
  }
  // code here can NOT use carName
  myFunction();
//Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
//Local variables are created when a function starts, and deleted when the function is completed.








//Global JavaScript Variables
//A variable declared outside a function, becomes GLOBAL.
let carName = "Volvo";
// code here can use carName
function myFunction() {
// code here can also use carName
}
//Variables declared with var, let and const are quite similar when declared outside a block.