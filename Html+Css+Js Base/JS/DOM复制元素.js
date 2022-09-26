window.onload=function()
{
	var oBtn=document.getElementById("btn");
	oBtn.onclick=function()
	{
		var oUl=document.getElementById("list");
		document.body.appendChild(oUl.cloneNode(1));
		// 1/ture:复制元素本身以及所有子元素
		// 0/false:只复制元素本身
	}
}