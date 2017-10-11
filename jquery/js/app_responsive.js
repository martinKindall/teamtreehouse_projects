//Create a select and append it to menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
	var $anchor = $(this);
	//Create an option
	var $option = $("<option></option>");

	if ($anchor.parent().hasClass("selected")) 
	{
		$option.prop("selected", true);
	}

	//option's value is the href
	$option.text($anchor.text());
	//option's text is the text of the link
	$option.val($anchor.attr("href"));
	//append option to select
	$select.append($option);
});

//Bind change listener to the select
$select.change(function()
{
	//Go to select location
	window.location = $select.val();
});

//Modify CSS to hide links on small width and show button and select
	//Also hides select and button on larger width and show's links

//Deal with selected options depending on current page