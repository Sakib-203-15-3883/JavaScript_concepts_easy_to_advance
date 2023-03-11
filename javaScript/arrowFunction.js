const sum = (num1,num2)=>{ 
    return num1+num2;
};
console. log(sum(10,25));

//If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
const sum1 = (num1,num2)=> num1+num2;
console. log(sum1(15,25));

// if you have only one parameter, you can skip the parentheses as well:
const multiply = num => num*num;
console. log(multiply(6));

// anonymous arrow function 
((num1,num2)=>{
    console. log(num1 / num2) ;
})(50,10);

//  1.  As a callback function in an asynchronous operation, such as a fetch() request:
//  2. In an array method like map(), filter(), or reduce():
//  3.  In an event listener:
const numbers = [1, 2, 3, 4, 5]; 
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); 

//this keyword in arrow function 
//In a regular function, the value of this is determined by how the function is called. 
//When an arrow function is defined, it captures the value of this from its surrounding lexical scope. The lexical scope is the scope where the arrow function is defined, not where it is executed. This means that this in an arrow function refers to the same this value as the surrounding code.


//create an object and it,s contains 3 property which are a string and 2 function . one function will created using function declaration and another will created using arrow function . After that call that 2 function  outside from created object .

const product = {
    productId : 1, 
    productName: function(){
        console. log("TV");
    },
    productPrice : () => {
        console. log(50000);
    }
}

product.productName();
product.productPrice();

