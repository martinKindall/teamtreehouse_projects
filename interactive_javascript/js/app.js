var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];  //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completeTasksHolder = document.getElementById("completed-tasks");

var createNewTaskElement = function(taskString)
{
	var listItem = document.createElement("li");
	var checkbox = document.createElement("input");
	var label = document.createElement("label");
	var editInput = document.createElement("input");
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");

	checkbox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";

	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	
	return listItem;
};

//add a new task
var addTask = function()
{
	console.log("add task");
	var taskText = taskInput.value;

	if (taskText == "")
	{
		alert("Debe ingresar texto");	
		return;
	} 

	var listItem = createNewTaskElement(taskInput.value);
	bindTaskEvents(listItem, taskCompleted);
	incompleteTasksHolder.appendChild(listItem);
	taskInput.value = "";
};

//edit an existing task
var editTask = function()
{
	console.log("edit");

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");

	if (listItem.classList.contains("editMode")) 
	{
		label.innerText = editInput.value;
		this.innerText = "Edit";
	}
	else 
	{
		editInput.value = label.innerText;
		this.innerText = "Save";
	}

	listItem.classList.toggle("editMode");
	
};

//delete an existing task
var deleteTask = function()
{
	console.log("delete");
	//when delete pressed
	//delete parent list item from the ul
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
};

//mark a task as complete
var taskCompleted = function(){
	console.log("marked complete");
	var listItem = this.parentNode;
	bindTaskEvents(listItem, taskIncompleted);
	completeTasksHolder.appendChild(listItem);
	//when checkbox checked
		//append task list item to completed
		//tasks ul
		//remove the list item from former ul
};

//mark a task as incomplete
var taskIncompleted = function(){
	console.log("marked incomplete");
	var listItem = this.parentNode;
	bindTaskEvents(listItem, taskCompleted);
	incompleteTasksHolder.appendChild(listItem);
	//checkbox is unchecked
		//append the list item to incompleted
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler)
{
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button[class=edit]");
	var deleteButton = taskListItem.querySelector("button[class=delete]");

	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkbox.onchange = checkBoxEventHandler;
};

var ajaxRequest = function()
{
	console.log("Consultando la database");
};

//set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

for (var i=0;i<incompleteTasksHolder.children.length;++i)
{
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (var i=0;i<completeTasksHolder.children.length;++i)
{
	bindTaskEvents(completeTasksHolder.children[i], taskIncompleted);
}