$(function () {

	// Tabs

  		$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
   		 $(this)
      		.addClass('active').siblings().removeClass('active')
      		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  		});

	// Show more

      $('.more_one').click(function(){
  		$('#grid_one').toggleClass('grid-hide');
  		return false;
 		});

      $('.more_two').click(function(){
  		$('#grid_two').toggleClass('grid-hide');
  		return false;
 		});

      $('.more_three').click(function(){
  		$('#grid_three').toggleClass('grid-hide');
  		return false;
 		});

      $('.more_fourth').click(function(){
  		$('#grid_fourth').toggleClass('grid-hide');
  		return false;
 		});

      $('.more_fifth').click(function(){
      $('#grid_fifth').toggleClass('grid-hide');
      return false;
    });

      $('.more_sixth').click(function(){
      $('#grid_sixth').toggleClass('grid-hide');
      return false;
    });

      $('.more_seventh').click(function(){
      $('#grid_seventh').toggleClass('grid-hide');
      return false;
    });

      $('.information_show').click(function(){
      $('#information_hide').toggleClass('information__text_hide');
      return false;
    });

      $('.comfort_show').click(function(){
      $('#comfort_hide').toggleClass('comfort__text_hide');
      return false;
    });

      $('.windows_show').click(function(){
      $('#windanddoors-tabs__text_show').toggleClass('windanddoors-tabs__text_hide');
      return false;
    });

	// ArcticModal
  	$('.popup').click(function(e) {
  		e.preventDefault();
  		$('#exampleModal').arcticmodal();
  	});

  	// Sliders

  	$('.reviews-slider').slick({
   		infinite: true,
      dots: true,
   		autoplay: true,
   		autoplaySpeed: 3000
  	});

    $('.cottages-slider').slick({
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000
    });

  // Animation 

  $('.header-main__title, .header-secondary__title').textillate();

   // $('.header-secondary__title').textillate();

	// Preloader
	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

	// Hamburger
	$('.menu-open').click(function (){
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.menu__list').toggleClass('menu-opened');
	});

	$('.menu-opened li a').click(function (){
		$('.menu-collapse').toggleClass('d-none').css('order', '0');
		$('.menu__list').toggleClass('menu-opened');
	});

  // Fixed header

  $(window).scroll(function() {
        if ($(this).scrollTop() > 200){  
            $('#header-fixed').addClass("sticky");
        }
        else{
            $('#header-fixed').removeClass("sticky");
        }
    });
});