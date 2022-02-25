
//primitive data types --> data direkt olarak variableda tutuluyor. string,number,boolean,null,undefined, symbols

//^string
const name = 'elif'
console.log(typeof name);

//^ number
const age = 34
console.log(typeof age);

//^ boolean
const isDefault = true
console.log(typeof isDefault);

//^ null
const car = null
console.log(typeof car);

//^ undefined
let test;
console.log(typeof test);

//^ symbols
const symb = Symbol()
console.log(typeof symb);


//reference data types --> data heap denilen bölgede tutulur. arrays, objects, functions, dates

//^ array
const hobbies = ['movies','walking']
console.log(typeof hobbies);

//^ object literal
const addres = {
    city:'istanbul',
    state:'IST'
}
console.log(typeof addres);

//^ date
const day = new Date();
console.log(typeof day);
