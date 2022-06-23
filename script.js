let users = [
    {id: 1, name: 'Frank', gender: 'male', value: 500},
    {id: 2, name: 'Rick', gender: 'male', value: 0},
    {id: 3, name: 'Mark', gender: 'male', value: 50},
    {id: 4, name: 'Fiona', gender: 'female', value: 450},
]

let json = JSON.stringify(users);

//array map
let titles = users.map(item=> {
    if (item.gender == 'male'){
        item.name = `Mr.${item.name}`;
    }else{
        item.name = `Mrs.${item.name}`;
    }
}) 
console.log(users)

//array filter
let someUser = users.filter(item =>item.id == 4);
console.log(someUser)

//array reduce
let budget = users.reduce((amount, item) =>amount + item.value, 0);
console.log(budget)

//find
let user = users.find(item =>item.id ==1);
console.log(user)

//findIndex
let index = users.findIndex(item =>item.id ==3);
console.log(index)

//init codemirror
var myCodeMirror = CodeMirror(document.querySelector('.code'), {
value: `//array map
let titles = users.map(item=> {
    if (item.gender == 'male'){
        item.name = 'Mr.$'{item.name}';
    }else{
        item.name = 'Mrs.$'{item.name}';
    }
}) 
-----------------------------------------------------------------------------------------
//array filter
let someUser = users.filter(item =>item.id == 4);
-----------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------
//array reduce
let budget = users.reduce((amount, item) =>amount + item.value, 0);
-----------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------
//find
let user = users.find(item =>item.id ==1);
-----------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------
//findIndex
let index = users.findIndex(item =>item.id ==3);
-----------------------------------------------------------------------------------------`,
mode:  "javascript",
mode: "text/x-groovy", 
lineNumbers: true,  
theme: "darcula",  
});

//result
let  titlesResult =[
    {id: 1, name: 'Mr.Frank', gender: 'male', value: 500},
    {id: 2, name: 'Mr.Rick', gender: 'male', value: 0},
    {id: 3, name: 'Mr.Mark', gender: 'male', value: 50},
    {id: 4, name: 'Mrs.Fiona', gender: 'female', value: 450},
]

let jsonTitles = JSON.stringify(titlesResult);
 document.querySelector(".result-map").innerHTML = jsonTitles;

let someUserResult = [
    {id: 4, name: 'Mrs.Fiona', gender: 'female', value: 450},   
]

let jsonSomeUser = JSON.stringify(someUserResult);
 document.querySelector(".result-filter").innerHTML = jsonSomeUser;

 let userResult = [
    {id: 4, name: 'Mrs.Fiona', gender: 'female', value: 450},   
]

let jsonUser = JSON.stringify(userResult);
 document.querySelector(".result-find").innerHTML = jsonUser;

 document.querySelector(".arr-map").innerHTML = json;
 document.querySelector(".arr-filter").innerHTML = json;
 document.querySelector(".arr-reduce").innerHTML = json;
 document.querySelector(".arr-find").innerHTML = json;
 document.querySelector(".arr-findIndex").innerHTML = json;