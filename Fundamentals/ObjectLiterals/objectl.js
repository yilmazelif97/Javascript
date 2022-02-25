const person = {
    firstName: 'Elif',
    lastName : 'Yılmaz',
    age:25,
    city:'İstanbul',
    isHuman : true,
    hobbies: ['music','book'],
    address:{
        stree:'Nar Cd.',
        apartmentNo : 36
    },
    birthDay: function(){
        return 2022 - this.age;
    }
}

let val;

val=person

//get specific info
val = person.age
val = person['isHuman']
val = person.hobbies
val = person.address.apartmentNo
val = person.birthDay()


console.log(val);

const people = [
    {name:'elif', age:34},
    {name:'ali', age:73}
]


for(let i=0; i <=people.length;i++){
    console.log(people[i]) //get all people from array 
}