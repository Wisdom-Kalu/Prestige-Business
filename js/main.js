AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {
    "use strict";

    // Loader function
    var loader = function() {
        setTimeout(function() { 
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Initialize Owl Carousel for #responsive-slider only once
    $(document).ready(function(){
        $("#responsive-slider").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
            autoplayHoverPause: true,
            items: 1,
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1000: { items: 1 }
            }
        });

		$("#responsive-slider").on('drag.owl.carousel', function(event) {
			$(document).on("touchmove", function(e) {
				e.preventDefault();
			});
		});
		
		// enable scroll
		$("#responsive-slider").on('dragged.owl.carousel', function(event) {
			$(document).off("touchmove");
		});
		
    });


    // Navbar hover dropdown
    $('nav .dropdown').hover(function() {
        $(this).addClass('show');
        $(this).find('> a').attr('aria-expanded', true);
        $(this).find('.dropdown-menu').addClass('show');
    }, function() {
        $(this).removeClass('show');
        $(this).find('> a').attr('aria-expanded', false);
        $(this).find('.dropdown-menu').removeClass('show');
    });

    // Console log on dropdown show (optional, for debugging)
    $('#dropdown04').on('show.bs.dropdown', function () {
        console.log('show');
    });

})(jQuery);

// Document ready for non-jQuery event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Toggle dropdown functionality
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');

    dropbtn.addEventListener('click', function(event) {
        event.stopPropagation(); 
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});

// Intersection Observer for visibility animations on mobile
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth < 1025) {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('individual_card')) {
                        entry.target.querySelector('.all-card-content').classList.add('visible');
                    }
                    if (entry.target.classList.contains('new_box')) {
                        entry.target.querySelector('.new_overlay').classList.add('visible');
                    }
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.individual_card').forEach(card => {
            observer.observe(card);
        });

        document.querySelectorAll('.new_box').forEach(box => {
            observer.observe(box);
        });
    }
});

/*AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";


	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#loader').length > 0) {
				$('#loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	$(document).ready(function(){
		$("#responsive-slider").owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			items: 1,
			responsive: {
				0: { items: 1 },
				600: { items: 1 },
				1000: { items: 1 }
			}
		});
	});
	

/*
	$(document).ready(function(){
		$('#responsive-slider').owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 1,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				1024: {
					items: 1
				}
			}
		});
	});

	/* 
	$('#slider-area').owlCarousel({
	   loop: true,
	   autoplay: true,
	   responsive: {
	       0: {
	           items: 1
	       },
	       600: {
	           items: 1
	       },
	       1000: {
	           items: 1
	       }
	   }
	})        
	

	var carousel = function() {
		$('#responsive-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});


})(jQuery);

$(document).ready(function(){
    if (window.innerWidth < 768) { // Check for mobile screen
        $('.owl-carousel .owl-stage').css('width', '100%');
        $('.owl-carousel .owl-stage').css('transform', 'none');
    }
});


document.addEventListener("DOMContentLoaded", function() {
	const dropdown = document.querySelector('.dropdown');
	const dropdownContent = document.querySelector('.dropdown-content');
	const dropbtn = document.querySelector('.dropbtn');

	// Toggle dropdown on click
	dropbtn.addEventListener('click', function(event) {
		event.stopPropagation(); // Prevent the click from closing immediately
		dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
	});

	// Close dropdown when clicking outside
	document.addEventListener('click', function(event) {
		if (!dropdown.contains(event.target)) {
			dropdownContent.style.display = 'none';
		}
	});
});

document.addEventListener("DOMContentLoaded", function() {
// Check if the screen is mobile-sized (below 768px)
if (window.innerWidth < 1025) {
	// Create Intersection Observer for mobile devices
	let observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// Add 'visible' class to .all-card-content inside .individual_card
				if (entry.target.classList.contains('individual_card')) {
					entry.target.querySelector('.all-card-content').classList.add('visible');
				}

				// Add 'visible' class to .new_overlay inside .new_box
				if (entry.target.classList.contains('new_box')) {
					entry.target.querySelector('.new_overlay').classList.add('visible');
				}
			}
		});
	}, { threshold: 0.2 }); // Adjust threshold as needed

	// Observe each .individual_card element
	document.querySelectorAll('.individual_card').forEach(card => {
		observer.observe(card);
	});

	// Observe each .new_box element
	document.querySelectorAll('.new_box').forEach(box => {
		observer.observe(box);
	});
}
});
*/
