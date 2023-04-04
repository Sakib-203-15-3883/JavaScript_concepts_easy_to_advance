//Maps, which are ordered collections of key/value pairs, and Sets, which are collections of unique values.

// JavaScript does not guarantee any specific order for the properties of an object.That,s why , if you want on a specific order of properties in your code, you should consider using an alternative data structure such as an array or a Map object that guarantees the order of its elements.


//A Map is a collection of key/value pairs that can use any data type as a key and can maintain the order of its entries.
//ordered collections of key/value pairs
//Map object holds key-value pairs. Keys are unique in a Map’s collection.
// A key(property name) of an object must be a string(we use 99%) or a symbol(we use 1%) . But in map object, Keys and values of a Map can be any values.  
//Maps have elements of both Objects (a unique key/value pair collection) and Arrays (an ordered collection),

//Objects can be iterated over using a for...in loop or Object.keys(), while Maps have built-in iteration methods like forEach() and entries() that can be used to iterate over their key-value pairs.

const products = new Map();
console. log(products);  //empty Map
//add values to a products with the set() method. The first argument will be the key, and the second argument will be the value.
//The Map.set method takes a key and a value as parameters and adds the key-value pair to the Map object.
//The Map.set() method returns the Map object
products.set("TV","10k");
products.set("AC","15k");
products.set("Mobile","30k");



//Here we begin to see how Maps have elements of both Objects and Arrays. Like an Array, we have a zero-indexed collection, and we can also see how many items are in the Map by default. Maps use the => syntax to signify key/value pairs as key => value
console. log(products);// Map(3) 0:{'key1' => 'value1'}      1:{'key2' => 'value2'}     2:{'key3' => 10}



// now iterate the above map object 
////When iterating a Map object, each iteration returns a 2-member array of [key, value].
for(let product of products ){
    console. log(product);// ['TV', '10k']  ['AC', '15k']                          ['Mobile', '30k']
}

// receive that iteration array value sperately using destructuring
for(let [product,price] of products ){
  console. log(`product=${product} price=${price}`);// product=Mobile price=30k
}


// initialize values on a Map from array
//We passed a two-dimensional array to the Map() constructor to initialize the Map with values.
//The first element in each nested array is the key and the second is the value.
const items = new Map([
    ["item1","TV"],
    ["item2","AC"],
    ["item3","Mobile"],
]);
console. log(items); //0:{"item1" => "TV"}  1:{"item2"=> "AC"}2:{"item3" => "Mobile"}      size: 3



// convert an nested object to a map . using build in Object.entries() method . After that , access last nested value from map . after that convert that map into object and array .

const students = {
  student1:{ studentId : 3883, name:"sakib" , age : 21 },
  student2:{ studentId : 3884, name:"mukit" , age : 22 },
  student3:{ studentId : 3888, name:"talha" , age : 23 },
};
console. log(students);
console. log(students.student3.name);//talha

////convert object  into map
//The Object.entries() method returns an array of key-value pairs that can be used to initialize a Map.
//The Object.entries method returns a two-dimensional array, where each nested array contains a key and a value.
//The Map constructor expects an array of key-value pairs as a parameter, so the Object.entries() method does exactly what we need.
const studentsForMap = new Map(Object.entries(students));
console. log(studentsForMap);

// now access the name for student3 from map
//The Map.get method takes a key as a parameter and returns the corresponding value
console.log(studentsForMap.get("student3")); //{studentId: 3888, name: 'talha', age: 23}
console.log(studentsForMap.get("student3").name);// talha

//convert that map into a new object
const studentsForObject = Object.fromEntries(studentsForMap);
console. log(studentsForObject);

////convert that map into a new array
const studentsForArray = Array.from(studentsForMap);
console. log(studentsForArray);

console. log (studentsForArray[2][1].name ); // talha 










//a map with non-string keys:
//Objects change all keys to strings.
const map = new Map()

map.set('1', 'String one')
map.set(1, 'This will be overwritten')
map.set(1, 'Number one')
map.set(true, 'A Boolean')


//creating an Object and setting it as the key of a Map:
// Create an object
const objAsKey = { foo: 'bar' }

const map1 = new Map()

// Set this object as the key of a Map
map1.set(objAsKey, 'What will happen?')


// adding two unique Objects with the same value will create a Map with two entries:

// Add two unique but similar objects as keys to a Map
map.set({}, 'One')
map.set({}, 'Two')
//Output: Map(2) {{…} => "One", {…} => "Two"}

//But using the same Object reference twice will create a Map with one entry.

// Add the same exact object twice as keys to a Map
const obj = {}
map.set(obj, 'One')
map.set(obj, 'Two')
//Output: Map(1) {{…} => "Two"}









//Getting and Deleting Items from a Map
// perform Build in  has() method , get()method , delete() method and clear() method on a map.
const productsForMap  = new Map([
  ["product1", "Book"],
  ["product2", "Pen"],
  ["product3", "speaker"]
]);
console. log(productsForMap.has("product2"));//true
console. log(productsForMap.has("sakib"));//false
console. log(productsForMap.get("product2"));//Pen
console. log(productsForMap.delete("product3"));//true
console. log( productsForMap);//Map(2) {'product1' => 'Book', 'product2' => 'Pen'}
 productsForMap.clear();
 console. log( productsForMap);//Map(0) {size: 0}







//Keys, Values, and Entries for Maps
//The keys(), values(), and entries() methods all return a MapIterator, which is similar to an Array in that you can use for...of to loop through the values.
// perform Build in  keys() method , values()method ,  and entries() method on a map.
const studentInformation = new Map([
  ["id1",3883],
  ["id2",3884],
  ["id3",3884],
]);
console.log(studentInformation);
console.log(studentInformation.keys());//{'id1', 'id2', 'id3'}
console. log(studentInformation.values());//{3883, 3884, 3884}
console. log(studentInformation.entries()); //{'id1' => 3883, 'id2' => 3884, 'id3' => 3884}


// apply build in forEach() method on a map
studentInformation.forEach((value, key)=>{
  console. log(`value=${value} key=${key}`)
})// value=3883 key=id1    value=3884 key=id2   value=3884 key=id3


//When to Use Map
//Summing up, Maps are similar to Objects in that they hold key/value pairs, but Maps have several advantages over objects:

//Size - Maps have a size property, whereas Objects do not have a built-in way to retrieve their size.
//Iteration - Maps are directly iterable, whereas Objects are not.
//Flexibility - Maps can have any data type (primitive or Object) as the key to a value, while Objects can only have strings.
//Ordered - Maps retain their insertion order, whereas objects do not have a guaranteed order.


// How do you merge two maps together in JavaScript?
// you can use the Object.assign() method. This method will take all of the key-value pairs from one map and add them to the other, overwriting any duplicate keys.
// Do Maps support concurrency in JavaScript? If not, why?
//No, Maps do not support concurrency in JavaScript. The reason for this is that Maps are designed to be used as a data structure, and as such, they are not designed to be accessed by multiple threads simultaneously. If you need to use a data structure that supports concurrency, you should look into using a different data structure, such as an Array or a Set.