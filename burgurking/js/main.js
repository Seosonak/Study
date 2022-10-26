var swiper = new Swiper(".mySwiper", { //{}=객체데이터
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
          delay: 3000,
    },
    speed: 800       
  });
  
//   swiper.on('slideChange', function () {
//     console.log('slideChange');
//   });