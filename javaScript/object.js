//Objects can be iterated over using a for...in loop or Object.keys(), while Maps have built-in iteration methods like forEach() and entries() that can be used to iterate over their key-value pairs.

// JavaScript does not guarantee any specific order for the properties of an object.That,s why , if you want on a specific order of properties in your code, you should consider using an alternative data structure such as an array or a Map object that guarantees the order of its elements.


//A car(which is an object) has properties like weight and color, and methods like start and stop:
//It is a common practice to declare objects with the const keyword.
//Objects are variables too. But objects can contain many values.
//Methods are actions that can be performed on objects.

const person = { 

    firstName:"sakib",
    lastName:"all hasan",
    age:23,
    eyeColor:"black",
    fullName : function() {
        return this.firstName + " " + this.lastName;// this refers to the current object . in this case person . 
      }
};
console.log(person);

function myFunction (person){
  console.log(person['age']);//23
}

myFunction(person);// we can pass an object to function  as a argument .

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

//Using the same method, an object’s property can be modified by assigning a new value to an existing property
dog["age"]=20;
console.log(dog['age']);

//Removing Object Properties using delete keyword 
delete dog['age'];
console.log(dog['age']);



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
  fname:" jahidul",
  lname:"islam",
  age: 25
};

//Why can we not use ‘.’ notation for accessing elements in the for…in loop?
//We cannot use the dot notation for accessing elements in the for...in loop because the dot notation requires the property name to be known beforehand, whereas in the for...in loop, the property name is a variable. Therefore, we must use the bracket notation to access the property values.

for(let x in person2){
  console. log(x);// iterate over a key in object 
}
for(let x in person2){
  console. log(person2[x]);// get property value using property name/key 
}

// we can use object.keys() method to iterate key and store in a new array.

const newPerson = Object.keys(person2);
console. log(newPerson); // get a new array 



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

const student = {

  firstName:"sakib",
  lastName:"all hasan",
  cars: [
          {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
          {name:"BMW", models:["320", "X3", "X5"]},
          {name:"Fiat", models:["500", "Panda"]}
  ],
  
}

console. log(student.cars[2].models[1]);


