
let val;

//number to string
val = 2;
val = String(222);
val = String(2+2);

//boolean to string
val = String(true)

//date to string
val = String(new Date());

//array to string
val = String([1,3,4])

//toString()
val = (5).toString();


//string to numbers
val = Number('4');
val = Number(true) 
val = Number(false)
val= Number(null)
val = Number('Hello') //Nan = not an number
val = Number([1,2,3]) //Nan = not an number

val = parseFloat('100.49')
val = parseInt('100')



console.log(val);
console.log(typeof val)
//console.log(val.length)
console.log(val.toFixed(2))

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log(sum)
console.log(typeof sum)

const val3 = '5';
const val4 = '6';
const sum2 = val3 + val4;
console.log(sum2)
console.log(typeof sum2)