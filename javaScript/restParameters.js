//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
// receiving array as argument 

const addAll=(...numbers) =>{
let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total;
}

const ans =addAll(1,2,3,4,5,6,7,8,9);
console. log(ans);


