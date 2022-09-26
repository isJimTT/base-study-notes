window.onload=function()
{
	var otag=document.getElementById("tag");
	var omean=document.getElementById("mean");
	otag.onmouseover=function()
	{
		omean.style.display = "block"
		omean.onmouseover = function(){
			omean.style.display = "block"
		}
消息
	}
	otag.onmouseout=function()
	{
		omean.style.display="none";
		omean.onmouseout = function(){
			omean.style.display = 'none'
		}
	}
}