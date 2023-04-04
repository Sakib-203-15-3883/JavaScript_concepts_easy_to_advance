// #1  Basic explanation about the Map 

const products = new Map();
console. log(products); 

// #2  Adding values (data)  to a map

    // 1. Manually adding values to a map

    products.set("TV","50k");
    products.set("AC","75k");
    products.set("Mobile","30k");

    console. log(products);
    
    //2. initialize a map from an 2d array

    const arr = [
        ["item1","TV"],//0
        ["item2","AC"],//1
        ["item3","Mobile"]//2
    ];

    console. log(arr);

    const items = new Map(arr);
    console. log(items);

    //3. initialize a map from an object 

    const students = {

    student1:{ studentId : 3883, name:"sakib" , age :21},
    student2:{ studentId : 3884, name:"talha",age:22},
    student3:{ studentId : 3888, name:"jahidul",age:23},

};

    console. log(students);
    console. log(students.student3.name);

    const studentsForMap = new Map(Object.entries(students));
    console. log(studentsForMap);

console.log(studentsForMap.get("student3")); 
console.log(studentsForMap.get("student3").name);


    //4. Initialize a map with values from another map 

    const map5 = new Map([
        ['key1', 'value1'],
        ['key2', 'value2'],
        ['key3', 'value3']
      ]);
console. log(map5);
      
      const map6 = new Map(map5); 
      console. log(map6);
      console.log(map6.get('key1')); 
      console.log(map6.get('key2')); 
      console.log(map6.get('key3')); 

// #3 Comparing a map with an array and object

const map = new Map();

map.set('1', 'String one');
map.set(1, 'This will be overwritten');
map.set(1, 'Number one');
map.set(true, 'A Boolean');
console. log(map);

const objAsKey = { "name": 'sakib' };
const map1 = new Map();
map1.set(objAsKey, 'What will happen?');
console. log(map1);

const map2 = new Map();
map2.set({}, 'One');
map2.set({}, 'Two');
console. log(map2);


const map3 = new Map();
const obj = {};
map3.set(obj, 'One');
map3.set(obj, 'Two');
console. log(map3);


// #4  

    //   1. convert a map to a 2 dimensional array

    const studentsForArray = Array.from(studentsForMap);
    console. log(studentsForArray);
    
    console. log (studentsForArray[2][1].name );

    //   2. convert a map to an object 

    const studentsForObject = Object.fromEntries(studentsForMap);
    console. log(studentsForObject);

// #5 Iterate through a Map object

    // 1. Using  the Map.forEach()  method

    const studentInformation1 = new Map([
        ["id1",3883],
        ["id2",3884],
        ["id3",3884],
      ]);

      console.log(studentInformation1);

    studentInformation1.forEach((value, key)=>{
        console. log(`${value} ${key}`)
      })

    // 2. for...of loop  with destructuring 

    const products1 = new Map([
        ["TV","50k"],
        ["AC","80k"],
        ["Mobile","15k"],
    ]);

    for(let product of products1 ){
        console. log(product);
    }

    for(let [product,price] of products ){
        console. log(`product=${product} price=${price}`);
      }

//  #6 Iterating over the Keys or Values or both of a Map object

    //1. Using  the Map.keys()  method
    //2. Using  the Map.values()  method
    //3. Using the Map.entries() method

    const studentInformation = new Map([
        ["id1",3883],
        ["id2",3884],
        ["id3",3884],
      ]);
      console.log(studentInformation);
      console.log(studentInformation.keys());
      console. log(studentInformation.values());
      console. log(studentInformation.entries()); 

// #7   

    //1. has() method  
    //2. delete() method 
    //3. clear() method 

    const productsForMap  = new Map([
        ["product1", "Book"],
        ["product2", "Pen"],
        ["product3", "speaker"]
      ]);
      console. log(productsForMap.has("product2"));
      console. log(productsForMap.has("sakib"));
      console. log(productsForMap.delete("product3"));
      console. log( productsForMap); 
      productsForMap.clear();
      console. log( productsForMap);

// #9   when we use object and when we use map

// #10   End 