//the call method allows us to call a function with a specific this value
// we use call/apply/bind to attach object with function so that we can use same function for different object . 
//call() Parameters
//The call() method can take two parameters:
//thisArg - The thisArg is the object that the this object references inside the function func.
//arg1, ... argN (optional) - Arguments for the function func.
//Note: The difference between call() and apply() is that call() accepts an argument list, while apply() accepts a single array of arguments.
//The return value of the call method is the result of calling the function with the specified this value and arguments
//Note that if you invoke a function without any thisObj argument, then JavaScript considers this property to be a global object.

//Traditionally in JavaScript, you can have objects that have their own properties and methods. For example, object1 cannot use the methods of object2 and vice versa.there’s a way to overcome this restriction using call/apply/bind method



//With and Without Using call() Method
function add(a,b){
  return a+b;
}

const result = add(10,50);
console.log(result);
//Here, by default, the this inside the function is set to the global object.
const result1 = add.call(this,30,10);
console.log(result1);



// Passing Object as this Value in call()
const myObject = {
  firstName:"sakib",
  lastName: " al hasan"
};

function fullName(firstName1,lastName1,age){

  return this.firstName+this.lastNameage;
}

const x = fullName.call(myObject);
console.log(x);
 
 
 

 //The JavaScript call() Method
// In JavaScript all functions are object methods.
//If a function is not a part  of a JavaScript object, it is a function of the global object


// we say, a function is a  method when it was a part of object.
// so when we invoke (call ) a normal function then where is an object? There is a invisible object which is window object . example:     window.sum();




//Method Reuse
 const person = {
    
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }

  const person1 = {
    firstName:"sakib",
    lastName: "al hasan"
  }

  const person2 = {
    firstName:"mukit",
    lastName: "mosfiq"
  }
  
  // using this line , we will indentify where from  this keyword collected property. that is person1 object 
  console. log (person.fullName.call(person1));

 
//The call() Method with Arguments
const person10 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person20 = {
    firstName:"John",
    lastName: "Doe"
  }
  
 console. log ( person10.fullName.call(person20, "Oslo", "Norway"));


// practice
const person3 ={
  firstName:"sakib",
  lastName:"islam",
};

const person4 = {
  firstName:"mukit",
  lastName : " mosfiq",
};

function fullName (){
  return this.firstName + this.lastName;
}

const fullNameOfPerson4 = fullName.bind(person4);
console.log(fullNameOfPerson4);
console.log(fullNameOfPerson4());



//https://betterprogramming.pub/when-to-use-bind-call-and-apply-in-javascript-1ae9d7fa66d5