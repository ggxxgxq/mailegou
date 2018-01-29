$(".headwrap").load("public.html .headerwrap")
$(".fixwrap").load("public.html .r_fixed")
/*分页*/
//var index3 = 1;//页码  默认显示第一页  
//var pageNum = 4; //每页的数据量
getData3()
function getData3(){
	ajaxGet("../js/data2.json",function(msg){
		var arr=JSON.parse(msg)
		/*var html=arr[0].list;
		console.log(html)*/
		var str="";
		for(var i=0;i<28;i++){
			str += `<li>
				         <a href=""><img src="../img/list${arr[i].src}" alt="" /></a>
				    	 <a href="">${arr[i].name}</a>
				    	 <span><i><b>${arr[i].p1}</b>${arr[i].p2}</i><b>${arr[i].o1}<a>${arr[i].o2}<a></b><a>${arr[i].buy}</a></span>
				    </li>`
			        
		}
			$(".main").html(str);
		/*pageTotle1 = Math.ceil( arr.length/pageNum );
		$(".page i").html(index3)*/
	})
}
/*fixed*/
$(".r_fixed>.iconfont").mouseenter(function(){
    $(this).css("background","#ca3619")
}).mouseleave(function(){
    $(this).css("background","#444851")
})
$(".r_fixed p").mouseenter(function(){
	$(".fix_img").animate({"right":36},1500)
}).mouseleave(function(){
	$(".fix_img").animate({"right":-236},1500)
})
$(".icon-bianji").mouseenter(function(){
	$(".icon-bianji em").animate({"left":-80},1000)
}).mouseleave(function(){
	$(".icon-bianji em").animate({"left":0},1000)
})
$(window).scroll(function(){
	if(sTop>0){
		$(".icon-top").click(function(){
			alert()
	        $("html,body").animate({"scrollTop":0},1500)
        })
	}
})
