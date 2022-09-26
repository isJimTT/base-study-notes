 var line=7;
 for(var i=0;i<line;i++)
 {
	 if(i<=3){
		 for(var j=0;j<line-i-4;j++)
			 {document.write('-');}
		 
		 for(var j=0;j<2*i+1;j++)
			 {document.write('*');}

	 }
	 else{
		for(var j=0;j<=i-4;j++)
			{document.write('&nbsp');}
		for(var j=0;j<(line-i)*2-1;j++)
			{document.write('*');}
		}
		document.write("<br />");
 }