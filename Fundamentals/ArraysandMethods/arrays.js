//Creating array ways
const numbers = [1,87,23,5,73,3];
const numbers2 = new Array(35,56,83,2,64)
const frudit = ['apple','banana','peach','orange']
const mixed = [22,'elif', true, undefined,null, {a:1, b:2}, new Date()]

let val;

//array length
val = numbers.length

//chechk if is array
val = Array.isArray(numbers)

//get single value
val = numbers[3]

//find index
val = numbers.indexOf(5)

//mutating arrays
//add element
numbers.push(54)
numbers.unshift(120)

//remove elemtn
numbers.pop();
numbers.shift();

//splice
numbers.splice(0,4)

//reverse
numbers.reverse()

//concat
val  =numbers.concat(numbers2)

//sort
val = frudit.sort()
val = numbers.sort()

//compare
val = numbers.sort(function(x,y){
    return x-y;
})

//find
function over50(num){
    return num>50;
}

val = numbers.find(over50)

console.log(numbers)
console.log(val);