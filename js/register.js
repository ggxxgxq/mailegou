$(".footbox").load("public.html .footerwrap1")
$(".copyright").load("public.html .copy")
	var flagP =null;
	$(".phone1").blur(function(){
		var reg=/^1[3|5|8]\d{9}$/;
		if( $(".phone1").val()=="" ){
			$(".s1").html("请输入手机号码")
		}else{
			if(reg.test( $(".phone1").val() ) ){
			    $(".s1").html("可以使用")
			    $(".s1").css("color","darkgreen")
			    flagP =true;
		    }else{
		    	 $(".s1").html("您输入的手机号码格式错误，请重新输入!")
		    	
			    flagP =false;
		    }
		}
		
	})
	var flagW =null;
	$(".upwd1").blur(function(){
		var reg=/^\d{6,20}$/;
		if( $(".upwd1").val()=="" ){
			$(".s2").html("请输入密码")
		}else{
			if(reg.test( $(".upwd1").val() ) ){
			    $(".s2").html("")
			    $(".s2").css("color","darkgreen")
			    flagW =true;
		    }else{
		    	 $(".s2").html("密码长度必须为6-20个字符")		    	
			    flagW =false;
		    }
		}
		
	})
	var flagQ =null;
	$(".qpwd1").blur(function(){
		var reg=/^\d{6,20}$/;
		if( $(".qpwd1").val()=="" ){
			$(".s3").html("请再次输入密码")
		}else{
			if( $(".upwd1").val() ==  $(".qpwd1").val()){
				 $(".s3").html("")		    	
			    flagQ =true;
		    }else{
		    	 $(".s3").html("两次输入的密码不一致，请重新输入")		    	
			    flagQ =false;
		    }
		}
		
	})
	yz();
	function yz(){		
		var str ="";
		for(var i= 0 ;i<4;i++){
			str += rand(0,9)
		}
		
		$(".verify p").html(str)
		              .css("color",getColor())
		
	}
	var flagV =null;
	$(".verify1").blur(function(){
		if( $(".verify1").val()=="" ){
			$(".s4").html("请输入验证码")
		}else{
			if(  $(".verify p").html() == $(".verify1").val() ){
				 $(".s4").html("")		    	
			    flagV =true;
		    }else{
		    	 $(".s4").html("验证码有误，请重新输入")		    	
			    flagV =false;
		    }
		}
		
	})
	$(".verify a").click(function(){
		yz();
	})	
	if( $(".check1").prop("checked")){
		$(".sub").css("background","#f00")
	}else {
		$(".sub").css("background","#ccc")
		
	}
	
	$("form").submit(function(){
		if(flagP &&flagW && flagQ &&flagV){
			var json = {
				"phone" : $(".phone1").val(),
				"pwd" : $(".upwd1").val()
			}
			setCookie("usemessage",JSON.stringify(json))
			return true;
		}else{
			return true;
		}
	
	})
