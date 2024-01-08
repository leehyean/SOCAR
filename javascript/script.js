
AOS.init();

var swiper = new Swiper(".section_3 .mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",  
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },

  breakpoints: {
    
    1440: { 
      slidesPerView: 3, 
      slidesPerGroup: 3,
    },

 

    0: { 
      slidesPerView: 1, 
      slidesPerGroup: 1,
    },
  },
});


var swiper = new Swiper(".section_4 .mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerGroup: 1,
});








    





