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
		if ($(window).width()  > 899 ) {
			$('#navbarMenu').removeClass('hide');

			$('.page-wrapper').removeClass('hide')
			$('.mobile-message').addClass('hide');
		}
		else {
			$('#navbarMenu').addClass('hide');

			$('.page-wrapper').addClass('hide')
			$('.mobile-message').removeClass('hide');
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

	$('#navbarMain a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					scrollToSection(target);
					return false;
				} 
		}
	});

});