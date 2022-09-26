obj:元素名（DOM对象）；	attr：属性名
1.HTML属性操作(对象属性)：
	A.获取HTML属性值：oBj.attr 
	B.设置HTML属性值：obj.attr="值"
2.HEMl属性操作（对象方法）：
	obj.getAttribute()
	obj.setAttribute("attr","值")
	obj.removeAttribute("attr")(一般配合hasAttribute)
	obj.hasAttribute("attr")
3.CSS属性操作
	A.获取CSS属性值：getComputedStyle(obj).attr/getComputedStyle(obj)["attr"]（当属性值为字符串时用后者）
	B.设置CSS属性值：
		style对象：obj.style.attr="值"
		cssText属性：obj.style.cssText="值"
4.DOM遍历：可理解为 查找元素
	A.查找父元素：obj.parentNode
	B.查找子元素：
		*childNodes  firstChild  lastChild   （获取所有的子节点）
		*children  firstElementchild  lastElementChild  （只获取所有的元素节点，不获取文本节点）
	C.查找兄弟元素：
		*previousSibling  nextSibling    (获取所有的子节点，查出来的很可能是文本节点，一般是空白节点)
		*prebiousElementSibling  nextElementSibling   （只获取所有的元素节点，不获取文本节点）
5.
	A.innerHTML: 方便地获取和设置一个元素的内部元素	
	B.innerText: 方便地获取和设置一个元素的内部文本
	9
	
	