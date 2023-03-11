//Strings are immutable: Strings cannot be changed, only replaced.
//slice() method
let text = "Apple, Banana, Kiwi";//JavaScript counts positions from zero.
let part = text.slice(7, 13);//The method takes 2 parameters: start position, and end position (end not included). 
console. log(part);
//If you omit the second parameter, the method will slice out the rest of the string:
let text1 = "Apple, Banana, Kiwi";
let part1 = text.slice(7);
console. log(part1);
//If a parameter is negative, the position is counted from the end of the string:
let text2 = "Apple, Banana, Kiwi";
let part2 = text.slice(-12, -6);
console. log(part2);

//Replacing String Content using  replace() method
//The replace() method replaces a specified value with another value in a string:
//The replace() method does not change the string it is called on.
//The replace() method returns a new string.
//The replace() method replaces only the first match

let text3 = "Please visit Microsoft!";
let newText3 = text.replace("Microsoft", "W3Schools");//By default, the replace() method replaces only the first match:
console. log(text3);

//By default, the replace() method is case sensitive.
let text4 = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools");//replace() method is case sensitive
//in 2021, JavaScript String ReplaceAll()
let text5 = "I love cats. Cats are very easy to love. Cats are very popular."
newText5 = text.replaceAll("Cats","Dogs");
newText5  = text.replaceAll("cats","dogs");
console. log(text5);

//Converting to Upper and Lower Case
//toUpperCase

let text6 = "Hello World!";
let newText6 = text6.toUpperCase();
console. log(newText6);

//toLowerCase

let text7 = "Hello World!";       
let newText7 = text7.toLowerCase();
console. log(newText7);

//JavaScript String concat(). concat() joins two or more strings:
//The trim() method removes whitespace from both sides of a string: