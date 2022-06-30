const users = [
    {id: 1, name: 'Frank', gender: 'male', value: 500},
    {id: 2, name: 'Rick', gender: 'male', value: 0},
    {id: 3, name: 'Mark', gender: 'male', value: 50},
    {id: 4, name: 'Fiona', gender: 'female', value: 450},
];

// Array map
const titles = [...users].map(item => {
    item.gender == 'male' ? item.name ='Mr.' + (item.name) : item.name = 'Mrs.' + (item.name)
    return item
});
console.log(titles)

// Array filter
const someUser = [...users].filter(item => item.id == 4);

// Array reduce
const budget = [...users].reduce((amount, item) => amount + item.value, 0);

// Find
const user = [...users].find(item => item.id == 1);

// FindIndex
const index = [...users].findIndex(item => item.id == 3);

// Init codemirror
var myCodeMirror = CodeMirror(document.querySelector('.code-map'), {
value: `// Array map
const titles = users.map(item => {
    item.gender == 'male' ? item.name ='Mr.' + (item.name) : item.name = 'Mrs.' + (item.name)
})`,
    mode:  "javascript",
    mode: "text/x-groovy", 
    lineNumbers: true,  
    theme: "darcula",  
    });

var myCodeMirror = CodeMirror(document.querySelector('.code-filter'), {
    value: `// Array filter
const someUser = users.filter(item => item.id == 4);`,
    mode:  "javascript",
    mode: "text/x-groovy", 
    lineNumbers: true,  
    theme: "darcula",  
    });

var myCodeMirror = CodeMirror(document.querySelector('.code-reduce'), {
    value: `// Array reduce
const budget = users.reduce((amount, item) => amount + item.value, 0);`,
    mode:  "javascript",
    mode: "text/x-groovy", 
    lineNumbers: true,  
    theme: "darcula",  
    });

var myCodeMirror = CodeMirror(document.querySelector('.code-find'), {
    value: `// Find
const user = users.find(item => item.id == 1);`,
    mode:  "javascript",
    mode: "text/x-groovy", 
    lineNumbers: true,  
    theme: "darcula",  
    });

var myCodeMirror = CodeMirror(document.querySelector('.code-findIndex'), {
    value: `// FindIndex
const index = users.findIndex(item => item.id == 3);`,
    mode:  "javascript",
    mode: "text/x-groovy", 
    lineNumbers: true,  
    theme: "darcula",  
    });

// Result
const jsonTitles = JSON.stringify(users);
 document.querySelector(".result-map").innerHTML = jsonTitles;

const jsonSomeUser = JSON.stringify(someUser);
 document.querySelector(".result-filter").innerHTML = jsonSomeUser;

 const jsonBudget = JSON.stringify(budget);
 document.querySelector(".result-reduce").innerHTML = jsonBudget;

const jsonUser = JSON.stringify(user);
 document.querySelector(".result-find").innerHTML = jsonUser;

 const jsonIndex = JSON.stringify(index);
 document.querySelector(".result-findIndex").innerHTML = jsonIndex;

 const json = JSON.stringify(users);
 document.querySelector(".arr-map").innerHTML = json;
 document.querySelector(".arr-filter").innerHTML = json;
 document.querySelector(".arr-reduce").innerHTML = json;
 document.querySelector(".arr-find").innerHTML = json;
 document.querySelector(".arr-findIndex").innerHTML = json;