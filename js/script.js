

//código para rolagem dos livros com swuiper
var swiper = new Swiper(".books-slider", {
    loop: true,
    centerSlides: true,
    autoplay: {
        delay:9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
