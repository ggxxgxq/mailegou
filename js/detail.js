$(".headwrap").load("public.html .headerwrap")
$(".fixwrap").load("public.html .r_fixed",function(){
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
	$(".icon-top").click(function(){
        $("html,body").animate({"scrollTop":0},1500)
    })
})
/*分页*/
//var index3 = 1;//页码  默认显示第一页  
//var pageNum = 31; //每页的数据量
getData3()
function getData3(){
	ajaxGet("../js/data2.json",function(msg){
		var arr=JSON.parse(msg)
		var str="";
		 for(var i=0;i<arr.length;i++){
			str += `<li>
				         <a href="page.html?pid=${arr[i].id}"><img src="../img/list${arr[i].src}" alt="" /></a>
				    	 <a href="">${arr[i].name}</a>
				    	 <span><i><b>${arr[i].p1}</b>${arr[i].p2}</i><b>${arr[i].o1}<a>${arr[i].o2}</a></b>
				    	 <button data-name='${arr[i].name}' data-id='${arr[i].id}' data-price='${arr[i].p2}' data-src='${arr[i].src}'>${arr[i].buy}</button>
				    	 </span>
				    </li>`
			        
		}
			$(".main").html(str);
	})
}
  $(".main").on("click","button",function(){
  	  var brr=[];
  	  var flag = true;
  	  var json ={
  	  	id:$(this).data("id"),
  	  	src:$(this).data("src"),
  	  	name:$(this).data("name"),
  	  	p2:$(this).data("price"),
  	  	count:1
  	  }
  	  
  	  var oldCookie = getCookie("shoplist") ; 
  	  if(oldCookie.length !=0){
  	  	 brr =  JSON.parse( oldCookie);
  	  	 for(var i=0;i<brr.length;i++){
  	  	 	if(brr[i].id==json.id ){
  	  	 		brr[i].count++
  	  	 		flag = false;
  	  	 		break;
  	  	 	}
  	  	 }
  	  }
  	  if(flag){
  	  	  brr.push(json)
  	  	 console.log(brr)
  	  }
  	  setCookie("shoplist",JSON.stringify(brr))
  	  	if( !confirm("点击确定，继续购物，点击取消，去购物车结算")){
  	  		location.href="shopcar.html"
  	  	}
  	  
  })
/*购物车*/
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
	$(".icon-top").click(function(){
        $("html,body").animate({"scrollTop":0},1500)
    })
$(window).scroll(function(){
	var sTop = $(document).scrollTop()
	if(sTop>307){		
		$("#cc").css({"position":"fixed","top":"50%"}).addClass("show")		                                   
	}else{
		$("#cc").css({"position":"fixed","top":"50%"}).removeClass("show")
		
	}
})


 

