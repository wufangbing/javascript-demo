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
	else
	obj.style[prop]=value+'px';
	
	
	
}
window.onload=function()
{
	var obox1=document.getElementById('box1');
	var obox2=document.getElementById('box2');
	obox1.onmouseover=function()
	{
		
	sport(obox1,'width',600);	
	}
	
	obox1.onmouseout=function()
	{
		
	sport(obox1,'width',200);	
	}
	
	
	
	
	obox2.onmouseover=function()
	{
		
	sport(obox2,'opacity',100);	
	}
	
	obox2.onmouseout=function()
	{
		
	sport(obox2,'opacity',20);	
	}
	

}
var timer=null;
function sport(obj,prop,end)
{
	clearInterval(obj.timer);
	var speed=0;//	当前速度
	var val=0;//当前值
	
		obj.timer=setInterval(function()
	{
		if(prop=='opacity')
		val=Math.round(cssStyle(obj,prop)*100);	//当前透明度
		
		
		else
		val=cssStyle(obj,prop);					//不是透明度时候，其他值的当前值
		
	
		speed=(end-val)/10;						// 当前速度
		
		
		
		if(prop=='opacity')
		{
			if(val==end)
			clearInterval(obj.timer);
			else
			{
				obj.style.opacity=(val+speed)/100;
				obj.style.filter='alpha('+val+speed+')';
				
			}	
			document.title=(val+speed)/100;
		}
		else
		{
			if(val==end)
		clearInterval(obj.timer);
		else
		cssStyle(obj,prop,val+speed);
			
		document.title=val+speed+'--';
		}
			
		
	},30);
	
	
}

