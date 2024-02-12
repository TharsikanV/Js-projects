let button=document.getElementById('add');
let todoList=document.getElementById('todoList');
let input=document.getElementById('input');

//local storage,cookies
let todos=[];

window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('todos')) || []
    //local storagela 'todos' endra key irukkira value eduthth array la store pannu apdi antha key la value illa enda empty array ah store pannidu endu sollirukkan
    todos.forEach(todo=>addtodo(todo))
    // piraku eduththa value ah nama add pannurathukku podda function laye call pannirran
}
//ovvoru murayum window load aakum pothu intha function call aakanum

button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    //local storage la array ah string ah maathi add panniram key value pairs maari
    //localStorage.setItem('key',value)
    addtodo(input.value)
    input.value=''
})

function addtodo(todo)
{
    let para=document.createElement('p')
    //pragraph element onnu create panniddan 
    para.innerText=todo
    //create panna paraakulla text ah kudukkiran
    todoList.appendChild(para)
    //create panna para ah div ooda add panniddan
    
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo)
{
   let index=todos.indexOf(todo)
   if(index>-1)
   {
        todos.splice(index,1);
   }
//    localStorage.clear()
//    //ipd koduththa local storage la irukkira ellaame clear aakidu
//    //but ithukku namkku ithu thevalla
   localStorage.setItem('todos',JSON.stringify(todos))
   //apdyo array kulla updted values thaana irukkum so antha araya local storagela set panniddamna ok thaana 
}
//form validations//