//获取当前时间
var start1 = new Date();
var end1 = new Date("2018-2-8 17:00:00")
var t1= diff(start1,end1);

//时间显示
function showtime1(){
	//天数
	var d = parseInt( t1/43200 )
	//小时
	var h = parseInt((t1-d*43200)/3600);
	//分钟
	var m = parseInt( (t1-d*43200-h*3600)/60 );
	//秒数
	var s = parseInt(t1-h*3600-m*60-d*43200);
	var n= "剩余"+d+"天"+h + "小时" + m + "分钟" + s + "秒";
	$(".sale_main b").html(n) 
	
}
 showtime1();
 var timer1 = setInterval(function(){
		t1--;
		if( t1 < 0 ){
			clearInterval(timer1);
		}else{
			showtime1();
			
		}
	},1000)