$(document).ready(function(){
	var url1 = "data/employees.json";
	var url2 = "data/rooms.json";

	$.getJSON(url1, function (response){
		var statusHTML = '<ul class = "bulleted">';
		$.each(response, function (index, employee){
			if (employee.inoffice === true)
			{
				statusHTML += '<li class="in">';
			}
			else 
			{
				statusHTML += '<li class="out">';
			}
			statusHTML += employee.name + '</li>';
		});
		statusHTML += '</ul>';
		$('#employeeList').html(statusHTML);
	}).fail(function(jqXHR){
		console.log(jqXHR);
		$('#employeeList').html(jqXHR.statusText);
	});

	$.getJSON(url2, function (response){
		var statusHTML = '<ul class = "rooms">';
		$.each(response, function (index, room){
			if (room.available === true)
			{
				statusHTML += '<li class="empty">';
			}
			else 
			{
				statusHTML += '<li class="full">';
			}
			statusHTML += room.room + '</li>';
		});
		statusHTML += '</ul>';
		$('#roomList').html(statusHTML);
	}).fail(function(jqXHR){
		console.log(jqXHR);
		$('#roomList').html(jqXHR.statusText);
	});
});