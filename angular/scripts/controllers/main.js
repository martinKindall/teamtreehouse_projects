'use-strict';
angular.module("todoListApp")
.controller('mainCtrl', function($scope, dataFactory){
	$scope.helloConsole = dataFactory.helloConsole;

	$scope.addTodo = function()
	{
		// console.log($scope.newTodo);
		// if ($scope.newTodo != "" && $scope.newTodo != null)
		// {
		// 	$scope.todos.push({"name": $scope.newTodo});
		// }
		var todo = {"name": "(Insert a task here)"};
		$scope.todos.unshift(todo);
	};

	$scope.editing = false;

	dataFactory.getTodos().then(
		function success(payload)
		{
			$scope.todos = payload.data;
		},
		function error(payload)
		{

		}
	);

	$scope.saveTodos = function()
	{
		var filteredTodos = $scope.todos.filter(function(todo) {
			if(todo.edited)
			{
				todo.edited = false;
				return todo;
			}
		});
		dataFactory.saveTodos(filteredTodos);
	};

	$scope.deleteTodo = function(todo, indice)
	{
		dataFactory.deleteTodo(todo);
		$scope.todos.splice(indice, 1);
	};
});
