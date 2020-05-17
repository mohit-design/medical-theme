$(document).ready(function() {
	// Navigationbar Menu
	$(".hamburger-menu").click(function() {
	  $(".navbar-menu").toggleClass("active");
	});
	$(".menu-listing > li > a").click(function() {
		$(".navbar-menu").removeClass("active");
	});
	// Smooth Animation On Click of Navigationbar Menu
  $(".menu-listing > li > a, .footer-menu > li > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      offSet = 52;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - offSet
      }, 1500);
    }
  });
  // On click of Navigationbar active class add and remove
	$(".menu-listing > li > a").click(function() {
		$(".menu-listing > li > a").parent().removeClass("active");
		$(this).parent().addClass("active");
	});
	$(".footer-menu > li > a").click(function() {
		var realMenu = $(this).attr("id");
		var realFixedMenu = realMenu + "h";
		$("#" + realFixedMenu).trigger("click");
	});
	// OnScroll Navbar Fixed
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 119) {
	    $('.bg-navbar').addClass('fixed');
	   } else {
	    $('.bg-navbar').removeClass('fixed');
	   }
	});
	$(window).resize(function() {
		if($(window).width() > 767) {
			$(window).scroll(function(){
			  if ($(window).scrollTop() >= 109) {
			    $('.bg-navbar').addClass('fixed');
			   } else {
			    $('.bg-navbar').removeClass('fixed');
			   }
			});
		} else {
			$(window).scroll(function(){
			  if ($(window).scrollTop() >= 259) {
			    $('.bg-navbar').addClass('fixed');
			   } else {
			    $('.bg-navbar').removeClass('fixed');
			   }
			});
		}
	});
	// Counter JS
	var a = 0;
	$(window).scroll(function() {
		var oTop = $('#counter').offset().top - window.innerHeight;
	  if (a == 0 && $(window).scrollTop() > oTop) {
	    $('.counter-value').each(function() {
	      var $this = $(this),
	        countTo = $this.attr('data-count');
	      $({
	        countNum: $this.text()
	      }).animate({
          countNum: countTo
        },
				{
					duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
				});
    	});
    	a = 1;
	  }
	});
	// DatePicker
	$("#datepicker").datepicker({
		autoclose: true,
		todayHighlight: true,
		format: 'dd/mm/yyyy',
		pickerPosition: "bottom-left"
	}); // .datepicker('update', new Date())
	// Scroll To Top JS
  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
    if($(this).scrollTop() > offset) {
      $(".scroll-to-top").fadeIn(700).addClass("visible");
    } else {
      $(".scroll-to-top").fadeOut(100).removeClass("visible");
    }
  });
  $(".scroll-to-top").click(function() {
    $('html,body').animate({scrollTop: 0},700);
    if($(".menu-listing > li > a").parent().hasClass("active")) {
      $(".menu-listing > li > a").parent().removeClass("active");
      $(".menu-listing > li:nth-child(1) > a").parent().addClass("active");
    }
  });
  // OnScroll Active Class and Remove Class
  $('.menu-listing').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.10,
    filter: '',
    easing: 'swing'
  });
});
