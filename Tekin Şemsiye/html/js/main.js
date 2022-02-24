(function($) {
    'use strict';

	$(window).on('load', function() {
		// preloader
		$('#preloader').fadeOut('slow', function() {
			$(this).remove();
		});
		
		//slides preload
		$(".slides__preload_wrapper").fadeOut(1500);
		
	});
	
 /* =======================================
         Slider  Carousel
    ======================================*/	
     $(".slider_home").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: false,
        loop: true,
        autoplayTimeout: 8000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
    });

    $(".slider_home").on("translate.owl.carousel", function() {
        $(".single_slider h2, .single_slider p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single_slider .slider_btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".slider_home").on("translated.owl.carousel", function() {
        $(".single_slider h2, .single_slider p").addClass("animated fadeInUp").css("opacity", "1");
        $(".single_slider .slider_btn").addClass("animated fadeInDown").css("opacity", "1");
    });
	
	/* =======================================
          single Page Nav
    =======================================*/
    // The actual plugin
    $('.single-page-nav').singlePageNav({
        offset: $('.single-page-nav').outerHeight(),
        filter: ':not(.external)',
        updateHash: true,
    });

    
    /*=======================================
		Client Section  
	=======================================*/
    $("#client").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 6 seconds
        autoplay: true,
        smartSpeed: 1000, // Default is 250
        items: 6,
		margin: 10,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 6
            },
            992: {
                items: 5
            },
            768: {
                items: 5
            },
            480: {
                items: 4
            },
            320: {
                items: 3
            },
            280: {
                items: 2
            }
        }
    });
		
    /*=======================================
		Service Section  
	=======================================*/
    $("#service").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000, // Default is 250
        items: 3,
        margin: 30,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        dots: true,
        nav: false,
        navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"],
		responsive: {
            1200: {
                items: 3
            },
            992: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 2
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });
	
			
    /*=======================================
		Blog Section  
	=======================================*/
    $("#blog_crs").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 2000, // Default is 250
        items: 3,
        margin: 30,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        dots: true,
        nav: false,
        navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"],
		responsive: {
            1200: {
                items: 3
            },
            992: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 2
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });
	

	
    /* =======================================
           Testimonial Section 
       =======================================*/
    $("#testimonial").owlCarousel({
        autoPlay: 7000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 2000, // Default is 250
        items: 1, //Set Testimonial items
        loop: true,
        margin: 10,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: false,
        dots: true,
		responsive: {
            1200: {
                items: 1
            },
            992: {
                items: 1
            },
            768: {
                items: 1
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });



    /* =======================================
        For Menu
    =======================================*/
    $("#navigation").menumaker({
        title: "",
        format: "multitoggle"
    });
	
	    /*=======================================
          Achieve Count
    ======================================= */
    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 50);
        }
    }
    $(".stat-count").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });
	
  
 
    /* =======================================
    		WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();


    /*=======================================
        Scroll Top
    =======================================*/
    $(".scrollup").on('click', function() {
        $('html,body').animate({
            'scrollTop': '0'
        }, 4000);
        return false;
    });


})(jQuery);