//Maps, which are ordered collections of key/value pairs, and Sets, which are collections of unique values.
//Sets, which are collections of unique values.
//sets (it,s iterable)
//store data
//unique items only(no dublicates allowed)
//no index based access
//order is not guaranteed





//Pass an iterable to the Set() constructor to initialize a Set with values.
//When an iterable is passed to the Set constructor, all elements of the iterable get added to the new Set.
//The most commonly used iterables to initialize a Set are array, string and another Set.
const set1 = new Set([6,6,7,8,9,7]);
console. log(set1); //{6, 7, 8, 9}
// convert an array to a Set by passing the array directly to the Set constructor.
const array = [1,2,2,3,4,5,5];
const set = new Set(array);
console. log(set);   //{1, 2, 3, 4, 5}





//now,  you need to use multiple arrays when initializing a Set, using  the spread syntax (...)   .
const idForStudents = ["3883","3884","3885"];
const idForTeachers = ["1000","1001"];

const set3 = new Set([...idForStudents,... idForTeachers]);
console. log(set3); // {'3883', '3884', '3885', '1000', '1001'}





// manually add values to the Set upon initialization with multiple arrays.
const idForStudents1 = ["3883","3884","3885"];
const idForTeachers1 = ["1000","1001"];

const set4 = new Set(["student", ...idForStudents1,"teacher",...idForTeachers1]);
console. log(set4);// expected output 







//You can also iterate over an array and manually add each item to a new Set. using 1. for of loop and 2. forEach() method 
//1. for of loop
const idForStudents2 = ["3883","3884","3885"];
const set5 = new Set();

for(const idForStudent of idForStudents2 ){

    set5.add(idForStudent);
}
console. log(set5); // {'3883', '3884', '3885'}
console. log(set5.has("3885")); // true
// 2. forEach() method 
const idForStudents3 = ["38","39","35"];
const set6 = new Set();

idForStudents3.forEach((idForStudent)=>{
    set6.add(idForStudent);
})
console. log(set6); //{'38', '39', '35'}
console. log(set6.has("31"));   //false


// From array of object 
const products1 = [
    {productId:38, productName:"AC", price:"60k"},
    {productId:39, productName:"TV", price:"80k"},
    {productId:40, productName:"Mobile", price:"90k"},
];

const set7 = new Set();
products1.forEach((product)=>{
    set7.add(product.productName);
});
console. log(set7); // {'AC', 'TV', 'Mobile'}






//Initialize a Set with values from an array of objects
const products2 = [
    {productId:38, productName:"AC", price:"60k"},
    {productId:39, productName:"TV", price:"80k"},
    {productId:40, productName:"Mobile", price:"90k"},
];
const set8 = new Set(products2.map((product)=>{
   return product.productName;
}));
console. log(set8); //{'AC', 'TV', 'Mobile'}





//Initializing a Set with Values using a String
const string = "sakib";
const set9 = new Set(string);
console. log(set9); // {'s', 'a', 'k', 'i', 'b'}
const set10 = new Set("jahidul");
console. log(set10); //  {'j', 'a', 'h', 'i', 'd', …}




// Initializing a Set with values using another Set

const set11 = new Set(['sakib','rakib']);
const set12 = new Set(["Mukit",...set11,"talha"]); // {'Mukit', 'sakib', 'rakib', 'talha'}
console. log(set12);


//Manually adding values: you need to iterate over a collection of items and conditionally add values to the Set or process the data in other ways before adding the values to the Set.

const array10 = [1,2,3];
const set13 = new Set();

for(const arr of array10){
    set13.add(arr+10);
}

console. log(set13);// {11, 12, 13}






//when we have unique values then we use sets to manipulate data . 
// extract unique value from an given array using set 
const ids = [1,3,2,4,3,5,6,4,5,7,6,7];
const uniqueId = new Set(ids);
console. log(uniqueId);//{1, 3, 2, 4, 5, …}
console. log(ids );  // [1, 3, 2, 4, 3, 5, 6, 4, 5, 7, 6, 7]

//find the length of sets(uniqueId).
let length = 0;

for(let id of ids){
    length++;
}
console. log(length ); //12



// Set can be converted into an Array with one line of code:
const set14 = new Set([1,2,3,4,5]);
const array11 = [...set14];
console. log(array11); // [1, 2, 3, 4, 5]
//Set has many of the same methods and properties as Map, including delete(), has(), clear(), and size.
set14.delete(4);
console. log(set14);//{1, 2, 3, 5}
set14.clear();
console. log(set14); // {size: 0}


//Keys, Values, and Entries for Sets
//This means that keys() and values() will both return the same Iterator, and entries() will return the value twice. It makes the most sense to only use values() with Set

const set15 = new Set([1,2,3,3,4,5,5]);
console.log(set15.values());//{1, 2, 3, 4, 5}
console.log(set15.entries());//{1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5}



//Both forEach() and for...of can be used on Set. First, let’s look at forEach() iteration:

const set16 = new Set([1,2,3,4,5]);
set16.forEach((set)=>{
    console.log(set);//// accepted output 
});
for(let set of set16){
    console.log(set); // accepted output 
}



//When to Use Set
//Set is a useful addition to your JavaScript toolkit, particularly for working with duplicate values in data.
//In a single line, we can create a new Array without duplicate values from an Array that has duplicate values.

const array12 = [1,2,3,3,4,5,4,5,5,2,3,4];
const set17 = new Set(array12);
const array13 = [set17];
console.log(set17); // {1, 2, 3, 4, 5}