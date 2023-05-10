//By default, JavaScript is a synchronous, single threaded programming language. This means that instructions can only run one after another, and not in parallel.it,s a problem . so,To properly implement  asynchronous behavior we use Callbacks, Promises (Async/Await)
//now we say , JavaScript is an asynchronous language

////Callbacks
// A callback function is a function that is passed as an argument to another function and is executed by that function when a certain event or condition occurs.
//This method was very efficient, but only to a certain point. Sometimes, developers have to make multiple calls to different sources in their code. In order to make these calls, callbacks are being nested until they become very hard to read or maintain. This is referred to as Callback Hell.

//problem of callback: 1.Callback Hell  2. inversion  of control . using promises we can solve this . because , we attached promise with function  .

// in js , asynchronous behaveior exists just because of callback exist .

//Let's say you are at a restaurant and you have ordered a dish. The waiter tells you that the dish you have ordered will take some time to prepare and will be served to you as soon as it is ready. Now, you have two options:
//You can wait at the table and do nothing until the dish is served.
//You can go back to your work or other tasks and do something else until the dish is served, but you need to be informed when the dish is ready.
//In this scenario, you can think of yourself as the main program or function that has ordered the dish, and the dish preparation time as the delay or asynchronous operation. The waiter is the callback function that will inform you when the dish is ready.

//Let's write code to simulate this scenario:
console.log("now, I am in the restaurant to eat some food ");

function orderDish(callback) {
  console.log("Order received. Cooking your dish...");
  const eatDish = callback;

  setTimeout(function () {
    const dish = "pasta";
    console.log(`${dish} is prepared enjoy ur ${dish} `);
    eatDish(dish);
  }, 5000);
}
function eatDish(dish) {
  console.log(`Eating ${dish}`);
}
orderDish(eatDish);

console.log("writing some code");
console.log("watching drama at the restaurant ");

//example
function getData(callback) {
  setTimeout(function () {
    const data = { name: "sakib", age: 23 };
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(`Name: ${data.name}, Age: ${data.age}`);
}

getData(displayData);

//example:

function getData(callback) {
  displatData = callback;
  setTimeout(function () {
    const person = { name: "sakib", age: 21 };
    displatData(person);
  }, 5000);
}

function displatData(informationOfPerson) {
  console.log(informationOfPerson.person);
  console.log(informationOfPerson.age);
}

getData(displatData);

// promises
//In JavaScript, a Promise is a special object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is a way to write cleaner and more readable code for handling asynchronous operations and to avoid callback hell. A Promise object represents a value that may not be available yet, but will be resolved at some point in the future. It has three states:
////Pending: The initial state of a promise, neither fulfilled nor rejected.
//Fulfilled: The state of a promise representing a successful operation, with a resulting value.
//Rejected: The state of a promise representing a failed operation, with a reason for the failure.
//Once a promise is fulfilled or rejected, it will remain in that state and cannot transition to any other state. Promises can be chained together using the then() method to handle their eventual values or errors.

//We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
// Nesting can be done in Promises and with the help of that we can return the values in each individual chain. promise result is immutable

//In the code , the new Promise() constructor takes a single argument, which is a function called the executor function. This executor function takes two parameters, resolve and reject, which are functions that can be called to change the Promise's state to either fulfilled or rejected, respectively.

//The two arguments (resolve and reject) are pre-defined by JavaScript.

//We will not create them, but call one of them when the executor function is ready.

//Very often we will not need a reject function.

//in given example :
//1 Print "hello1" to the console
//2 Create a Promise object and define its executor function
//3 Print "hello2" to the console
//4 Define a function askMom that uses the Promise to fetch a phone and logs the phone's name and color to the console if the Promise is fulfilled or logs the reason for rejection to the console if the Promise is rejected
//5 Call the askMom function
//6 Print "hello3" to the console
//7 Print "hello4" to the console

console.log("hello1");
//1. Creating a Promise
const isMomHappy = false;
const willGetPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      name: "samsung",
      color: "black",
    };

    resolve(phone);
  }

  if (!isMomHappy) {
    const reason = new Error("momIsNotHappy");

    reject(reason);
  }
});

