/*========================================================================
   
   -----------------------------------------------------------------------
   ----TABLE OF CONTENT---------------------------------------------------
   -----------------------------------------------------------------------
	
	01. Nivo Lightbox
	02. OWL Carousel - Gallery
	03. OWL Carousel - Slideshows
	04. Back To Top
	05. Gallery Effect
	06. Animated Progress Bars
	07. Text Rotators
	08. Counters
	09. Tweeter Tweets
	10. Jquery To Collaps The Navbar On Scroll
	11. Tooltip
	12. Popover
	13. WOW - Animations on scroll
	14. Animation Effect-Ripple-Out
	15. Animation Effect-Ripple-In
	
=========================================================================*/
$(document).ready(function(){

	//Sasha
    $(".modal_open").on("click touch", function() {
        $(".modal_open").hide();
        $("#toggle").show();
        $(".modal_close").show();
    });

    $(".modal_close").on("click touch", function() {
        $(".modal_open").show();
        $("#toggle").hide();
        $(".modal_close").hide();
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        slideBy: 1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            },
            1350:{
                items:3
            }
        }
    });



    // window.onscroll = function() {
    //   $(".header1") .css("background" ,'rgba(0, 0, 0, 0.8)');
    // };





	//end Sasha

	
	// //[03]. OWL Carousel - Slideshow
	// $(".owl-carousel.slideshow").owlCarousel({
	// 	loop: true,
	// 	margin: 0,
	// 	nav: true,
	// 	items: 1,
	// 	autoplay: true,
	// 	autoplayHoverPause: true,
	// 	animateOut: 'fadeOut',
	// 	animateIn: 'rotateIn',
	// 	dots: false
	// });

	
	//[08]. Conters
	$('.timer').appear(function(){
		var count = $(this);
		$.each($(count), function(i){
			var dataTo = $(this).attr("data-to");
			var dataSpeed = $(this).attr("data-speed");
			var dataRefreshInterval = $(this).attr("data-refresh-interval");
			count.countTo({
				from: 0,
				to: dataTo,
				speed: dataSpeed,
				refreshInterval: dataRefreshInterval,
			});
		});
	});
	

	
	// //[10]. jQuery to collapse the navbar on scroll
	// $(window).scroll(function() {
	// 	if ($(".navbar").offset().top > 30) {
	// 		$(".navbar").addClass("top-nav-collapse");
	// 	} else {
	// 		$(".navbar").removeClass("top-nav-collapse");
	// 	}
	// });
	
	//[11]. Tooltip
	$('[data-toggle="tooltip"]').tooltip();	
	
	//[12].Popover
	$('[data-toggle="popover"]').popover();
	
	//[13]. WOW - Animations On Scroll
	// for complete documentation ( http://mynameismatthieu.com/WOW/docs.html )
	new WOW().init({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 90,
		mobile: false, 
		live: true 
	});
	
	//[14].animated effect-ripple-out
	$('.social-icons.animated-ripple-out li').addClass('hvr-ripple-out');
	//[15].animated effect-ripple-in
	$('.social-icons.animated-ripple-in li').addClass('hvr-ripple-in');
});