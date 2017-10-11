function getData()
{
	//this can be retrieved from a database
	//but now it is hardcoded here
	var students = [];
	var names = ['martin', 'tomas', 'lucas', 'juan', 'martin'];
	var tracks = ['python', 'javascript', 'php', 'ruby', 'MEAN stack'];
	var achievements = [5, 3, 1, 1, 10];
	var points = [1400, 500, 100, 200, 14000];

	for (var i=0;i<names.length;++i)
	{
		var student = 
		{
			name: names[i],
			track: tracks[i],
			achievements: achievements[i],
			points: points[i]
		};

		students.push(student);
	}
	return students;
}

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function getSingleReport(student)
{
	var html = "<h3>Student: " + student.name + "</h3>";
	html += "<p>Track: " + student.track + "</p>";
	html += "<p>Points: " + student.points + "</p>";
	html += "<p>Achievements: " + student.achievements + "</p>";

	return html;
}

function getAllReport(students)
{
	var output = "";
	for (var i=0;i<students.length;++i)
	{
		output += getSingleReport(students[i]);
	}
	return output;
}

function init()
{
	var students = getData();
	var ans = prompt("Search students records: type a name (or type <quit> to end)");
	while (ans !== 'quit')
	{
		var filteredStudents = [];
		for (var i=0;i<students.length;++i)
		{
			if (students[i].name == ans)
			{
				filteredStudents.push(students[i]);
			}
		}
		if (filteredStudents.length == 0)
		{
			var html = "Name " + ans + " not found, try again.";
			print(html);
		}
		else 
		{
			print(getAllReport(filteredStudents));
		}

		ans = prompt("Search students records: type a name (or type <quit> to end)");
	}
}

init();