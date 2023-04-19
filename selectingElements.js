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

const myDiv = document.getElementById("my-div");
console.log(myDiv.textContent);
myDiv.style.backgroundColor = "skyblue";

// / 2.querySelector
