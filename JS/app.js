$(function ()
{
	$('#rollno').on('blur',function()
	{
		if (!/(\d{2,3}((CO)|(DCO)|(co)|(dco)|(dces))\d{2,3})/i.test(this.value)) 
		{
			alert("wrong");
			this.value="";
			$(this).focus();
		}
	});

	$('#sname').on('keypress',function (e) 
	{
		if (/[^a-zA-Z ]/.test(e.key)) 
		{
			alert("Invalid name");
			this.value="";
			return false;
		}
	});
});