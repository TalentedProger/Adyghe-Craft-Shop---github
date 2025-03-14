const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper_2 = new Swiper('.swiper_2', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 60,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination_2',
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1224: {
      slidesPerView: 4,
    },
  }
});