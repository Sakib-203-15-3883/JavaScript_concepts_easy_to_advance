//The Do While Loop
//This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.


//The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 10, len = cars.length, text = "";

 do{
  
  console. log(cars[i]);
  
  i++;
}while ( i < len );
