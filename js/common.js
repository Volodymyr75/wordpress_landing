$(document).ready(function() {
	function heightDetect() {
		$(".main_head").css("height", $(window).height());	
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	$(".toggle_menu").click(function() {
  		$(".sandwich").toggleClass("active");
	});

	$(".top_menu ul a").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");


	$(".toggle_menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_text").removeClass("h_opacity");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");	
		}else {
			$(".top_text").addClass("h_opacity");
			$(".top_menu").fadeIn(600);	
			$(".top_menu li a").addClass("fadeInUp animated");
		};	
	});
	
});

$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});