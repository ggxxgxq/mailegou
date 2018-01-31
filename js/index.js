$(".contactwrap").load("html/public.html .footerwrap1")
$(".copywrap").load("html/public.html .copy")
//$(".fixwrap").load("html/public.html .r_fixed")
$(".loading b").click(function(){
	$(".loading").css("display","none")
})
/*nav_top*/
	$(".my").mouseenter(function(){
		$(".my ol").css("display","block")
	})
	$(".my").mouseleave(function(){
		$(".my ol").css("display","none")
	})
	var nav_list = $(".p_nav span");
	var cont = $(".p_nav i");
		for(let i=0;i<nav_list.length;i++){
			nav_list.eq(i).mouseenter(function(){
				var n_left = nav_list.eq(i).position().left;
				var w = nav_list.eq(i).width();
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
				                       .end()
				                       .find("b").css("display","none")
				                       .end()
				                       .siblings()
				                       .find("a")
				                       .css("display","none")
				                       .end()
				                       .find("b").css("display","block")
				/*console.log(item)*/
			}else{
	
				$(".f_fix li").find("a").css("display","none");
			}
	/*if(sTop>0){
		$(".icon-top").click(function(){
	        $("html,body").animate({"scrollTop":0},1500)
        })
	}*/
	
 })
 
  
	$(".icon-top").click(function(){
        $("html,body").animate({"scrollTop":0},1500)
    })
	 
/*floor*/
var timer1 = setInterval(Play,1500)	
function Play(){
		$(".floor1 .aa").animate({"marginLeft":-90},1500,function(){
					$(this).css("margin-left",0)
					       .find("li:first")
					       .appendTo($(this))	
		})
		$(".floor2 .aa").animate({"marginLeft":-90},1500,function(){
					$(this).css("margin-left",0)
					       .find("li:first")
					       .appendTo($(this))	
		})
		$(".floor3 .aa").animate({"marginLeft":-90},1500,function(){
					$(this).css("margin-left",0)
					       .find("li:first")
					       .appendTo($(this))	
		})
		$(".floor4 .aa").animate({"marginLeft":-90},1500,function(){
					$(this).css("margin-left",0)
					       .find("li:first")
					       .appendTo($(this))	
		})
		$(".floor5 .aa").animate({"marginLeft":-90},1500,function(){
					$(this).css("margin-left",0)
					       .find("li:first")
					       .appendTo($(this))	
		})
		$(".floor6 .aa").animate({"marginLeft":-90},1500,function(){
					$(this).css("margin-left",0)
					       .find("li:first")
					       .appendTo($(this))	
		})
		$(".floor7 .aa").animate({"marginLeft":-90},1500,function(){
					$(this).css("margin-left",0)
					       .find("li:first")
					       .appendTo($(this))	
		})
		$(".floor8 .aa").animate({"marginLeft":-90},1500,function(){
					$(this).css("margin-left",0)
					       .find("li:first")
					       .appendTo($(this))	
		})
		$(".floor9 .aa").animate({"marginLeft":-90},1500,function(){
					$(this).css("margin-left",0)
					       .find("li:first")
					       .appendTo($(this))	
		})
}
$(".next1").click(function(){
			$(this).parent().find(".aa").animate({"marginLeft":-90},1500,function(){
				$(this).css("margin-left",0)
				       .find("li:first")
				       .appendTo($(this))	
		})
	})
	$(".prev1").click(function(){	
		 var currUl=$(this).parent().find("ul")
			currUl.find("li:last").prependTo( currUl );
			currUl.css("margin-left","-90px")
			currUl.animate({"marginLeft":0},1500,function(){
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
    var di = $(".floorwrap>section>div")
	var t = $(di).eq( $(this).index() ).offset().top;
	/*alert(t)*/
	$("html,body").animate({"scrollTop":t-60},1500,function(){
		});
}).mouseenter(function(){
	$(this).find("b").css("display","none")
	$(this).find("a").css("display","block")
}).mouseleave(function(){
	$(this).find("a").css("display","none")
	$(this).find("b").css("display","block")
})
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



