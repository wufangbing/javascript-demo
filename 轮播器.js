// JavaScript Document
var timer=null;
function sport(obj,prop,end)
{
	clearInterval(timer);
	var val=0;
	var speed=0;
	timer=setInterval(function()
	{
		if(prop=='opacity')
		val=Math.round(cssStyle(obj,prop)*100);
		else
		val=cssStyle(obj,prop);
		
		speed=(end-val)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(prop=='opacity')
		{
			if(val==end)
			clearInterval(timer);
			else
			obj.style.opacity=(val+speed)/100;
			obj.style.filter='alpha(opacity:'+(val+speed)+')';
			
			
		}
		else
		cssStyle(obj,prop,cssStyle(obj,prop)+speed);
		
		
		
		
	},30);
	
	
}