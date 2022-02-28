const id = 100;  

//equal to
if(id ==101){
    console.log("equal");
}
else{
    console.log("not equal")
}


//not equal to
if(id !=100){  
    console.log("equal");
}
else{
    console.log("not equal")
}


//equal to type and value
if(id ===100){  //it check calue and type control
    console.log("equal");
}
else{
    console.log("not equal")
}


if(id){
    console.log(`${id}`)
}
else{
    console.log('no id')
}

//greater or less than
if(id<=79){
    console.log("id is smaller then 79")
}
else{
    console.log('id id bigger than 79')
}

//if else
const color = 'yellow';

if(color ==='red'){
    console.log('red')
}
else if(color==='yellow'){
    console.log("yellow")
}

//logical operators -- && and ||
const name ='elif'
const age=25
const surname ='yilmaz'

if(name =='elif' && age<25){ //AND operator
    console.log("right person")
}
else if (name=='elif' || surname=='yilmaz'){  //OR operator
    console.log("right human 2")
}
else{
    console.log("wrong people")
}

//ternary operators
console.log(id==100 ? 'Correct':'Incorrect' )
