//hide hints
$("form span").hide();

var $password = $("#password");
var $confirmPassword = $("#confirm_password");


function isPasswordValid()
{
	return $password.val().length > 8;
}


function arePasswordsMatching()
{
	return $password.val() === $confirmPassword.val();
}


function canSubmit()
{
	return isPasswordValid() && arePasswordsMatching();
}


function passwordEvent()
{
	//find out if password length is valid
	if(isPasswordValid()) 
	{
		//hide hints if valid
		$password.next().hide();
	} else 
	{
		//else show hint
		$password.next().show();
	}	
}


function confirmPasswordEvent()
{
	//find out if password and confirmation match
	if (arePasswordsMatching())
	{
		//hide hints if match
		$confirmPassword.next().hide();
	}
	else 
	{		
		//else show hints 
		$confirmPassword.next().show();
	}
}


function enableSubmitEvent()
{
	$("#submit").prop("disabled", !canSubmit());
}


//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent)
.keyup(enableSubmitEvent);
//se pone dos veces password event, para que se muestre el span
//en ambos casos, cuando haya focus en el input o cuando se detecte teclado

//when event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent)
.keyup(enableSubmitEvent);

//los enableSubmitEvent son una forma mas modular de corroborar si se debe deshabilitar
//o no el boton submit. Yo habria puesto una funcion enable/disable dentro de los password
//events pero no es tan modular como esto.
enableSubmitEvent();