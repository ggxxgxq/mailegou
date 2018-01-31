$(".topwrap").load("public.html .site_top")	
$(".footbox").load("public.html .footer")
$(".copyright").load("public.html .copy")
$(window).load(function(){
var str = getCookie("shoplist");
//console.log(str)
	var html ="";
	var arr=JSON.parse(str)
    for(var i=0;i<arr.length;i++){
	  /*  var shopinfo =arr[i];*/
	    html +=`<section>
	            <span class="sf">
					<input type="checkbox" class="ck"/><img src="../img/list${arr[i].src}" alt="" / ><a>${arr[i].name}</a>
				</span>
				<span class="ss">
					${arr[i].p2}
				</span>
            	<span class="st" data-id=${arr[i].id} data-count=${arr[i].count} 
						data-price= ${arr[i].price}  data-count= ${arr[i].count}
						data-name= ${arr[i].name}  data-src= ${arr[i].src} 
						>	
					<span class="updateCount" data-number="1">-</span>
					<span class="shop-count">${arr[i].count}</span>
					<span class="updateCount" data-number="-1">+</span>
            	</span>
            	<span class="sfo sumPrice">
            		${arr[i].p2}*${arr[i].count}
            	</span>
            	<span class="sfi delBtn">
            		删除
            	</span>
            	</section>
	    `
    	
    }
   
    $(".shop_t").html( html);
  /* console.log(html)*/
    function jiesuan(){
    	var sumcount =0;
    	var sumprice =0;
    	$(".ck:checked").each(function(){
    		sumcount += parseInt($(this).parent().parent().find(".shop-count").html() );
    		sumprice += parseInt($(this).parent().parent().find(".sumPrice").html() )
    	})
    	$(".count1 i").html( sumcount);
    	$(".price1").html( sumprice);  	
    }
    jiesuan()
    $(".ck1").click(function(){
    	jiesuan();
    })
    $(".selectAll").click(function(){
    	$(".ck").prop("checked",$(this).prop("checked"))
    	jiesuan();
    })
    $(".updateCount").click(function(){
    	var pid = $(this).parent().data("id");
    	var pname = $(this).parent().data("name");
    	var count =$(this).parent().find(".shop-count").html();
        var sign =$(this).data("number");
        if( count==1 && sign=="-1"){
        	return;
        }
    	for(var i=0;i<arr.length;i++){
    		if( arr[i].id==pid && arr[i].name==pname ){
	    		sign ==1 ? arr[i].count++ : arr[i].count--;
    			setCookie("shoplist",JSON.stringify(arr))
    		$(this).parent().find(".shop-count").html(arr[i].count);
    		$(this).parent().parent().find(".sumPrice").html(arr[i].count*arr[i].price);
    			break;
    		}
    	}
    	jiesuan();
    })
    $(".delBtn").click(function(){
    	var pid = $(this).parent().parent().find(".count").data("id");
    	var pname = $(this).parent().parent().find(".count").data("name");
    	for(var i=0;i<arr.length;i++){
    		if(arr[i].id==pid && arr[i].name==pname){
    			arr.splice(i,1)
    			setCookie("shoplist",JSON.stringify(arr))
    			break;
    		}
    	}
    	$(this).parent().remove()
    })
})