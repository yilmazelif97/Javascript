function greet(firstName, lastName){
    //console.log('hello')

    return 'hello '+ firstName + ' '+ lastName;
}

console.log(greet('Elif','Yılmaz'))


//function expressions

const square = function(x,y=6){
    return x+y;
}

console.log(square(3))



//property methods

const todo ={
     add: function(){
        console.log('add to todo')
    },
    edit:function(id){
        console.log(`${id} edited`)
    }
}

todo.delete = function(){
    console.log('delete')
}

todo.add()
todo.edit(34)
todo.delete()
