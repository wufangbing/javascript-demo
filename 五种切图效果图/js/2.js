// ActionScript Document
function cssStyle(obj,prop,value)
{
	if(arguments.length==2)
	{
		if(obj.currentStyle)
		return parseFloat(obj.currentStyle[prop]);
		else
		return parseFloat(getComputedStyle(obj,false)[prop]);	
		
	}
	else
	obj.style[prop]=value+'px';
	
}

	
	
var timer=null;
function sport(obj,json,fn)
{
	clearInterval(obj.timer);
	var speed=0;
	var val=0;
	var flag=true;
	
	obj.timer=setInterval(function()
	{
		for(var name in json)
	{
		if(name=='opacity')
		val=Math.round(cssStyle(obj,name)*100);
		else
		val=cssStyle(obj,name);	
		
		speed=(json[name]-val)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(json[name]!=val)
		flag=false;
		else
		flag=true;
		
	if(name=='opacity')
	{
		obj.style.opacity=(speed+val)/100;
		obj.style.filter='alpha(opacity:'+(speed+val)+')';
		
	}
	else
	cssStyle(obj,name,speed+val);
		
		
	}
	
	if(flag)
	{
		clearInterval(obj.timer);
		if(fn) fn();
		
	}
		
		
		
		
		
	},30);
	
	
	
		
};
