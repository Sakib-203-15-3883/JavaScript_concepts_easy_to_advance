//Block :- It is used to combine multiple statement into one statement so that we can use it at those places where javascript expects to have single statement.
//Scope :- scope of a variable or a function is the place where these are accessible.
//Block scope :-  The variables and function present within the scope of a block section. And block follows the lexical scope chain pattern while accessing the variable.
//Shadowing :-  Providing same name to the variable as of those variable which are present in outer scope.


//Scope determines the accessibility (visibility) of variables.
//JavaScript have  3 types of scope:1.Block scope 2.Function scope 3. Global scope
//Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
//ES6 introduced two important new JavaScript keywords: let and const.
//These two keywords provide Block Scope in JavaScript.
//Variables declared inside a { } block cannot be accessed from outside the block:

//Local variables have Function Scope:
//They can only be accessed from within the function.

console.log("gsfdgwesg")
function myFunction() {
  let num1= 10;
  let num2 =20;
  const ans = num1+num2;
  console.log(ans);
  }

myFunction();
//Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
//Local variables are created when a function invokes, and deleted when the function is completed or finished.



//Global JavaScript Variables
//A variable declared outside a function, becomes GLOBAL.
let carName = "Volvo";
// code here can use carName
function myFunction1() {
// code here can also use carName
}
//Variables declared with var, let and const are quite similar when declared outside a block.