$(function(){
	$(".divb .divb_v a").click(function(){
		$(this).addClass('curr').siblings().removeClass('curr');
		var index = $(this).index();
		$('.divb_b .divb_v .div1').eq(index).css("display","block").siblings().css("display","none");
	});		
})

$(function(){
	$(".divb .divb_v a").click(function(){
		$(this).addClass('curr').siblings().removeClass('curr');
		var index = $(this).index();
		$('.divb_b .divb_v .div2').eq(index).css("display","block").siblings().css("display","none");
	});		
})