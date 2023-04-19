// Finding HTML Elements
// The document object is a property of the window object, and it represents the HTML document that is currently loaded in the browser window or tab. When the browser loads an HTML page, it creates a document object that represents the page's contents, and this object is accessible through the window object.The DOM represents an HTML document as a tree of nodes.

// Any node has relationships to other nodes in the DOM tree. The relationships are the same as the ones described in a traditional family tree. For example, <body> is a child node of the <html> node, and <html> is the parent of the <body> node.The <body> node is the sibling of the <head> node because they share the same immediate parent, which is the <html> element.

// 1.getElementById

// The document.getElementById() method returns an Element object that represents an HTML element with an id that matches a specified string.

// If the document has no element with the specified id, the document.getElementById() returns null.

// Because the id of an element is unique within an HTML document, the document.getElementById() is a quick way to access an element.

// Unlike the querySelector() method, the getElementById() is only available on the document object, not other elements.

// The following shows the syntax of the getElementById() method:

// const element = document.getElementById(id);

// In this syntax, the id is a string that represents the id of the element to select. The id is case-sensitive. For example, the 'root' and 'Root' are totally different.

// The id is unique within an HTML document. However, HTML is a forgiving language. If the HTML document has multiple elements with the same id, the document.getElementById() method returns the first element it encounters.

// In the example above, getElementById is a method, while innerHTML is a property.

const myDiv = document.getElementById("my-div");
console.log(myDiv.textContent);
myDiv.style.backgroundColor = "skyblue";

//2.getElementsByTagName

// HTML collection and an HTML object are both used to represent elements in an HTML document, but they differ in their properties and methods.

// An HTML collection is an array-like object that contains a collection of HTML elements that match a specific selector. For example, getElementsByTagName() and getElementsByClassName() return HTML collections. HTML collections are live, which means that they are automatically updated when the DOM is changed.

// On the other hand, an HTML object is a single element that is represented as a JavaScript object. For example, getElementById() returns an HTML object. HTML objects are not live, which means that they do not update automatically when the DOM is changed.

const x = document.getElementById("my-div");
const y = x.getElementsByTagName("h2");
console.log(y);
console.dir(x);
console.log(x.innerHTML);

x.innerHTML = "heading1.0";

// 3. getElementsByClassName()

//HTML collections have a length property, which represents the number of elements in the collection.

const section4 = document.getElementsByClassName("section4");

console.log(section4);

// 4. CSS Selectors: If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.

const a = document.querySelectorAll("p.section4");
// above This example returns a list of all <p> elements with class="intro".

// Changing HTML:document.getElementById(id).innerHTML = new HTML

document.getElementById("p1").innerHTML = "what,s up";

// Changing the Value of an Attribute: document.getElementById(id).attribute = new value

document.getElementById("img1").src = "random images/image3.jfif";

// Changing CSS: document.getElementById(id).style.property = new style

document.getElementById("Heading").style.color = "blue";

// DOM Events : HTML DOM allows JavaScript to react to HTML events:

function changeText(id) {
  id.innerHTML = "Ooops!";
}
