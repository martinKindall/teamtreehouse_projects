
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function doQuiz(questions)
{
	var correct = [];
	var incorrect = [];
	var arrayLength = questions.length;
	for (var i=0;i<arrayLength;++i)
	{
		var answer = prompt(questions[i][0]);
		if (answer == questions[i][1])
		{
			correct.push(i);
		}
		else 
		{
			incorrect.push(i);
		}
	}
	printResults(questions, correct, incorrect);
}

function printResults(questions, correct, incorrect)
{
	var html = "You got " + correct.length +" question(s) right.<br>";

	if (correct.length > 0)
	{
		html += "<h3>You got these questions correct:</h3>";		

		for (var i = 0;i<correct.length;++i)
		{
			html += i+1 + ". " + questions[correct[i]][0] + "<br>";   //esto se puede
																	//meter en una funcion
		}
	}

	if (incorrect.length > 0)
	{
		html += "<h3>You got there questions wrong:</h3>";
	
		for (var i = 0;i<incorrect.length;++i)
		{
			html += i+1 + ". " + questions[incorrect[i]][0] + "<br>";
		}
	}

	print(html);

}

function init()
{
	var questions = [
	["Capital de Chile?", "Santiago"], 
	["Capital de Alemania?", "Berlin"], 
	["Capital de Francia?", "Paris"]
	];

	doQuiz(questions);

}

init();