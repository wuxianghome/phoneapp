//版权 北京智能社©, 保留所有权利

/**
 * 批量设置对象样式
 * @param obj   object   被设置样式的对象
 * @param json  json     样式 {'width':'200px'}
 */
function setStyle(obj, json)
{
	for (var name in json)
	{
		obj.style[name]=json[name];
	}
}

/**
 * 通过class名字获取元素
 * @param oParent   object   指定父级
 * @param sClass    string   class名字
 *
 * @return aRes     array    获取到的一组对象
 */
function getByClass(oParent, sClass)
{
	var aChild=oParent.getElementsByTagName('*');
	var aRes=[];
	
	for (var i=0; i<aChild.length; i++)
	{
		var obj=aChild[i];
		var aTmp=obj.className.split(' ');
		
		if (findInArr(aTmp, sClass))
		{
			aRes.push(obj);
		}
	}
	
	return aRes;
}
/*开关*/
function findInArr(arr, target)
{
	for (var i=0; i<arr.length; i++)
	{
		if (arr[i] == target)
		{
			return true;
		}
	}
	
	return false;
}
//排序函数
function rnd(n, m)
{
	return Math.floor(Math.random()*(m-n)+n);
}
//补零函数
function toDub(n)
{
	return n<10 ? '0'+n : ''+n;
}

//获取对象到页面距离的函数
function getPos(obj){
	var left=0;
	var top=0;
	while(obj)
	{
		left+=obj.offsetLeft;
		top+=obj.offsetTop;
		obj=obj.offsetParent;	
	}
	return {'left':left,'top':top};	
}	
//事件绑定函数--------------------
function addEvent(obj,sEv,fn)
{
	if(obj.addEventListener)
	{
		obj.addEventListener(sEv,fn,false)
	}
	else
	{
		obj.attachEvent('on'+sEv,fn)
	}
}
//解除事件绑定函数--------------------------------------------------
function removeEvent(obj,sEv,fn)
{
	if(obj.removeEventListener)
	{
		obj.removeEventListener(sEv,fn,false)
	}
	else
	{
		obj.detachEvent('on'+sEv,fn)	
	}
}
//ready函数
function ready(fn){
		if(document.addEventListener)
		{
			document.addEventListener('DOMContentLoaded',fn,false);
		}
		else
		{
			document.onreadystatechange=function(){
				if(document.readyState=='complete')
				{
					fn
				}
			};
		}
	}
//鼠标滚轮函数
function addWheel(obj,fn)
	{
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox') !=-1)
		{
			obj.addEventListener('DOMMouseScroll',function(ev){
				if(ev.detail>0)
				{
					fn(true)
				}
				else
				{
					fn(false)
				}
			},false)
			//fn(false)
		}
		else
		{
			obj.onmousewheel=function(){
				if(event.wheelDelta>0)
				{fn(false)	}
				else
				{fn(true)}
			};
			//fn(false)	
		}
	}
//获取样式
function getStyle(obj, sName)
{
	return (obj.currentStyle || getComputedStyle(obj, false))[sName];
}
//ajax函数

function ajax(options)
{
	options=options || {};
	if ( ! options.url)
	{
		return;
	}
	// 可选
	var data=options.data || {};
	var type=options.type || 'get';
	
	if (window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
	else
	{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	switch (type.toLowerCase())
	{
		case 'get':
			oAjax.open('get', options.url+'?'+json2url(data), true);
			oAjax.send();
			break;
			
		case 'post':
			oAjax.open('post', options.url, true);
			oAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			oAjax.send(json2url(data));
			break;	
	}
	
	oAjax.onreadystatechange=function (){
		if (oAjax.readyState == 4)
		{
			if (oAjax.status>=200 && oAjax.status<300 || oAjax.status==304)
			{
				options.success && options.success(oAjax.responseText);
			}
			else
			{
				options.fail && options.fail(oAjax.status);
			}
		}
	};
	function json2url(data)
	{
		data['t']=Math.random();
		var arr=[];
		for (var name in data)
		{
			arr.push(name+'='+data[name]);
		}
		
		return arr.join('&');
	}

}
































