// JavaScript Document
function move(duration)
	{
		var start=document.documentElement.scrollTop || document.body.scrollTop;
		var dis=0-start;
		var n=0;
		var count=Math.floor(duration/30);
		
		clearInterval(document.timer);
		document.timer=setInterval(function (){
			n++;
			userScroll=false;
						
			var cur=start+dis*n/count;
			document.body.scrollTop=cur;
			document.documentElement.scrollTop=cur;
			
			if (n == count)
			{
				clearInterval(document.timer);
			}
		}, 30);
	}