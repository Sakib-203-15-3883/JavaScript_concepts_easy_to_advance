// create a function that takes an array and target value(number). out will be the index of target if target pressent in an array.


function findIndexOfArratElement(array,targetValue){

    for(let i=0; i<array.length;i++){
   
        if(array[i]===targetValue){
            return i;
        }
      
}
return -1;
}


let answer = findIndexOfArratElement([3,4,6,7,9], 9);
console. log(answer);


//Function Declarations

function multiplyTwoNumbers(number1,number2){
    return number1*number2;
}

  console. log(multiplyTwoNumbers(5,10));

  //Function Expressions

  const addTwoNumbers = function(number1,number2){
        return number1+number2;
  }

  console. log(addTwoNumbers(6,10));

  //Functions Can Be Used as Values
  //JavaScript functions can be used in expressions:function 
  
function myFunction(a, b) {
  return a * b;
}
let x = myFunction(4, 3) * 2;
console. log(x);


//Arrow Functions


const dividedTwoNumber = (num1, num2) => {
return num1/num2;
};

 let ans = dividedTwoNumber(50,5);
console. log(ans);



//Default Parameter Values
//If y is not passed or undefined, then y = 10.
function myFunction(x, y = 10) {
    return x + y;
  }
  console. log (myFunction(5));


  //The code inside a JavaScript function will execute when "something" invokes it.
