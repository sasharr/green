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



    $(document).scroll(function() {
       $("header").removeClass("header1");

    });

	//end Sasha
	//init google prettify
	// prettyPrint();
	
	//[01]. Nivo Lightbox
	$('a.nivoLightbox').nivoLightbox({
		effect: 'fall', // Other Effects: fade, fadeScale, slideLeft, slideRight, slideUp, slideDown, fall
		errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	});
	
	// //[02]. OWL Carousel - Clients
	// $(".owl-carousel.gallery").owlCarousel({
	// 	loop: true,
	// 	margin: 10,
	// 	nav: true,
	// 	dots: false,
	// 	responsive:{
	// 		0:{
	// 			items: 1
	// 		},
	// 		600:{
	// 			items: 2
	// 		},
	// 		1000:{
	// 			items: 3
	// 		}
	// 	}
	// });

    // $(".owl-carousel").owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     dots: false,
    //     responsive:{
    //         0:{
    //             items: 1
    //         },
    //         600:{
    //             items: 2
    //         },
    //         1000:{
    //             items: 3
    //         }
    //     }
    // });
	
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
	
	//[04]. Back To Top
	$().UItoTop({ easingType: 'easeOutQuart' });
	
	//[05]. Gallery Effect
	$('.widget-gallery .photo-gallery').hover(
		function(){
			$(this).find('.fancy-overlay').fadeIn( "fast" );
			$(this).find('.look').fadeIn( "fast" );
		}, 
		function(){
			$(this).find('.fancy-overlay').fadeOut( "fast" );
			$(this).find('.look').fadeOut( "fast" );
		}
	);
	
	//[06]. Animated Progress Bars
	$('.progress-bar').appear(function(){
		var pBar = $(this);
		pBar.each(function(indx){
			$(this).css("width", $(this).attr("aria-valuenow") + "%");
		});
	});
	
	//[07]. Text Rotators
	$.each($(".text-rotator"), function(i){
		var effect = $(this).attr("data-rotator-animation-effect");
		var speed = $(this).attr("data-animation-speed");
		$(this).Morphext({
			animation: effect,
			separator: ",",
			speed: speed
		});
	});
	
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
	
	//[09]. Tweeter Tweets
	$('.tweets').tweecool({
      	//settings
      	 username : 'DroneLogbook', 
         limit : 3,
		 profile_image : false
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