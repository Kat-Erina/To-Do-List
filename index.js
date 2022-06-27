
class toDoItems{
  constructor(name, date){
    this.name=name;
    this.date=date;
  }
  toDoDate(){
    return this.date;
  }
}

 
const input=document.getElementById('list');
const clear=document.getElementById('clear');
const ul=document.getElementById('plans');
const count=document.getElementById('count');

const toDos=[];

document.getElementById('add').addEventListener('click', ()=>{
        let toDoName=input.value;
        let date=Date.now();
        let date2=new Date(date);
        let tod=new  toDoItems(toDoName, date);
        toDos.push(tod);
        let text=document.createTextNode(toDoName + ''+ date2);
        let li=document.createElement('li');
        li.appendChild(text);
        ul.appendChild(li);
        count.innerText=toDos.length;
})

clear.addEventListener('click', ()=>{
  toDos.splice(0, toDos.length);
  ul.innerHTML='';
 count.innerHTML='';
 document.getElementById('list').value = '';
})
