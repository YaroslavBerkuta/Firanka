import * as flsFunctions from "./modules/function.js";
import Swiper, { Pagination, Navigation } from "swiper";
import { Fancybox } from "@fancyapps/ui";
import IMask from 'imask'
import "swiper/css/bundle";
flsFunctions.isWebp();
Swiper.use([Navigation, Pagination]);
const heroSlider = new Swiper(".hero__slider", {
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});
const toverSlider = new Swiper(".tovar__flex", {
  slidesPerView: 3,
  spaceBetween: 55,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const instagramSlider = new Swiper(".news__slider", {
  slidesPerView: 3,
  spaceBetween: 100,
});

Fancybox.bind('[data-fancybox="gallery"]', {
  infinite: true,
});

document.querySelectorAll("input[type=tel]").forEach((tel) => IMask(tel,{mask:'+{38}(000)000-00-00'}));
