const items = ["TV","AC","Mobile","Car","Bike",25,30];

//Example: Find the length of an array
console. log(items.length);//7

//Example: Find the index of array element 
console. log( items.indexOf("Mobile"));     //2
console. log( items.indexOf("Me"));        // return -1 which means false

//Example 1 :accesing array element/value
let item = items[2];
console. log(item);//Mobile

//Example 2 : change the specific element(value/data) or modify of existing array
items[4] = "Bus";
console. log(items);//['TV', 'AC', 'Mobile', 'Car', 'Bus', 25, 30]

//Example 3 : write some objects inside an array and after that access the last  property value for each object which are inside an array and print that last property value
const products = [
    {productId : 1, productName : "TV", productPrice : 15000 },// for access first element in this array use index 0
    {productId : 2, productName : "AC", productPrice : 60000 },// for access second element in this array use index 1
    {productId : 3, productName : "Mobile", productPrice : 10000 },// for access Third element in this array use index 2
    {productId : 4, productName : "Car", productPrice : 500000 },// for access four element in this array use index 3

];
console. log(products[0]);//{productId : 1, productName : "TV", productPrice : 15000 }

console. log(products[0].productPrice);//15000
console. log(products[1].productPrice);//60000
console. log(products[2].productPrice);//10000
console. log(products[3].productPrice);//500000

// in the above , we only change the index value and run same code again and again . we need to follow dry. For solve this repetation problem , we use for loop . 
for(let i=0; i<products.length; i++ ){

    console. log (products[i].productPrice);// 15000   60000  10000 500000
}



//Arrays are generally described as "list-like objects";
//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
//array inside an array is called a multidimensional array.
//You can access an item inside an array that is itself inside another array by chaining two sets of square brackets together.


//Example:  Write a random array and array element contains  strings , numbers  and array(this array contains only numbers ) . After that access an item inside an array that is itself inside another array.
const random = [
    "Bike",
    "Car",
    [2,4,6,8,10],
    25000,
    30000,
]
console. log(random[2][4]);// 10


     //Example based on real life(3D array):   creat an array. That store customers (assume 3 coustomer ) information. Each customer contains customer name and order information. order information contains price and date . There will be lot's of order information.  complete this using 3D array. After that print random date from orders information which are also from customers information .


const customersInformation = [

    ["sakib",[
        [4000,"12/2/2023"],  [5000,"15/2/2023"],[8000,"22/3/2023"]
    ]
    ],
    
    
    ["mukit",[
        [8000,"4/03/2023"],  [8000,"4/04/2023"],[8000,"4/06/2023"]
    ],
    ],


    ["talha",[
        [12000,"7/3/2023"],  [12000,"7/1/2023"], [12000,"8/3/2023"]
    
    ]
    ],

];

const date = customersInformation [2] [1] [2] [ 1];
console. log(date);/// output :"8/3/2023"






//JavaScript Arrays
//dry=don't repeat yourself

//An array is a special variable, which can hold more than one value:
const cars = ["Saab", "Volvo", "BMW"];//It is a common practice to declare arrays with the const keyword.

//Accessing Array Elements
//You access an array element by referring to the index number:

let car = cars[0];//Array indexes start with 0.
console. log(car);

//Changing an Array Element

cars[0] = "Opel";
console. log(cars);

//Arrays are special kinds of objects.

//Because of this, you can have variables of different types in the same Array.

//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

cars.length ;  // Returns the number of elements//The length property is always one more than the highest array index.
cars.sort();   // Sorts the array

//Accessing the Last Array Element

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
console. log(fruit);

//Adding Array Elements
fruits.push("Lemon");
console. log(fruits);//add element in the last place of array


//The Difference Between Arrays and Objects
//In JavaScript, arrays use numbered indexes.  

//In JavaScript, objects use named indexes.