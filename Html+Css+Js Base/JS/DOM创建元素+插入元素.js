window.onload=function()
{
	var oBtn=document.getElementById("btn");
	oBtn.onclick=function()
	{
		var oUl=document.getElementById("List");
		var oTxt=document.getElementById("TXT");
		var textNode=document.createTextNode(oTxt.value)
		var oLi=document.createElement("li");
		oLi.appendChild(textNode);
		oUl.appendChild(oLi);
	}
}