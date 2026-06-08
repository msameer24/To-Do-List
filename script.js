 // taking input text from input element and storing it 
const inputdata = document.getElementById('input-text');


 // storing the add task button 
const btn = document.getElementById('add-btn');



// accessing the ul element to add li elements as task 
const addlist = document.getElementById('add-item');  


//  Storing the data to local Storage 

// let tasks = [];


// function to adding ( adding tasks ) li item to ul list 

btn.addEventListener('click', function(){
     
  // taking the input content to a variable
    const textValue = inputdata.value;
    if(textValue == ''){
      return;
    }
   
    // creating a new item when we click on add task button 
    const newItem = document.createElement("li");

    // creating a delete button in task button 
     const delbtn = document.createElement('button')
     
     
    
     
    //  puttion the text we get from input to the new task li element 
     newItem.textContent = textValue;
    
    //  text on delet button
     delbtn.textContent = "Delete";
     
    //  adding button to task item 
     newItem.appendChild(delbtn);

     //  adding task to ul list 
    addlist.appendChild(newItem);
    

    // deleting the asks which i click only
     delbtn.addEventListener('click', () => {
        newItem.remove();
     })

     inputdata.value = "";


})
