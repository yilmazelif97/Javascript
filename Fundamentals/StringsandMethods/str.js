const firstName ='elif- elif'
const lastName ='yılmaz'

let val;

val = firstName + lastName

//concatenation
val = firstName + ' ' +  lastName

//append
val = 'Elif';
val += 'yılmaz';

val = 'hello, my names is ' + firstName + ' ' + lastName

//escaping
val = 'that\'s excaping'; //bu sayede ' işaretini normal stringe dahil ediyor

//length
val = firstName.length

//concat
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase()

val = firstName[2];

//indexof character
val = firstName.indexOf('f')
val = firstName.lastIndexOf('f');

//charAt
val = firstName.charAt(2)

//get last character
val = firstName.charAt(firstName.length-1)

//substring
val = firstName.substring(0,2)

//slice
val = firstName.slice(0,2) //eğer eksi değer verirsen tersten slice yapar

//split
val = firstName.split('-') //yeni array döndürür

//replace
val = firstName.replace('-', '/')

//includes
val = firstName.includes('l') //if it inlcudes this letter, return true

console.log(val);