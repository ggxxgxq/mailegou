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