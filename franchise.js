// slider

new Swiper(".slider-franchise .swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".slider-franchise .swiper-pagination",
  },
  scrollbar: {
    el: ".slider-franchise .swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,      
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,      
      spaceBetween: 20,
    },
   
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    921: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
