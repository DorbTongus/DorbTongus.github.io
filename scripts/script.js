
/* 
 *
 *	ob_localize php function makes a globally available js object called
 * 	'wp' that includes important information about the current WP install
 *	
 * 	wp = { base_url, base_path, current_user, nonce, rest_url, site_name, site_url }
 *
 */

jQuery(document).ready(function( $ ){
	/* jQuery loaded in noConflict made, but '$' passed to funcion means you can use $('___') */

		// 1. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
		// Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
		// This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
		// const targetElement = document.querySelector(".nav--mobile");
		
		// 2. ...in some event handler after showing the target element...disable body scroll
		// bodyScrollLock.disableBodyScroll(targetElement);
		
		// 3. ...in some event handler after hiding the target element...
		// bodyScrollLock.enableBodyScroll(targetElement);
		
		// 4. Useful if we have called disableBodyScroll for multiple target elements,
		// and we just want a kill-switch to undo all that.
		// bodyScrollLock.clearAllBodyScrollLocks();

		// HAMBURGER CLICK EVENT
		let mobileNavCounter = 0;
		$('#hamburger').click(function(){
			if(mobileNavCounter === 0) {
				openMobileNav();
				mobileNavCounter++;
			} else {
				closeMobileNav();
				mobileNavCounter = 0;
			}
		});
	
		$('.nav--mobile a').click(function(){
			closeMobileNav();
		});

		function openMobileNav() {
			$(".nav--mobile__menu").fadeIn();
			
			// bodyScrollLock.disableBodyScroll(targetElement);
			$('.hamburger-icon').addClass('hamburger-icon--open');
			$('.hamburger-icon').addClass('hamburger-icon--open__bar');
			// $("html").addClass("no-scroll");
		}
		
		function closeMobileNav() {
				$(".nav--mobile__menu").fadeOut();
				$('.hamburger-icon').removeClass('hamburger-icon--open');
				$('.hamburger-icon').removeClass('hamburger-icon--open__bar');
				// bodyScrollLock.enableBodyScroll(targetElement);
				// bodyScrollLock.clearAllBodyScrollLocks();
			}
	
			// ENSURE NAV DISPLAY PROPERLY ON RESIZE
			// $(window).on('resize', function(){
			// 	var win = $(this); //this = window
			// 	if (win.width() >= 767) { 
            //         $('.nav--mobile').css("display", "none");
			// 	} else {
			// 		if($('#hamburger').hasClass('hamburger-icon--open')) {
			// 			$('.nav--mobile').css("display", "block");
			// 		} else {
			// 			$('.nav--mobile').css("display", "none");
			// 		}
			// 	}
			// });

			var galleryThumbs1 = new Swiper('#modal-1 .gallery-thumbs', {
				spaceBetween: 10,
				observer: true,
				observeParents: true,
				slidesPerView: 3,
				direction: 'vertical',
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});

			var galleryTop1 = new Swiper('#modal-1 .gallery-top', {
				spaceBetween: 10,
				observer: true,
				observeParents: true,
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
				thumbs: {
				swiper: galleryThumbs1
				}
			});

			var galleryThumbs2 = new Swiper('#modal-2 .gallery-thumbs', {
				spaceBetween: 10,
				observer: true,
				observeParents: true,
				slidesPerView: 3,
				direction: 'vertical',
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});

			var galleryTop2 = new Swiper('#modal-2 .gallery-top', {
				spaceBetween: 10,
				observer: true,
				observeParents: true,
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs2
				}
			});

			var galleryThumbs3 = new Swiper('#modal-3 .gallery-thumbs', {
				spaceBetween: 10,
				observer: true,
				observeParents: true,
				slidesPerView: 3,
				direction: 'vertical',
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});

			var galleryTop3 = new Swiper('#modal-3 .gallery-top', {
				spaceBetween: 10,
				observer: true,
				observeParents: true,
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
				thumbs: {
				swiper: galleryThumbs3
				}
			});
	

			function initSliders() {
				var win = $(this); //this = window
				if (win.width() <= 767) { 

					var mobileSwiper = new Swiper('.mobile-slider', {
						spaceBetween: 10,
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
					});		
				} else {
			
					$('.slider-thumbnail').click(function(){
						var modalNumber = $(this).data('modal');
						openModal(modalNumber);
					});
		
					function openModal(number) {
						var modalClass = '#modal-' + number;
						$(modalClass).fadeIn();
						galleryThumbs.update();
						galleryTop.update();
					}
		
					$('.closer').click(function() {
						$('.modal').fadeOut();
					});
				}
			}

			$(window).on('load', function(){
				initSliders();
			});

			$(window).on('resize', function(){
				initSliders();
			});

		
});

