
	$(document).ready(function(){
		$nav = $('.nav');
		$toggleCollapse = $('.toggle-collapse');

		$toggleCollapse.click(function()
		{
			$nav.toggleClass('collapse');
		})

		$('.owl-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout: 2000,
		dots:true,
		nav:true,
		navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
		}); 

	});