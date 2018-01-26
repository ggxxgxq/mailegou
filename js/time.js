//获取当前时间
var start = new Date();
var end = new Date("2018-1-27 17:00:00")
var t = diff(start,end);

//时间显示
function showtime(){
	//小时
	var h = parseInt(t/3600);
	//分钟
	var m = parseInt( (t-h*3600)/60 );
	//秒数
	var s = parseInt(t-h*3600-m*60);
	var n = $(".cn_thi").find("p");
	/*console.log(t)*/
		/*if(h<10){
		   n.eq(0).html(0)
		}else{
		   var h_ten = parseInt( h/10 );
		   n.eq(0).html(h_ten)
		}
		var h_dig =parseInt(h%10)
		n.eq(1).html(h_dig)
		
	    if(m<10){
		   n.eq(2).html(0)
		}else{
		   var m_ten = parseInt( h/10 );
		   n.eq(2).html(m_ten)
		}
		var m_dig =parseInt(h%10)
		n.eq(3).html(m_dig)
		
		if(s<10){
		   n.eq(4).html(0)
		}else{
		   var s_ten = parseInt( h/10 );
		   n.eq(4).html(s_ten)
		}
		var s_dig =parseInt(h%10)
		n.eq(5).html(s_dig)*/
	var arr=[
		         h <10 ? 0:parseInt(h/10),h%10,
		         m <10 ? 0:parseInt(m/10),m%10,
		         s <10 ? 0:parseInt(s/10),s%10
		]
	for(let i=0;i<n.length;i++){
		n.eq(i).html(arr[i]);
	}
}
 showtime();
 var timer = setInterval(function(){
		t--;
		if( t < 0 ){
			clearInterval(timer);
		}else{
			showtime();
			
		}
	},1000)