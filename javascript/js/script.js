function random1Color()
{
	return Math.floor(Math.random() * 256 );
}

function randomRgb()
{
	return 'rgb(' + random1Color() + ',' + random1Color() + ',' + random1Color() + ')';
}


function printColorBalls(number)
{
	var html = '';

	for(var i=0;i<number;++i)
	{
		rgbColor = randomRgb();
		html += '<div style="background-color:' + rgbColor + '"></div>';
	}
	return html;
}


document.write(printColorBalls(100));