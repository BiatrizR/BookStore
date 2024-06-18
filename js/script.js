

//código para rolagem dos livros com swuiper
var swiper = new Swiper(".books-slider", {
  spaceBetween:10,  
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
  

//! Para a seção de fetures, copiar o swiper slider e adicionar o nome da classe onde se encontra os elementos da feturead
  var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
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



