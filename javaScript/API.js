//https://www.javascripttutorial.net/javascript-fetch-api/

//The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

//Sending a Request : The fetch() requires only one parameter which is the URL of the resource that you want to fetch:

//Sending a Request:

// let response = fetch(url);

//The fetch() method returns a Promise so you can use the then() and catch() methods to handle it:

// fetch(url)
//   .then((response) => {
//     // handle the response
//   })
//   .catch((error) => {
//     // handle the error
//   });

// Reading the Response:

// Besides the text() method, the Response object has other methods such as json(), blob(), formData() and arrayBuffer() to handle the respective type of data.

// JavaScript Fetch API example:Use the fetch() method to return a promise that resolves into a Response object. To get the actual data, you call one of the methods of the Response object e.g., text() or json(). These methods resolve into the actual data.

const display = document.querySelector("#display");

console.log(display);

// function getData() {
//   fetch("http://127.0.0.1:5500/data.txt")
//     .then((res) => {
//       console.log(res);
//       return res.text();
//     })
//     .then((data) => {
//       display.innerHTML = data;
//     });
// }

// using async/ await keyword

// async function a() {
//   const res = await fetch("http://127.0.0.1:5500/data.txt");
//   return res;
// }

async function getData() {
  const res = await fetch("http://127.0.0.1:5500/data.txt");
  const data = await res.text();
  display.innerHTML = data;
}
