//What exactly is Scope?
//Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code.
///Scope means area, space, or region.
//Global scope means global space or a public space.
//Local scope means a local region or a restricted region.

//An inner (child) scope has access to its parent (outer) scope, but an outer scope does not have access to its child scope.

//writeName() scope ---> sayName() scope ---> profile() scope ---> global scope

//In other words, there are four (4) spaces from fullName’s invocation scope to its lexical scope (the global scope in this instance).
//Note: The global scope is the last link in JavaScript's scope chain.




//writeName() can access codes inside any of its parent scope (sayName(), profile(), or the global scope).
//However, neither sayName(), profile(), nor the global scope can access any of writeName()'s codes.
// in  bellow , whenever the profile() function gets invoked, the computer will first invoke the sayName() function (which is the only code in the profile() function).

//Secondly, the computer will invoke the writeName() function (which is the only code in the sayName() function).

//At this point, since the code in writeName() instructs the computer to call and return the fullName variable's content, the computer will call fullName. But it will not go directly to the global scope to call fullName.

//Instead, the computer must go step-by-step through the scope chain to look for the lexical scope of fullName.

//So, here are the sequential steps the computer must take to locate fullName's lexical scope:

//Firstly, the computer will check if fullName got defined locally within the writeName() function. But it will find no fullName definition there, so it moves up to the next scope to continue its quest.
//Secondly, the computer will search for fullName's definition in sayName() (the next space in the scope chain). Still, it doesn't find it there, so it climbs up the ladder to the next scope.
//Thirdly, the computer will search for fullName's definition in the profile() function. Yet still, fullName is not found there. So the computer goes forward to seek fullName's lexical scope in the next region of the scope chain.
//Fourthly, the computer goes to the global scope (the following scope after profile()). Fortunately, it finds fullName's definition there! Therefore, it gets its content ("Oluwatobi Sofela") and returns it.


//Example 1 : create 3 function called profile,sayName,writeName which are nested . After that return a variable from last nested function which is define at global scope(window object ) .  
const fullName = "Oluwatobi Sofela";

function profile() {
  function sayName() {
    function writeName() {
      console. log(fullName);
    }
    writeName();
  }
  sayName();
}

profile();


//  example  : 2
const myVar="value1";

function myApp(){

   function myFunction(){
        
      const myFunction2 = () =>{
            console. log("inside my fun2",myVar);
        }
        myFunction2();
   }
   myFunction();
   }
 myApp();


//example: 3
const fullName1 = "Oluwatobi Sofela";

function profile() {
  const fullName = "Tobi Sho";
  function sayName() {
    const fullName = "Oluwa Sofe";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}
console. log(profile());//Oluwa Sofe

//example 4: 

function showLastName() {
  const lastName = "Sofela";
  return lastName;
}

function displayFullName() {
  const fullName = "Oluwatobi " + lastName;
  return fullName;
}

console.log(displayFullName());//Uncaught ReferenceError: lastName is not defined


//example: 5 . important (solved  problem no 4 )

function showLastName() {
  const lastName = "Sofela";
  return lastName;
}

function displayFullName() {
  const fullName = "Oluwatobi " + showLastName();
  return fullName;
}
console.log(displayFullName());//"Oluwatobi Sofela"






// lexical parent object vs parent scope 
//lexical parent object and upper scope are not the same concept in JavaScript, although they are related.

let x = 10;
function outerFunction() {
  let y = 20;
  function innerFunction() {
    let z = 30;
    console.log(x); // Prints 10 (from the upper scope)
    console.log(y); // Prints 20 (from the lexical parent object)
    console.log(z); // Prints 30 (from the current scope)
  }
  innerFunction();
}
outerFunction();