// slider

 new Swiper(".slider-opt .swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".slider-opt .swiper-pagination",
  },
  scrollbar: {
    el: ".slider-opt .swiper-scrollbar",
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
    1100: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
