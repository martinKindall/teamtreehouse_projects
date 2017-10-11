var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if (xhr.readyState === 4)
	{
		var employees = JSON.parse(xhr.responseText);
		var statusHTML = '<ul class = "bulleted">';
		for (var i=0;i<employees.length;++i)
		{
			if (employees[i].inoffice === true)
			{
				statusHTML += '<li class="in">';
			}
			else 
			{
				statusHTML += '<li class="out">';
			}

			statusHTML += employees[i].name + '</li>';
		}
		document.getElementById('employeeList').innerHTML = statusHTML;
	}
};

xhr.open("GET", "data/employees.json");
xhr.send();

var getRooms = new XMLHttpRequest();
getRooms.onreadystatechange = function(){
	if (getRooms.readyState === 4)
	{
		var rooms = JSON.parse(getRooms.responseText);
		var roomStatusHTML = '<ul class = "rooms">';
		for (var i=0;i<rooms.length;++i)
		{
			if (rooms[i].available === true)
			{
				roomStatusHTML += '<li class="empty">';
			}
			else 
			{
				roomStatusHTML += '<li class="full">';
			}

			roomStatusHTML += rooms[i].room + '</li>';
		}
		document.getElementById('roomList').innerHTML = roomStatusHTML;
	}
};

getRooms.open("GET", "data/rooms.json");
getRooms.send();