//Creating the overlay

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<h3></h3>");

$overlay.append($image);
$overlay.append($caption);

//Append overlay to body

$("body").append($overlay);



//Event listeners

$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	var imageCaption = $(this).children("img").attr("alt");

	$image.attr("src", imageLocation);
	$caption.text(imageCaption);

	$overlay.show(300);
});

$overlay.click(function(){ 
	$(this).hide(300); 
});