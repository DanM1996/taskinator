var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do"); // defines the ul id as a variable

var createTaskHandler = function() { // place before listener so function can be defined
    var listItemEl = document.createElement("li"); //creates a new list item element
    listItemEl.className = "task-item"; //takes the new list item and assigns it the css class
    listItemEl.textContent = "This is a new task."; // adds text to the new list item
    tasksToDoEl.appendChild(listItemEl); // attaches the list item to the bottom of the unordered list
};

buttonEl.addEventListener("click", createTaskHandler) 