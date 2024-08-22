//link variables with the button IDs
const submit = document.getElementById("addTask");
const inputTitle = document.getElementById("inputTitle");
const inputTask = document.getElementById("inputTask");


//add task function
submit.addEventListener("click", () => {
    if(inputTask.value === ""){
     alert("Please enter a task")        
    } else {
    //add a new li element
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    //set li element to input value    
    ul.appendChild(li).textContent = inputTask.value;
    //set delete button
    let delButton = document.createElement("div");
    delButton.setAttribute("id", "delIcon");
    li.appendChild(delButton);
    delButton.innerHTML = `<span class='material-symbols-outlined'>delete</span>`;
    //delete button event listener
    delButton.addEventListener("click", () => {
        ul.removeChild(li);
  })        

    //strike-through when completed(onClick)
    li.addEventListener("click", () => {
        li.classList.toggle("strike");
    })
  
    //clear input
    inputTask.value = "";
    }

});

