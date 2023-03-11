//In JavaScript, functions are objects. so, we pass objects and functions to functions as argument.
//JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

// write a function which is executed after 3 seconds . use buildIn setTimeout() method . for simplicity you may use arrow function 
setTimeout((()=>{ 
    console. log("hello print after 3 seconds ");
}),3000);