window.onload=function()
{
	var oBtn2=document.getElementById("btn2");
	oBtn2.onclick=function()
	{
		var oUl=document.getElementById("list");
		oUl.removeChild(oUl.lastElementChild);
	}
}