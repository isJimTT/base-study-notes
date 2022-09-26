function LeapYear(year){
	if((year/4==0)&&(year/100!=0)||year/400==0)
	{
		return year+"是闰年"
	}
	else
	{
		return year+"不是闰年"
	}
}
document.write(LeapYear(2017))