//User interaction doesn't provide desired results

//Solution: add interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//Add a new task
var addTask = function() {
  console.log("Add task..");
  //When the button is pressed
  //Create a list item with the text from #new-task:
    //input checkbox
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each of these elements need to be modified and appended
  }

//Edit an existing task
var editTask = function() {
  console.log("Edit task..");
  //When edit button is pressed
    //If class of parent is .editMode
      //Switch from editMode
      //label text become input's value
    //else
      //Switch to .editMode
      //input value becomes the label's text

    //toggle .editMode on the parent
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task..");
  //When delete button pressed
    //Remove parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete..");
  //When checkbox checked
    //Append the task li to the #completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("task incomplete..");
  //When checkbox unchecked
    //Append the task li to #incomplete-tasks
}


//Set click handler to the addTask function