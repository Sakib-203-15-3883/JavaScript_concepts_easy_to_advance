function fun(num1, num2,...numbers){
const [value1,value2, value3,...values] = [num1,num2,...numbers];

console.log(value1);
console.log(value2);
console.log(values);

}

const numbers1 = [3,4];
const numbers2 = [5,6];

fun(1,2,...numbers1,...numbers2);