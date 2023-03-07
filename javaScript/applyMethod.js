//   //The JavaScript apply() Method

//The Difference Between call() and apply()
//The difference is:

//The call() method takes arguments separately.

//The apply() method takes arguments as an array.

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