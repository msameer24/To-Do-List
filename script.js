// Dom Content loader to load data from local storage after reload

document.addEventListener('DOMContentLoaded', () =>{

  
// taking input text from input element and storing it 
const inputdata = document.getElementById('input-text');


 // storing the add task button 
const btn = document.getElementById('add-btn');


// accessing the ul element to add li elements as task 
const addlist = document.getElementById('add-item');  


//  Storing the data to local Storage 
 let tasks = JSON.parse( localStorage.getItem("tasks") ) || [];

 tasks.forEach((task) => renderTask(task));

// function to adding ( adding tasks ) li item to ul list 

btn.addEventListener('click', function(){
  
  // taking the input content to a variable
  const textValue = inputdata.value;
  if(textValue == ''){
    return;
  }

  const newTask = {
    id: Date.now(),
    text : textValue,
  }

    tasks.push(newTask);
    renderTask(newTask);
    saveTask();
    inputdata.value = "";  // clear text input
    console.log(tasks);



})



function renderTask(task) {



 const newItem = document.createElement("li");

 const delbtn = document.createElement('button')


 newItem.textContent = task.text;

 delbtn.textContent = "Delete";

 addlist.appendChild(newItem);
 
 newItem.appendChild(delbtn);
 
// delete button which come on the task list to delete the task
            delbtn.addEventListener('click', (e) => {
              e.stopPropagation();
              newItem.remove();
              tasks = tasks.filter((t) => t.id !== task.id);
              saveTask();
              
              console.log(tasks);
            })

}




function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

})


