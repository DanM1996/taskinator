var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); // defines the ul id as a variable

var createTaskHandler = function() { // place before listener so function can be defined
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    var listItemEl = document.createElement("li"); //creates a new list item element
    listItemEl.className = "task-item"; //takes the new list item and assigns it the css class

    //create div to hold tak info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info"
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl); // adds text to the new list item
    tasksToDoEl.appendChild(listItemEl); // attaches the list item to the bottom of the unordered list
};

formEl.addEventListener("submit", createTaskHandler); 