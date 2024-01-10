//To find the length of a string, use the built-in length property
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let newText = text.length;
console.log(newText);

//Escape Characterd
let text2 = 'We are the so-called "Vikings" from the north.';
console.log(text2);

//You can also break up a code line within a text string with a single backslash:

//document.getElementById("demo").innerHTML = "Hello \
//Dolly!";

//Note the difference between (x==y) and (x===y).\

let num1 = "10";
let num2 = 10;

console.log(num1 == num2); // result true . cheack only value
console.log(num1 === num2); // result false . cheack value and data type.

//Comparing two JavaScript objects always returns false.
let x = new String("John");
let y = new String("John");
