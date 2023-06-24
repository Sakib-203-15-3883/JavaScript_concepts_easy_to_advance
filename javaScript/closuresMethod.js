//JavaScript Closures
//A Counter Dilemma problem will be created 
// A JavaScript inner function(nested function) can solve this.
//All functions have access to the global scope.
//Closures can be used to create private variables and methods in JavaScript, 

function temporary() {
    
    let counter = 0;
//// function along with it,s  lexical  scope will return . that,s mean whole closure will return .

    return function plus(){
        
        counter += 1;
        console.log( counter);
        
    }
  
  }

const add = temporary();  // now add is a function 
console.log(add);   // plus(){
                   //         counter += 1;
                  //         console.log( counter);
                 //            }

add();//1
add();//2
add();//3


  

//In JavaScript, a closure is a function that has access to variables in its outer lexical environment, even after that outer function has returned. Closures are created when a function is defined inside another function, and the inner function references variables from the outer function. The inner function "closes over" those variables and maintains a reference to them, even after the outer function has finished executing.

//Closures are useful because they allow functions to "remember" values from their outer scope, which can be used to create private variables, implement data hiding, and create functions that behave differently based on the values of their outer variables. Closures are commonly used in JavaScript for tasks such as event handling, as well as in libraries and frameworks for creating private methods and data.



//Here's a detailed explanation of how parent lexical objects work with several examples:
////Parent lexical objects are important in JavaScript because they allow functions to access variables and functions that are defined outside of their own scope, enabling powerful patterns like closures and higher-order functions. 


//1. Closures
//One of the most common use cases for parent lexical objects in JavaScript is closures. Closures allow you to access variables that are defined in an outer function from an inner function, even after the outer function has returned.

// A closure is a combination of a function and the lexical environment 

//Example:
//In general, a function that takes another function as an argument or returns a function as its result is called a higher-order function.
//num1() returns a function, num2(), as its result.
//num2() returns a function, num3(), as its result.
//num3() returns a function, num4(), as its result.
//num3() takes a function, num4(), as an argument and returns it as its result.
//So, num4 is passed as an argument to num3 in the sense that num3 takes num4 as an input and returns it as an output.


function num1(){
  const fun1 = 10;
  function num2(){
      const fun2 = 20 ;
      function num3(){
          const fun3 = 30 ;
          function num4(){
              const fun4 = 40;
              console.log(fun1+fun2+fun3+fun4);
          }
          return num4;
      }
      return num3();
  }
return num2();
}

const sum = num1();
console.log(sum);
sum();
//To make the inner function (sum() function) accessible from the global scope, you return the sum() function from within the myFunction() . Then you assign the  myFunction() to a variable and call that variable like a function.

function myFunction() {
  const x = 10;
  const y = 20;

  function sum() {
      console.log(x+y);
  }

  return sum;
}

const sumOfTwoNumbers  = myFunction();
console.log( sumOfTwoNumbers  );  //sum() {
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



//How can you use closures to implement a private method in JavaScript?
//You can create a closure that returns an object with a public method that has access to a private variable:

function person (name,age){

return  {
  setName: function(newName ){
    name = newName
  },

  getName : function(){
    return name;
  },

  setAge:function(newAge){
    age = newAge;
  },

  getAge:function(){
    return age;
  },

 }

}

const sakib = person();
sakib.setName("Jahidul");
sakib.setAge(21);
console.log(sakib.getName());
console.log(sakib.getAge());


//Here's an example of how closures can be used in real life development to create a private data store: 
//The given code is a classic example of closures in JavaScript, which is used in real-life development to
// encapsulate and manage or store  private methods or private  data  in a secure way.

function createDataStore() {

  const data = {};

  function setData(key,value){
    data[key] = value;
  }

  function getData(key){
    return data[key];
  }

  function clearData(){
    for(let key in data){
      delete data[key];
    }
  }

  return {
    setData :setData,
    getData :getData,
    clearData:clearData,
  }
}

const dataStore = createDataStore();

dataStore.setData("name","sakib");
dataStore.setData("age",22);
console.log(dataStore.getData("name"));
console.log(dataStore.getData("age"));
dataStore.clearData();
console.log(dataStore.getData("name"));

