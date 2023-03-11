//A car(which is an object) has properties like weight and color, and methods like start and stop:
//It is a common practice to declare objects with the const keyword.
//Objects are variables too. But objects can contain many values.
//Methods are actions that can be performed on objects.
const person={

    firstName:"sakib",
    lastName:"all hasan",
    age:23,
    eyeColor:"black",
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
};

//Accessing Object Properties
//2 ways 
//objectName.propertyName
//objectName["propertyName"]
console. log(person.firstName);
console. log(person["firstName"]);

//Accessing Object Methods
//objectName.methodName()
console. log( person.fullName());

//This example creates an empty JavaScript object, and then adds 4 properties:

const dog = {};

dog.name="tomy";
dog.age=50;
dog.eyeColor="black";

dog.run = function() {
  return "25 km/h";
};

console. log( dog.run ());
console. log(dog["name"]);
console. log(dog["age"]);
console. log(dog["eyeColor"]);

//Objects are mutable: They are addressed by reference, not by value.
//Any changes to x will also change person, because x and person are the same object.

const person1 = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

const x = person1;
x.age = 10;

console. log(person1["age"]);//10
console. log(x["age"]);//10

//JavaScript for...in Loop
const person2 = {
  fname:" John",
  lname:" Doe",
  age: 25
};

for(let x in person2){
  console. log(person2[x]);
}

//Nested Objects

const myObj = {
  name: "John",
  age: 30,
  cars: {
  car1: "Ford",
  car2: "BMW",
  car3: "Fiat"
  }
}

console. log(myObj.cars["car1"]);
//Nested Arrays and Objects
//Values in objects can be arrays, and values in arrays can be objects:

const studrnt = {

  firstName:"sakib",
  lastName:"all hasan",
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ],
  
}
//JavaScript Object Methods

