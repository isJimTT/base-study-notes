window.onload=function()
{
	var oBtn=document.getElementById("btn");
	oBtn.onclick=function()
	{
		var oOld=document.querySelector("#top");
		var oTag=document.getElementById("tag");
		var oTxt=document.getElementById("txt");
		var oNewTag=document.createElement(oTag.value);
		var oNewTxt=document.createTextNode(oTxt.value);
		oNewTag.appendChild(oNewTxt);
		document.body.replaceChild(oNewTag, oOld);
		
	}
}