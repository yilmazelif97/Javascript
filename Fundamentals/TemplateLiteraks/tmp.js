const name = 'elif'
const age = 25;
const job ='software engineer';
const city = 'İstanbul'
let html;

//without template string (es5)
html = '<ul> '+ city +' '+ age +'  </ul>';



//with template string (es6)

html = ` 
<ul>
<li> Name: ${name}  </li>
<li> Age: ${age}  </li>
<li> City: ${city}  </li>
</ul>

`;




document.body.innerHTML = html; //you can send your html string to browser