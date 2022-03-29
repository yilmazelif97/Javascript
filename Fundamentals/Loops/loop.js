// for loop --> you should use for loop when you know how many iterations will be happen
for(let i=0;i<10;i++){
    console.log(i);

    if(i==2){
        console.log("this is 2");
        break
    }
}

//Whilo loop 
let i =0;

while(i<10){
    console.log('Number '+i);
    i++;
}

//Do-while loop --> it always works at least no matter what
let j=100;
do{
    console.log('Number '+ j); //always run even if condition is match
    j++;
}
while(j<10);

const cars=['Ford','Chevy','Toyota'];

for(let k=0;k<cars.length;k++){
    console.log('The car is '+ cars[k]);
}

//Foreach --> can take 3 item. iterator, index, array
cars.forEach(function(car){  //foreach takes callback function 
    console.log(car);
})


//Map
const user=[
    {id:1, name:'Elif'},
    {id:2,name:'Ali'}
];

const ids = user.map(function(users){
    return users.id;
})

console.log(ids);

