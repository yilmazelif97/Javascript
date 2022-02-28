
const color = 'blue';

switch(color){
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color')
}

let day;

switch(new Date().getDay()){
    case 0:
        day ='sunday';
        console.log(day);
        break;
    case 1:
        day ='Monday';
        console.log(day);            
        break;
    case 2:
        day ='Tuesday';
        console.log(day);
        break;

    case 3:
        day ='Wednesday';
        console.log(day);
        break;

    case 4:
        day ='Thusday';
        console.log(day);
        break;

    case 5:
        day ='Friday';
        console.log(day);
        break;
    
    
}