(function(global){
	function remChange(){
		document.documentElement.style.fontSize=20*document.documentElement.clientWidth/320+'px';
	}
	remChange();
	global.addEventListener('resize',remChange,false);
})(window);
//命名空间
var jhs={};
//轮播图
jhs.pic={};
jhs.pic.show=function(){
	(function(){
	var swiper = new Swiper('.swiper-container',{
		pagination: '.swiper-pagination',
		paginationClickable:true,
		autoplay:2000,
	   loop:true
	});
		
})();	
};
jhs.pic.show();
//轮播图end

//回顶！
jhs.back={};
jhs.back.carry=function(){
	function move(duration)
	{
		var start=document.documentElement.scrollTop || document.body.scrollTop;
		var dis=0-start;
		var n=0;
		var count=Math.floor(duration/30);
		
		clearInterval(document.timer);
		document.timer=setInterval(function (){
			n++;
			
			var cur=start+dis*n/count;
			document.body.scrollTop=cur;
			document.documentElement.scrollTop=cur;
			
			if (n == count)
			{
				clearInterval(document.timer);
			}
		}, 30);
	}
	$('#goTop').click(function(){
		move(2000)	
	})
};
jhs.back.carry();
//回顶end

//选项卡























