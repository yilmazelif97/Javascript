// var, let, const 

var name = 'Elif';
console.log(name);
name ='Deneme';
console.log(name) //! You can reassigned variable with let and var.

//init var -- initializing: if statemantlarda duruma göre değişiklik gösterdiği için koşullar initialize variablelar bu yüzden kullanım sebeplerinden biri. şöylese bunu yap gibi 

var greeting; //undefined 
console.log(greeting)
greeting='hello';
console.log(greeting)


var firstName ='elif' //~ Camel Case
var FirstName ='elif' //~ Pascal Case
var first_name ='elif' //~ Underscore

//const cant change, reassigned
// const name ='elif';  //! this will give error name has assigned and const cant give a permit to reassigned value again

// console.log(name)

//const arraylerde veri ekleyebilirsin ama tekrar aynı arrayi tanımlayamazsın
const number=[1,2,3,4]
number.push(7);
console.log(number)

//number=[34] //! Error  







