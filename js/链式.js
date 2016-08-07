// JavaScript Document
function cssStyle(obj,prop,value)
{
	if(arguments.length==2)
	{
		if(obj.currentStyle)
		return parseFloat(obj.currentStyle[prop]);
		else
		return parseFloat(getComputedStyle(obj,false)[prop]);
		
		
	}
	else if(arguments.length==3)
	obj.style[prop]=value+'px';	
	
}

var timer=null;
function sport(obj,prop,end,fn)
{
	clearInterval(obj.timer);
	timer=setInterval(function(){
		var val=0;
		var speed=0;
		if(prop=='opacity')
		val=Math.round(cssStyle(obj,prop)*100);
		else
		val=cssStyle(obj,prop);
		speed=(end-val)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(val==end)
		{
		clearInterval(obj.timer);
		if(fn)
			fn();
		}
		else
		{
			if(prop=='opacity')
			{
				obj.style.opacity=(val+speed)/100;
				obj.style.filter='alpha(opacity:'+(val+speed)+')';
				
			}
			else
			cssStyle(obj,prop,val+speed);
			
		}
		
		
		
		
		
		},30)
	
	
}





