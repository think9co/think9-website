$(function() {
	$('.sm-menu').on('click', function() {
		$('#navbarMenu').removeClass('hide');
	});

	$('.sm-menu-close').on('click', function() {
		$('#navbarMenu').addClass('hide');
	});

	$('#navbarMenu a').on('click', function() {
		sizeHandler();
	});

	function sizeHandler() {
		if ($(window).width()  > 768 ) {
			$('#navbarMenu').removeClass('hide');

			// showMobileScreen(false);
		}
		else {
			$('#navbarMenu').addClass('hide');

			// showMobileScreen(true);
		}
	}

	function showMobileScreen(show) {
		if(show) {
			$('.page-wrapper').addClass('hide')
			$('.mobile-message').removeClass('hide');
		}
		else {
			$('.page-wrapper').removeClass('hide')
			$('.mobile-message').addClass('hide');
		}
	}

	sizeHandler();

	$(window).resize(function(){
		sizeHandler();
	});

	function scrollToSection(target) {
		$('html,body').animate({
			scrollTop: $(target).offset().top - ($('#navbarMain').offset().top) - 150
		}, 1000);
	}

	// $('#navbarMain a').click(function() {
	// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	// 			var target = $(this.hash);
	// 			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	// 			if (target.length) {
	// 				scrollToSection(target);
	// 				return false;
	// 			} 
	// 	}
	// });

});