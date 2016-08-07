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
	
	var onum=document.getElementById('num');
	var onumli=onum.getElementsByTagName('li');
	
	var obottom=document.getElementById('bottom');
	var aimg=obottom.getElementsByTagName('img');
	
	var oleft=document.getElementById('left');
	var aoli=oleft.getElementsByTagName('li');
	var adiv=oleft.getElementsByTagName('div');
	
	var obottom=document.getElementById('bottom1');
	var aali=obottom.getElementsByTagName('li');
	
	var ogray=document.getElementById('gray');
	var grayli=ogray.getElementsByTagName('li');
	
	//alert(grayli.length);
	var t=0;
	setInterval(function(){
		
		if(t>=5)
		{
			for(var p=0;p<5;p++)
			grayli[p].style.opacity=1;
			t=0;
		}
		
		
		sport(grayli[t],{opacity:0});
		t++;
	
		},1000);
	
	
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
	
	
	for(var c=0;c<adiv.length;c++)//点击换框图
	{
		aoli[c].index=c;
		aoli[c].onclick=function()
		{
			for(var c=0;c<adiv.length;c++)
			{
				aoli[c].className='';
				adiv[c].style.display='none';
			}
			
			this.className='color';
			adiv[this.index].style.display='block';
			
		}
		
	}
	
	
	
	
	
	for(var v=0;v<aimg.length;v++)
	{
		aimg[v].index=v;
		aimg[v].onmouseover=function()
		{
			
			this.src='image/h-'+(this.index+1)+'-over.png';
			
		}
		
		
	}
	
	for(var v=0;v<aimg.length;v++)
	{
		aimg[v].index=v;
		aimg[v].onmouseout=function()
		{
			
			this.src='image/h-'+(this.index+1)+'.png';
			
		}
		
		
	}
	
	
	var str='0123456789abcdef';
	for(var b=0;b<onumli.length;b++)//给头部换颜色
	{
		
		onumli[b].style.background='#'+str[parseInt(Math.random()*16)]+str[parseInt(Math.random()*16)]+str[parseInt(Math.random()*16)];
		
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
		
		},4000);
	
	
}
