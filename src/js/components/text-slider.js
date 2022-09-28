
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const fixtures = new Swiper(".fixtures-swiper", {
  loop: true,
  slidesPerView: "auto",
  speed: 500,
  navigation: {
    nextEl: '.fixtures-btn-next',
    prevEl: '.fixtures-btn-prev'
  },
  pagination: {
    el: ".fixtures-pagination",
    type: "bullets",
    clickable: true,
  },
});

const fitness = new Swiper(".fitness-swiper", {
  loop: true,
  slidesPerView: "auto",
  speed: 500,
  navigation: {
    nextEl: '.fitness-btn-next',
    prevEl: '.fitness-btn-prev'
  },
  pagination: {
    el: ".fitness-pagination",
    type: "bullets",
    clickable: true,
  },
});

const travel = new Swiper(".travel-swiper", {
  loop: true,
  slidesPerView: "auto",
  speed: 500,
  navigation: {
    nextEl: '.travel-btn-next',
    prevEl: '.travel-btn-prev'
  },
  pagination: {
    el: ".travel-pagination",
    type: "bullets",
    clickable: true,
  },
});
