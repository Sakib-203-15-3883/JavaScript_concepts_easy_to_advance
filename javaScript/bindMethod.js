//JavaScript Function bind()
//In JavaScript, the bind method is used to create a new function that has a specific this value and, optionally, arguments that are bound to it. The new function is created without executing the original function, but instead, it returns a new function that has the same code as the original function, but with a fixed this value.
//With the bind() method, an object can borrow a method from another object.
//Note that the bind method does not immediately execute the function with the specified this value and arguments. Instead, it returns a new function that can be called later with any additional arguments if required.

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName =  person.fullName.bind(member);
console. log( fullName);
console. log( fullName());

//Example 
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

//Example
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const newFullName = person1.fullName.bind({ firstName: 'Jane', lastName: 'Doe' });
const fullName = newFullName();
console.log(fullName);