$(document).ready(function(){

	$(".img_title_div").addClass("show_now");

	var pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();
	var de_li  = $(".user_li").height();
    var top_height = $("#gnb").height() + $("#main").height() + $("#target").height() - de_li;
	var top_height_2 = top_height + $("#img_title_1").height() + $("#content_1").height() + pd_btm;
	

	$(window).resize(function(){ 
		pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();
		de_li  = $(".user_li").height();

	    top_height = $("#gnb").height() + $("#main").height() + $("#target").height() - de_li;
		top_height_2 = top_height + $("#img_title_1").height() + $("#content_1").height() + pd_btm;

	});

	$(window).scroll(function(){

		if ($(this).scrollTop() > top_height) {	
			$("#img_title_1 .img_title_div").removeClass("show_now");
		}  else {
			$("#img_title_1 .img_title_div").addClass("show_now");
		}

		if ($(this).scrollTop() > top_height_2) {
			$("#img_title_2 .img_title_div").removeClass("show_now");
		} else {
			$("#img_title_2 .img_title_div").addClass("show_now");

		}


	});



});



$(window).on("load", function() {


		// lazy loading for background images
		$(".lazy_img").removeClass("lazy_css");


});

