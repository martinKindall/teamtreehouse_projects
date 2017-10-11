var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $("canvas")[0].getContext("2d");
var lastEvent;
var mousedown = false;

//when clicking on control list items
$(".controls").on("click", "li", function(){
	//deselect sibling elements
	$(this).siblings().removeClass("selected");
	//select clicked element
	$(this).addClass("selected");
	//cache current color
	color = $(this).css("background-color");
});


//when new color color is pressed
$("#revealColorSelect").click(function(){
	//show color select or hide color select
	changeColor();
	$("#colorSelect").toggle();
});

function changeColor()
{
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();

	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

//when color sliders change
$("input[type=range]").on("input", changeColor);
	//update color span

//when add color is pressed
$("#addNewColor").click(function(){
	//append the color to the controls ul
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	//select new color	
	$newColor.click();

});


//on mouse events on the canvas
$canvas.mousedown(function(e){
	lastEvent = e;
	mousedown = true;
}).mousemove(function(e){
	//draw lines
	if(mousedown == true)
	{
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function(){
	context.closePath();
	mousedown = false;
});


