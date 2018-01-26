/*nav_top*/
	$(".my").mouseenter(function(){
		$(".my a").css("display","none")
		$(".my ol").css("display","block")
	})
	$(".my").mouseleave(function(){
		$(".my a").css("display","block")
		$(".my ol").css("display","none")
	})
	var nav_list = $(".p_nav span");
	var cont = $(".p_nav i");
		for(let i=0;i<nav_list.length;i++){
			nav_list.eq(i).mouseenter(function(){
				var n_left = nav_list.eq(i).position().left;
				cont.animate({"left":n_left},800)
			})
			nav_list.eq(i).mouseleave(function(){
				cont.animate({"left":0},800)
			})
		}
/*nav_column*/
	for(let i=0;i<$(".column li").length;i++){
		$(".column li").eq(i).mouseenter(function(){			
	       $(this).animate({"left":0},300)
	       $(".column").css("background","#b82f17")
	       $(this).css("background","#b82f17")
		})
		$(".column li").eq(i).mouseleave(function(){			
	       $(this).animate({"left":-10},300)
	        $(this).css("background","#cb3e25")
	        $(".column").css("background","#cb3e25")
		})	
	}
/*nav_main*/
   var timer =null;
   var index = 0;
/*for(let i=1;i<=$(".nav_img li").length;i++){
    $(".nav_img li").find("a").css("background","url(img/nav"+i+".jpg)")
}*/
timer = setInterval(autoPlay,2000)
  function autoPlay(){
  	index++;
  	if( index==$(".nav_img li").length){
  		index=0
  	}
  	$(".nav_index li").eq(index).addClass("current")
  	                            .siblings()
  	                            .removeClass("current")
  	$(".nav_img li").eq(index).fadeIn(1000)  	                        
  	                          .siblings()
  	                          .fadeOut(1000)
  }
  $(".nav_index li").mouseenter(function(){
  	  clearInterval(timer);
  	  index = $(this).index()-1;
  	  autoPlay();
  })
  $(".nav_index li").mouseleave(function(){
  	 timer = setInterval(autoPlay,2000)
  })
  /*con_list*/
  var con =$(".con_list").find("li");
 for(let i=0;i<con.length;i++){
 	con.eq(i).click(function(){
 		$(this).addClass("show")
 		       .siblings()
 		       .removeClass("show")
 		var _left=con.eq(1).width();
 		$(".con_list i").css("left",i*_left+_left/2)
 	})
 }
 /*flyheader*/
 $(window).scroll(function(){
   var sTop =$(document).scrollTop();
  if( sTop>1820 ){
  	$(".flyheader_wrap").css("display","block")
  }else{
  	$(".flyheader_wrap").css("display","none")
  	
  }
  var h =$(".f_fix").offset().top;
  if(sTop>3950){
  	$(".f_fix").css({"position":"fixed","top":"25%","left":"57px"})

  }else{
  	$(".f_fix").css({"position":"absolute","top":"1031px","left":"-55px"})
   
  }
   var div = $(".floorwrap>section>div")
  $floor = $(div).filter(function(){
				//符合条件的楼层 ：   绝对值(该楼层的top-页面滚走距离) <  楼层高度/2
				return Math.abs( $(this).offset().top - sTop ) < $(this).outerHeight()/2;
			})
			var item = $floor.index();
		
			if( item != -1 ){
				//根据index值设置  楼层号的高亮显示
				$(".f_fix li").eq(item).find("a").css("display","block")
				                       .siblings()
				                       .end()
				                       .find("a")
				                       .css("display","none")
				/*console.log(item)*/
			}else{
	
				$(".f_fix li").find("a").css("display","none");
			}
 })
/*floor*/
var timer1 = setInterval(Play,1500)
function Play(){
	$(".f1_L article").animate({"marginLeft":-90},1500,function(){
				$(".f1_L article").css("margin-left",0)
				       .find("img:first")
				       .appendTo($(".f1_L article"))	
	})
}
$(".prev1").click(function(){
			$(".f1_L article").animate({"marginLeft":-90},1500,function(){
				$(".f1_L article").css("margin-left",0)
				       .find("img:first")
				       .appendTo($(".f1_L article"))	
		})
	})
	$(".next1").click(function(){		
			$(".f1_L article img:last").prependTo( $(".f1_L article"));
			$(".f1_L article").css("margin-left","-90px")
			$(".f1_L article").animate({"marginLeft":0},1500,function(){
		})
	})
 $(".f1_L h6").mouseover(function(){
 	clearInterval(timer1)
 })
  $(".f1_L h6").mouseleave(function(){
 	timer1 = setInterval(Play,1500)
 })
 /*楼梯*/
/*$(".floorwrap>section>div")*/
$(".f_fix li").click(function(){
    $div = $(".floorwrap>section>div")
	var t = $(div).eq( $(this).index() ).offset().top;
	/*alert(t)*/
	$("html,body").animate({"scrollTop":t},1500,function(){
		});
}).mouseenter(function(){
	$(this).find("a").css("display","block")
}).mouseleave(function(){
	$(this).find("a").css("display","none")
})
