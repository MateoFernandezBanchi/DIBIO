$(".carouselBackground").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // fade: true,
  asNavFor: ".carouselInfo",
  speed: 1200,
  pauseOnFocus: false,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 5000,
  // Infinite: true,
});
$(".carouselImagenes").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // fade: true,
  asNavFor: ".carouselInfo",
  speed: 1900,
  pauseOnFocus: false,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 5000,
  // Infinite: true,
});
$(".carouselInfo").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".carouselBackground , .carouselImagenes",
  arrows: true,
  dots: false,
  fade: true,
  // centerMode: true,
  focusOnSelect: false,
  speed: 1900,
  pauseOnFocus: false,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 5000,
  // Infinite: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});
$(".carouselInfo2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".carouselBackground , .carouselImagenes",
  arrows: true,
  dots: false,
  fade: true,
  // centerMode: true,
  focusOnSelect: false,
  speed: 3000,
  pauseOnFocus: false,
  pauseOnHover: false,
  // autoplay: true,
  autoplaySpeed: 5000,
  // Infinite: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});
