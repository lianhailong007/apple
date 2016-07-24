$(function(){
	var $btn = $(".btn");
	var $uls = $(".min-box ul")
	var ch = document.documentElement.clientHeight;
	// console.log($btn);
	$(window).resize(function(){
		var cw = document.documentElement.clientWidth;
		if(cw>768){
			$btn.removeAttr("id");
			$uls.css("height",0).css("padding-top",0);
		}
	})
	$btn.click(function(){
		var $ids=$btn.attr("id");
		if($ids == 'active'){
			$(this).removeAttr("id");
			$uls.css("height",0).css("padding-top",0);
		}else{
			$(this).attr("id","active");
			$uls.css("height",ch-45).css("padding-top",20);
		}
	})
})