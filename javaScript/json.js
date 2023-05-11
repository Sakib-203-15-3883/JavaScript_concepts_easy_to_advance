// JSON (JavaScript Object Notation) is a text-based data exchange format. It is a collection of key-value pairs where the key must be a string type, and the value can be of any of the following types:

// Number
// String
// Boolean
// Array
// Object
// null

// Valid JSON data can be in two different formats:

// A collection of key-value pairs enclosed by a pair of curly braces {...}. You saw this as an example given.

// {
//     "name": "Alex C",
//     "age": 2,
//     "city": "Houston"
// }

// A collection of an ordered list of key-value pairs separated by comma (,) and enclosed by a pair of square brackets [...]. See the example below:

// [
// 	{
//         "name": "Alex C",
//         "age": 2,
//         "city": "Houston"
// 	},
//     {
//         "name": "John G",
//         "age": 40,
//         "city": "Washington"
// 	},
//     {
//         "name": "Bala T",
//         "age": 22,
//         "city": "Bangalore"
// 	}
// ]

// How to Convert JSON Data to a JavaScript Object: To convert JSON data into a JavaScript object, use the JSON.parse() method. It parses a valid JSON string into a JavaScript object.

const userJSONData = `{
    "name": "Alex C",
    "age": 2,
    "city": "Houston"
}`;

const userObj = JSON.parse(userJSONData);
console.log(userObj);

// How to Convert a JavaScript Object to JSON Data:  To convert a JavaScript object into JSON data, use the JSON.stringify() method.

const userObj2 = {
  name: "Alex C",
  age: 2,
  city: "Houston",
};

const userJSONData2 = JSON.stringify(userObj2);
console.log(userJSONData2);

// Accessing JSON Data

async function data() {
  const resolve = await fetch("data.json");
  const data = await resolve.json();
  console.log(data[2].gender);
  console.log(data[0].name);
}

data();
