function checkEmail(e) 
{
	var element = e.target;
	if (/[^a-zA-Z0-9@.]/.test(element.value))
	{
		alert("Email is invalid");
		element.value = "";
		return false;
	}
	if (!/[^a-zA-Z]/.test(element.value))
	{
		alert("Email is invalid");
		element.value = "";
		return false;
	}
	if !(/[.]/.test(element.value))
	{
		alert("Email is invalid");
		element.value = "";
		return false;
	}
	if !(/[@]/.test(element.value))
	{
		alert("Email is invalid");
		element.value = "";
		return false;
	}

	
}