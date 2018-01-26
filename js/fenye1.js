var index1 = 1;//页码  默认显示第一页  
var pageNum1 = 10; //每页的数据量
getData1()
function getData1(){
	ajaxGet("js/data1.json",function(msg){
		var arr=JSON.parse(msg)
		var str="";
		for(var i=(index1-1)*pageNum1;i<index1*pageNum1;i++){
			str += `<li>
			            <span><img src="img/like${arr[i].src}" alt="" /></span>
		        		<a href="">${arr[i].name}</a>
		        		<i>${arr[i].price}</i>
		        		<b>${arr[i].origin}<a href="">${arr[i].p}</a></b>								
					</li>`;
		}
			$(".like_main").html(str);
		pageTotle = Math.ceil( arr.length/pageNum1 );
		$(".page1 i").html(index1)
	})
}
$(".prev1").click(function(){
	if( index1 == 1 ){
			index1 = 1;
		}else{
			index1--;
		}
		getData1();
})
$(".next1").click(function(){
	if( index1 == pageTotle ){
			index1 = pageTotle;
		}else{
			index1++;
		}
		getData1();
})
$(".page1 .p").click(function(){
	if( index1 == 1 ){
			index1 = 1;
		}else{
			index1--;
		}
		getData1();
})
$(".page1 .n").click(function(){
	if( index1 == pageTotle ){
			index1 = pageTotle;
		}else{
			index1++;
		}
		getData1();
})

