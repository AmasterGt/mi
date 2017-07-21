$(function(){
	var swiper=new Swiper(".swiper-container",{
		 loop:true,
            autoplay:3000,
            pagination:".swiper-pagination",
            observer:true,
            oberverParents:true,
            autoplayDisableOnInteraction:false,
            prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next'
	})
	$(".nav_div").width($(document).width())
//	$(".daohang ul li").hover(function(){
//		$(".nav_div").height("230px");
//		$(".nav_div").eq($(this).index()).css({"display":"block"})
//	},function(){
//		$(".nav_div").height("0");
//		$(".nav_div").eq($(this).index()).css({"display":"none"})
//	})
})