console.log("hello2");
//Consuming Promise
////problem of callback: 1.Callback Hell  2. inversion  of control . using promises we can solve this . because , we attached promise with function using then() method .
//then() method is used to attach a callback function that will be called when the Promise is fulfilled (i.e., when the asynchronous operation is completed). The callback function takes the resolved value of the Promise as its argument.

const askMom = () => {
  willGetPhone
    .then((phone) => {
      console.log(phone.name + phone.color);
    })

    .catch((reason) => {
      console.log(reason);
    });
};
askMom();
console.log("hello3");
console.log("hello4");

// chain promeses
//Chaining promises is a powerful feature of the JavaScript Promise , where the output of one operation becomes the input of the next.
console.log("hello chain");
const condition = 24;

const check = new Promise((resolve, reject) => {
  if (condition % 2 === 0) {
    const message = `${condition} is a even number`;
    const value = 25;
    resolve({ message, value });
  }

  if (condition % 2 !== 0) {
    const reason2 = new Error(`${condition} is not a even number`);
    reject(reason2);
  }
});

const access = () => {
  check
    .then(({ message, value }) => {
      console.log(message);
      const add = value + 10;
      return add;
    })
    .then((add) => {
      const add1 = add + 10;
      return add1;
    })
    //When we chain multiple then() methods, the output of one then() method is passed as an input to the next then() method. This way, we can perform a series of asynchronous operations one after the other. This technique is also called "chaining promises".
    .then((add1) => {
      const add2 = add1 + 5;
      console.log(`Final value is ${add2}`);
    })

    .catch((reason2) => {
      console.log(reason2);
    });
};
console.log("hello chain2");
access();
console.log("hello chain3");

//Async/await
//There are several benefits to using async/await compared to promises:
//we cannot use async/await without defining a promise or a function that returns a promise. async/await is simply a syntactic sugar that simplifies the way we write asynchronous code using Promises. When we use async/await, we are actually working with Promises under the hood.that,s mean When we use async/await, we are still dealing with asynchronous code, but instead of using the .then() method to handle the results of the asynchronous operation, we use the await keyword to pause the execution of the code until the promise resolves.The reason why async/await works with Promises is that async functions always return a Promise. When we use the await keyword inside an async function, it waits for the Promise to resolve and then returns the result. We can then use this result to pass it to the next await expression, as if we were chaining Promises using .then().

//. If a non-Promise value is returned from an async function, it is automatically wrapped in a Promise. that,s mean async function returns a promise .So, we don't need to manually wrap the returned value in a Promise object. This behavior makes it easier to work with async functions and simplifies the code.

async function greet() {
  return "Hello, world!";
}

greet().then((result) => {
  console.log(result); // Output: "Hello, world!"
});

// we can achieve chaining promises with async/await syntax.
// when we use await with a Promise, it blocks the code execution until the Promise is resolved or rejected. Once the Promise is resolved, the await expression returns the resolved value. This value can be assigned to a variable and then used as an input to the next await expression.

// returning in an async function is the same as resolving a promise. Likewise, throwing an error will reject the promise.

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });
}

async function processData() {
  const data = await getData();
  const result = await multiplyByTwo(data);
  return result;
}

async function multiplyByTwo(number) {
  return number * 2;
}

processData().then((result) => {
  console.log(result); // Output: 20
});

//example:
console.log("hello chain");

const condition2 = 24;

const check2 = new Promise((resolve, reject) => {
  if (condition % 2 === 0) {
    const message = `${condition} is an even number`;
    const value = 25;
    resolve({ message, value });
  } else {
    const reason2 = new Error(`${condition} is not an even number`);
    reject(reason2);
  }
});

const access2 = async () => {
  try {
    const { message, value } = await check;
    console.log(message);
    const add = value + 10;
    const add1 = add + 10;
    const add2 = add1 + 5;
    console.log(`Final value is ${add2}`);
  } catch (error) {
    console.log(error);
  }
};

console.log("hello chain2");
access2();
console.log("hello chain3");

//https://www.freecodecamp.org/news/asynchronous-javascript-explained/
