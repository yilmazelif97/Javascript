
let val;

const today = new Date();
let birthdat = new Date('9-10-1992')
birthdat = new Date('September 10 1997')


val = today;
val=birthdat

val = today.getMonth();
val = today.getDate();
val = today.getDay(); //haftanın gününü döner 
val = today.getFullYear()
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //timespan

birthdat.setMonth(2);
birthdat.setDate(12);
birthdat.setFullYear(1997);
birthdat.setHours(3);
birthdat.setMinutes(47)

console.log(val);
console.log(birthdat);