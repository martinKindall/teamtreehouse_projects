angular.module("todoListApp")
.factory('dataFactory', function($http){

	function helloConsole()
	{
		console.log('This is the hello console service!');
	}

	function getTodos() 
	{
		return $http.get('mock/todos.json');
	}

	function deleteTodo(todo)
	{
		console.log("TODO " + todo.name + " has been deleted!");
	}

	function saveTodos(todo)
	{
		console.log(todo.length + " todos have been saved!");
	}

	return {
		helloConsole : helloConsole,
		getTodos : getTodos,
		deleteTodo: deleteTodo,
		saveTodos: saveTodos
	}

});