var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); // defines the ul id as a variable

var taskFormHandler = function(event) { // place before listener so function can be defined
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {
    // create new list item 
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; //takes the new list item and assigns it the css class

    //create div to hold tak info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info" // give it a class name
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl); // adds text to the new list item

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl); 
}

formEl.addEventListener("submit", taskFormHandler); 