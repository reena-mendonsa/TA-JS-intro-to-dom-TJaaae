/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label.
 (create it using `createElement`)

*/

// Your code goes here

function createInputElm(label , type="text"){
 let labelElm =document.createElement('label');
 let input = document.createElement('input');
 input.type = type;
 labelElm.append(label,input);
 return labelElm;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here

// TEST
// createInputElm('Your name'); //<label>Your name: <input type="text"></label>
 createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like
// ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function creatList( arr){
  let ul = document.createElement('ul');
  let li;
  for (let i=0;i<arr.length;i++){
     li=document.createElement('li');
     li.innerText=arr[i];
     ul.append(li);
  }
}
// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like
// [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(arr){
  let ul = document.createElement('ul');
  let li,p,ip,sp;
  for (let i=0;i<arr.length;i++){
     li=document.createElement('li');
     //li.innerText=arr[i];
     p=document.createElement('p');
     p.innerText=arr[i].name;
     ip=document.createElement('input');
     ip.type="checkbox";
     ip.name=" ";
     ip.id =" ";
     if (arr[i].isDone == true){
       ip.checked = true;
     }
     else{
       ip.checked =false;
     }

     sp = document.createElement('span');
     sp.innerText="X";
     li.append(p,ip,sp);
     ul.append(li);
  }
}
// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
