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
    firstName:"John",
    lastName: "Doe"
  }



  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // using 37 line , we will indentify where from  this keyword collected property. that is person1 object 
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
