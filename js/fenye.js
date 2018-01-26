var index2 = 1;//页码  默认显示第一页  
var pageNum = 4; //每页的数据量
getData()
function getData(){
	ajaxGet("js/data.json",function(msg){
		var arr=JSON.parse(msg)
		var str="";
		for(var i=(index2-1)*pageNum;i<index2*pageNum;i++){
			str += `<li>
						<span><img src="img/${arr[i].src}" alt="" /></span>
						<a>${arr[i].name}</a>
						<a><img src="img/${arr[i].price}" alt="" /></a>						
					</li>`;
		}
			$(".buy1").html(str);
		pageTotle1 = Math.ceil( arr.length/pageNum );
		$(".page i").html(index2)
	})
}
$(".con1").click(function(){
	if( index2 == 1 ){
			index2 = 1;
		}else{
			index2--;
		}
		getData();
})
$(".con2").click(function(){
	if( index2 == pageTotle1 ){
			index2 = pageTotle1;
		}else{
			index2++;
		}
		getData();
})
$(".page .prev").click(function(){
	if( index2 == 1 ){
			index2 = 1;
		}else{
			index2--;
		}
		getData();
})
$(".page .next").click(function(){
	alert()
	if( index2 == pageTotle1 ){
			index2 = pageTotle1;
		}else{
			index2++;
		}
		getData();
})

