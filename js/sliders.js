// about slider
$(function () {
    $(".slider").slick({
      dots: false,
      infinite: true,
      centerMode: false,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 0,
      pauseOnFocus: false,
      pauseOnHover: false,
      variableWidth: true,
      cssEase: 'linear',
    });
  });
  
  $(function () {
    $(".sliderRtl").slick({
      dots: false,
      infinite: true,
      centerMode: false,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 0,
      pauseOnFocus: false,
      pauseOnHover: false,
      cssEase: 'linear',
      rtl: true,
      variableWidth: true,
    });
  });
  