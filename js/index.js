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
	var lis=$(".section2 li:last")
	console.log(lis)
	$(".section2 ul li").not($(".section2 ul li:last-of-type")).hover(function(){
		$(this).css({"transform":"translateY(-3px)","box-shadow":"0 5px 25px 0px #CCCCCC"})
		$(this).find(".pinglun").css("height","25%")
	},function(){
		$(this).css({"transform":"translateY(0)","box-shadow":"none"})
		$(this).find(".pinglun").css("height","0")
	})
		
			$(".section1 ul li").not($(".section1 ul li:last-of-type")).hover(function(){
		$(this).css({"transform":"translateY(-3px)","box-shadow":"0 5px 25px 0px #CCCCCC"})
		$(this).find(".pinglun").css("height","25%")
	},function(){
		$(this).css({"transform":"translateY(0)","box-shadow":"none"})
		$(this).find(".pinglun").css("height","0")
	})
	$(".section2 ul li:last-of-type>div").hover(function(){
		$(this).css({"transform":"translateY(-3px)","box-shadow":"0 5px 25px 0px #CCCCCC"})
		
	},function(){
		$(this).css({"transform":"translateY(0)","box-shadow":"none"})
	})
	$(".section1 ul li:last-of-type>div").hover(function(){
		$(this).css({"transform":"translateY(-3px)","box-shadow":"0 5px 25px 0px #CCCCCC"})
	},function(){
		$(this).css({"transform":"translateY(0)","box-shadow":"none"})
	})
	$(".section2 ul li").not($(".section2 ul li:last-of-type")).append($("<p class='pinglun'>asdasdqweasdqweqwe<span>小小果评论</span></p>"))
	$(".section1 ul li").not($(".section2 ul li:last-of-type")).append($("<p class='pinglun'>asdasdqweasdqweqwe<span>小小果评论</span></p>"))
})
