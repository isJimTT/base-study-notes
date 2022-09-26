function Getnum(a,b,c,d){
	var Maxnum;
	Maxnum=(a>b)?a:b;
	Maxnum=(Maxnum>c)?Maxnum:c;
	Maxnum=(Maxnum>d)?Maxnum:d;
	return Maxnum;
}
document.write("四个数中最大的为:"+Getnum(4,5,6,7));