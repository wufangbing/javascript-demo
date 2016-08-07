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
function sport(obj,json,fn)
{
	clearInterval(obj.timer);
	var val=0;
	var speed=0;
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
			
}

window.onload=function()
{
	var oall=document.getElementById('all');
	var olun=document.getElementById('lun');
	var oul=olun.getElementsByTagName('ul')[0];
	var ali=olun.getElementsByTagName('li');
	
	
	var obo=document.getElementById('bo');
	var ain=obo.getElementsByTagName('input');
	
	
	var obottom=document.getElementById('bottom1');
	var aali=obottom.getElementsByTagName('li');
	
	
	
	for(var q=0;q<aali.length;q++)//最下面横幅变颜色
	{
		aali[q].index=q;
		aali[q].onclick=function()
		{
			for(var q=0;q<aali.length;q++)
			aali[q].style.borderWidth='0px';
			this.style.borderWidth='1px';
			
		}
		
	};
	
	for(var q=0;q<aali.length;q++)
	{
		aali[q].index=q;
		aali[q].onmouseout=function()
		{
			for(var q=0;q<aali.length;q++)
			aali[q].style.borderWidth='0px';
			this.style.borderWidth='0px';
			
		}
		
	}
	
	
	
	cssStyle(oul,'width',ali.length*cssStyle(ali[0],'width'));
	
	for(var n=0;n<ain.length;n++)			//点击input换图片
	{
		ain[n].index=n;
		ain[n].onmouseover=function()
		{
			for(var n=0;n<ain.length;n++)
			ain[n].style.opacity=0.3;
			this.style.opacity=1;
			sport(oul,{left:-cssStyle(ali[0],'width')*this.index});
			i=this.index;
		}	
		
	}
	
	var i=1;
	
	setInterval(function(){
		if(i>=4)
		{
			i=0;
			cssStyle(oul,'left',0);
		}
		
		for(var m=0;m<ain.length;m++)
		ain[m].style.opacity=0.3;
		
		ain[i].style.opacity=1;
		sport(oul,{left:-cssStyle(ali[0],'width')*i});
		i++;
		
		},2000);
	
	
}
