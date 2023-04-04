//The JavaScript apply() Method
//The Difference Between call() and apply()
//The difference is:
//The call() method takes arguments separately (n times).
//The apply() method takes 2'nd argument as an array.
//The return value of the apply method is also the result of calling the function with the specified this value and arguments.


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
  
  // This will return "John Doe":
  console. log (person.fullName.apply(person2));


  //The apply() Method with Arguments

  const person10 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person11 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console. log (person10.fullName.apply(person11, ["Oslo", "Norway"]));