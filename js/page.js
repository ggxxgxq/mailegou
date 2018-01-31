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
var sImg = $(".ss li");
var str="";
var html='';
for( let i=0;i<sImg.length;i++){	
	$( sImg ).eq(i).mouseenter(function(){
		$(".big").css("display","block")
		str = "../img/middle"+(i+1)+".jpg"
		html = "../img/eye"+(i+1)+".jpg";
		
		$(".middle img").attr("src",str)
     	$(".big img").attr("src",html)
    }).mouseleave(function(){
    	$(".big").css("display","none")
    })
	
}

$(".middle").mouseenter(function(){
	$(".mask").css("display","block")
	$(".big").css("display","block")
    $(".middle").mousemove(function(e){
    	var e =e || event;
    	var target = e.target || e.srcElement;
    	var x = e.pageX -$(".mask").outerWidth()/2-$(".middle").offset().left;
    	var y = e.pageY -$(".mask").outerHeight()/2-$(".middle").offset().top;
    	var maxL = $(".middle").outerWidth()-$(".mask").outerWidth();
    	var maxT = $(".middle").outerHeight()-$(".mask").outerHeight();
    	x = Math.min(maxL,Math.max(0,x) )
    	y= Math.min( maxT,Math.max(0,y))
        $(".middle .mask").css({"left":x,"top":y})
    	$(".big img").css({"left":-x*400/350,"top":-y*400/350})
    })
    
		
}).mouseleave(function(){
	$(".big").css("display","none")
	$(".mask").css("display","none")
		
})

/*page*/
 var str = location.href;
 str = str.split("?")[1];
 var html =str.split("=")[1]
 getPage()
 function getPage(){
 	ajaxGet("../js/data2.json",function(msg){
 		var arr = JSON.parse(msg)
 		for(var i=0;i<arr.length;i++){
 			if(arr[i].id==html){
 				var img = `<img src="../img/list${arr[i].src}" alt="" />
 				           <div class="mask"></div>`
 				var button =`<button data-name='${arr[i].name}' data-id='${arr[i].id}' data-price='${arr[i].p2}' data-src='${arr[i].src}'>${arr[i].buy}</button>`
 				var name =`${arr[i].name}`
 				var p2 =`${arr[i].p2}`
 				var o2 =`${arr[i].o2}`
 			}
 		}
 		$(".name em").html(name)
 		$(".middle").html(img)
 		$(".price em").html(p2)
 		$(".price b").html(o2)
 		$(".price button").html(button)
 	})
 }
 
 $(".msg1").on("click","button",function(){
  	  var arr=[];
  	  var flag = true;
  	  var json ={
  	  	id:$(this).data("name"),
  	  	src:$(this).data("src"),
  	  	name:$(this).data("name"),
  	  	p2:$(this).data("p2"),
  	  	count:1
  	  }
  	  
  	  var oldCookie = getCookie("shoplist")
  	  if(oldCookie.length !=0){
  	  	 arr =oldCookie;
  	  	 for(var i=0;i<arr[i].length;i++){
  	  	 	if(arr[i].id==json.id && arr[i].name==json.name){
  	  	 		arr[i].count++
  	  	 		flag = false;
  	  	 		break;
  	  	 	}
  	  	 }
  	  }
  	  if(flag){
  	  	  arr.push(json)
  	  }
  	  setCookie("shoplist",JSON.stringify(arr))
  	  	if( !confirm("点击确定，继续购物，点击取消，去购物车结算")){
  	  		location.href="shopcar.html"
  	  	
  	  }
  })
 /*购物车*/
$(".minus").click(function(){
	var num= parseInt($(".num").html());
	if(num>1){
		$(".num").html(--num)
	}else{
		$(".num").html(1)
		
	}
})
$(".add").click(function(){
	var num= parseInt($(".num").html());
	$(".num").html(++num)
})
$(".shop").click(function(){
	
})
/*cookie*/
var json ={
    
}
setCookie("shoplist")
