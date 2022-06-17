$(function () {
  $(window).scroll(function () {
    var fixed = $(this).scrollTop()
    if (fixed > 100) {
      $(".navbar").addClass("sticky-menu")
    } else {
      $(".navbar").removeClass("sticky-menu")
    }
    
    if (fixed > 500) {
      $(".back-to-top").fadeIn(300)
      $('.back-to-top').css('opacity', '1')
    } else {
      $(".back-to-top").fadeOut(300)
    }
  })
  $('.back-to-top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1000)
  })

  var html_body = $('html,body');
  $('.navbar-nav').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 17
        }, 1500);
        return false;
      }

    }
  });

  $('.banner-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnFocus: false,
    dots: true,
  });

  $('.about-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    pauseOnFocus: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        }
      }
    ]


  });

  $('.team-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        }
      }
    ]




  });


  $('.commentt').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    arrows: false
  });
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
})